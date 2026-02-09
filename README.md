[README.md](https://github.com/user-attachments/files/25184769/README.md)
# Bildungswege Stuttgart - Interaktives Tool

Eine interaktive Landing Page für das Stuttgarter Plakat "Schule und dann?", die Jugendlichen hilft, ihren passenden Bildungsweg zu finden.

## 🚀 Features

- **2-Schritt-Wizard**: Einfache Auswahl von Bildungsstand und Ziel
- **Umfangreiche Datenbank**: Alle Bildungswege aus dem offiziellen Plakat (Stand Juli 2025)
- **Share-Funktionen**: Ergebnisse per E-Mail, WhatsApp oder Link teilen
- **Deeplinks**: Direktlinks zu spezifischen Ergebnissen möglich
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Barrierefrei**: Grundlegende WCAG-Standards eingehalten
- **Statisch**: Keine Backend-Infrastruktur nötig, perfekt für GitHub Pages

## 📁 Projektstruktur

```
bildungswege-stuttgart/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Alle Styles
├── script.js           # Komplette JavaScript-Logik mit Datenbank
└── README.md          # Diese Datei
```

## 🛠️ Installation & Deployment auf GitHub Pages

### Schritt 1: Repository erstellen

1. Gehe zu [GitHub](https://github.com) und logge dich ein
2. Klicke auf das **+** Symbol oben rechts → **New repository**
3. Repository-Name: z.B. `bildungswege-stuttgart`
4. Wähle **Public** (für kostenlose GitHub Pages)
5. Klicke auf **Create repository**

### Schritt 2: Dateien hochladen

**Option A: Über die GitHub-Weboberfläche**

1. Klicke auf **Add file** → **Upload files**
2. Ziehe die drei Dateien (`index.html`, `styles.css`, `script.js`) in den Upload-Bereich
3. Füge eine Commit-Nachricht hinzu: "Initial commit - Bildungswege Tool"
4. Klicke auf **Commit changes**

**Option B: Via Git (Command Line)**

```bash
# Repository klonen
git clone https://github.com/DEIN-USERNAME/bildungswege-stuttgart.git
cd bildungswege-stuttgart

# Dateien kopieren (kopiere die 3 Dateien in diesen Ordner)

# Git-Befehle
git add .
git commit -m "Initial commit - Bildungswege Tool"
git push origin main
```

### Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben rechts)
3. Scrolle zu **Pages** (linke Sidebar)
4. Bei **Source** wähle: **Deploy from a branch**
5. Bei **Branch** wähle: **main** und **/ (root)**
6. Klicke auf **Save**

### Schritt 4: Fertig! 🎉

Nach 1-2 Minuten ist deine Website live unter:

```
https://DEIN-USERNAME.github.io/bildungswege-stuttgart/
```

## 🔗 Deeplinks verwenden

Du kannst Direktlinks zu bestimmten Ergebnissen erstellen:

```
https://DEIN-USERNAME.github.io/bildungswege-stuttgart/?stand=kein&ziel=hauptschul
https://DEIN-USERNAME.github.io/bildungswege-stuttgart/?stand=hauptschul&ziel=ausbildung
https://DEIN-USERNAME.github.io/bildungswege-stuttgart/?stand=mittlerer&ziel=abitur
```

**Parameter:**
- `stand`: `kein`, `hauptschul`, `mittlerer`
- `ziel`: `hauptschul`, `orientierung`, `ausbildung`, `mittlerer`, `fhr`, `abitur` (je nach Bildungsstand)

## ✏️ Inhalte aktualisieren

Alle Bildungswege-Daten befinden sich in der Datei **`script.js`** im Objekt `bildungswegeData`.

### Einen Bildungsweg bearbeiten

1. Öffne `script.js`
2. Suche den entsprechenden Bildungsweg im `bildungswegeData`-Objekt
3. Bearbeite die Felder:
   - `name`: Name des Bildungswegs
   - `description`: Kurzbeschreibung
   - `dauer`: Dauer des Programms
   - `voraussetzungen`: Zugangsvoraussetzungen
   - `ergebnis`: Was wird erreicht
   - `finanzierung`: Finanzielle Unterstützung
   - `kontakt`: Kontaktinformationen (name, telefon, email, web)
   - `besonderheiten`: Besondere Hinweise

### Einen neuen Bildungsweg hinzufügen

```javascript
{
    name: "Neuer Bildungsweg",
    description: "Beschreibung des Bildungswegs",
    dauer: "12 Monate",
    voraussetzungen: "Liste der Voraussetzungen",
    ergebnis: "Was man erreicht",
    finanzierung: "Finanzielle Infos",
    kontakt: {
        name: "Kontaktstelle",
        telefon: "0711 / 123456",
        email: "info@beispiel.de",
        web: "www.beispiel.de"
    },
    besonderheiten: "Besondere Hinweise"
}
```

### Änderungen veröffentlichen

**Via GitHub-Weboberfläche:**
1. Gehe zu `script.js` in deinem Repository
2. Klicke auf das Stift-Symbol (Edit)
3. Mache deine Änderungen
4. Klicke auf **Commit changes**
5. Warte 1-2 Minuten → Änderungen sind live

**Via Git:**
```bash
git add script.js
git commit -m "Bildungswege aktualisiert"
git push origin main
```

## 🎨 Design anpassen

### Farben ändern

In `styles.css` findest du die Farbvariablen unter `:root`:

```css
:root {
    --primary-color: #2563eb;      /* Hauptfarbe */
    --secondary-color: #1e40af;    /* Sekundärfarbe */
    --accent-color: #3b82f6;       /* Akzentfarbe */
    --success-color: #10b981;      /* Erfolgsfarbe */
    /* ... weitere Farben */
}
```

Ändere die Hex-Codes nach deinen Wünschen.

### Schriftart ändern

In `styles.css` unter `body`:

```css
body {
    font-family: 'Deine Schriftart', 'Segoe UI', sans-serif;
}
```

## 📱 Browser-Kompatibilität

- ✅ Chrome/Edge (neueste Versionen)
- ✅ Firefox (neueste Versionen)
- ✅ Safari (iOS & macOS)
- ✅ Mobile Browser (iOS Safari, Chrome Android)

## 🐛 Häufige Probleme & Lösungen

### Website zeigt "404 Not Found"
- **Lösung**: Warte 1-2 Minuten nach Aktivierung von GitHub Pages
- Überprüfe, ob die Datei `index.html` (klein geschrieben!) im Root-Verzeichnis liegt

### Änderungen werden nicht angezeigt
- **Lösung**: 
  - Leere den Browser-Cache (Strg+Shift+R / Cmd+Shift+R)
  - Warte 1-2 Minuten nach dem Commit
  - Überprüfe unter Settings → Pages, ob der Deployment erfolgreich war

### Share-Buttons funktionieren nicht
- **Lösung**: 
  - E-Mail: Benötigt konfiguriertes E-Mail-Programm
  - WhatsApp: Funktioniert auf Mobile automatisch, auf Desktop muss WhatsApp Web installiert sein
  - Link kopieren: Benötigt HTTPS (auf GitHub Pages automatisch vorhanden)

## 📊 Analytics (optional)

Falls du Nutzungsstatistiken möchtest, kannst du Google Analytics einbinden:

1. Erstelle ein Google Analytics Property
2. Füge folgenden Code vor `</head>` in `index.html` ein:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Ersetze `GA_MEASUREMENT_ID` mit deiner tatsächlichen ID.

## 📄 Lizenz & Quelle

Basierend auf dem Plakat "Schule und dann? Bildungs- und Qualifizierungswege in Stuttgart"

**Herausgeberin:** Stuttgarter Arbeitsbündnis Jugend und Beruf
- Agentur für Arbeit Stuttgart
- Staatliches Schulamt
- Jobcenter Stuttgart
- Jugendamt Stuttgart
- Schulverwaltungsamt Stuttgart

**Stand:** Juli 2025

---

## 💡 Weiterentwicklung

Mögliche zukünftige Features:
- [ ] Mehrsprachigkeit (Englisch, Türkisch, Arabisch)
- [ ] Filter nach Alter oder besonderen Förderbedarfen
- [ ] Direkter Kalender-Export für Beratungstermine
- [ ] PDF-Export der Ergebnisse
- [ ] Suchfunktion für Bildungswege
- [ ] Vergleichsfunktion (mehrere Bildungswege nebeneinander)

---

**Viel Erfolg mit dem Bildungswege-Tool!** 🎓

Bei Fragen oder Problemen: Erstelle ein Issue auf GitHub.
