"use client";

import { useEffect, useMemo, useState } from "react";
import { ATTRACTIONS, CATEGORY_LABELS, CategoryKey } from "@/data/attractions";
import { loadVisited, saveVisited } from "@/lib/storage";
import { normalize } from "@/lib/utils";
import { TopBar } from "@/components/TopBar";
import { CategorySection } from "@/components/CategorySection";
import { ConfirmModal } from "@/components/ConfirmModal";

export default function HomePage() {
  const [visited, setVisited] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pending, setPending] = useState<{ id: string; next: boolean } | null>(null);

  useEffect(() => {
    setVisited(loadVisited());
  }, []);

  useEffect(() => {
    saveVisited(visited);
  }, [visited]);

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
    setVisited((prev) => {
      const next = new Set(prev);
      if (pending.next) next.add(pending.id);
      else next.delete(pending.id);
      return next;
    });
    setConfirmOpen(false);
    setPending(null);
  }

  function cancelToggle() {
    setConfirmOpen(false);
    setPending(null);
  }

  const total = ATTRACTIONS.length;
  const visitedCount = visited.size;
  const visitedSavings = useMemo(() => {
    return ATTRACTIONS.reduce((sum, attraction) => {
      if (visited.has(attraction.id)) {
        return sum + attraction.benefitValue;
      }
      return sum;
    }, 0);
  }, [visited]);

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
    </>
  );
}
