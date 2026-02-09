// Globale Variablen
let currentStep = 0;
let selectedBildungsstand = '';
let selectedZiel = '';

// Bildungswege Datenbank
const bildungswegeData = {
    kein: {
        deutsch: [
            {
                name: "VABO - Vorqualifizierungsjahr Arbeit/Beruf",
                description: "Für junge Menschen ohne Deutschkenntnisse, die die deutsche Sprache erlernen möchten.",
                dauer: "Mindestens 1 Schuljahr",
                voraussetzungen: "Berufsschulpflichtig (u18), nicht deutsche Herkunftssprache, geringe oder keine Deutschkenntnisse",
                ergebnis: "Spracherwerb bis B1, Vorbereitung für Ausbildung oder weitere Schularten (AVdual, Berufsfachschule)",
                finanzierung: "Schulbesuch kostenfrei",
                kontakt: {
                    name: "Meldestelle der beruflichen Schulen Stuttgart",
                    telefon: "0711 / 216-60277",
                    email: "meldestelle-bs@stuttgart.de"
                },
                besonderheiten: "Intensive Sprachförderung bis B1-Niveau, Vorbereitung auf Übergang ins berufliche Schulwesen, Berufsorientierung"
            },
            {
                name: "LISA - Qualifizierungsprojekt",
                description: "Für Spätaussiedler*innen und neu zugewanderte Menschen unter 27 Jahren zum Deutschlernen und Nachholen des Schulabschlusses.",
                dauer: "Ca. 3 Monate Vorkurs + 1 Schuljahr Hauptkurs",
                voraussetzungen: "Unter 27 Jahre, Spätaussiedler*in oder neu zugewandert",
                ergebnis: "Verbesserung der Deutschkenntnisse, Vorbereitung auf Anschlussperspektiven, optional Hauptschulabschluss über Schulfremdenprüfung",
                finanzierung: "Fahrtkostenerstattung",
                kontakt: {
                    name: "Henke Schulungen",
                    telefon: "0711 / 3000385",
                    email: "info@henke-schulungen.de"
                },
                besonderheiten: "Intensive Deutschförderung, Prüfungsvorbereitung, sozialpädagogische Begleitung"
            },
            {
                name: "Integrationskurs",
                description: "Bundesweites Angebot zum Erlernen der deutschen Sprache und deutscher Gesellschaft für Zugewanderte.",
                dauer: "6-10 Monate (600-1000 Unterrichtsstunden)",
                voraussetzungen: "Migrationshintergrund, Aufenthaltstitel oder EU-Bürger*in, Zuweisung durch Ausländerbehörde oder Jobcenter möglich",
                ergebnis: "Deutschkenntnisse bis B1, Orientierungskurs über deutsche Gesellschaft und Rechtsordnung",
                finanzierung: "Für Berechtigte kostenlos oder stark reduziert (2,29 € pro Unterrichtsstunde)",
                kontakt: {
                    name: "Volkshochschule Stuttgart oder andere Sprachträger",
                    telefon: "0711 / 1873-800",
                    email: "info@vhs-stuttgart.de",
                    web: "www.vhs-stuttgart.de"
                },
                besonderheiten: "Abschluss mit DTZ-Prüfung (Deutsch-Test für Zuwanderer)"
            }
        ],
        hauptschul: [
            {
                name: "AVdual - Ausbildungsvorbereitung dual",
                description: "Für junge Menschen ohne und mit Schulabschluss, die berufsschulpflichtig sind, keine Ausbildung beginnen und keine weiterführende Schule besuchen.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Berufsschulpflichtig (u18), kein Ausbildungsplatz",
                ergebnis: "Hauptschulabschluss möglich, Verbesserung bestehender Abschlüsse, Übergang in Ausbildung",
                finanzierung: "Schulbesuch kostenfrei",
                kontakt: {
                    name: "Meldestelle der beruflichen Schulen Stuttgart",
                    telefon: "0711 / 216-60277",
                    email: "meldestelle-bs@stuttgart.de"
                },
                besonderheiten: "Hoher Praktikumsanteil, sozialpädagogische Begleitung, zielgerichtete Vorbereitung auf Berufsfeld"
            },
            {
                name: "LISA - Qualifizierungsprojekt",
                description: "Für Spätaussiedler*innen und neu zugewanderte Menschen unter 27 Jahren zum Nachholen des deutschen Schulabschlusses.",
                dauer: "Ca. 3 Monate Vorkurs + 1 Schuljahr Hauptkurs",
                voraussetzungen: "Unter 27 Jahre, Spätaussiedler*in oder neu zugewandert",
                ergebnis: "Hauptschulabschluss über Schulfremdenprüfung möglich",
                finanzierung: "Fahrtkostenerstattung",
                kontakt: {
                    name: "Henke Schulungen",
                    telefon: "0711 / 3000385",
                    email: "info@henke-schulungen.de"
                },
                besonderheiten: "Intensive Deutschförderung, Prüfungsvorbereitung, sozialpädagogische Begleitung"
            },
            {
                name: "400+ Zukunft",
                description: "Für junge Menschen bis 27 Jahren ohne oder mit Schulabschluss, die höheren Bedarf an sozialpädagogischer Begleitung haben.",
                dauer: "In der Regel 12 Monate, Verlängerung um 6 Monate möglich",
                voraussetzungen: "Bis 27 Jahre, Wohnsitz Stuttgart, kein Ausbildungs-/Arbeitsplatz, keine anderen Fördermaßnahmen",
                ergebnis: "Berufliche Orientierung, persönliche Stabilisierung, Hauptschulabschluss über Schulfremdenprüfung möglich",
                finanzierung: "Ca. 538 Euro pro Monat + Fahrtkostenerstattung",
                kontakt: {
                    name: "JobConnections",
                    telefon: "0711 / 21688919",
                    email: "Info@JobConnections.de"
                },
                besonderheiten: "Intensive sozialpädagogische Begleitung, Teilzeit möglich"
            },
            {
                name: "Youssef",
                description: "Für schulpflichtige, männliche Jugendliche ab 15 Jahren mit sonderpädagogischem Bildungsanspruch im sozialen und emotionalen Bereich.",
                dauer: "In der Regel 1 Schuljahr, Verlängerung um 1 Jahr möglich",
                voraussetzungen: "Männlich, ab 15 Jahre, schulpflichtig, sonderpädagogischer Bildungsanspruch (festgestellt vom Staatlichen Schulamt)",
                ergebnis: "Hauptschulabschluss oder Förderschulabschluss, Förderung der Persönlichkeitsentwicklung",
                finanzierung: "Taschengeld bei guter Mitarbeit + Fahrtkostenerstattung",
                kontakt: {
                    name: "Caritasverband Stuttgart e.V.",
                    telefon: "0711 / 89244224",
                    email: "jap@caritas-stuttgart.de"
                },
                besonderheiten: "Handwerkliche Arbeiten, neue Lernwege, Aufnahme ganzjährig bei freien Kapazitäten"
            },
            {
                name: "Haus der Lebenschance",
                description: "Für Schulabbrecher*innen bzw. junge Menschen ohne Schulabschluss zwischen 17 und 25 Jahren, die motiviert sind.",
                dauer: "13 Monate (Vollzeit, 5 Tage/Woche), Beginn Ende Juni",
                voraussetzungen: "17-25 Jahre, Schulpflicht erfüllt, Eignung wird in Bewerbungsgespräch mit Test festgestellt",
                ergebnis: "Hauptschulabschluss über Schulfremdenprüfung, Ausbildungsreife, Förderung Alltagskompetenzen",
                finanzierung: "Bis zu 100 Euro im Monat bei regelmäßiger Teilnahme",
                kontakt: {
                    name: "Haus der Lebenschance",
                    telefon: "0711 / 62007157",
                    email: "info@hdl-stuttgart.de"
                },
                besonderheiten: "Unterricht in Kleingruppen, individuelle Unterstützung bei Lebensfragen"
            },
            {
                name: "BvB - Berufsvorbereitende Bildungsmaßnahme",
                description: "Für junge Menschen, die Schulpflicht erfüllt haben, noch keine Berufswahl getroffen und/oder keinen Ausbildungsplatz gefunden haben.",
                dauer: "In der Regel bis zu 12 Monate",
                voraussetzungen: "Schulpflicht erfüllt, keine Berufswahl oder kein Ausbildungsplatz",
                ergebnis: "Ausbildungs-, Berufs- und Berufswahlreife, Vorbereitung auf Externenprüfung Hauptschulabschluss möglich",
                finanzierung: "Berufsausbildungsbeihilfe (BAB) + Fahrtkostenerstattung",
                kontakt: {
                    name: "Agentur für Arbeit Stuttgart - Berufsberatung",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung, Eignungsanalyse, betriebliche Grundqualifizierung, Teilzeit möglich"
            },
            {
                name: "Schulfremdenprüfung Hauptschulabschluss",
                description: "Erwerb eines Schulabschlusses außerhalb eines schulischen Bildungsgangs.",
                dauer: "Individuell (abhängig von Vorbereitung)",
                voraussetzungen: "Wohnort in Baden-Württemberg, Schulbesuch führt nicht zum Abschluss, Prüfung noch nicht absolviert",
                ergebnis: "Hauptschulabschluss",
                finanzierung: "Vorbereitungskurse sind kostenpflichtig",
                kontakt: {
                    name: "Staatliches Schulamt Stuttgart",
                    telefon: "Siehe Website",
                    email: "Siehe Website"
                },
                besonderheiten: "Einmalige Wiederholung nach 1 Jahr möglich, Vorbereitung über VHS, Institut Dr. Rampitsch oder Fernunterricht"
            }
        ],
        orientierung: [
            {
                name: "AVdual - Ausbildungsvorbereitung dual",
                description: "Für junge Menschen ohne und mit Schulabschluss, die berufsschulpflichtig sind, keine Ausbildung beginnen und keine weiterführende Schule besuchen.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Berufsschulpflichtig (u18), kein Ausbildungsplatz",
                ergebnis: "Hauptschulabschluss möglich, Übergang in Ausbildung",
                finanzierung: "Schulbesuch kostenfrei",
                kontakt: {
                    name: "Meldestelle der beruflichen Schulen Stuttgart",
                    telefon: "0711 / 216-60277",
                    email: "meldestelle-bs@stuttgart.de"
                },
                besonderheiten: "Hoher Praktikumsanteil, sozialpädagogische Begleitung"
            },
            {
                name: "Freiwilligendienste im Inland",
                description: "Freiwilliges Soziales Jahr (FSJ), Freiwilliges Ökologisches Jahr (FÖJ) oder Bundesfreiwilligendienst (BFD).",
                dauer: "6-24 Monate, in der Regel 12 Monate",
                voraussetzungen: "Vollzeitschulpflicht erfüllt, 15-26 Jahre (BFD auch älter)",
                ergebnis: "Zertifikat oder qualifiziertes Zeugnis, ggf. Anerkennung als Praktikum",
                finanzierung: "Taschengeld, Kindergeld, oft Verpflegung/Unterkunft, Sozialversicherung beitragsfrei",
                kontakt: {
                    name: "Jugendagentur Stuttgart",
                    telefon: "0711 / 25518288",
                    email: "info@jugendagentur.net",
                    web: "www.jugendagentur.net"
                },
                besonderheiten: "Pädagogische Begleitung, Start ganzjährig möglich"
            },
            {
                name: "400+ Zukunft",
                description: "Für junge Menschen bis 27 Jahren ohne Schulabschluss mit höherem Bedarf an sozialpädagogischer Begleitung.",
                dauer: "12 Monate, Verlängerung um 6 Monate möglich",
                voraussetzungen: "Bis 27 Jahre, Wohnsitz Stuttgart",
                ergebnis: "Berufliche Orientierung und Qualifizierung",
                finanzierung: "Ca. 538 Euro pro Monat + Fahrtkostenerstattung",
                kontakt: {
                    name: "JobConnections",
                    telefon: "0711 / 21688919",
                    email: "Info@JobConnections.de"
                },
                besonderheiten: "Intensive sozialpädagogische Begleitung"
            },
            {
                name: "BvB - Berufsvorbereitende Bildungsmaßnahme",
                description: "Erwerb von Ausbildungs-, Berufs- und Berufswahlreife.",
                dauer: "Bis zu 12 Monate",
                voraussetzungen: "Schulpflicht erfüllt",
                ergebnis: "Ausbildungsreife, Berufsorientierung",
                finanzierung: "Berufsausbildungsbeihilfe (BAB) + Fahrtkostenerstattung",
                kontakt: {
                    name: "Agentur für Arbeit Stuttgart",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung, betriebliche Grundqualifizierung"
            },
            {
                name: "EQ - Einstiegsqualifizierung",
                description: "Betriebliches Langzeitpraktikum für ausbildungsreife junge Menschen ohne Ausbildungsplatz.",
                dauer: "4-12 Monate",
                voraussetzungen: "Schulpflicht erfüllt, als ausbildungsreif eingeschätzt, beruflich orientiert",
                ergebnis: "Praxiserfahrung, Übernahme in Ausbildung angestrebt, ggf. Anrechnung auf Ausbildung",
                finanzierung: "Praktikumsvergütung + Zuschuss zur Sozialversicherung + Fahrtkostenerstattung",
                kontakt: {
                    name: "Agentur für Arbeit Stuttgart / Jobcenter",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Berufsschulpflichtige besuchen Berufsschule, Teilzeit möglich"
            }
        ],
        ausbildung: [
            {
                name: "Duale Ausbildung",
                description: "Betriebliche Berufsausbildung in einem anerkannten Ausbildungsberuf.",
                dauer: "2-3,5 Jahre, auch in Teilzeit möglich",
                voraussetzungen: "Abhängig vom Berufsfeld und betrieblichen Anforderungen",
                ergebnis: "Ausbildungsabschluss in einem anerkannten Ausbildungsberuf",
                finanzierung: "Ausbildungsvergütung, ggf. Berufsausbildungsbeihilfe (BAB), ggf. Bewerbungs-/Fahrt-/Umzugskosten",
                kontakt: {
                    name: "IHK Stuttgart / Handwerkskammer",
                    telefon: "IHK: 0711 / 2005-1111, HWK: 0711 / 16 57-0",
                    email: "ausbildung@stuttgart.ihk.de / ausbildung@hwk-stuttgart.de"
                },
                besonderheiten: "Start meist im Herbst, AsA flex zur Stabilisierung möglich, FHR parallel möglich"
            },
            {
                name: "BaE / BaEplus / Ausbildungschance",
                description: "Berufsausbildung in außerbetrieblichen Einrichtungen mit sozialpädagogischer Begleitung.",
                dauer: "Max. 3,5 Jahre, auch in Teilzeit möglich",
                voraussetzungen: "Bei Agentur für Arbeit oder Jobcenter ausbildungssuchend gemeldet",
                ergebnis: "Ausbildungsabschluss in einem anerkannten Ausbildungsberuf",
                finanzierung: "Ausbildungsvergütung + Sozialversicherung, ggf. BAB",
                kontakt: {
                    name: "Agentur für Arbeit / Jobcenter / JobConnections",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung, Stütz- und Förderunterricht, individuelle Ermessensentscheidung"
            }
        ]
    },
    hauptschul: {
        mittlerer: [
            {
                name: "2BFS - Zweijährige Berufsfachschule",
                description: "Schulischer Weg zum mittleren Bildungsabschluss mit beruflicher Grundbildung.",
                dauer: "2 Schuljahre",
                voraussetzungen: "Hauptschulabschluss oder gleichwertiger Bildungsstand",
                ergebnis: "Mittlerer Bildungsabschluss (Fachschulreife), kann als 1. Ausbildungsjahr angerechnet werden",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Anmeldung über www.bewo.kultus-bw.de/BewO"
                },
                besonderheiten: "Online-Anmeldung bis 1. März"
            },
            {
                name: "BAS - Berufsaufbauschule",
                description: "Für Personen mit Hauptschulabschluss und abgeschlossener Berufsausbildung.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Hauptschulabschluss + abgeschlossene Berufsausbildung oder mind. 4-jährige Berufserfahrung",
                ergebnis: "Mittlerer Bildungsabschluss (Fachschulreife)",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Technische Oberschule Stuttgart",
                    telefon: "Siehe www.gsih-mit-to.de",
                    email: "Siehe Website"
                },
                besonderheiten: "Bewerbung bis 1. März"
            },
            {
                name: "Abendrealschule",
                description: "Für Berufstätige, die den mittleren Bildungsabschluss nachholen möchten.",
                dauer: "2-3 Schuljahre (je nach Schule)",
                voraussetzungen: "Mindestens 18 Jahre, berufstätig, Grundkenntnisse Englisch, mehrjähriger Schulbesuch",
                ergebnis: "Mittlerer Bildungsabschluss (Fachschulreife)",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Kolping Bildungszentrum Neckarpark",
                    telefon: "Siehe www.kolping-neckarpark.de",
                    email: "Siehe Website"
                },
                besonderheiten: "Abendunterricht für Berufstätige"
            },
            {
                name: "Schulfremdenprüfung Realschulabschluss",
                description: "Erwerb des mittleren Bildungsabschlusses außerhalb eines schulischen Bildungsgangs.",
                dauer: "Individuell",
                voraussetzungen: "Wohnort Baden-Württemberg, Schulbesuch führt nicht zum Abschluss",
                ergebnis: "Mittlerer Bildungsabschluss",
                finanzierung: "Vorbereitungskurse kostenpflichtig",
                kontakt: {
                    name: "Staatliches Schulamt Stuttgart",
                    telefon: "Siehe Website",
                    email: "Siehe Website"
                },
                besonderheiten: "Wiederholung frühestens nach 1 Jahr, Vorbereitung über VHS oder Institut Dr. Rampitsch"
            },
            {
                name: "Modell 9+3 / Option bundeseinheitlich",
                description: "Gleichwertiger Realschulabschluss durch Berufsausbildung.",
                dauer: "Während der Ausbildung",
                voraussetzungen: "Notendurchschnitt 2,5 aus Hauptschulabschluss + Berufsschulabschluss + Berufsabschluss ODER Berufsschulabschluss (Schnitt 3,0) + Fremdsprachennachweis + mind. 2-jährige Ausbildung",
                ergebnis: "Dem Realschulabschluss gleichwertiger Bildungsabschluss",
                finanzierung: "-",
                kontakt: {
                    name: "Zuletzt besuchte Schule",
                    telefon: "-",
                    email: "-"
                },
                besonderheiten: "Berechtigt nicht zum Besuch eines beruflichen Gymnasiums, für BOS ist Prüfung nötig"
            }
        ],
        orientierung: [
            {
                name: "AVdual - Ausbildungsvorbereitung dual",
                description: "Berufliche Orientierung mit Praktikumsschwerpunkt.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Berufsschulpflichtig (u18)",
                ergebnis: "Verbesserung Hauptschulabschluss möglich, Übergang in Ausbildung",
                finanzierung: "Schulbesuch kostenfrei",
                kontakt: {
                    name: "Meldestelle der beruflichen Schulen Stuttgart",
                    telefon: "0711 / 216-60277",
                    email: "meldestelle-bs@stuttgart.de"
                },
                besonderheiten: "Hoher Praktikumsanteil, sozialpädagogische Begleitung"
            },
            {
                name: "Freiwilligendienste",
                description: "FSJ, FÖJ, BFD im Inland oder Ausland.",
                dauer: "6-24 Monate, meist 12 Monate",
                voraussetzungen: "Vollzeitschulpflicht erfüllt, 15-26 Jahre (BFD auch älter)",
                ergebnis: "Zertifikat, berufliche Orientierung",
                finanzierung: "Taschengeld, Kindergeld, oft Verpflegung/Unterkunft",
                kontakt: {
                    name: "Jugendagentur Stuttgart",
                    telefon: "0711 / 25518288",
                    email: "info@jugendagentur.net"
                },
                besonderheiten: "Pädagogische Begleitung"
            },
            {
                name: "400+ Zukunft",
                description: "Berufliche Orientierung mit sozialpädagogischer Begleitung.",
                dauer: "12 Monate, Verlängerung möglich",
                voraussetzungen: "Bis 27 Jahre, Wohnsitz Stuttgart",
                ergebnis: "Berufliche Perspektiven, persönliche Stabilisierung",
                finanzierung: "Ca. 538 Euro/Monat + Fahrtkostenerstattung",
                kontakt: {
                    name: "JobConnections",
                    telefon: "0711 / 21688919",
                    email: "Info@JobConnections.de"
                },
                besonderheiten: "Intensive Begleitung"
            },
            {
                name: "BvB - Berufsvorbereitende Bildungsmaßnahme",
                description: "Berufsorientierung und Qualifizierung.",
                dauer: "Bis zu 12 Monate",
                voraussetzungen: "Schulpflicht erfüllt",
                ergebnis: "Ausbildungsreife, Berufsorientierung",
                finanzierung: "BAB + Fahrtkostenerstattung",
                kontakt: {
                    name: "Agentur für Arbeit Stuttgart",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung"
            },
            {
                name: "EQ - Einstiegsqualifizierung",
                description: "Betriebliches Langzeitpraktikum.",
                dauer: "4-12 Monate",
                voraussetzungen: "Schulpflicht erfüllt, ausbildungsreif",
                ergebnis: "Praxiserfahrung, Übernahme in Ausbildung angestrebt",
                finanzierung: "Praktikumsvergütung + Zuschüsse",
                kontakt: {
                    name: "Agentur für Arbeit / Jobcenter",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Anrechnung auf Ausbildung möglich"
            }
        ],
        ausbildung: [
            {
                name: "Schulische Ausbildung",
                description: "Vollzeitschulische Berufsausbildung an beruflichen Schulen.",
                dauer: "1-4 Jahre (je nach Beruf)",
                voraussetzungen: "Abhängig vom Berufsfeld",
                ergebnis: "Ausbildungsabschluss in einem anerkannten Ausbildungsberuf",
                finanzierung: "Ggf. Ausbildungsvergütung, ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Bewerbung direkt bei Schule"
                },
                besonderheiten: "FHR parallel möglich, ggf. Pflichtpraktika vor Ausbildungsstart, private Schulen können Gebühren erheben"
            },
            {
                name: "Duale Ausbildung",
                description: "Betriebliche Berufsausbildung.",
                dauer: "2-3,5 Jahre",
                voraussetzungen: "Abhängig vom Berufsfeld",
                ergebnis: "Ausbildungsabschluss",
                finanzierung: "Ausbildungsvergütung, ggf. BAB",
                kontakt: {
                    name: "IHK / Handwerkskammer",
                    telefon: "IHK: 0711 / 2005-1111",
                    email: "ausbildung@stuttgart.ihk.de"
                },
                besonderheiten: "Start meist Herbst, AsA flex möglich, FHR parallel möglich"
            },
            {
                name: "BaE / BaEplus / Ausbildungschance",
                description: "Außerbetriebliche Ausbildung mit Begleitung.",
                dauer: "Max. 3,5 Jahre",
                voraussetzungen: "Ausbildungssuchend gemeldet",
                ergebnis: "Ausbildungsabschluss",
                finanzierung: "Ausbildungsvergütung, ggf. BAB",
                kontakt: {
                    name: "Agentur für Arbeit / JobConnections",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung, Förderunterricht"
            },
            {
                name: "1BFS - Einjährige Berufsfachschule",
                description: "Erstes Jahr der beruflichen Ausbildung an einer Schule.",
                dauer: "1 Schuljahr",
                voraussetzungen: "In der Regel Vorvertrag oder Ausbildungsplatzzusage",
                ergebnis: "Erfüllung Berufsschulpflicht, ggf. Anrechnung als 1. Ausbildungsjahr, ggf. Hauptschulabschluss",
                finanzierung: "Ggf. Vergütung der Praxistage, ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Bewerbung möglichst vor Schuljahresbeginn"
                },
                besonderheiten: "Kann bei manchen Ausbildungen als 1. Jahr angerechnet werden"
            }
        ]
    },
    mittlerer: {
        fhr: [
            {
                name: "BK - Berufskolleg (I und II)",
                description: "Schulischer Weg zur Fachhochschulreife, verschiedene Fachrichtungen.",
                dauer: "1-3 Jahre (je nach Ausrichtung)",
                voraussetzungen: "Mittlerer Bildungsabschluss, beim BK 1-jährig: abgeschlossene mind. 2-jährige Berufsausbildung",
                ergebnis: "Fachhochschulreife, ggf. inkl. staatlich geprüftem Assistentenabschluss",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Anmeldung bis 1. März über www.bewo.kultus-bw.de/BewO oder direkt bei Schule"
                },
                besonderheiten: "Aufnahme auf Probe (6 Monate), verschiedene Fachrichtungen verfügbar"
            },
            {
                name: "Duales BK (3-jährig Teilzeit)",
                description: "Fachhochschulreife parallel zur betrieblichen Ausbildung.",
                dauer: "3 Jahre (Teilzeit)",
                voraussetzungen: "Mittlerer Bildungsabschluss + Ausbildungsvertrag",
                ergebnis: "Fachhochschulreife parallel zur Ausbildung",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Siehe Website"
                },
                besonderheiten: "Parallel zur Ausbildung"
            },
            {
                name: "Schulfremdenprüfung Fachhochschulreife",
                description: "Erwerb der FHR außerhalb eines schulischen Bildungsgangs.",
                dauer: "Individuell",
                voraussetzungen: "Wohnort Baden-Württemberg",
                ergebnis: "Fachhochschulreife",
                finanzierung: "Vorbereitungskurse kostenpflichtig",
                kontakt: {
                    name: "Regierungspräsidium Stuttgart",
                    telefon: "Siehe Website",
                    email: "Siehe Website"
                },
                besonderheiten: "Wiederholung frühestens nach 1 Jahr"
            }
        ],
        abitur: [
            {
                name: "BOS - Berufsoberschule",
                description: "Für Personen mit mittlerem Bildungsabschluss und abgeschlossener Berufsausbildung.",
                dauer: "2 Schuljahre (Vollzeit)",
                voraussetzungen: "Mittlerer Bildungsabschluss + Berufsschulabschluss + mind. 2-jährige Berufsausbildung oder 5 Jahre Berufserfahrung",
                ergebnis: "Fachgebundene Hochschulreife bzw. allgemeine Hochschulreife (Abitur)",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "BOS Stuttgart (IB, KS1, TO)",
                    telefon: "Siehe Websites",
                    email: "Bewerbung bis 1. März"
                },
                besonderheiten: "Aufnahmeverfahren für '9+3'-Absolvent*innen"
            },
            {
                name: "BG - Berufliches Gymnasium",
                description: "Allgemeine Hochschulreife mit beruflicher Fachrichtung.",
                dauer: "3 Schuljahre",
                voraussetzungen: "Mittlerer Bildungsabschluss mit entsprechendem Notendurchschnitt oder Versetzungszeugnis Klasse 10/11, Altersbegrenzung: 19 (ohne) bzw. 22 (mit Ausbildung)",
                ergebnis: "Allgemeine Hochschulreife (Abitur)",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Online-Anmeldung bis 1. März über www.bewo.kultus-bw.de/BewO"
                },
                besonderheiten: "Verschiedene Fachrichtungen, private Schulen: direkte Anmeldung"
            },
            {
                name: "Abendgymnasium",
                description: "Für Berufstätige, die das Abitur nachholen möchten.",
                dauer: "Bis zu 4 Schuljahre",
                voraussetzungen: "Mind. 18 Jahre, berufstätig, mittlere Reife oder Vorkursbesuch, mind. 2-jährige Ausbildung oder Berufserfahrung",
                ergebnis: "Allgemeine Hochschulreife (Abitur) nach Kl. IV, ggf. FHR nach Kl. III",
                finanzierung: "Ggf. BAföG, ggf. Stipendium",
                kontakt: {
                    name: "Abendgymnasium Stuttgart / Kolping Neckarpark",
                    telefon: "Siehe www.agstuttgart.de / www.kolping-neckarpark.de",
                    email: "Schriftliche Anmeldung"
                },
                besonderheiten: "Abendunterricht für Berufstätige"
            },
            {
                name: "Kolleg zum Erwerb der allgemeinen Hochschulreife",
                description: "Für nicht Berufstätige, die das Abitur nachholen möchten.",
                dauer: "3 Schuljahre (Vollzeit)",
                voraussetzungen: "Mind. 18 Jahre, mittlere Reife oder Vorkurs, mind. 2-jährige Ausbildung oder Berufserfahrung, Aufnahmeprüfung in Deutsch, Englisch, Mathe",
                ergebnis: "Allgemeine Hochschulreife (Abitur)",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Kolping Bildungszentrum Neckarpark",
                    telefon: "Siehe www.kolping-neckarpark.de",
                    email: "Schriftliche Anmeldung"
                },
                besonderheiten: "Vollzeit, für nicht Berufstätige"
            },
            {
                name: "Schulfremdenprüfung Abitur",
                description: "Erwerb der allgemeinen Hochschulreife außerhalb schulischer Bildungsgänge.",
                dauer: "Individuell",
                voraussetzungen: "Wohnort Baden-Württemberg",
                ergebnis: "Allgemeine Hochschulreife (Abitur)",
                finanzierung: "Vorbereitungskurse kostenpflichtig",
                kontakt: {
                    name: "Regierungspräsidium Stuttgart",
                    telefon: "Siehe Website",
                    email: "Siehe Website"
                },
                besonderheiten: "Wiederholung frühestens nach 1 Jahr"
            }
        ],
        orientierung: [
            {
                name: "AVdual - Ausbildungsvorbereitung dual",
                description: "Berufliche Orientierung mit Praktika.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Berufsschulpflichtig (u18)",
                ergebnis: "Berufliche Orientierung",
                finanzierung: "Schulbesuch kostenfrei",
                kontakt: {
                    name: "Meldestelle der beruflichen Schulen Stuttgart",
                    telefon: "0711 / 216-60277",
                    email: "meldestelle-bs@stuttgart.de"
                },
                besonderheiten: "Hoher Praktikumsanteil"
            },
            {
                name: "BK - Berufskolleg",
                description: "Berufliche Orientierung in verschiedenen Fachrichtungen.",
                dauer: "1-3 Jahre",
                voraussetzungen: "Mittlerer Bildungsabschluss",
                ergebnis: "FHR, berufliche Grundbildung",
                finanzierung: "Ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Anmeldung bis 1. März"
                },
                besonderheiten: "Verschiedene Fachrichtungen"
            },
            {
                name: "Freiwilligendienste",
                description: "FSJ, FÖJ, BFD, auch im Ausland möglich.",
                dauer: "6-24 Monate",
                voraussetzungen: "Vollzeitschulpflicht erfüllt",
                ergebnis: "Zertifikat, Orientierung",
                finanzierung: "Taschengeld, Kindergeld",
                kontakt: {
                    name: "Jugendagentur Stuttgart",
                    telefon: "0711 / 25518288",
                    email: "info@jugendagentur.net"
                },
                besonderheiten: "Auch Auslandsdienste möglich"
            },
            {
                name: "BvB - Berufsvorbereitende Bildungsmaßnahme",
                description: "Berufsorientierung und Qualifizierung.",
                dauer: "Bis zu 12 Monate",
                voraussetzungen: "Schulpflicht erfüllt",
                ergebnis: "Berufsorientierung",
                finanzierung: "BAB + Fahrtkostenerstattung",
                kontakt: {
                    name: "Agentur für Arbeit Stuttgart",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Sozialpädagogische Begleitung"
            },
            {
                name: "EQ - Einstiegsqualifizierung",
                description: "Betriebliches Praktikum.",
                dauer: "4-12 Monate",
                voraussetzungen: "Schulpflicht erfüllt",
                ergebnis: "Praxiserfahrung",
                finanzierung: "Praktikumsvergütung + Zuschüsse",
                kontakt: {
                    name: "Agentur für Arbeit / Jobcenter",
                    telefon: "0800 / 4555500",
                    email: "Stuttgart.Berufsberatung@arbeitsagentur.de"
                },
                besonderheiten: "Übernahme in Ausbildung möglich"
            }
        ],
        ausbildung: [
            {
                name: "Beamtenlaufbahn - Mittlerer Dienst",
                description: "Duale Ausbildung im öffentlichen Dienst.",
                dauer: "1-3 Jahre (je nach Fachrichtung)",
                voraussetzungen: "I.d.R. mittlere Reife, Staatsangehörigkeit, Eignung, ggf. Höchstalter",
                ergebnis: "Ausbildungsabschluss im öffentlichen Dienst",
                finanzierung: "Anwärterbezüge",
                kontakt: {
                    name: "Jeweilige Institution (Stadtverwaltung, Polizei, Bundeswehr, Zoll, etc.)",
                    telefon: "Siehe jeweilige Website",
                    email: "Siehe jeweilige Website"
                },
                besonderheiten: "Bewerbungsfristen beachten, z.B. bei Polizei, Finanzamt, Justizvollzug"
            },
            {
                name: "Schulische Ausbildung",
                description: "Vollzeitschulische Berufsausbildung.",
                dauer: "1-4 Jahre",
                voraussetzungen: "Abhängig vom Berufsfeld",
                ergebnis: "Ausbildungsabschluss",
                finanzierung: "Ggf. Vergütung, ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Bewerbung bei Schule"
                },
                besonderheiten: "FHR parallel möglich, ggf. Pflichtpraktika"
            },
            {
                name: "Duale Ausbildung",
                description: "Betriebliche Ausbildung.",
                dauer: "2-3,5 Jahre",
                voraussetzungen: "Abhängig vom Berufsfeld",
                ergebnis: "Ausbildungsabschluss",
                finanzierung: "Ausbildungsvergütung, ggf. BAB",
                kontakt: {
                    name: "IHK / Handwerkskammer",
                    telefon: "IHK: 0711 / 2005-1111",
                    email: "ausbildung@stuttgart.ihk.de"
                },
                besonderheiten: "Start meist Herbst, FHR parallel möglich"
            },
            {
                name: "1BFS - Einjährige Berufsfachschule",
                description: "Erstes Ausbildungsjahr an Schule.",
                dauer: "1 Schuljahr",
                voraussetzungen: "Meist Vorvertrag oder Zusage",
                ergebnis: "Ggf. Anrechnung als 1. Jahr",
                finanzierung: "Ggf. Vergütung Praxistage, ggf. BAföG",
                kontakt: {
                    name: "Berufliche Schulen Stuttgart",
                    telefon: "Siehe www.stuttgart.de",
                    email: "Bewerbung vor Schuljahresbeginn"
                },
                besonderheiten: "Kann als 1. Ausbildungsjahr angerechnet werden"
            }
        ]
    }
};

