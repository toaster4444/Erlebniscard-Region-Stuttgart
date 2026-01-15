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
  included: string; // Leistung laut Flyer
  shortDescription?: string; // optional: 1 Satz
  // [Nicht verifiziert] – zum späteren Befüllen
  address?: string; // "Straße, PLZ Ort"
  mapsQuery?: string; // Suchbegriff für Google Maps
  openHours?: string; // Öffnungszeiten-Text
  temporarilyClosed?: string; // z.B. "geschlossen: Jan–Mai; geöffnet ab Juni"
  // Bild später
  imageUrl?: string; // z.B. "/thumbs/leuze.jpg"
};

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  MUSEUM_KULTUR: "Museen & Kultur",
  AKTIV_UNTERWEGS: "Aktiv unterwegs",
  STADTERLEBNIS: "Stadterlebnis",
  WASSERSPASS: "Wasserspaß",
  AUSFLUGSZIELE: "Ausflugsziele"
};

export const ATTRACTIONS: Attraction[] = [
  // --- MUSEUM & KULTUR (Flyer) ---
  {
    id: "carl-schweizer-museum-murrhardt",
    category: "MUSEUM_KULTUR",
    name: "Carl-Schweizer-Museum, Murrhardt",
    included: "Freier Eintritt, Führung durch das Museum",
    mapsQuery: "Carl-Schweizer-Museum Murrhardt",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "deutsches-landwirtschaftsmuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Deutsches Landwirtschaftsmuseum, Stuttgart",
    included: "Tageskarte",
    mapsQuery: "Deutsches Landwirtschaftsmuseum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "faszination-psyche-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Faszination Psyche, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Faszination Psyche Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "fellbacher-weingaertner-kellerblicke",
    category: "MUSEUM_KULTUR",
    name: "Fellbacher Weingärtner, Kellerblicke",
    included: "Kostenfreie Kellerführung",
    mapsQuery: "Fellbacher Weingärtner Kellerblicke",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "freilichtmuseum-beuren",
    category: "MUSEUM_KULTUR",
    name: "Freilichtmuseum Beuren",
    included: "Tageskarte",
    mapsQuery: "Freilichtmuseum Beuren",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "fritz-genkinger-kunsthaus-marbach",
    category: "MUSEUM_KULTUR",
    name: "Fritz Genkinger Kunsthaus, Marbach am Neckar",
    included: "Eintritt frei",
    mapsQuery: "Fritz Genkinger Kunsthaus Marbach am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "galerie-stihl-waiblingen",
    category: "MUSEUM_KULTUR",
    name: "Galerie Stihl Waiblingen",
    included: "Eintritt frei",
    mapsQuery: "Galerie Stihl Waiblingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "haus-der-geschichte-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Haus der Geschichte, Stuttgart",
    included: "Kombi-Tageskarte, Dauerausstellung, Sonderausstellung",
    mapsQuery: "Haus der Geschichte Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "hoelzel-haus-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Hölzel-Haus, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Hölzel-Haus Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "hohenloher-freilandmuseum-wackershofen",
    category: "MUSEUM_KULTUR",
    name: "Hohenloher Freilandmuseum Wackershofen, Schwäbisch Hall",
    included: "Tageskarte",
    mapsQuery: "Hohenloher Freilandmuseum Wackershofen",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "kindermuseum-junges-schloss-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Kindermuseum Junges Schloss, Stuttgart",
    included: "Tageskarte Erwachsene",
    mapsQuery: "Junges Schloss Stuttgart Kindermuseum",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "kunstmuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Kunstmuseum Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Kunstmuseum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "landesmuseum-wuerttemberg-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Landesmuseum Württemberg, Stuttgart",
    included: "Tageskarte",
    mapsQuery: "Landesmuseum Württemberg Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "linden-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Linden-Museum, Stuttgart",
    included: "Sonder- und Dauerausstellung",
    mapsQuery: "Linden-Museum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "literaturmuseum-der-moderne-marbach",
    category: "MUSEUM_KULTUR",
    name: "Literaturmuseum der Moderne, Marbach am Neckar",
    included: "Tageskarte/Kombiticket Literaturmuseum der Moderne & Schiller-Nationalmuseum",
    mapsQuery: "Literaturmuseum der Moderne Marbach am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "maerklineum-goeppingen",
    category: "MUSEUM_KULTUR",
    name: "Märklineum, Göppingen",
    included: "Tageskarte",
    mapsQuery: "Märklineum Göppingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "mercedes-benz-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Mercedes-Benz Museum, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Mercedes-Benz Museum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "miniaturwelten-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Miniaturwelten Stuttgart",
    included: "Tageskarte",
    mapsQuery: "Miniaturwelten Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "museum-der-alltagskultur-schloss-waldenbuch",
    category: "MUSEUM_KULTUR",
    name: "Museum der Alltagskultur – Schloss Waldenbuch",
    included: "Tageskarte",
    mapsQuery: "Museum der Alltagskultur Schloss Waldenbuch",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "museum-im-kleihues-bau-kornwestheim",
    category: "MUSEUM_KULTUR",
    name: "Museum im Kleihues-Bau, Kornwestheim",
    included: "Eintritt frei",
    mapsQuery: "Museum im Kleihues-Bau Kornwestheim",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "porsche-museum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Porsche Museum, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Porsche Museum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "schauwerk-sindelfingen",
    category: "MUSEUM_KULTUR",
    name: "Schauwerk Sindelfingen",
    included: "Tageskarte",
    mapsQuery: "Schauwerk Sindelfingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "schiller-nationalmuseum-marbach",
    category: "MUSEUM_KULTUR",
    name: "Schiller-Nationalmuseum, Marbach am Neckar",
    included: "Tageskarte/Kombiticket Schiller-Nationalmuseum & Literaturmuseum der Moderne",
    mapsQuery: "Schiller-Nationalmuseum Marbach am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "schillers-geburtshaus-marbach",
    category: "MUSEUM_KULTUR",
    name: "Schillers Geburtshaus, Marbach am Neckar",
    included: "Eintritt frei",
    mapsQuery: "Schillers Geburtshaus Marbach am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "naturkundemuseum-loewentor-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Staatliches Museum für Naturkunde, Museum am Löwentor, Stuttgart",
    included: "Kombiticket Museum Löwentor & Schloss Rosenstein",
    mapsQuery: "Naturkundemuseum am Löwentor Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "naturkundemuseum-schloss-rosenstein-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Staatliches Museum für Naturkunde, Schloss Rosenstein, Stuttgart",
    included: "Kombiticket Museum Löwentor & Schloss Rosenstein",
    mapsQuery: "Naturkundemuseum Schloss Rosenstein Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "staatsgalerie-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Staatsgalerie Stuttgart",
    included: "Tageskarte",
    mapsQuery: "Staatsgalerie Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },

  // --- (weiterer Block im Flyer) ---
  {
    id: "stadtpalais-museum-fuer-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "StadtPalais – Museum für Stuttgart",
    included: "Freier Eintritt in die Sonderausstellung des StadtPalais",
    mapsQuery: "StadtPalais Museum für Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "stihl-markenwelt-waiblingen",
    category: "MUSEUM_KULTUR",
    name: "STIHL Markenwelt, Waiblingen",
    included: "Eintritt frei",
    mapsQuery: "STIHL Markenwelt Waiblingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "tobias-mayer-museum-marbach",
    category: "MUSEUM_KULTUR",
    name: "Tobias-Mayer-Museum, Marbach am Neckar",
    included: "Tageskarte",
    mapsQuery: "Tobias-Mayer-Museum Marbach am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "villa-merkel-esslingen",
    category: "MUSEUM_KULTUR",
    name: "Villa Merkel, Esslingen am Neckar",
    included: "Tageskarte",
    mapsQuery: "Villa Merkel Esslingen am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "weinbaumuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Weinbaumuseum, Stuttgart",
    included: "Freier Eintritt, 0,1l Glas Wein/alkoholfreies Getränk",
    mapsQuery: "Weinbaumuseum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "weissenhofmuseum-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Weissenhofmuseum, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Weissenhofmuseum Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "wuerttembergischer-kunstverein-stuttgart",
    category: "MUSEUM_KULTUR",
    name: "Württembergischer Kunstverein, Stuttgart",
    included: "Kostenfreier Tageseintritt in das Kunstgebäude des Württembergischen Kunstvereins Stuttgart",
    mapsQuery: "Württembergischer Kunstverein Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen",
    address: "[Nicht verifiziert] Bitte ergänzen"
  },

  // --- AKTIV UNTERWEGS (Flyer) ---
  {
    id: "adventure-golf-vaihingen-enz",
    category: "AKTIV_UNTERWEGS",
    name: "Adventure Golf, Vaihingen an der Enz",
    included: "Eintritt frei",
    mapsQuery: "Adventure Golf Vaihingen an der Enz",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "citygolf-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "CITYGOLF Stuttgart",
    included: "Tagesgreenfee",
    mapsQuery: "CITYGOLF Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "eisstadion-polarion-bad-liebenzell",
    category: "AKTIV_UNTERWEGS",
    name: "Eisstadion Polarion, Bad Liebenzell",
    included: "Tageskarte",
    mapsQuery: "Eisstadion Polarion Bad Liebenzell",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "entdeckerwelt-bad-urach",
    category: "AKTIV_UNTERWEGS",
    name: "Entdeckerwelt Bad Urach",
    included: "Eintritt frei (inkl. Tablet-Ausleihe für Erlebnistouren – laut Flyer-Textzeile)",
    mapsQuery: "Entdeckerwelt Bad Urach",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "golfkultur-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "GolfKultur Stuttgart",
    included: "Kostenfreies Rangepaket inkl. Leihschläger; Tages-Rangefee inkl. Nutzung von Little Augusta sowie 70 Bälle (2 Ball-Ladungen)",
    mapsQuery: "GolfKultur Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "pause-and-play-escaperooms-stuttgart",
    category: "AKTIV_UNTERWEGS",
    name: "pause & play EscapeRooms, Stuttgart",
    included: "20% Rabatt",
    mapsQuery: "pause & play EscapeRooms Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "skypark-epia-kletterwald-schwaebisch-gmuend",
    category: "AKTIV_UNTERWEGS",
    name: "SKYPARK – epia Kletterwald, Schwäbisch Gmünd",
    included: "Tageskarte",
    mapsQuery: "SKYPARK epia Kletterwald Schwäbisch Gmünd",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "sprungbude-bad-cannstatt",
    category: "AKTIV_UNTERWEGS",
    name: "Sprungbude Bad Cannstatt",
    included: "60min Sprungzeit",
    mapsQuery: "Sprungbude Bad Cannstatt",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "sprungbude-filderstadt",
    category: "AKTIV_UNTERWEGS",
    name: "Sprungbude Filderstadt",
    included: "60min Sprungzeit",
    mapsQuery: "Sprungbude Filderstadt",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },

  // --- STADTERLEBNIS (Flyer) ---
  {
    id: "altstadtrundgang-esslingen",
    category: "STADTERLEBNIS",
    name: "Altstadtrundgang Esslingen am Neckar",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Altstadtrundgang Esslingen am Neckar",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "citytour-stuttgart-blaue-tour",
    category: "STADTERLEBNIS",
    name: "Citytour Stuttgart",
    included: "Tagesticket Blaue Tour",
    mapsQuery: "Citytour Stuttgart Blaue Tour",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "historische-stadtfuehrung-goeppingen",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Göppingen",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Göppingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "historische-stadtfuehrung-kirchheim-unter-teck",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Kirchheim unter Teck",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Kirchheim unter Teck",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "historische-stadtfuehrung-schwaebisch-gmuend",
    category: "STADTERLEBNIS",
    name: "Historische Stadtführung Schwäbisch Gmünd",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Schwäbisch Gmünd",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "offene-stadtfuehrung-schorndorf",
    category: "STADTERLEBNIS",
    name: "Offene Stadtführung Schorndorf",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Schorndorf",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "oeffentliche-historische-stadtfuehrung-nuertingen",
    category: "STADTERLEBNIS",
    name: "Öffentliche historische Stadtführung Nürtingen",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Nürtingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "oeffentliche-historische-stadtfuehrung-bad-wildbad",
    category: "STADTERLEBNIS",
    name: "Öffentliche historische Stadtführung Bad Wildbad",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Bad Wildbad",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "oeffentliche-stadtfuehrung-schwaebisch-hall",
    category: "STADTERLEBNIS",
    name: "Öffentliche Stadtführung Schwäbisch Hall",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Schwäbisch Hall",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "stadtfuehrung-ludwigsburg-auf-einen-blick",
    category: "STADTERLEBNIS",
    name: "Stadtführung in Ludwigsburg – „Ludwigsburg auf einen Blick“",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Ludwigsburg auf einen Blick",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "stadtfuehrung-murrhardt",
    category: "STADTERLEBNIS",
    name: "Stadtführung Murrhardt",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Murrhardt",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "stadtfuehrung-plochingen-hundertwasser",
    category: "STADTERLEBNIS",
    name: "Stadtführung Plochingen – „Hundertwasser“",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Plochingen Hundertwasser",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "stadtfuehrung-sindelfingen",
    category: "STADTERLEBNIS",
    name: "Stadtführung Sindelfingen",
    included: "Ticket für eine Stadtführung",
    mapsQuery: "Stadtführung Sindelfingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },

  // --- WASSERSPASS (Flyer) ---
  {
    id: "das-leuze-stuttgart",
    category: "WASSERSPASS",
    name: "DAS LEUZE, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad",
    mapsQuery: "DAS LEUZE Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "f3-das-wohlfuehlbad-fellbach",
    category: "WASSERSPASS",
    name: "F3 Das Wohlfühlbad, Fellbach",
    included:
      "Freier Eintritt ins Familienbad (exkl. Rutschen und Saunas); auch an Wochenenden/Ferien/Feiertagen; Rutschen zubuchbar an der Kasse; Saunas nicht zubuchbar",
    mapsQuery: "F3 Das Wohlfühlbad Fellbach",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "hohenfreibad-bad-urach",
    category: "WASSERSPASS",
    name: "Hohenfreibad Bad Urach",
    included: "Tageskarte",
    mapsQuery: "Hohenfreibad Bad Urach",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "mineralbad-berg-stuttgart",
    category: "WASSERSPASS",
    name: "Mineralbad Berg, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad; Sauna kann gegen Aufzahlung zugebucht werden",
    mapsQuery: "Mineralbad Berg Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "mineralfreibad-gaildorf",
    category: "WASSERSPASS",
    name: "Mineralfreibad Gaildorf",
    included: "Tageskarte",
    mapsQuery: "Mineralfreibad Gaildorf",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "mineraltherme-boeblingen",
    category: "WASSERSPASS",
    name: "Mineraltherme Böblingen",
    included:
      "Freier Eintritt im Thermalbad und Classic-Sauna mit 3 Std. Badezeit (weitere Sauna-Optionen ggf. gegen Aufzahlung – bitte prüfen)",
    mapsQuery: "Mineraltherme Böblingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "oskar-schwenkbad-schwaebisch-gmuend",
    category: "WASSERSPASS",
    name: "Oskar Schwenkbad Schwäbisch Gmünd",
    included: "Kostenloser Eintritt und Sauna",
    mapsQuery: "Oskar Schwenkbad Schwäbisch Gmünd",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "panorama-therme-beuren",
    category: "WASSERSPASS",
    name: "Panorama Therme Beuren",
    included: "2,5h-Ticket nur für das Schwimmbad",
    mapsQuery: "Panorama Therme Beuren",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "paracelsus-therme-bad-liebenzell",
    category: "WASSERSPASS",
    name: "Paracelsus-Therme Bad Liebenzell",
    included: "Tageskarte (Therme & Sauna – bitte Details prüfen)",
    mapsQuery: "Paracelsus-Therme Bad Liebenzell",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "solebad-cannstatt-stuttgart",
    category: "WASSERSPASS",
    name: "SoleBad Cannstatt, Stuttgart",
    included: "2h-Ticket nur fürs Schwimmbad; Sauna kann gegen Aufzahlung zugebucht werden",
    mapsQuery: "SoleBad Cannstatt Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "vinzenz-therme-bad-ditzenbach",
    category: "WASSERSPASS",
    name: "Vinzenz Therme, Bad Ditzenbach",
    included: "Tageskarte für eine Saunanutzung",
    mapsQuery: "Vinzenz Therme Bad Ditzenbach",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },

  // --- AUSFLUGSZIELE (Flyer) ---
  {
    id: "swr-fernsehturm-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "SWR Fernsehturm Stuttgart",
    included: "Tageskarte",
    mapsQuery: "SWR Fernsehturm Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "fellbacher-weingaertner-eg-kellerblicke",
    category: "AUSFLUGSZIELE",
    name: "Fellbacher Weingärtner eG",
    included: "Teilnahme Kellerblicke",
    mapsQuery: "Fellbacher Weingärtner eG",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "forscherfabrik-schorndorf",
    category: "AUSFLUGSZIELE",
    name: "Forscherfabrik, Schorndorf",
    included: "3h-Ticket Erwachsene",
    mapsQuery: "Forscherfabrik Schorndorf",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "grabkapelle-auf-dem-wuerttemberg-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "Grabkapelle auf dem Württemberg, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Grabkapelle auf dem Württemberg Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "mercedes-benz-kundencenter-sindelfingen",
    category: "AUSFLUGSZIELE",
    name: "Mercedes-Benz Kundencenter Sindelfingen",
    included: "Werkbesichtigung Kompakt Plus oder Intensiv",
    mapsQuery: "Mercedes-Benz Kundencenter Sindelfingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "outletcity-metzingen-vip-shopping-day",
    category: "AUSFLUGSZIELE",
    name: "OUTLET CITY METZINGEN",
    included: "VIP-Shopping Day",
    mapsQuery: "Outletcity Metzingen",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "residenzschloss-ludwigsburg",
    category: "AUSFLUGSZIELE",
    name: "Residenzschloss Ludwigsburg",
    included: "Standard-Schlossführung",
    mapsQuery: "Residenzschloss Ludwigsburg",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "ritter-sport-schokoshop-waldenbuch",
    category: "AUSFLUGSZIELE",
    name: "Ritter Sport Schokoshop Waldenbuch",
    included: "5 € Vergütung beim Einkauf (Mindestkaufwert 25 €)",
    mapsQuery: "Ritter Sport Schokoshop Waldenbuch",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "schloss-solitude-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "Schloss Solitude, Stuttgart",
    included: "Eintritt Standardführung",
    mapsQuery: "Schloss Solitude Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "wildparadies-tripsdrill-cleebronn",
    category: "AUSFLUGSZIELE",
    name: "Wildparadies Tripsdrill, Cleebronn",
    included: "Wildparadies-Pass",
    mapsQuery: "Wildparadies Tripsdrill Cleebronn",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  },
  {
    id: "wilhelma-stuttgart",
    category: "AUSFLUGSZIELE",
    name: "Wilhelma, Stuttgart",
    included: "Eintritt frei",
    mapsQuery: "Wilhelma Stuttgart",
    openHours: "[Nicht verifiziert] Bitte ergänzen"
  }
];
