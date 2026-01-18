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
  | "Feiertag"
  | "—";

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

  // Price value of the included benefit (in EUR)
  benefitValue: number;

  // Short description shown in list + detail page
  description: string;

  address: {
    street: string;
    zip: string;
    city: string;
  };

  // Clickable google maps link
  mapsUrl: string;

  // Official provider website (if available)
  websiteUrl?: string;

  // Detail page on erlebnisregion-stuttgart.de (if available)
  regionDetailUrl?: string;

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
    benefitValue: 10.5,
    description:
      "Große Erlebnis-Therme am Neckar mit Mineralwasser-Becken innen/außen. Mit der ErlebnisCard ist der Eintritt ins Schwimmbad inklusive; Sauna optional gegen Aufzahlung.",
    address: {
      street: "Am Leuzebad 2A",
      zip: "70190",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Leuzebad+2A%2C+70190+Stuttgart",
    websiteUrl: "https://stuttgarterbaeder.de/leuze",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-das-leuze",
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
    benefitValue: 9.9,
    description:
      "Familien- und Freizeitbad in Fellbach. Eintritt ist inklusive; Rutschen sind optional zubuchbar; Sauna ist nicht über die ErlebnisCard zubuchbar.",
    address: {
      street: "Esslinger Straße 102",
      zip: "70734",
      city: "Fellbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Esslinger+Stra%C3%9Fe+102%2C+70734+Fellbach",
    websiteUrl: "http://www.f3-fellbach.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-f3-das-wohlfuehlbad-fellbach",
    openingHours: [
      // Familienbad
      {
        days: ["Mo", "Di", "Mi", "Do"],
        from: "10:00",
        to: "20:00",
        note: "Familienbad",
      },
      { days: ["Fr", "Sa"], from: "10:00", to: "21:00", note: "Familienbad" },
      { days: ["So"], from: "10:00", to: "20:00", note: "Familienbad" },
      // Saunawelt (Info – nicht als inkludiert, aber nützlich)
      {
        days: ["Mo", "Di", "Mi", "Do"],
        from: "10:00",
        to: "22:00",
        note: "Saunawelt (separat)",
      },
      {
        days: ["Fr", "Sa"],
        from: "10:00",
        to: "23:00",
        note: "Saunawelt (separat)",
      },
      {
        days: ["So"],
        from: "10:00",
        to: "22:00",
        note: "Saunawelt (separat)",
      },
    ],
    image: { thumbUrl: "/images/placeholder/wasserspass/f3.jpg" },
  },

  {
    id: "wasserspass-hoehenfreibad-badurach",
    category: "WASSERSPASS",
    name: "Höhenfreibad Bad Urach",
    shortTitle: "Höhenfreibad",
    included: "Eintritt frei (Tageskarte)",
    benefitValue: 0,
    description:
      "Freibad auf dem Tiergartenberg mit großem Sport- und Familienbereich. Mit der ErlebnisCard ist eine kostenlose Tageskarte inklusive.",
    address: {
      street: "Am Tiergartenberg",
      zip: "72574",
      city: "Bad Urach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Tiergartenberg%2C+72574+Bad+Urach",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-hoehenfreibad-bad-urach-1",
    openingHours: [
      // Zeiten sind saisonabhängig; deshalb bewusst allgemein + Hinweis
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten sind saison- und wetterabhängig (bitte vorab prüfen).",
      },
    ],
    seasonNote: "Saisonbetrieb (typisch Frühjahr/Sommer).",
    closureNote:
      "Winterpause: derzeit als geschlossen ausgewiesen; Wiederöffnung laut Hinweis ab 09.05.2026 (nach Winterpause bis 08.05.2026).",
    image: { thumbUrl: "/images/placeholder/wasserspass/hoehenfreibad.jpg" },
  },

  {
    id: "wasserspass-freibad-kirchheim",
    category: "WASSERSPASS",
    name: "Freibad Kirchheim unter Teck",
    shortTitle: "Freibad Kirchheim",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Freibad in Kirchheim unter Teck mit ErlebnisCard-Eintritt.",
    address: {
      street: "Jesinger Straße 79",
      zip: "73230",
      city: "Kirchheim unter Teck",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jesinger+Stra%C3%9Fe+79%2C+73230+Kirchheim+unter+Teck",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-freibad-kirchheim-unter-teck",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten sind saison- und wetterabhängig (bitte vorab prüfen).",
      },
    ],
    seasonNote: "Saisonbetrieb (typisch Frühjahr/Sommer).",
    image: { thumbUrl: "/images/placeholder/wasserspass/freibad-kirchheim.jpg" },
  },

  {
    id: "wasserspass-mineralbad-berg",
    category: "WASSERSPASS",
    name: "Mineralbad Berg (Stuttgart)",
    shortTitle: "Mineralbad Berg",
    included: "Kostenloser Eintritt (Badezeit: 2 Stunden)",
    benefitValue: 9,
    description:
      "Stuttgarts traditionsreiche Therme (‚Neuner‘) mit naturbelassenem Mineralwasser. Mit der ErlebnisCard ist ein 2-Stunden-Eintritt inklusive.",
    address: {
      street: "Am Schwanenplatz 9",
      zip: "70190",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Schwanenplatz+9%2C+70190+Stuttgart",
    websiteUrl: "https://stuttgarterbaeder.de/mineralbadberg",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-mineralbad-berg",
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
    benefitValue: 0,
    description:
      "Mineralfreibad in Aussichtslage am Kieselberg. Mit der ErlebnisCard ist eine Tageskarte inklusive.",
    address: {
      street: "Kieselbergstraße 12",
      zip: "74405",
      city: "Gaildorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kieselbergstra%C3%9Fe+12%2C+74405+Gaildorf",
    websiteUrl: "https://gaildorf.de/adresse/Mineralfreibad-Kieselberg-address1891",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-mineralfreibad-gaildorf",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "20:00",
        note:
          "NICHT VERIFIZIERT: konkrete Tageszeiten schwanken je Saison/Personal (bitte durch offizielle Quelle ersetzen).",
      },
    ],
    seasonNote: "Badesaison: Mitte Mai bis Mitte September (saisonal).",
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
    benefitValue: 17,
    description:
      "Thermalbad mit Außenbecken; Classic-Sauna ist innerhalb der inkludierten Zeit dabei, Saunagarten optional zubuchbar.",
    address: {
      street: "Am Hexenbuckel 1",
      zip: "71032",
      city: "Böblingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Hexenbuckel+1%2C+71032+B%C3%B6blingen",
    websiteUrl: "https://www.mineraltherme-boeblingen.de/start",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-mineraltherme-boeblingen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
      },
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
    included:
      "Kostenloser Eintritt in das Bad und eingeschränkter Eintritt in die Sauna (4 Std.)",
    benefitValue: 21,
    description:
      "Hochmodernes Familienbad mit Rutsche; Erlebnisbad-Eintritt ist inklusive, Sauna eingeschränkt (4 Std.).",
    address: {
      street: "Lortzingstraße 56",
      zip: "73614",
      city: "Schorndorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lortzingstra%C3%9Fe+56%2C+73614+Schorndorf",
    websiteUrl: "https://baederbetriebe.stadtwerke-schorndorf.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-oskar-frech-seebad",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "08:00",
        to: "21:00",
        note: "Erlebnisbad (Sauna kann abweichen)",
      },
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
    benefitValue: 17.5,
    description:
      "Therme mit Blick auf die Alb. Thermalbad ist für 2,5 Stunden inklusive, Sauna optional zubuchbar.",
    address: {
      street: "Am Thermalbad 5",
      zip: "72660",
      city: "Beuren",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Thermalbad+5%2C+72660+Beuren",
    websiteUrl: "https://www.panorama-therme.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-panorama-therme-beuren",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
        note: "Therme/Grotte",
      },
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "11:00",
        to: "22:00",
        note: "Sauna",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "10:00",
        to: "22:00",
        note: "Sauna",
      },
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
    benefitValue: 0,
    description:
      "Thermalbad mit Sauna Pinea. Laut Vorteil ist der Eintritt in Therme und Sauna inklusive.",
    address: {
      street: "Reuchlinweg 4",
      zip: "75378",
      city: "Bad Liebenzell",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reuchlinweg+4%2C+75378+Bad+Liebenzell",
    websiteUrl: "http://www.paracelsus-therme.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-paracelsus-therme-bad-liebenzell-sauna-pinea",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
        note: "Paracelsus-Therme",
      },
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "10:00",
        to: "22:00",
        note: "Sauna Pinea",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
        note: "Sauna Pinea",
      },
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
    benefitValue: 9.5,
    description:
      "Sole- und Heilwasser-Therme mit Sauna/Dampfbad. Schwimmbad ist 2 Stunden inklusive; Sauna optional gegen Aufzahlung.",
    address: {
      street: "Sulzerrainstraße 2",
      zip: "70372",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sulzerrainstra%C3%9Fe+2%2C+70372+Stuttgart",
    websiteUrl: "https://stuttgarterbaeder.de/solebadcannstatt",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-solebad-cannstatt",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "21:30",
        note: "Schwimmbad",
      },
      {
        days: ["Di"],
        from: "09:00",
        to: "21:30",
        note: "Sauna/Dampfbad (Damen+Herren)",
      },
      {
        days: ["Mi"],
        from: "13:00",
        to: "21:30",
        note: "Sauna/Dampfbad (Damen+Herren)",
      },
      {
        days: ["Fr", "Sa", "So"],
        from: "09:00",
        to: "21:30",
        note: "Sauna/Dampfbad (Damen+Herren)",
      },
      {
        days: ["Mo", "Do"],
        from: "09:00",
        to: "21:30",
        note: "Sauna/Dampfbad (Nur Damen)",
      },
      {
        days: ["Mi"],
        from: "09:00",
        to: "13:00",
        note: "Sauna/Dampfbad (Nur Herren)",
      },
      {
        days: ["Feiertag"],
        from: "09:00",
        to: "21:30",
        note: "Sauna/Dampfbad: Feiertag stets Damen+Herren",
      },
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
    benefitValue: 22,
    description:
      "Thermalbad in Bad Ditzenbach. Eintritt ist inklusive; Sauna ist optional gegen Aufzahlung zubuchbar.",
    address: {
      street: "Kurhausstraße 18",
      zip: "73342",
      city: "Bad Ditzenbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kurhausstra%C3%9Fe+18%2C+73342+Bad+Ditzenbach",
    websiteUrl: "http://www.vinzenztherme.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-vinzenz-therme",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "21:00",
      },
    ],
    closureNote:
      "Schließtage: Karfreitag, 24.12. und 31.12. Neujahr: Öffnung ab 14:00 Uhr.",
    image: { thumbUrl: "/images/placeholder/wasserspass/vinzenz.jpg" },
  },

  // =========================================================
  // AKTIV UNTERWEGS – recherchiert
  // =========================================================

  {
    id: "aktiv-adventure-golf-vaihingen-enz",
    category: "AKTIV_UNTERWEGS",
    name: "Adventure Golf Vaihingen an der Enz",
    shortTitle: "Adventure Golf",
    included: "Eintritt frei",
    benefitValue: 11.5,
    description:
      "Abwechslungsreiche Adventure-Golf-Anlage mit thematisch gestalteten Bahnen – für Familien und Gruppen geeignet.",
    address: {
      street: "Walter-de-Pay-Straße 10",
      zip: "71665",
      city: "Vaihingen an der Enz",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Walter-de-Pay-Stra%C3%9Fe+10%2C+71665+Vaihingen+an+der+Enz",
    websiteUrl: "https://www.adventure-golf-vaihingen.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-adventure-golf-vaihingen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Saison- und wetterabhängig. Öffnungszeiten variieren – bitte vorab online prüfen.",
      },
    ],
    seasonNote: "Saisonbetrieb (typisch Frühjahr bis Herbst).",
    image: { thumbUrl: "/images/placeholder/aktiv/adventure-golf.jpg" },
  },

  {
    id: "aktiv-citygolf-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "CITYGOLF Stuttgart",
    shortTitle: "CityGolf",
    included: "Tages-Greenfee",
    benefitValue: 25,
    description:
      "Urbanes Golf-Erlebnis mitten in Stuttgart – Golf spielen ohne Clubmitgliedschaft.",
    address: {
      street: "Am Schnarrenberg 10",
      zip: "70376",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Am+Schnarrenberg+10%2C+70376+Stuttgart",
    websiteUrl: "https://citygolf-stuttgart.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-citygolf-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "10:00",
        to: "22:00",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "09:00",
        to: "22:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/citygolf.jpg" },
  },

  {
    id: "aktiv-polarion-bad-liebenzell",
    category: "AKTIV_UNTERWEGS",
    name: "Eisstadion Polarion Bad Liebenzell",
    shortTitle: "Polarion",
    included: "Tageskarte",
    benefitValue: 8,
    description:
      "Eisstadion mit öffentlichem Eislauf, Discolauf und Familienangeboten.",
    address: {
      street: "Talwiesen 15",
      zip: "75378",
      city: "Bad Liebenzell",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Talwiesen+15%2C+75378+Bad+Liebenzell",
    websiteUrl: "https://polarion.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-eisstadion-polarion-bad-liebenzell",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Öffentlicher Eislauf nur zu ausgewählten Zeiten – tagesaktuellen Eisplan online prüfen.",
      },
    ],
    seasonNote: "Saisonbetrieb (typisch Herbst bis Frühjahr).",
    image: { thumbUrl: "/images/placeholder/aktiv/polarion.jpg" },
  },

  {
    id: "aktiv-entdeckerwelt-bad-urach",
    category: "AKTIV_UNTERWEGS",
    name: "Entdeckerwelt Bad Urach",
    shortTitle: "Entdeckerwelt",
    included: "Eintritt frei inkl. Tablet-Ausleihe",
    benefitValue: 7,
    description:
      "Interaktive Erlebniswelt mit digitalen Entdeckertouren rund um Bad Urach.",
    address: {
      street: "Marktplatz 1",
      zip: "72574",
      city: "Bad Urach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+1%2C+72574+Bad+Urach",
    websiteUrl: "https://www.badurach-tourismus.de/kultur-events/entdeckerwelt/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-entdeckerwelt-bad-urach",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "10:00",
        to: "17:00",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "10:00",
        to: "16:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/entdeckerwelt.jpg" },
  },

  {
    id: "aktiv-golfkultur-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "GolfKultur Stuttgart",
    shortTitle: "GolfKultur",
    included:
      "Kostenfreies Rangepaket inkl. Leihschläger + Tages-Rangefee inkl. 70 Bälle",
    benefitValue: 25.2,
    description:
      "Moderne Golf-Range mit Trainingsflächen und Kurzplatz ‚Little Augusta‘.",
    address: {
      street: "Schönbuchstraße 2",
      zip: "71032",
      city: "Böblingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sch%C3%B6nbuchstra%C3%9Fe+2%2C+71032+B%C3%B6blingen",
    websiteUrl: "https://www.golfkultur-stuttgart.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-golfkultur-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "07:00",
        to: "22:00",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "08:00",
        to: "21:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/golfkultur.jpg" },
  },

  {
    id: "aktiv-pause-play-escaperooms",
    category: "AKTIV_UNTERWEGS",
    name: "pause & play EscapeRooms Stuttgart",
    shortTitle: "EscapeRooms",
    included: "20 % Rabatt",
    benefitValue: 0,
    description:
      "Live Escape Rooms mit verschiedenen Themen – Teamwork und Rätselspaß.",
    address: {
      street: "Wagrainstraße 140",
      zip: "70378",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Wagrainstra%C3%9Fe+140%2C+70378+Stuttgart",
    websiteUrl: "https://pause-play.de/stuttgart/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-pause-play-escape-rooms",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "10:00",
        to: "22:00",
        note: "Spieltimes nach Reservierung",
      },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/escape.jpg" },
  },

  {
    id: "aktiv-skypark-epia-schwaebisch-gmuend",
    category: "AKTIV_UNTERWEGS",
    name: "SKYPARK epia Kletterwald Schwäbisch Gmünd",
    shortTitle: "SKYPARK epia",
    included: "Tageskarte",
    benefitValue: 24,
    description:
      "Hochseilgarten mit Parcours verschiedener Schwierigkeitsgrade in Waldlage.",
    address: {
      street: "Himmelsgarten 1",
      zip: "73527",
      city: "Schwäbisch Gmünd",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Himmelsgarten+1%2C+73527+Schw%C3%A4bisch+Gm%C3%BCnd",
    websiteUrl: "http://www.skypark.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-skypark-kletterwald",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Saison- und wetterabhängig; Öffnung meist ab Vormittag – bitte online prüfen.",
      },
    ],
    seasonNote: "Saisonbetrieb (typisch April–Oktober).",
    image: { thumbUrl: "/images/placeholder/aktiv/kletterwald.jpg" },
  },

  {
    id: "aktiv-sprungbude-bad-cannstatt",
    category: "AKTIV_UNTERWEGS",
    name: "Sprungbude Bad Cannstatt",
    shortTitle: "Sprungbude",
    included: "60 Minuten Sprungzeit",
    benefitValue: 15.99,
    description:
      "Trampolinpark mit Ninja-Parcours, Sprungflächen und Action-Arealen.",
    address: {
      street: "Augsburger Straße 606",
      zip: "70329",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Augsburger+Stra%C3%9Fe+606%2C+70329+Stuttgart",
    websiteUrl: "https://sprungbude.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-sprungbude-stuttgart",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], from: "14:00", to: "21:00" },
      { days: ["Sa", "So", "Feiertag"], from: "10:00", to: "20:00" },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/sprungbude.jpg" },
  },

  {
    id: "aktiv-sprungbude-filderstadt",
    category: "AKTIV_UNTERWEGS",
    name: "Sprungbude Filderstadt",
    shortTitle: "Sprungbude",
    included: "60 Minuten Sprungzeit",
    benefitValue: 15.99,
    description:
      "Großer Trampolinpark nahe Flughafen Stuttgart – ideal für Familien und Gruppen.",
    address: {
      street: "Gutenbergstraße 30",
      zip: "70794",
      city: "Filderstadt",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Gutenbergstra%C3%9Fe+30%2C+70794+Filderstadt",
    websiteUrl: "https://sprungbude.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-sprungbude-filderstadt",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], from: "14:00", to: "21:00" },
      { days: ["Sa", "So", "Feiertag"], from: "10:00", to: "20:00" },
    ],
    image: { thumbUrl: "/images/placeholder/aktiv/sprungbude.jpg" },
  },
  // =========================================================
  // MUSEEN & KULTUR
  // =========================================================

  {
    id: "museum-carl-schweizer-murrhardt",
    category: "MUSEUM_KULTUR",
    name: "Carl-Schweizer-Museum",
    shortTitle: "Carl-Schweizer-Museum",
    included: "Freier Eintritt inkl. Führung",
    benefitValue: 5,
    description:
      "Regionalmuseum zur Stadt- und Kulturgeschichte von Murrhardt mit wechselnden Sonderausstellungen.",
    address: {
      street: "Marktstraße 48",
      zip: "71540",
      city: "Murrhardt",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktstra%C3%9Fe+48%2C+71540+Murrhardt",
    websiteUrl: "http://www.carl-schweizer-museum.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-carl-schweizer-museum",
    openingHours: [
      {
        days: ["Mi", "Do", "Fr", "Sa", "So"],
        from: "14:00",
        to: "17:00",
        note: "Führungen nach Vereinbarung",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/carl-schweizer.jpg" },
  },

  {
    id: "museum-deutsches-landwirtschaftsmuseum",
    category: "MUSEUM_KULTUR",
    name: "Deutsches Landwirtschaftsmuseum Stuttgart",
    shortTitle: "Landwirtschaftsmuseum",
    included: "Tageskarte",
    benefitValue: 3,
    description:
      "Technik- und Kulturgeschichte der Landwirtschaft mit historischen Maschinen und Geräten.",
    address: {
      street: "Hohenheim",
      zip: "70599",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Deutsches+Landwirtschaftsmuseum+Hohenheim+Stuttgart",
    websiteUrl: "http://www.dlm-hohenheim.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-deutsches-landwirtschaftsmuseum",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "10:00",
        to: "17:00",
      },
    ],
    seasonNote: "Außerhalb der Wochenenden nur nach Anmeldung.",
    image: { thumbUrl: "/images/placeholder/museum/landwirtschaft.jpg" },
  },

  {
    id: "museum-faszination-psyche",
    category: "MUSEUM_KULTUR",
    name: "Faszination Psyche",
    shortTitle: "Faszination Psyche",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Erlebnisausstellung zur Funktionsweise der menschlichen Psyche – interaktiv und multimedial.",
    address: {
      street: "Breitscheidstraße 20",
      zip: "70176",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Breitscheidstra%C3%9Fe+20%2C+70176+Stuttgart",
    websiteUrl: "https://www.stiftung-psyche.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-ausstellung-faszination-psyche",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "09:00",
        to: "18:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/psyche.jpg" },
  },

  {
    id: "museum-freilichtmuseum-beuren",
    category: "MUSEUM_KULTUR",
    name: "Freilichtmuseum Beuren",
    shortTitle: "Freilichtmuseum Beuren",
    included: "Tageskarte",
    benefitValue: 8.5,
    description:
      "Historische Gebäude und Alltagskultur aus dem ländlichen Württemberg.",
    address: {
      street: "Museumstraße 1",
      zip: "72660",
      city: "Beuren",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Museumstra%C3%9Fe+1%2C+72660+Beuren",
    websiteUrl: "https://www.freilichtmuseum-beuren.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-freilichtmuseum-beuren",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "10:00",
        to: "18:00",
      },
    ],
    seasonNote: "Saisonbetrieb April–Oktober.",
    image: { thumbUrl: "/images/placeholder/museum/beuren.jpg" },
  },

  {
    id: "museum-galerie-stihl-waiblingen",
    category: "MUSEUM_KULTUR",
    name: "Galerie Stihl Waiblingen",
    shortTitle: "Galerie Stihl",
    included: "Eintritt frei",
    benefitValue: 6,
    description:
      "Hochwertige Ausstellungen moderner und zeitgenössischer Kunst.",
    address: {
      street: "Weingärtner Vorstadt 12",
      zip: "71332",
      city: "Waiblingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Weing%C3%A4rtner+Vorstadt+12%2C+71332+Waiblingen",
    websiteUrl: "https://www.galerie-stihl-waiblingen.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-galerie-stihl",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr"],
        from: "11:00",
        to: "18:00",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "10:00",
        to: "18:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/stihl.jpg" },
  },

  {
    id: "museum-mercedes-benz",
    category: "MUSEUM_KULTUR",
    name: "Mercedes-Benz Museum",
    shortTitle: "Mercedes-Benz Museum",
    included: "Eintritt frei",
    benefitValue: 16,
    description:
      "Automobilgeschichte von den Anfängen bis zur Gegenwart auf 9 Ebenen.",
    address: {
      street: "Mercedesstraße 100",
      zip: "70372",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mercedesstra%C3%9Fe+100%2C+70372+Stuttgart",
    websiteUrl: "https://www.mercedes-benz.com/de/kunst-und-kultur/museum/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-mercedes-benz-museum-stuttgart",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "18:00",
      },
    ],
    closureNote: "Montags geschlossen (außer Feiertag).",
    image: { thumbUrl: "/images/placeholder/museum/mercedes.jpg" },
  },

  {
    id: "museum-porsche",
    category: "MUSEUM_KULTUR",
    name: "Porsche Museum",
    shortTitle: "Porsche Museum",
    included: "Eintritt frei",
    benefitValue: 15,
    description:
      "Markengeschichte, Rennsport und Design von Porsche in moderner Architektur.",
    address: {
      street: "Porscheplatz 1",
      zip: "70435",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Porscheplatz+1%2C+70435+Stuttgart",
    websiteUrl: "https://www.porsche.de/museum",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-porsche-museum",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "18:00",
      },
    ],
    closureNote: "Montags geschlossen.",
    image: { thumbUrl: "/images/placeholder/museum/porsche.jpg" },
  },

  {
    id: "museum-wilhelma-museum",
    category: "MUSEUM_KULTUR",
    name: "Museum am Löwentor (Naturkundemuseum)",
    shortTitle: "Museum am Löwentor",
    included: "Kombiticket mit Schloss Rosenstein",
    benefitValue: 16,
    description:
      "Naturkundemuseum mit Fokus auf Evolution, Fossilien und Biodiversität.",
    address: {
      street: "Rosenstein 1",
      zip: "70191",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rosenstein+1%2C+70191+Stuttgart",
    websiteUrl: "http://www.naturkundemuseum-bw.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-naturkundemuseum-am-loewentor",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "09:00",
        to: "17:00",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/loewentor.jpg" },
  },

  {
    id: "museum-staatsgalerie",
    category: "MUSEUM_KULTUR",
    name: "Staatsgalerie Stuttgart",
    shortTitle: "Staatsgalerie",
    included: "Tageskarte",
    benefitValue: 10,
    description:
      "Internationale Kunst von der Klassischen Moderne bis zur Gegenwart.",
    address: {
      street: "Konrad-Adenauer-Straße 30–32",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Konrad-Adenauer-Stra%C3%9Fe+30%2C+70173+Stuttgart",
    websiteUrl: "https://www.staatsgalerie.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-staatsgalerie-stuttgart",
    openingHours: [
      {
        days: ["Di", "Mi", "Do", "Fr"],
        from: "10:00",
        to: "17:00",
      },
      {
        days: ["Sa", "So", "Feiertag"],
        from: "10:00",
        to: "18:00",
      },
    ],
    closureNote: "Montags geschlossen.",
    image: { thumbUrl: "/images/placeholder/museum/staatsgalerie.jpg" },
  },

  {
    id: "museum-schillers-geburtshaus",
    category: "MUSEUM_KULTUR",
    name: "Schillers Geburtshaus in Marbach am Neckar",
    shortTitle: "Schillers Geburtshaus",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Literaturmuseum in Marbach am Neckar, Geburtshaus von Friedrich Schiller.",
    address: {
      street: "Niklastorstraße 31",
      zip: "71672",
      city: "Marbach am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Niklastorstra%C3%9Fe%2031%2C%2071672%20Marbach%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schillers-geburtshaus",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/schillers-geburtshaus.jpg" },
  },

  {
    id: "museum-stadtpalais",
    category: "MUSEUM_KULTUR",
    name: "StadtPalais – Museum für Stuttgart",
    shortTitle: "StadtPalais",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Museum zur Stadtgeschichte Stuttgarts im StadtPalais.",
    address: {
      street: "Konrad-Adenauer-Str. 2",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Konrad-Adenauer-Str.%202%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-stadtpalais-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/stadtpalais.jpg" },
  },

  {
    id: "museum-landesmuseum-wuerttemberg",
    category: "MUSEUM_KULTUR",
    name: "Landesmuseum Württemberg in Stuttgart",
    shortTitle: "Landesmuseum Württemberg",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Sammlungen zur Geschichte und Kultur Württembergs im Alten Schloss.",
    address: {
      street: "Schillerplatz 6",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schillerplatz%206%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-landesmuseum-wuerttemberg",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/landesmuseum.jpg" },
  },

  {
    id: "museum-weissenhofmuseum",
    category: "MUSEUM_KULTUR",
    name: "UNESCO-Welterbe in der Weissenhofsiedlung",
    shortTitle: "Weissenhofmuseum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Weissenhofmuseum im Haus Le Corbusier, Teil des UNESCO-Welterbes.",
    address: {
      street: "Rathenaustraße 1-3",
      zip: "70191",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rathenaustra%C3%9Fe%201-3%2C%2070191%20Stuttgart",
    regionDetailUrl:
      "https://www.erlebnisregion-stuttgart.de/a-weissenhofsiedlung-stuttgart-weissenhof-museum-im-haus-le-corbusier",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/weissenhof.jpg" },
  },

  {
    id: "museum-alltagskultur-waldenbuch",
    category: "MUSEUM_KULTUR",
    name: "Museum der Alltagskultur - Schloss Waldenbuch",
    shortTitle: "Museum Alltagskultur",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Alltagskultur und Geschichte Württembergs im Schloss Waldenbuch.",
    address: {
      street: "Kirchgasse 3",
      zip: "71111",
      city: "Waldenbuch",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kirchgasse%203%2C%2071111%20Waldenbuch",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-museum-der-alltagskultur-schloss-waldenbuch",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/alltagskultur.jpg" },
  },

  {
    id: "museum-haus-der-geschichte",
    category: "MUSEUM_KULTUR",
    name: "Haus der Geschichte Baden-Württemberg in Stuttgart",
    shortTitle: "Haus der Geschichte",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Zeitgeschichte Baden-Württembergs in wechselnden Ausstellungen.",
    address: {
      street: "Konrad-Adenauer-Straße 16",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Konrad-Adenauer-Stra%C3%9Fe%2016%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-haus-der-geschichte",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/haus-der-geschichte.jpg" },
  },

  {
    id: "museum-kunstmuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Kunstmuseum Stuttgart",
    shortTitle: "Kunstmuseum Stuttgart",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Moderne und zeitgenössische Kunst im Glaskubus am Schlossplatz.",
    address: {
      street: "Kleiner Schlossplatz 1",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kleiner%20Schlossplatz%201%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-kunstmuseum-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/kunstmuseum.jpg" },
  },

  {
    id: "museum-stihl-markenwelt",
    category: "MUSEUM_KULTUR",
    name: "STIHL Markenwelt",
    shortTitle: "STIHL Markenwelt",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Marken- und Produktgeschichte von STIHL in Waiblingen.",
    address: {
      street: "Badstraße 115",
      zip: "71336",
      city: "Waiblingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Badstra%C3%9Fe%20115%2C%2071336%20Waiblingen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-stihl-markenwelt",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/stihl-markenwelt.jpg" },
  },

  {
    id: "museum-fritz-genkinger-kunsthaus",
    category: "MUSEUM_KULTUR",
    name: "Fritz Genkinger Kunsthaus Marbach am Neckar",
    shortTitle: "Kunsthaus Genkinger",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Ausstellungen moderner Kunst im Fritz Genkinger Kunsthaus.",
    address: {
      street: "Göckelhof 6",
      zip: "71672",
      city: "Marbach am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=G%C3%B6ckelhof%206%2C%2071672%20Marbach%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-fritz-genkinger-kunsthaus-marbach-am-neckar",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/genkinger.jpg" },
  },

  {
    id: "museum-kleihues-bau",
    category: "MUSEUM_KULTUR",
    name: "Museum im Kleihues-Bau",
    shortTitle: "Museum im Kleihues-Bau",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Ausstellungen und Sammlung im Museum im Kleihues-Bau.",
    address: {
      street: "Stuttgarter Straße 93",
      zip: "70806",
      city: "Kornwestheim",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stuttgarter%20Stra%C3%9Fe%2093%2C%2070806%20Kornwestheim",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-museum-im-kleihues-bau",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/kleihues.jpg" },
  },

  {
    id: "museum-hoelzel-haus",
    category: "MUSEUM_KULTUR",
    name: "Hölzel-Haus",
    shortTitle: "Hölzel-Haus",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Künstlerhaus und Museum zu Adolf Hölzel in Stuttgart-Degerloch.",
    address: {
      street: "Ahornstraße 22",
      zip: "70597",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ahornstra%C3%9Fe%2022%2C%2070597%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-hoelzel-haus",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/hoelzel.jpg" },
  },

  {
    id: "museum-miniaturwelten",
    category: "MUSEUM_KULTUR",
    name: "Miniaturwelten Stuttgart",
    shortTitle: "Miniaturwelten",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Miniatur- und Modellwelten im Stuttgarter Hauptbahnhof.",
    address: {
      street: "Arnulf-Klett-Platz 1-3",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Arnulf-Klett-Platz%201-3%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-miniaturwelten-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/miniaturwelten.jpg" },
  },

  {
    id: "museum-junges-schloss",
    category: "MUSEUM_KULTUR",
    name: "Kindermuseum Junges Schloss",
    shortTitle: "Junges Schloss",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Interaktives Kindermuseum im Alten Schloss Stuttgart.",
    address: {
      street: "Schillerplatz 6",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schillerplatz%206%2C%2070173%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-junges-schloss-das-kindermuseum-in-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/junges-schloss.jpg" },
  },

  {
    id: "museum-weinbaumuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Weinbaumuseum Stuttgart",
    shortTitle: "Weinbaumuseum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Museum zur Weinbaugeschichte im Stuttgarter Stadtteil Uhlbach.",
    address: {
      street: "Uhlbacher Platz 4",
      zip: "70329",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Uhlbacher%20Platz%204%2C%2070329%20Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-weinbaumuseum-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/weinbaumuseum.jpg" },
  },

  {
    id: "museum-schauwerk-sindelfingen",
    category: "MUSEUM_KULTUR",
    name: "Schauwerk Sindelfingen",
    shortTitle: "Schauwerk",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Privatsammlung moderner Kunst im Schauwerk Sindelfingen.",
    address: {
      street: "Eschenbrünnlestraße 15",
      zip: "71065",
      city: "Sindelfingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Eschenbr%C3%BCnnlestra%C3%9Fe%2015%2C%2071065%20Sindelfingen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schauwerk-sindelfingen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/schauwerk.jpg" },
  },

  {
    id: "museum-villa-merkel",
    category: "MUSEUM_KULTUR",
    name: "Villa Merkel | Bahnwärterhaus - Galerien der Stadt Esslingen",
    shortTitle: "Villa Merkel",
    included: "Tageskarte",
    benefitValue: 0,
    description:
      "Galerien für zeitgenössische Kunst in Esslingen.",
    address: {
      street: "Pulverwiesen 25",
      zip: "73726",
      city: "Esslingen am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pulverwiesen%2025%2C%2073726%20Esslingen%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-villa-merkel",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/villa-merkel.jpg" },
  },

  {
    id: "museum-kunstgebaeude",
    category: "MUSEUM_KULTUR",
    name: "Kunstgebäude Stuttgart",
    shortTitle: "Kunstgebäude",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Ausstellungen im Kunstgebäude am Schlossplatz Stuttgart.",
    address: {
      street: "Schlossplatz 2",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schlossplatz%202%2C%2070173%20Stuttgart",
    regionDetailUrl:
      "https://www.erlebnisregion-stuttgart.de/a-kunstgebaeude-des-wuerttembergischen-kunstvereins-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/kunstgebaeude.jpg" },
  },

  {
    id: "museum-maerklineum",
    category: "MUSEUM_KULTUR",
    name: "Märklineum & Märklin Store Göppingen",
    shortTitle: "Märklineum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Museum und Erlebniswelt rund um Märklin in Göppingen.",
    address: {
      street: "Reuschstr. 6",
      zip: "73033",
      city: "Göppingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Reuschstr.%206%2C%2073033%20G%C3%B6ppingen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-maerklineum-goeppingen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/maerklineum.jpg" },
  },

  {
    id: "museum-literaturmuseum-limo",
    category: "MUSEUM_KULTUR",
    name: "Literaturmuseum der Moderne (LiMo) Marbach am Neckar",
    shortTitle: "Literaturmuseum LiMo",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Literaturmuseum der Moderne im Deutschen Literaturarchiv Marbach.",
    address: {
      street: "Schillerhöhe 8-10",
      zip: "71672",
      city: "Marbach am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schillerh%C3%B6he%208-10%2C%2071672%20Marbach%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-literaturmuseum-der-moderne-limo",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/limo.jpg" },
  },

  {
    id: "museum-schiller-nationalmuseum",
    category: "MUSEUM_KULTUR",
    name: "Schiller-Nationalmuseum in Marbach am Neckar",
    shortTitle: "Schiller-Nationalmuseum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Museum zu Leben und Werk von Friedrich Schiller.",
    address: {
      street: "Schillerhöhe 8-10",
      zip: "71672",
      city: "Marbach am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schillerh%C3%B6he%208-10%2C%2071672%20Marbach%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schiller-nationalmuseum",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/schiller-nationalmuseum.jpg" },
  },

  {
    id: "museum-tobias-mayer",
    category: "MUSEUM_KULTUR",
    name: "Tobias-Mayer Museum Marbach am Neckar",
    shortTitle: "Tobias-Mayer Museum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Museum zum Astronomen und Kartografen Tobias Mayer.",
    address: {
      street: "Torgasse 13",
      zip: "71672",
      city: "Marbach am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Torgasse%2013%2C%2071672%20Marbach%20am%20Neckar",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-tobias-mayer-museum",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/tobias-mayer.jpg" },
  },

  {
    id: "museum-hohenloher-freilandmuseum",
    category: "MUSEUM_KULTUR",
    name: "Hohenloher Freilandmuseum Schwäbisch Hall",
    shortTitle: "Hohenloher Freilandmuseum",
    included: "Eintritt frei",
    benefitValue: 0,
    description:
      "Freilichtmuseum mit historischen Gebäuden aus Hohenlohe.",
    address: {
      street: "Moorwiesenweg 1",
      zip: "74523",
      city: "Schwäbisch Hall",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Moorwiesenweg%201%2C%2074523%20Schw%C3%A4bisch%20Hall",
    regionDetailUrl:
      "https://www.erlebnisregion-stuttgart.de/a-hohenloher-freilandmuseum-schwaebisch-hall-wackershofen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten bitte vorab auf der Partnerseite prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/museum/hohenloher.jpg" },
  },
  // =========================================================
  // STADTERLEBNIS
  // =========================================================

  {
    id: "stadterlebnis-altstadtrundgang-esslingen",
    category: "STADTERLEBNIS",
    name: "Altstadtrundgang Esslingen am Neckar",
    shortTitle: "Altstadtrundgang Esslingen",
    included: "Ticket für eine Stadtführung",
    benefitValue: 10,
    description:
      "Geführter Rundgang durch die mittelalterliche Altstadt von Esslingen mit Fachwerkhäusern und historischen Plätzen.",
    address: {
      street: "Marktplatz",
      zip: "73728",
      city: "Esslingen am Neckar",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+73728+Esslingen+am+Neckar",
    websiteUrl: "https://www.esslingen-info.com/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-altstadtrundgang-esslingen-am-neckar",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Stadtführungen finden zu festen Terminen statt. Termine bitte vorab online prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/esslingen.jpg" },
  },

  {
    id: "stadterlebnis-citytour-stuttgart",
    category: "STADTERLEBNIS",
    name: "Citytour Stuttgart – Blaue Tour",
    shortTitle: "Citytour Stuttgart",
    included: "Tagesticket Blaue Tour",
    benefitValue: 24,
    description:
      "Hop-on-Hop-off-Bustour durch Stuttgart mit audiogeführten Informationen zu Sehenswürdigkeiten.",
    address: {
      street: "Königstraße (Einstieg)",
      zip: "70173",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=K%C3%B6nigstra%C3%9Fe+70173+Stuttgart",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-stuttgart-citytour",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Fahrzeiten und Abfahrtsintervalle sind saisonabhängig – bitte Fahrplan prüfen.",
      },
    ],
    seasonNote: "Ganzjährig, eingeschränkter Betrieb im Winter möglich.",
    image: { thumbUrl: "/images/placeholder/stadt/citytour.jpg" },
  },

  {
    id: "stadterlebnis-historische-stadtfuehrung-goeppingen",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Göppingen",
    shortTitle: "Stadtführung Göppingen",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Historischer Rundgang durch Göppingen mit Einblicken in Stadtgeschichte und Architektur.",
    address: {
      street: "Rathaus Göppingen",
      zip: "73033",
      city: "Göppingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rathaus+G%C3%B6ppingen+73033",
    websiteUrl: "https://www.erlebe-dein-goeppingen.de/stadtfuehrungen/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-historische-stadtfuehrung-goeppingen",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Führungen an ausgewählten Terminen – vorherige Anmeldung empfohlen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/goeppingen.jpg" },
  },

  {
    id: "stadterlebnis-historische-stadtfuehrung-kirchheim",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Kirchheim unter Teck",
    shortTitle: "Stadtführung Kirchheim",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Rundgang durch die historische Altstadt von Kirchheim unter Teck.",
    address: {
      street: "Max-Eyth-Straße 15 (Kirchheim-Info)",
      zip: "73230",
      city: "Kirchheim unter Teck",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Max-Eyth-Stra%C3%9Fe+15%2C+73230+Kirchheim+unter+Teck",
    websiteUrl: "https://www.kirchheim-teck.de/offene-fuehrungen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-kirchheim-unter-teck-stadtfuehrung",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note:
          "Stadtführungen finden zu festen Terminen statt – bitte Tourismus-Info prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/kirchheim.jpg" },
  },

  {
    id: "stadterlebnis-historische-stadtfuehrung-schwaebisch-gmuend",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Schwäbisch Gmünd",
    shortTitle: "Stadtführung Schwäbisch Gmünd",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Entdeckungstour durch eine der ältesten Stauferstädte mit reicher Geschichte.",
    address: {
      street: "Marktplatz",
      zip: "73525",
      city: "Schwäbisch Gmünd",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+73525+Schw%C3%A4bisch+Gm%C3%BCnd",
    websiteUrl: "https://www.schwaebisch-gmuend.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schwaebisch-gmuend",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Regelmäßige öffentliche Führungen, Termine variieren saisonal.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/gmuend.jpg" },
  },

  {
    id: "stadterlebnis-stadtfuehrung-schwaebisch-hall",
    category: "STADTERLEBNIS",
    name: "Öffentliche Stadtführung Schwäbisch Hall",
    shortTitle: "Stadtführung Schwäbisch Hall",
    included: "kostenlose Stadtführung",
    benefitValue: 0,
    description:
      "Öffentliche Stadtführung durch die Altstadt von Schwäbisch Hall.",
    address: {
      street: "Hafenmarkt 3",
      zip: "74523",
      city: "Schwäbisch Hall",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hafenmarkt%203%2C%2074523%20Schw%C3%A4bisch%20Hall",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-oeffentliche-stadtfuehrung-schwaebisch-hall",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Stadtführungen finden zu festen Terminen statt – bitte vorab prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/schwaebisch-hall.jpg" },
  },

  {
    id: "stadterlebnis-offene-stadtfuehrung-schorndorf",
    category: "STADTERLEBNIS",
    name: "Offene Stadtführung Schorndorf",
    shortTitle: "Stadtführung Schorndorf",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description: "Geführter Rundgang durch die Daimlerstadt Schorndorf.",
    address: {
      street: "Marktplatz",
      zip: "73614",
      city: "Schorndorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+73614+Schorndorf",
    websiteUrl: "https://www.schorndorf.de/willkommen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schorndorf-offene-stadtfuehrung",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Offene Führungen an ausgewählten Terminen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/schorndorf.jpg" },
  },

    {
    id: "stadterlebnis-historische-stadtfuehrung-nuertingen",
    category: "STADTERLEBNIS",
    name: "Öffentliche historische Stadtführung Nürtingen",
    shortTitle: "Stadtführung Nürtingen",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Historische Stadtführung durch Nürtingen mit Fokus auf Altstadt und Neckar.",
    address: {
      street: "Schillerplatz",
      zip: "72622",
      city: "Nürtingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schillerplatz+72622+N%C3%BCrtingen",
    websiteUrl: "https://www.nuertingen.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-historische-stadtfuehrung-nuertingen-der-vielseitige-klassiker",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Führungen finden regelmäßig, aber nicht täglich statt.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/nuertingen.jpg" },
  },

  {
    id: "stadterlebnis-historische-stadtfuehrung-bad-wildbad",
    category: "STADTERLEBNIS",
    name: "Öffentliche historische Stadtführung Bad Wildbad",
    shortTitle: "Stadtführung Bad Wildbad",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Historischer Rundgang durch den Kurort Bad Wildbad im Schwarzwald.",
    address: {
      street: "Kurplatz",
      zip: "75323",
      city: "Bad Wildbad",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kurplatz+75323+Bad+Wildbad",
    websiteUrl: "https://www.bad-wildbad.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-stadtfuehrung-bad-wildbad-1",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffentliche Führungen an ausgewählten Terminen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/badwildbad.jpg" },
  },

  {
    id: "stadterlebnis-stadtfuehrung-ludwigsburg",
    category: "STADTERLEBNIS",
    name: "Stadtführung Ludwigsburg – „Ludwigsburg auf einen Blick“",
    shortTitle: "Stadtführung Ludwigsburg",
    included: "Ticket für eine Stadtführung",
    benefitValue: 9,
    description:
      "Kompakte Einführung in die Geschichte der Barockstadt Ludwigsburg.",
    address: {
      street: "Marktplatz",
      zip: "71634",
      city: "Ludwigsburg",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+71634+Ludwigsburg",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-ludwigsburg-auf-einen-blick-stadtfuehrung-luwigsburg",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Regelmäßige Wochenend-Termine; Anmeldung empfohlen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/ludwigsburg.jpg" },
  },

  {
    id: "stadterlebnis-stadtfuehrung-murrhardt",
    category: "STADTERLEBNIS",
    name: "Stadtführung Murrhardt",
    shortTitle: "Stadtführung Murrhardt",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description: "Historischer Rundgang durch die Klosterstadt Murrhardt.",
    address: {
      street: "Marktplatz",
      zip: "71540",
      city: "Murrhardt",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+71540+Murrhardt",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-murrhardt-stadtfuehrung",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Termine variieren – bitte Tourismus-Info prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/murrhardt.jpg" },
  },

  {
    id: "stadterlebnis-stadtfuehrung-plochingen-hundertwasser",
    category: "STADTERLEBNIS",
    name: "Stadtführung Plochingen – Hundertwasser",
    shortTitle: "Stadtführung Plochingen",
    included: "Ticket für eine Stadtführung",
    benefitValue: 6,
    description:
      "Führung rund um das Hundertwasserhaus und die Altstadt von Plochingen.",
    address: {
      street: "Marktplatz",
      zip: "73207",
      city: "Plochingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+73207+Plochingen",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-plochingen-offene-stadtfuehrung",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Öffentliche Führungen an ausgewählten Terminen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/plochingen.jpg" },
  },

  {
    id: "stadterlebnis-stadtfuehrung-sindelfingen",
    category: "STADTERLEBNIS",
    name: "Stadtführung Sindelfingen",
    shortTitle: "Stadtführung Sindelfingen",
    included: "Ticket für eine Stadtführung",
    benefitValue: 0,
    description:
      "Stadtführung durch die historische Altstadt und das Fachwerkviertel.",
    address: {
      street: "Marktplatz",
      zip: "71063",
      city: "Sindelfingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Marktplatz+71063+Sindelfingen",
    websiteUrl: "https://www.sindelfingen.de/start.html",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-sindelfingen-stadtfuehrung",
    openingHours: [
      {
        days: ["Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Führungen nur an festen Terminen – bitte vorher prüfen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/stadt/sindelfingen.jpg" },
  },

  // =========================================================
  // AUSFLUGSZIELE
  // =========================================================

  {
    id: "ausflug-swr-fernsehturm",
    category: "AUSFLUGSZIELE",
    name: "SWR Fernsehturm Stuttgart",
    shortTitle: "Fernsehturm Stuttgart",
    included: "Tageskarte",
    benefitValue: 12.5,
    description:
      "Erster Fernsehturm der Welt aus Stahlbeton mit Aussichtsplattform und Café.",
    address: {
      street: "Jahnstraße 120",
      zip: "70597",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jahnstra%C3%9Fe+120%2C+70597+Stuttgart",
    websiteUrl: "https://www.fernsehturm-stuttgart.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-fernsehturm-stuttgart",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "10:00",
        to: "22:00",
      },
    ],
    closureNote:
      "Letzte Auffahrt 30 Minuten vor Schließung. Wetter- oder veranstaltungsbedingte Einschränkungen möglich.",
    image: { thumbUrl: "/images/placeholder/ausflug/fernsehturm.jpg" },
  },

  {
    id: "ausflug-fellbacher-weingaertner",
    category: "AUSFLUGSZIELE",
    name: "Fellbacher Weingärtner eG",
    shortTitle: "Fellbacher Weingärtner",
    included: "Teilnahme Kellerblicke",
    benefitValue: 12,
    description:
      "Einblick in den Weinkeller der Fellbacher Weingärtner mit Führung.",
    address: {
      street: "Kappelbergstraße 48",
      zip: "70734",
      city: "Fellbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kappelbergstra%C3%9Fe+48%2C+70734+Fellbach",
    websiteUrl: "http://www.fellbacher-weine.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-fellbacher-weingaertner-eg",
    openingHours: [
      {
        days: ["—"],
        from: "—",
        to: "—",
        note: "Kellerblicke nur zu festgelegten Terminen – Anmeldung erforderlich.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/ausflug/weingaertner.jpg" },
  },

  {
    id: "ausflug-kellerblicke",
    category: "AUSFLUGSZIELE",
    name: "Kellerblicke - Kellerführung mit 3er Weinprobe",
    shortTitle: "Kellerblicke",
    included: "kostenfreie Kellerführung",
    benefitValue: 0,
    description:
      "Kellerführung mit Weinprobe bei den Fellbacher Weingärtnern.",
    address: {
      street: "Kappelbergstraße 48",
      zip: "70734",
      city: "Fellbach",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kappelbergstra%C3%9Fe%2048%2C%2070734%20Fellbach",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-kellerblicke-kellerfuehrung-mit-3er-weinprobe",
    openingHours: [
      {
        days: ["—"],
        from: "—",
        to: "—",
        note: "Kellerblicke nur zu festgelegten Terminen – Anmeldung erforderlich.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/ausflug/kellerblicke.jpg" },
  },

  {
    id: "ausflug-forscherfabrik-schorndorf",
    category: "AUSFLUGSZIELE",
    name: "Forscherfabrik Schorndorf",
    shortTitle: "Forscherfabrik",
    included: "3-Stunden-Ticket Erwachsene",
    benefitValue: 5,
    description:
      "Mitmach-Ausstellungen zu Technik und Naturwissenschaften – ideal für Familien.",
    address: {
      street: "Hammerschlag 8",
      zip: "73614",
      city: "Schorndorf",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hammerschlag+8%2C+73614+Schorndorf",
    websiteUrl: "https://www.forscherfabrik-schorndorf.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-forscherfabrik-schorndorf-die-science-erlebniswelt-fuer-kinder",
    openingHours: [
      { days: ["Mi", "Do", "Fr"], from: "14:00", to: "18:00" },
      { days: ["Sa", "So", "Feiertag"], from: "10:00", to: "18:00" },
    ],
    closureNote: "Montag und Dienstag geschlossen.",
    image: { thumbUrl: "/images/placeholder/ausflug/forscherfabrik.jpg" },
  },

  {
    id: "ausflug-grabkapelle-wuerttemberg",
    category: "AUSFLUGSZIELE",
    name: "Grabkapelle auf dem Württemberg",
    shortTitle: "Grabkapelle Württemberg",
    included: "Eintritt frei",
    benefitValue: 4,
    description: "Klassizistisches Mausoleum mit Blick über das Neckartal.",
    address: {
      street: "Württembergstraße 340",
      zip: "70327",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=W%C3%BCrttembergstra%C3%9Fe+340%2C+70327+Stuttgart",
    websiteUrl: "https://www.grabkapelle-rotenberg.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-grabkapelle-auf-dem-wuerttemberg",
    openingHours: [
      { days: ["Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "10:00", to: "17:00" },
    ],
    seasonNote: "Saisonbetrieb (April–Oktober).",
    closureNote: "Montag und Dienstag geschlossen.",
    image: { thumbUrl: "/images/placeholder/ausflug/grabkapelle.jpg" },
  },

  {
    id: "ausflug-mercedes-benz-kundencenter-sindelfingen",
    category: "AUSFLUGSZIELE",
    name: "Mercedes-Benz Kundencenter Sindelfingen",
    shortTitle: "MB Kundencenter",
    included: "Werkbesichtigung Kompakt Plus oder Intensiv",
    benefitValue: 0,
    description:
      "Geführte Werksbesichtigung durch eines der größten Automobilwerke weltweit.",
    address: {
      street: "Käsbrünnlestraße 20",
      zip: "71063",
      city: "Sindelfingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=K%C3%A4sbr%C3%BCnnlestra%C3%9Fe+20%2C+71063+Sindelfingen",
    websiteUrl: "https://mbkundencenter.com/#/goto/sindelfingen/besucher",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-mercedes-benz-kundencenter-sindelfingen",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr"],
        from: "—",
        to: "—",
        note: "Werksführungen nur mit vorheriger Buchung.",
      },
    ],
    closureNote:
      "Keine Führungen an Wochenenden, Feiertagen sowie während Werksferien.",
    image: { thumbUrl: "/images/placeholder/ausflug/mb-werk.jpg" },
  },

  {
    id: "ausflug-outletcity-metzingen",
    category: "AUSFLUGSZIELE",
    name: "OUTLETCITY METZINGEN",
    shortTitle: "Outletcity Metzingen",
    included: "VIP-Shopping Day",
    benefitValue: 0,
    description: "International bekanntes Outlet mit über 100 Marken.",
    address: {
      street: "Maienwaldstraße 2",
      zip: "72555",
      city: "Metzingen",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Maienwaldstra%C3%9Fe+2%2C+72555+Metzingen",
    websiteUrl: "https://www.outletcity.com/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-outletcity-metzingen",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa"], from: "10:00", to: "20:00" },
      {
        days: ["So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Sonderöffnungen an verkaufsoffenen Sonntagen.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/ausflug/outletcity.jpg" },
  },

  {
    id: "ausflug-residenzschloss-ludwigsburg",
    category: "AUSFLUGSZIELE",
    name: "Residenzschloss Ludwigsburg",
    shortTitle: "Residenzschloss",
    included: "Standard-Schlossführung",
    benefitValue: 10,
    description: "Eines der größten erhaltenen Barockschlösser Europas.",
    address: {
      street: "Schlossstraße 30",
      zip: "71634",
      city: "Ludwigsburg",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Schlossstra%C3%9Fe+30%2C+71634+Ludwigsburg",
    websiteUrl: "http://www.schloss-ludwigsburg.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-residenzschloss-ludwigsburg",
    openingHours: [
      {
        days: ["—"],
        from: "—",
        to: "—",
        note: "Führungen zu festen Zeiten – saisonabhängig.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/ausflug/ludwigsburg.jpg" },
  },

  {
    id: "ausflug-ritter-sport-waldenbuch",
    category: "AUSFLUGSZIELE",
    name: "Ritter Sport Schokoshop Waldenbuch",
    shortTitle: "Ritter Sport",
    included: "5 € Vergütung beim Einkauf (Mindestkaufwert 25 €)",
    benefitValue: 5,
    description: "Markenshop mit Schokoladenvielfalt und Erlebnisbereich.",
    address: {
      street: "Alfred-Ritter-Straße 27",
      zip: "71111",
      city: "Waldenbuch",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Alfred-Ritter-Stra%C3%9Fe+27%2C+71111+Waldenbuch",
    websiteUrl: "http://www.ritter-sport.com/de/erleben",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-ritter-sport-schoko-shop",
    openingHours: [
      { days: ["Mo", "Di", "Mi", "Do", "Fr"], from: "10:00", to: "18:00" },
      { days: ["Sa"], from: "10:00", to: "17:00" },
    ],
    closureNote: "Sonntag geschlossen.",
    image: { thumbUrl: "/images/placeholder/ausflug/ritter.jpg" },
  },

  {
    id: "ausflug-schloss-solitude",
    category: "AUSFLUGSZIELE",
    name: "Schloss Solitude",
    shortTitle: "Schloss Solitude",
    included: "Eintritt Standardführung",
    benefitValue: 7,
    description:
      "Rokokoschloss mit Panorama-Ausblick westlich von Stuttgart.",
    address: {
      street: "Solitude 1",
      zip: "70197",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Solitude+1%2C+70197+Stuttgart",
    websiteUrl: "http://www.schloss-solitude.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-schloss-solitude",
    openingHours: [
      { days: ["Mi", "Do", "Fr", "Sa", "So", "Feiertag"], from: "10:00", to: "17:00" },
    ],
    seasonNote: "Saisonbetrieb April–Oktober.",
    closureNote: "Montag und Dienstag geschlossen.",
    image: { thumbUrl: "/images/placeholder/ausflug/solitude.jpg" },
  },

  {
    id: "ausflug-wildparadies-tripsdrill",
    category: "AUSFLUGSZIELE",
    name: "Wildparadies Tripsdrill",
    shortTitle: "Wildparadies Tripsdrill",
    included: "Wildparadies-Pass",
    benefitValue: 14.5,
    description:
      "Tierpark mit heimischen Wildtieren, Greifvogelshows und Naturerlebnis.",
    address: {
      street: "Treffentrill",
      zip: "74389",
      city: "Cleebronn",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Treffentrill%2C+74389+Cleebronn",
    websiteUrl: "http://www.tripsdrill.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-wildparadies-tripsdrill",
    openingHours: [
      {
        days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So", "Feiertag"],
        from: "—",
        to: "—",
        note: "Ganzjährig, Öffnungszeiten saisonabhängig.",
      },
    ],
    image: { thumbUrl: "/images/placeholder/ausflug/tripsdrill.jpg" },
  },

  {
    id: "ausflug-wilhelma",
    category: "AUSFLUGSZIELE",
    name: "Wilhelma Stuttgart",
    shortTitle: "Wilhelma",
    included: "Eintritt frei",
    benefitValue: 23,
    description:
      "Zoologisch-botanischer Garten mit historischer Architektur.",
    address: {
      street: "Wilhelma 13",
      zip: "70376",
      city: "Stuttgart",
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Wilhelma+13%2C+70376+Stuttgart",
    websiteUrl: "http://www.wilhelma.de/",
    regionDetailUrl: "https://www.erlebnisregion-stuttgart.de/a-wilhelma-zoo-stuttgart",
    openingHours: [
      {
        days: ["—"],
        from: "—",
        to: "—",
        note: "Öffnungszeiten variieren je nach Jahreszeit.",
      },
    ],
    seasonNote: "Ganzjährig geöffnet.",
    image: { thumbUrl: "/images/placeholder/ausflug/wilhelma.jpg" },
  },
];

export type CategoryKey = AttractionCategory;

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  WASSERSPASS: "Wasserspaß",
  AKTIV_UNTERWEGS: "Aktiv unterwegs",
  MUSEUM_KULTUR: "Museum & Kultur",
  STADTERLEBNIS: "Stadterlebnis",
  AUSFLUGSZIELE: "Ausflugsziele",
};