// Ziel-Optionen je nach Bildungsstand
const zielOptionen = {
    kein: [
        { id: 'deutsch', label: 'Deutsch lernen', icon: '🗣️', desc: 'Deutsche Sprache erlernen und verbessern' },
        { id: 'hauptschul', label: 'Hauptschulabschluss machen', icon: '📝', desc: 'Einen gleichwertigen Bildungsstand erwerben' },
        { id: 'orientierung', label: 'Beruflich vorbereiten/orientieren', icon: '🧭', desc: 'Mich beruflich orientieren und vorbereiten' },
        { id: 'ausbildung', label: 'Ausbildung beginnen', icon: '🎯', desc: 'Eine Ausbildung starten' }
    ],
    hauptschul: [
        { id: 'mittlerer', label: 'Mittleren Bildungsabschluss machen', icon: '📚', desc: 'Die Fachschulreife erwerben' },
        { id: 'orientierung', label: 'Beruflich vorbereiten/orientieren', icon: '🧭', desc: 'Mich beruflich orientieren' },
        { id: 'ausbildung', label: 'Ausbildung beginnen', icon: '🎯', desc: 'Eine Ausbildung starten' }
    ],
    mittlerer: [
        { id: 'fhr', label: 'Fachhochschulreife erlangen', icon: '🎓', desc: 'Die Fachhochschulreife erwerben' },
        { id: 'abitur', label: 'Allgemeine Hochschulreife erlangen', icon: '🎖️', desc: 'Das Abitur machen' },
        { id: 'orientierung', label: 'Beruflich vorbereiten/orientieren', icon: '🧭', desc: 'Mich beruflich orientieren' },
        { id: 'ausbildung', label: 'Ausbildung beginnen', icon: '🎯', desc: 'Eine Ausbildung starten' }
    ]
};

