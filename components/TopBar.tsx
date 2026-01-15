"use client";

export function TopBar(props: {
  query: string;
  onQueryChange: (v: string) => void;
  visitedCount: number;
  total: number;
}) {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="title">
          <h1>ErlebnisCard Tracker</h1>
          <span className="badge">
            {props.visitedCount}/{props.total} besucht
          </span>
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
