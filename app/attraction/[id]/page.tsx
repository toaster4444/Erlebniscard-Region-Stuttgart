import Link from "next/link";
import { ATTRACTIONS } from "@/data/attractions";
import { googleMapsLinkFromQuery } from "@/lib/utils";

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

  const mapsLink = a.mapsQuery ? googleMapsLinkFromQuery(a.mapsQuery) : null;

  return (
    <main className="container">
      <div className="detail">
        <div className="backrow">
          <Link className="backbtn" href="/">
            ← Zurück
          </Link>

          {mapsLink ? (
            <a className="smalllink" href={mapsLink} target="_blank" rel="noreferrer">
              In Google Maps öffnen
            </a>
          ) : null}
        </div>

        <h1>{a.name}</h1>
        <p style={{ margin: "0", color: "rgba(255,255,255,0.72)", lineHeight: 1.45 }}>
          <strong>Inklusivleistung:</strong> {a.included}
        </p>

        <div className="kv">
          <div>
            <div className="label">Ort / Adresse</div>
            <div className="value">{a.address ?? "[Nicht verifiziert] Bitte ergänzen"}</div>
          </div>

          <div>
            <div className="label">Öffnungszeiten</div>
            <div className="value">{a.openHours ?? "[Nicht verifiziert] Bitte ergänzen"}</div>
          </div>

          <div>
            <div className="label">Temporär geschlossen?</div>
            <div className="value">{a.temporarilyClosed ?? "[Nicht verifiziert] Unbekannt / bitte ergänzen"}</div>
          </div>
        </div>
      </div>
    </main>
  );
}