// Funktionen
function startWizard() {
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('wizardContainer').style.display = 'block';

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const stand = urlParams.get('stand');
    const ziel = urlParams.get('ziel');

    if (stand && ziel) {
        selectedBildungsstand = stand;
        selectedZiel = ziel;
        showResults();
    }
}

function selectBildungsstand(stand) {
    selectedBildungsstand = stand;
    document.getElementById('step1Validation').style.display = 'none';

    // Visual feedback
    document.querySelectorAll('#step1 .option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    setTimeout(() => {
        goToStep(2);
    }, 300);
}

function goToStep(step) {
    if (step === 2) {
        if (!selectedBildungsstand) {
            document.getElementById('step1Validation').style.display = 'block';
            return;
        }

        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';

        // Populate step 2 options
        const optionsContainer = document.getElementById('step2Options');
        optionsContainer.innerHTML = '';

        zielOptionen[selectedBildungsstand].forEach(option => {
            const card = document.createElement('div');
            card.className = 'option-card';
            card.onclick = () => selectZiel(option.id);
            card.innerHTML = `
                <div class="option-icon">${option.icon}</div>
                <h3>${option.label}</h3>
                <p>${option.desc}</p>
            `;
            optionsContainer.appendChild(card);
        });
    } else if (step === 1) {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step1').style.display = 'block';
        selectedZiel = '';
    }
}

