export type CategoryKey =
  | "MUSEUM_KULTUR"
  | "AKTIV_UNTERWEGS"
  | "STADTERLEBNIS"
  | "WASSERSPASS"
  | "AUSFLUGSZIELE";

export type Attraction = {
  id: string;
  category: CategoryKey;
  name: string;
  included: string;

  shortDescription?: string;

  // recherchierbare Felder
  address?: string;         // "Straße Hausnr, PLZ Ort"
  mapsQuery?: string;       // Google Maps Suchbegriff
  openHours?: string;       // Klartext (ggf. saisonal)
  temporarilyClosed?: string; // z.B. "Heiligabend geschlossen" etc.
  sourceUrl?: string;       // Quelle zum Nachschlagen

  // später: thumbnails
  imageUrl?: string;
};

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  MUSEUM_KULTUR: "Museen & Kultur",
  AKTIV_UNTERWEGS: "Aktiv unterwegs",
  STADTERLEBNIS: "Stadterlebnis",
  WASSERSPASS: "Wasserspaß",
  AUSFLUGSZIELE: "Ausflugsziele"
};

// Helper: Platzhalter, damit du in der UI klar siehst was noch offen ist
const TBD = "[Nicht verifiziert] Bitte ergänzen";

export const ATTRACTIONS: Attraction[] = [
  // =========================
  // MUSEUM & KULTUR
  // =========================
  {
    id: "mercedes-benz-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Mercedes-Benz Museum, Stuttgart",
    included: "Eintritt frei",
    address: "Mercedesstraße 100, 70372 Stuttgart",
    mapsQuery: "Mercedes-Benz Museum Mercedesstraße 100 Stuttgart",
    openHours: "09:00–18:00 (laut Erlebnisregion-Partnerseite; Details/Feiertage bitte auf der Website prüfen)",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-museum-kultur"
  },
  {
    id: "porsche-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Porsche Museum, Stuttgart",
    included: "Eintritt frei",
    address: "Porscheplatz 1, 70435 Stuttgart",
    mapsQuery: "Porsche Museum Porscheplatz 1 Stuttgart",
    openHours: "Di–So 09:00–18:00 (Mo Ruhetag; Kassen bis 17:30)",
    sourceUrl: "https://www.porsche.com/germany/locations-and-contact/museum/"
  },

  // (Rest Museen: erstmal Platzhalter – wir füllen im nächsten Schritt blockweise)
  {
    id: "carl-schweizer-museum-murrhardt",
    category: "MUSEUM_KULTUR",
    name: "Carl-Schweizer-Museum, Murrhardt",
    included: "Freier Eintritt, Führung durch das Museum",
    mapsQuery: "Carl-Schweizer-Museum Murrhardt",
    address: TBD,
    openHours: TBD,
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-museum-kultur"
  },
  {
    id: "linden-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Linden-Museum, Stuttgart",
    included: "Sonder- und Dauerausstellung",
    mapsQuery: "Linden-Museum Hegelplatz 1 Stuttgart",
    address: "Hegelplatz 1, 70174 Stuttgart",
    openHours: "Öffnungszeiten bitte auf der Website prüfen (wechseln je nach Tag/Saison)",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-museum-kultur"
  },

  // =========================
  // AKTIV UNTERWEGS
  // =========================
  {
    id: "eisstadion-polarion-bad-liebenzell",
    category: "AKTIV_UNTERWEGS",
    name: "Eisstadion Polarion, Bad Liebenzell",
    included: "Tageskarte",
    address: "Talwiesen 15, 75378 Bad Liebenzell",
    mapsQuery: "Eisstadion Polarion Talwiesen 15 Bad Liebenzell",
    openHours: "Öffnungszeiten variieren (laut Erlebnisregion-Partnerseite bitte tagesaktuell prüfen)",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-aktiv"
  },
  {
    id: "golfkultur-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "GolfKultur Stuttgart",
    included:
      "Kostenfreies Rangepaket inkl. Leihschläger; Tages-Rangefee inkl. Nutzung von Little Augusta sowie 70 Bälle (2 Ball-Ladungen)",
    mapsQuery: "GolfKultur Stuttgart",
    address: TBD,
    openHours: "laut Erlebnisregion-Partnerseite z. T. sehr früh/spät – bitte prüfen",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-aktiv"
  },

  // =========================
  // STADTERLEBNIS
  // =========================
  {
    id: "citytour-stuttgart-blaue-tour",
    category: "STADTERLEBNIS",
    name: "Citytour Stuttgart",
    included: "Tagesticket Blaue Tour",
    mapsQuery: "Stuttgart Citytour Blaue Tour",
    address: "70173 Stuttgart (Kontakt laut Erlebnisregion-Partnerseite; genauer Startpunkt je Route)",
    openHours: "Fahrplan/Zeiten: bitte tagesaktuell prüfen (abhängig von Saison/Veranstaltungen)",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-stadterlebnis"
  },
  {
    id: "historische-stadtfuehrung-kirchheim-unter-teck",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Kirchheim unter Teck",
    included: "Ticket für eine Stadtführung",
    address: "Kirchheim-Info, Max-Eyth-Straße 15, 73230 Kirchheim unter Teck",
    mapsQuery: "Kirchheim-Info Max-Eyth-Straße 15 Kirchheim unter Teck",
    openHours: "Stadtführungs-Termine: bitte tagesaktuell prüfen",
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-stadterlebnis"
  },

  // =========================
  // WASSERSPASS
  // =========================
  {
    id: "das-leuze-stuttgart",
    category: "WASSERSPASS",
    name: "DAS LEUZE, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad",
    address: "Am Leuzebad 2–6, 70190 Stuttgart",
    mapsQuery: "DAS LEUZE Am Leuzebad 2-6 Stuttgart",
    openHours:
      "Schwimmbad: Mo–Di 06:00–21:00; Mi–Sa 06:00–23:00; So 06:00–21:00 (Einlassschluss 1h vorher, Badeschluss 20 Min vorher)",
    temporarilyClosed: "Feiertage/Abweichungen: bitte auf der Website prüfen",
    sourceUrl: "https://www.stuttgarterbaeder.de/leuze"
  },
  {
    id: "mineralbad-berg-stuttgart",
    category: "WASSERSPASS",
    name: "Mineralbad Berg, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad; Sauna kann gegen Aufzahlung zugebucht werden",
    address: "Am Berg 1, 70376 Stuttgart",
    mapsQuery: "Mineralbad Berg Am Berg 1 Stuttgart",
    openHours: "Mo–So 09:00–22:00",
    temporarilyClosed:
      "Ganzjährig; geschlossen u. a. Heiligabend, 1. Weihnachtsfeiertag, Silvester, Neujahr, Karfreitag (laut Website)",
    sourceUrl: "https://www.stuttgarterbaeder.de/mineralbadberg"
  },
  {
    id: "solebad-cannstatt-stuttgart",
    category: "WASSERSPASS",
    name: "SoleBad Cannstatt, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad; Sauna kann gegen Aufzahlung zugebucht werden",
    address: "Sulzerrainstraße 2, 70372 Stuttgart",
    mapsQuery: "SoleBad Cannstatt Sulzerrainstraße 2 Stuttgart",
    openHours:
      "Schwimmbad: Mo–So 09:00–21:30 (Sauna/Dampfbad teils mit Damen/Herren-Zeiten – siehe Website)",
    temporarilyClosed: "Feiertage/Abweichungen: bitte auf der Website prüfen",
    sourceUrl: "https://www.stuttgarterbaeder.de/solebadcannstatt"
  },

  // (Rest Wasserspaß: Platzhalter)
  {
    id: "panorama-therme-beuren",
    category: "WASSERSPASS",
    name: "Panorama Therme Beuren",
    included: "2,5h-Ticket nur für das Schwimmbad",
    mapsQuery: "Panorama Therme Beuren",
    address: TBD,
    openHours: TBD,
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/partner-erlebniscard-wasserspass"
  },

  // =========================
  // AUSFLUGSZIELE
  // =========================
  {
    id: "wilhelma-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "Wilhelma, Stuttgart",
    included: "Eintritt frei",
    address: "Wilhelma 13, 70376 Stuttgart",
    mapsQuery: "Wilhelma 13 70376 Stuttgart",
    openHours:
      "Saisonal (Beispiel): Jan–Feb 08:15–16:30; Mär 08:15–18:30; Apr 08:15–19:30; Mai–Aug 08:15–20:00; Sep 08:15–19:30; (Details/Feiertage siehe Website)",
    temporarilyClosed: "Sondertage (z. B. 24./31.12. verkürzt) – siehe Website",
    sourceUrl: "https://www.wilhelma.de/besuch/informationen/oeffnungszeiten"
  },
  {
    id: "swr-fernsehturm-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "SWR Fernsehturm Stuttgart",
    included: "Tageskarte",
    address: "Jahnstraße 120, 70597 Stuttgart",
    mapsQuery: "SWR Fernsehturm Jahnstraße 120 Stuttgart",
    openHours: "Turm: Mo–So/Feiertag 10:00–22:00 (letzte Auffahrt 30 Min vorher)",
    temporarilyClosed: "Abweichungen/Events: bitte auf der Website prüfen",
    sourceUrl: "https://www.fernsehturm-stuttgart.de/de/besuch/"
  },
  {
    id: "schloss-solitude-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "Schloss Solitude, Stuttgart",
    included: "Eintritt Standardführung",
    address: "Solitude 1, 70197 Stuttgart",
    mapsQuery: "Schloss Solitude Solitude 1 Stuttgart",
    openHours:
      "Saisonal (Beispiel laut offizieller Seite): 1. Apr–31. Okt: Mi/Do/Fr/Sa/So/Feiertag 10:00–17:00 (Details siehe Website)",
    temporarilyClosed: "Saison-/Feiertagsabweichungen: siehe Website",
    sourceUrl: "https://www.schloss-solitude.de/besuchsinformation/oeffnungszeiten"
  },
  {
    id: "residenzschloss-ludwigsburg",
    category: "AUSFLUGSZIELE",
    name: "Residenzschloss Ludwigsburg",
    included: "Standard-Schlossführung",
    address: "Schloss Ludwigsburg (Besuchsinformation/Adresse siehe Website)",
    mapsQuery: "Residenzschloss Ludwigsburg",
    openHours:
      "Saisonal (Beispiel laut offizieller Seite): 1. Apr–31. Okt Sa/So 10:00–17:00; 1. Nov–31. Mär Di–Fr 12:00–15:00, Sa/So/Feiertag 11:00–16:00 (Details siehe Website)",
    temporarilyClosed: "Einzelne Schließtage sind möglich – siehe Website",
    sourceUrl: "https://www.schloss-ludwigsburg.de/besuchsinformation/oeffnungszeiten"
  },
  {
    id: "outletcity-metzingen-vip-shopping-day",
    category: "AUSFLUGSZIELE",
    name: "OUTLETCITY METZINGEN",
    included: "VIP-Shopping Day",
    address: "Maienwaldstraße 2, 72555 Metzingen",
    mapsQuery: "OUTLETCITY METZINGEN Maienwaldstraße 2",
    openHours: TBD,
    sourceUrl: "https://www.erlebnisregion-stuttgart.de/erlebniscard/alle-partner-der-erlebniscard"
  }
];
