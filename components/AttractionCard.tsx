"use client";

import Link from "next/link";
import { Attraction } from "@/data/attractions";

export function AttractionCard(props: {
  attraction: Attraction;
  visited: boolean;
  onToggleRequested: (id: string, nextVisited: boolean) => void;
}) {
  const a = props.attraction;

  return (
    <div className={`card ${props.visited ? "visited" : ""}`}>
      <div className="thumb" aria-hidden="true">
        {a.image?.thumbUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={a.image.thumbUrl} alt="" />
        ) : (
          <span>Bild</span>
        )}
      </div>

      <div className="meta">
        <p className="name">{a.name}</p>
        <p className="desc">{a.included}</p>
      </div>

      <div className="actions">
        <Link className="smalllink" href={`/attraction/${a.id}`}>
          Details
        </Link>

        <button
          className="checkbox"
          data-checked={props.visited ? "true" : "false"}
          aria-label={props.visited ? "Als nicht besucht markieren" : "Als besucht markieren"}
          onClick={() => props.onToggleRequested(a.id, !props.visited)}
        >
          {props.visited ? "✓" : ""}
        </button>
      </div>
    </div>
  );
}