function selectZiel(ziel) {
    selectedZiel = ziel;
    document.getElementById('step2Validation').style.display = 'none';

    // Visual feedback
    document.querySelectorAll('#step2 .option-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');

    setTimeout(() => {
        showResults();
    }, 300);
}

function showResults() {
    if (!selectedZiel) {
        document.getElementById('step2Validation').style.display = 'block';
        return;
    }

    document.getElementById('step2').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Update URL
    const newUrl = `${window.location.pathname}?stand=${selectedBildungsstand}&ziel=${selectedZiel}`;
    window.history.pushState({}, '', newUrl);

    // Set results header
    const standLabel = {
        'kein': 'ohne Schulabschluss',
        'hauptschul': 'mit Hauptschulabschluss',
        'mittlerer': 'mit mittlerem Bildungsabschluss'
    };

    const zielLabel = zielOptionen[selectedBildungsstand].find(z => z.id === selectedZiel).label;

    document.getElementById('resultsHeader').innerHTML = `
        <h3>Deine Ausgangssituation</h3>
        <p><strong>Bildungsstand:</strong> ${standLabel[selectedBildungsstand]}</p>
        <p><strong>Ziel:</strong> ${zielLabel}</p>
        <p style="margin-top: 16px; color: var(--text-gray);">Hier sind die passenden Bildungswege für dich:</p>
    `;

    // Populate results
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';

    const bildungswege = bildungswegeData[selectedBildungsstand][selectedZiel];

    bildungswege.forEach(weg => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <h3>${weg.name}</h3>
            <p class="description">${weg.description}</p>

            <div class="details">
                <div class="detail-item">
                    <div class="detail-label">⏱️ Dauer</div>
                    <div class="detail-value">${weg.dauer}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">✅ Voraussetzungen</div>
                    <div class="detail-value">${weg.voraussetzungen}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">🎯 Ergebnis</div>
                    <div class="detail-value">${weg.ergebnis}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">💰 Finanzierung</div>
                    <div class="detail-value">${weg.finanzierung}</div>
                </div>
                ${weg.besonderheiten ? `
                <div class="detail-item">
                    <div class="detail-label">💡 Besonderheiten</div>
                    <div class="detail-value">${weg.besonderheiten}</div>
                </div>
                ` : ''}
            </div>

            <div class="contact-info">
                <h4>📞 Kontakt & Anmeldung</h4>
                <p><strong>${weg.kontakt.name}</strong></p>
                ${weg.kontakt.telefon ? `<p>Tel: ${weg.kontakt.telefon}</p>` : ''}
                ${weg.kontakt.email ? `<p>E-Mail: ${weg.kontakt.email}</p>` : ''}
                ${weg.kontakt.web ? `<p><a href="https://${weg.kontakt.web}" target="_blank">${weg.kontakt.web}</a></p>` : ''}
            </div>
        `;
        resultsGrid.appendChild(card);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shareViaEmail() {
    const currentUrl = window.location.href;
    const subject = encodeURIComponent('Meine Bildungswege in Stuttgart');
    const body = encodeURIComponent(`Ich habe passende Bildungswege für mich gefunden!\n\nSchau dir meine Ergebnisse an: ${currentUrl}\n\nMit Abschluss gibt es immer einen Anschluss!`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function shareViaWhatsApp() {
    const currentUrl = window.location.href;
    const text = encodeURIComponent(`Ich habe passende Bildungswege für mich gefunden! 🎓\n\n${currentUrl}\n\nMit Abschluss gibt es immer einen Anschluss!`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '✅ Link kopiert!';
        btn.style.backgroundColor = 'var(--success-color)';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = '';
        }, 2000);
    });
}

function startOver() {
    selectedBildungsstand = '';
    selectedZiel = '';
    document.getElementById('results').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove selections
    document.querySelectorAll('.option-card').forEach(card => {
        card.classList.remove('selected');
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('stand') && urlParams.has('ziel')) {
        startWizard();
    }
});