// src/data/attractions.ts

export type AttractionCategory =
  | "WASSERSPASS"
  | "AKTIV_UNTERWEGS"
  | "MUSEUM_KULTUR"
  | "STADTERLEBNIS"
  | "AUSFLUGSZIELE";

export type Weekday =
  | "Mo"
  | "Di"
  | "Mi"
  | "Do"
  | "Fr"
  | "Sa"
  | "So"
  | "Feiertag";

export type OpeningHoursRule = {
  days: Weekday[]; // e.g. ["Mo","Di"] or ["Mo","Di","Mi","Do","Fr","Sa","So","Feiertag"]
  from: string; // "09:00"
  to: string; // "22:00"
  note?: string; // optional extra info
};

export type Attraction = {
  id: string;
  category: AttractionCategory;

  name: string;
  shortTitle?: string;

  // What exactly is included with the ErlebnisCard (as on flyer / partner page)
  included: string;

  // Short description shown in list + detail page
  description: string;

  address: {
    street: string;
    zip: string;
    city: string;
  };

  // Clickable google maps link
  mapsUrl: string;

  // Generic opening hours. For seasonal facilities, also use seasonNote and/or closureNote.
  openingHours: OpeningHoursRule[];

  // For seasonal or temporary closures
  seasonNote?: string;
  closureNote?: string;

  // Later you will add real images; keep placeholders for now
  image: {
    thumbUrl: string; // small tile image
    credit?: string;
  };
};

