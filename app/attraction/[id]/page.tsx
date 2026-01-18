import Link from "next/link";
import { ATTRACTIONS } from "@/data/attractions";
import { formatEuro } from "@/lib/utils";

export default async function AttractionDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const a = ATTRACTIONS.find((x) => x.id === id);

  if (!a) {
    return (
      <main className="container">
        <div className="detail">
          <div className="backrow">
            <Link className="backbtn" href="/">
              ← Zurück
            </Link>
          </div>
          <h1>Nicht gefunden</h1>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            Diese Attraktion existiert in der Liste nicht.
          </p>
        </div>
      </main>
    );
  }

  const mapsLink = a.mapsUrl ?? null;
  const regionDetailLink = a.regionDetailUrl ?? null;
  const providerLink = a.websiteUrl ?? null;
  const address = `${a.address.street}, ${a.address.zip} ${a.address.city}`;

  return (
    <main className="container">
      <div className="detail">
        <div className="backrow">
          <Link className="backbtn" href="/">
            ← Zurück
          </Link>

          <div className="detail-links">
            {mapsLink ? (
              <a className="smalllink" href={mapsLink} target="_blank" rel="noreferrer">
                In Google Maps öffnen
              </a>
            ) : null}
            {providerLink ? (
              <a className="smalllink" href={providerLink} target="_blank" rel="noreferrer">
                Internetseite des Anbieters
              </a>
            ) : null}
          </div>
        </div>

        <h1>{a.name}</h1>
        <p style={{ margin: "0", color: "rgba(255,255,255,0.72)", lineHeight: 1.45 }}>
          <strong>Inklusivleistung:</strong> {a.included}
        </p>

        <div className="kv">
          <div>
            <div className="label">Ort / Adresse</div>
            <div className="value">{address}</div>
          </div>

          {regionDetailLink ? (
            <div>
              <div className="label">Details Erlebnisregion Stuttgart</div>
              <div className="value">
                <a className="smalllink" href={regionDetailLink} target="_blank" rel="noreferrer">
                  Zur Detailseite
                </a>
              </div>
            </div>
          ) : null}

          <div>
            <div className="label">Öffnungszeiten</div>
            <div className="value">
              {a.openingHours.map((rule, idx) => (
                <div key={`${rule.days.join("-")}-${idx}`}>
                  <strong>{rule.days.join(", ")}:</strong> {rule.from}–{rule.to}
                  {rule.note ? ` (${rule.note})` : ""}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="label">Vorteilswert</div>
            <div className="value">{formatEuro(a.benefitValue)}</div>
          </div>

          <div>
            <div className="label">Temporär geschlossen?</div>
            <div className="value">
              {a.closureNote ?? a.seasonNote ?? "Keine Angabe"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
