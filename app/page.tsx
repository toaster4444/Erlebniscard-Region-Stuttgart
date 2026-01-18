"use client";

import { useEffect, useMemo, useState } from "react";
import { ATTRACTIONS, CATEGORY_LABELS, CategoryKey } from "@/data/attractions";
import { loadSavings, loadVisited, saveSavings, saveVisited } from "@/lib/storage";
import { formatEuro, normalize } from "@/lib/utils";
import { TopBar } from "@/components/TopBar";
import { CategorySection } from "@/components/CategorySection";
import { ConfirmModal } from "@/components/ConfirmModal";
import { SavingsModal } from "@/components/SavingsModal";

export default function HomePage() {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [savings, setSavings] = useState<Record<string, number>>({});
  const [query, setQuery] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, setPending] = useState<{ id: string; next: boolean } | null>(null);
  const [savingsOpen, setSavingsOpen] = useState(false);
  const [savingsTarget, setSavingsTarget] = useState<string | null>(null);
  const [savingsValue, setSavingsValue] = useState("");

  useEffect(() => {
    setVisited(loadVisited());
    setSavings(loadSavings());
  }, []);

  useEffect(() => {
    saveVisited(visited);
  }, [visited]);

  useEffect(() => {
    saveSavings(savings);
  }, [savings]);

  const attractionMap = useMemo(() => {
    return new Map(ATTRACTIONS.map((a) => [a.id, a]));
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return ATTRACTIONS;

    return ATTRACTIONS.filter((a) => {
      const hay = `${a.name} ${a.included}`.toLowerCase();
      return hay.includes(q);
    });
  }, [query]);

  // Sort: unvisited zuerst, visited ans Ende (pro Kategorie)
  const grouped = useMemo(() => {
    const byCat = new Map<CategoryKey, typeof filtered>();
    for (const a of filtered) {
      const arr = byCat.get(a.category) ?? [];
      arr.push(a);
      byCat.set(a.category, arr);
    }

    for (const [cat, arr] of byCat.entries()) {
      arr.sort((x, y) => {
        const xv = visited.has(x.id) ? 1 : 0;
        const yv = visited.has(y.id) ? 1 : 0;
        if (xv !== yv) return xv - yv;
        return x.name.localeCompare(y.name, "de");
      });
      byCat.set(cat, arr);
    }
    return byCat;
  }, [filtered, visited]);

  function requestToggle(id: string, nextVisited: boolean) {
    setPending({ id, next: nextVisited });
    setConfirmOpen(true);
  }

  function confirmToggle() {
    if (!pending) return;
    if (pending.next) {
      setVisited((prev) => {
        const next = new Set(prev);
        next.add(pending.id);
        return next;
      });
      const attraction = attractionMap.get(pending.id);
      const defaultValue = attraction ? attraction.benefitValue : 0;
      setSavingsTarget(pending.id);
      setSavingsValue(defaultValue.toFixed(2));
      setSavingsOpen(true);
    } else {
      setVisited((prev) => {
        const next = new Set(prev);
        next.delete(pending.id);
        return next;
      });
      setSavings((prev) => {
        const next = { ...prev };
        delete next[pending.id];
        return next;
      });
    }
    setConfirmOpen(false);
    setPending(null);
  }

  function cancelToggle() {
    setConfirmOpen(false);
    setPending(null);
  }

  function openSavingsEditor(id: string) {
    const attraction = attractionMap.get(id);
    const fallback = attraction ? attraction.benefitValue : 0;
    const current = savings[id] ?? fallback;
    setSavingsTarget(id);
    setSavingsValue(current.toFixed(2));
    setSavingsOpen(true);
  }

  function closeSavingsEditor() {
    setSavingsOpen(false);
    setSavingsTarget(null);
  }

  function confirmSavings() {
    if (!savingsTarget) return;
    const normalized = savingsValue.replace(",", ".");
    const parsed = Number.parseFloat(normalized);
    if (Number.isNaN(parsed)) return;
    setSavings((prev) => ({
      ...prev,
      [savingsTarget]: parsed,
    }));
    closeSavingsEditor();
  }

  const getBenefitValue = (id: string) => {
    const attraction = attractionMap.get(id);
    const fallback = attraction ? attraction.benefitValue : 0;
    return savings[id] ?? fallback;
  };

  const total = ATTRACTIONS.length;
  const visitedCount = visited.size;
  const visitedSavings = useMemo(() => {
    return ATTRACTIONS.reduce((sum, attraction) => {
      if (visited.has(attraction.id)) {
        return sum + getBenefitValue(attraction.id);
      }
      return sum;
    }, 0);
  }, [visited, savings, attractionMap]);

  const order: CategoryKey[] = [
    "MUSEUM_KULTUR",
    "AKTIV_UNTERWEGS",
    "STADTERLEBNIS",
    "WASSERSPASS",
    "AUSFLUGSZIELE"
  ];

  return (
    <>
      <TopBar
        query={query}
        onQueryChange={setQuery}
        visitedCount={visitedCount}
        total={total}
        visitedSavings={visitedSavings}
      />

      <main className="container">
        {order.map((cat) => (
          <CategorySection
            key={cat}
            title={CATEGORY_LABELS[cat]}
            items={grouped.get(cat) ?? []}
            visitedSet={visited}
            onToggleRequested={requestToggle}
            onEditSavings={openSavingsEditor}
            getBenefitValue={getBenefitValue}
          />
        ))}
      </main>

      <ConfirmModal
        open={confirmOpen}
        title={pending?.next ? "Schon besucht?" : "Doch nicht besucht?"}
        description={
          pending?.next
            ? "Willst du diese Attraktion als besucht markieren? Dann wird sie ausgegraut und ans Ende der Liste verschoben."
            : "Hast du diese Attraktion doch nicht besucht? Dann wird sie wieder normal angezeigt und in der Liste nach oben sortiert."
        }
        confirmText={pending?.next ? "Ja, besucht" : "Ja, nicht besucht"}
        cancelText="Abbrechen"
        onConfirm={confirmToggle}
        onCancel={cancelToggle}
      />

      <SavingsModal
        open={savingsOpen}
        title="Vorteilswert bestätigen"
        description={`Trage den tatsächlichen Vorteil ein. Vorgeschlagen: ${formatEuro(
          savingsTarget ? getBenefitValue(savingsTarget) : 0
        )}.`}
        value={savingsValue}
        onChange={setSavingsValue}
        onConfirm={confirmSavings}
        onCancel={closeSavingsEditor}
      />
    </>
  );
}