export const ATTRACTIONS: Attraction[] = [
  // =========================================================
  // WASSERSPASS (aus Flyer)
  // =========================================================

  {
    id: "wasserspass-dasleuze",
    category: "WASSERSPASS",
    name: "DAS LEUZE (Stuttgart)",
    shortTitle: "DAS LEUZE",
    included:
      "Eintritt Schwimmbad; Sauna kann gegen Aufzahlung zugebucht werden",
    description:
      "Große Erlebnis-Therme am Neckar mit Mineralwasser-Becken innen/außen. Mit der ErlebnisCard ist der Eintritt ins Schwimmbad inklusive; Sauna optional gegen Aufzahlung.",
    address: {
      street: "Am Leuzebad 2A",
      zip: "70190",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Leuzebad+2A%2C+70190+Stuttgart",
    openingHours: [
      { days: ["Mo", "Di"], from: "06:00", to: "21:00" },
      { days: ["Mi", "Do", "Fr", "Sa"], from: "06:00", to: "23:00" },
      { days: ["So"], from: "06:00", to: "21:00" },
      {
        days: ["Feiertag"],
        from: "06:00",
        to: "21:00",
        note: "An Feiertagen gelten i.d.R. die Sonntags-Öffnungszeiten.",
      },
    ],
    closureNote:
      "Ganzjährig geöffnet. Karfreitag & 1. Weihnachtsfeiertag geschlossen. Heiligabend & Silvester nur bis 12:00 Uhr; Neujahr ab 13:00 Uhr.",
    image: { thumbUrl: "/images/placeholder/wasserspass/leuze.jpg" },
  },

  {
    id: "wasserspass-f3-fellbach",
    category: "WASSERSPASS",
    name: "F3 – Das Wohlfühlbad (Fellbach)",
    shortTitle: "F3 Fellbach",
    included:
      "Freier Eintritt; Rutschen können zugebucht werden; Sauna kann nicht zugebucht werden",
    description:
      "Familien- und Freizeitbad in Fellbach. Eintritt ist inklusive; Rutschen sind optional zubuchbar; Sauna ist nicht über die ErlebnisCard zubuchbar.",
    address: {
      street: "Esslinger Straße 102",
      zip: "70734",
      city: "Fellbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Esslinger+Stra%C3%9Fe+102%2C+70734+Fellbach",
    openingHours: [
      // Familienbad
      { days: ["Mo", "Di", "Mi", "Do"], from: "10:00", to: "20:00", note: "Familienbad" },
      { days: ["Fr", "Sa"], from: "10:00", to: "21:00", note: "Familienbad" },
      { days: ["So"], from: "10:00", to: "20:00", note: "Familienbad" },
      // Saunawelt (Info – nicht als inkludiert, aber nützlich)
      { days: ["Mo", "Di", "Mi", "Do"], from: "10:00", to: "22:00", note: "Saunawelt (separat)" },
      { days: ["Fr", "Sa"], from: "10:00", to: "23:00", note: "Saunawelt (separat)" },
      { days: ["So"], from: "10:00", to: "22:00", note: "Saunawelt (separat)" },
    ],
    image: { thumbUrl: "/images/placeholder/wasserspass/f3.jpg" },
  },

  {
    id: "wasserspass-hoehenfreibad-badurach",
    category: "WASSERSPASS",
    name: "Höhenfreibad Bad Urach",
    shortTitle: "Höhenfreibad",
    included: "Eintritt frei (Tageskarte)",
    description:
      "Freibad auf dem Tiergartenberg mit großem Sport- und Familienbereich. Mit der ErlebnisCard ist eine kostenlose Tageskarte inklusive.",
    address: {
      street: "Am Tiergartenberg",
      zip: "72574",
      city: "Bad Urach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Tiergartenberg%2C+72574+Bad+Urach",
    openingHours: [
      // Zeiten sind saisonabhängig; deshalb bewusst allgemein + Hinweis
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten sind saison- und wetterabhängig (bitte vorab prüfen).",
      },
    ],
    seasonNote:
      "Saisonbetrieb (typisch Frühjahr/Sommer).",
    closureNote:
      "Winterpause: derzeit als geschlossen ausgewiesen; Wiederöffnung laut Hinweis ab 09.05.2026 (nach Winterpause bis 08.05.2026).",
    image: { thumbUrl: "/images/placeholder/wasserspass/hoehenfreibad.jpg" },
  },

  {
    id: "wasserspass-mineralbad-berg",
    category: "WASSERSPASS",
    name: "Mineralbad Berg (Stuttgart)",
    shortTitle: "Mineralbad Berg",
    included: "Kostenloser Eintritt (Badezeit: 2 Stunden)",
    description:
      "Stuttgarts traditionsreiche Therme (‚Neuner‘) mit naturbelassenem Mineralwasser. Mit der ErlebnisCard ist ein 2-Stunden-Eintritt inklusive.",
    address: {
      street: "Am Schwanenplatz 9",
      zip: "70190",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Schwanenplatz+9%2C+70190+Stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
        note: "Mineralbad + Sauna",
      },
    ],
    closureNote:
      "Ganzjährig geöffnet. Heiligabend, 1. Weihnachtsfeiertag, Silvester, Neujahr und Karfreitag geschlossen.",
    image: { thumbUrl: "/images/placeholder/wasserspass/mineralbad-berg.jpg" },
  },

  {
    id: "wasserspass-mineralfreibad-gaildorf",
    category: "WASSERSPASS",
    name: "Mineralfreibad Gaildorf (Kieselberg)",
    shortTitle: "Mineralfreibad Gaildorf",
    included: "1 Tageskarte",
    description:
      "Mineralfreibad in Aussichtslage am Kieselberg. Mit der ErlebnisCard ist eine Tageskarte inklusive.",
    address: {
      street: "Kieselbergstraße 12",
      zip: "74405",
      city: "Gaildorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kieselbergstra%C3%9Fe+12%2C+74405+Gaildorf",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "20:00",
        note:
          "NICHT VERIFIZIERT: konkrete Tageszeiten schwanken je Saison/Personal (bitte durch offizielle Quelle ersetzen).",
      },
    ],
    seasonNote:
      "Badesaison: Mitte Mai bis Mitte September (saisonal).",
    closureNote:
      "Außerhalb der Badesaison geschlossen (typisch Herbst/Winter/Frühjahr bis Saisonstart).",
    image: { thumbUrl: "/images/placeholder/wasserspass/gaildorf.jpg" },
  },

  {
    id: "wasserspass-mineraltherme-boeblingen",
    category: "WASSERSPASS",
    name: "Mineraltherme Böblingen",
    shortTitle: "Mineraltherme Böblingen",
    included:
      "Kostenloser Eintritt Thermalbad & Classic-Sauna (Badezeit: 3 Std.); Saunagarten kann zugebucht werden",
    description:
      "Thermalbad mit Außenbecken; Classic-Sauna ist innerhalb der inkludierten Zeit dabei, Saunagarten optional zubuchbar.",
    address: {
      street: "Am Hexenbuckel 1",
      zip: "71032",
      city: "Böblingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Hexenbuckel+1%2C+71032+B%C3%B6blingen",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "09:00", to: "22:00" },
    ],
    closureNote:
      "24.12., 25.12. und 31.12. geschlossen. (Weitere Feiertags-Sonderregelungen möglich.)",
    image: { thumbUrl: "/images/placeholder/wasserspass/boeblingen.jpg" },
  },

  {
    id: "wasserspass-oskarfrech-schorndorf",
    category: "WASSERSPASS",
    name: "Oskar Frech SeeBad (Schorndorf)",
    shortTitle: "Oskar Frech SeeBad",
    included: "Kostenloser Eintritt in das Bad und eingeschränkter Eintritt in die Sauna (4 Std.)",
    description:
      "Hochmodernes Familienbad mit Rutsche; Erlebnisbad-Eintritt ist inklusive, Sauna eingeschränkt (4 Std.).",
    address: {
      street: "Lortzingstraße 56",
      zip: "73614",
      city: "Schorndorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lortzingstra%C3%9Fe+56%2C+73614+Schorndorf",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "08:00", to: "21:00", note: "Erlebnisbad (Sauna kann abweichen)" },
    ],
    closureNote:
      "Es gibt turnusmäßige Revisionen / Feiertags-Sonderzeiten möglich (bitte vor Besuch prüfen).",
    image: { thumbUrl: "/images/placeholder/wasserspass/oskarfrech.jpg" },
  },

  {
    id: "wasserspass-panorama-therme-beuren",
    category: "WASSERSPASS",
    name: "Panorama Therme Beuren",
    shortTitle: "Panorama Therme",
    included:
      "Kostenloser Eintritt Thermalbad (Badezeit: 2,5 Std.); Sauna kann zugebucht werden",
    description:
      "Therme mit Blick auf die Alb. Thermalbad ist für 2,5 Stunden inklusive, Sauna optional zubuchbar.",
    address: {
      street: "Am Thermalbad 5",
      zip: "72660",
      city: "Beuren",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Thermalbad+5%2C+72660+Beuren",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "09:00", to: "22:00", note: "Therme/Grotte" },
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], from: "11:00", to: "22:00", note: "Sauna" },
      { days: ["Sa", "So", "Feiertag"], from: "10:00", to: "22:00", note: "Sauna" },
    ],
    closureNote:
      "24.12., 25.12. und 31.12. geschlossen. Neujahr ab 12:00 Uhr geöffnet.",
    image: { thumbUrl: "/images/placeholder/wasserspass/beuren.jpg" },
  },

  {
    id: "wasserspass-paracelsus-therme-badliebenzell",
    category: "WASSERSPASS",
    name: "Paracelsus-Therme & Sauna Pinea (Bad Liebenzell)",
    shortTitle: "Paracelsus-Therme",
    included: "Freier Eintritt Paracelsus-Therme und Sauna-Pinea",
    description:
      "Thermalbad mit Sauna Pinea. Laut Vorteil ist der Eintritt in Therme und Sauna inklusive.",
    address: {
      street: "Reuchlinweg 4",
      zip: "75378",
      city: "Bad Liebenzell",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reuchlinweg+4%2C+75378+Bad+Liebenzell",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "09:00", to: "22:00", note: "Paracelsus-Therme" },
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], from: "10:00", to: "22:00", note: "Sauna Pinea" },
      { days: ["Sa", "So", "Feiertag"], from: "09:00", to: "22:00", note: "Sauna Pinea" },
    ],
    closureNote:
      "Revisionsschließzeit: 13.04.–23.04.2026. Außerdem 24.12., 25.12. und 31.12. geschlossen; 01.01. ab 11:00 Uhr geöffnet.",
    image: { thumbUrl: "/images/placeholder/wasserspass/badliebenzell.jpg" },
  },

  {
    id: "wasserspass-solebad-cannstatt",
    category: "WASSERSPASS",
    name: "SoleBad Cannstatt (Stuttgart)",
    shortTitle: "SoleBad Cannstatt",
    included:
      "Kostenloser Eintritt Schwimmbad (Badezeit: 2 Std.); Sauna kann gegen Aufzahlung zugebucht werden",
    description:
      "Sole- und Heilwasser-Therme mit Sauna/Dampfbad. Schwimmbad ist 2 Stunden inklusive; Sauna optional gegen Aufzahlung.",
    address: {
      street: "Sulzerrainstraße 2",
      zip: "70372",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sulzerrainstra%C3%9Fe+2%2C+70372+Stuttgart",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "09:00", to: "21:30", note: "Schwimmbad" },
      { days: ["Di"], from: "09:00", to: "21:30", note: "Sauna/Dampfbad (Damen+Herren)" },
      { days: ["Mi"], from: "13:00", to: "21:30", note: "Sauna/Dampfbad (Damen+Herren)" },
      { days: ["Fr", "Sa", "So"], from: "09:00", to: "21:30", note: "Sauna/Dampfbad (Damen+Herren)" },
      { days: ["Mo", "Do"], from: "09:00", to: "21:30", note: "Sauna/Dampfbad (Nur Damen)" },
      { days: ["Mi"], from: "09:00", to: "13:00", note: "Sauna/Dampfbad (Nur Herren)" },
      { days: ["Feiertag"], from: "09:00", to: "21:30", note: "Sauna/Dampfbad: Feiertag stets Damen+Herren" },
    ],
    closureNote:
      "Ganzjährig geöffnet. Heiligabend, 1. Weihnachtsfeiertag, Silvester, Neujahr, Karfreitag und 1. Mai geschlossen.",
    image: { thumbUrl: "/images/placeholder/wasserspass/solebad.jpg" },
  },

  {
    id: "wasserspass-vinzenztherme-badditzenbach",
    category: "WASSERSPASS",
    name: "Vinzenz Therme (Bad Ditzenbach)",
    shortTitle: "Vinzenz Therme",
    included: "Eintritt frei; Sauna kann gegen Aufzahlung zugebucht werden",
    description:
      "Thermalbad in Bad Ditzenbach. Eintritt ist inklusive; Sauna ist optional gegen Aufzahlung zubuchbar.",
    address: {
      street: "Kurhausstraße 18",
      zip: "73342",
      city: "Bad Ditzenbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kurhausstra%C3%9Fe+18%2C+73342+Bad+Ditzenbach",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "09:00", to: "21:00" },
    ],
    closureNote:
      "Schließtage: Karfreitag, 24.12. und 31.12. Neujahr: Öffnung ab 14:00 Uhr.",
    image: { thumbUrl: "/images/placeholder/wasserspass/vinzenz.jpg" },
  },

  // =========================================================
  // Andere Kategorien (kommen als nächstes)
  // =========================================================
  // AKTIV_UNTERWEGS, MUSEUM_KULTUR, STADTERLEBNIS, AUSFLUGSZIELE
];
