"use client";

import { formatEuro } from "@/lib/utils";

export function TopBar(props: {
  query: string;
  onQueryChange: (v: string) => void;
  visitedCount: number;
  total: number;
  visitedSavings: number;
}) {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="title">
          <h1>ErlebnisCard Tracker</h1>
        </div>

        <div className="summary">
          <div className="summary-item">
            <span className="summary-label">Besuchte Attraktionen</span>
            <span className="summary-value">
              {props.visitedCount}/{props.total}
            </span>
          </div>
          <div className="summary-item">
            <span className="summary-label">Bereits gespart</span>
            <span className="summary-value">{formatEuro(props.visitedSavings)}</span>
          </div>
        </div>

        <div className="search">
          <input
            value={props.query}
            onChange={(e) => props.onQueryChange(e.target.value)}
            placeholder="Suchen (z.B. Wilhelma, Museum, Therme …)"
            inputMode="search"
          />
        </div>
      </div>
    </div>
  );
}
