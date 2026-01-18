import { Attraction } from "@/data/attractions";
import { AttractionCard } from "@/components/AttractionCard";

export function CategorySection(props: {
  title: string;
  items: Attraction[];
  visitedSet: Set<string>;
  onToggleRequested: (id: string, nextVisited: boolean) => void;
  onEditSavings: (id: string) => void;
  getBenefitValue: (id: string) => number;
}) {
  if (props.items.length === 0) return null;

  return (
    <section className="section">
      <h2>{props.title}</h2>
      <div className="list">
        {props.items.map((a) => (
          <AttractionCard
            key={a.id}
            attraction={a}
            visited={props.visitedSet.has(a.id)}
            benefitValue={props.getBenefitValue(a.id)}
            onToggleRequested={props.onToggleRequested}
            onEditSavings={props.onEditSavings}
          />
        ))}
      </div>
    </section>
  );
}
