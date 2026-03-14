# Barrierefreies Kontaktformular

Dieses Projekt ist ein Prototyp für ein barrierefreies Kontaktformular, das nach den Richtlinien der **WCAG 2.1 (Level AA)** umgesetzt wurde. Es nutzt ausschließlich native Webtechnologien (HTML5, CSS3, Vanilla JavaScript).

## Compliance-Bericht: Barrierefreiheit (WCAG 2.1 AA)

Im Folgenden sind die umgesetzten Barrierefreiheits-Features aufgeführt, die dieses Formular compliant machen:

### 1. Semantik und Struktur (HTML)
*   **Seiten-Sprache (WCAG 3.1.1):** Das `<html>`-Tag enthält das Attribut `lang="de"`, damit Screenreader die korrekte Aussprachesprache wählen.
*   **Landmarks (WCAG 1.3.1):** Einsatz von semantischen HTML5-Elementen (`<header>`, `<main>`, `<footer>`) in Kombination mit ARIA-Rollen (`role="banner"`, `role="main"`, `role="contentinfo"`) zur erleichterten Navigation für Assistenztechnologien.
*   **Viewport & Skalierbarkeit (WCAG 1.4.4):** Die Viewport-Einstellung erlaubt das Skalieren der Seite (kein `user-scalable=no`), sodass Nutzer den Text auf mindestens 200% vergrößern können.

### 2. Formularelemente und Labels
*   **Eindeutige Beschriftungen (WCAG 1.3.1, 3.3.2):** Jedes Eingabefeld (`<input>`, `<textarea>`) ist über das `for`- und `id`-Attribut eindeutig mit seinem `<label>` verknüpft.
*   **Pflichtfelder (WCAG 3.3.2):** Pflichtfelder sind visuell mit einem Sternchen (`*`) markiert. Für Screenreader wird zusätzlich ein versteckter Text "Pflichtfeld" (`class="visually-hidden"`) bereitgestellt. Das visuelle Sternchen ist für Screenreader per `aria-hidden="true"` verborgen, um Redundanzen zu vermeiden.
*   **Autovervollständigung (WCAG 1.3.5):** Die Attribute `autocomplete="name"` und `autocomplete="email"` helfen Nutzern mit kognitiven Einschränkungen, Felder schneller und fehlerfreier auszufüllen.

### 3. Tastaturnavigation und Sichtbarkeit
*   **Fokus-Indikatoren (WCAG 2.4.7):** CSS-Regeln (`:focus`, `:focus-visible`) sorgen für einen deutlichen, gut sichtbaren Rahmen um fokussierte Elemente, wodurch die Navigation per Tastatur problemlos möglich ist.
*   **Kontrast (WCAG 1.4.3):** Die Farbgebung der Fehler-, Erfolgs- und Standard-Texte sowie die Hintergrundfarben weisen einen ausreichenden Kontrastwert auf.

### 4. Validierung, Fehlerbehebung und ARIA
*   **Fehlererkennung (WCAG 3.3.1, 3.3.3):** Es wird eine serverseitig-simulierte Client-Validierung mittels JavaScript (ohne Standard-Browser-Validierung: `novalidate`) durchgeführt. 
*   **Programmatische Fehlermarkierung (WCAG 4.1.2):** Im Fehlerfall erhalten fehlerhafte Eingabefelder das Attribut `aria-invalid="true"`.
*   **Verknüpfung von Fehlermeldungen:** Die Text-Fehlermeldungen sind per `aria-errormessage` direkt mit dem auslösenden `<input>` verknüpft.
*   **Live-Regions (WCAG 4.1.3):** Behälter für Status- und Fehlermeldungen verwenden `aria-live="polite"`. Statusänderungen (wie "Ihre Nachricht wurde erfolgreich gesendet") werden Nutzern von Assistenztechnologien automatisch vorgelesen, ohne ihren aktuellen Lesefluss hart zu unterbrechen.
*   **Fokus-Management (WCAG 2.4.3):** Bei einem Fehler wird der Tastaturfokus automatisch auf das erste fehlerhafte Feld gesetzt. Nach erfolgreichem Absenden wandert der Fokus auf die Erfolgsmeldung.

### 5. Bilder und Grafiken
*   **Ziergrafiken (WCAG 1.1.1):** Das Icon auf dem Absende-Button hat ein leeres `alt=""`-Attribut und `aria-hidden="true"`, da der Button-Text bereits selbsterklärend.
*   **Informative Bilder (WCAG 1.1.1):** Der Info-Badge, der textliche Informationen bereitstellt ("Rückmeldung in der Regel innerhalb von 24 Stunden"), besitzt ein aussagekräftiges `alt`-Attribut.

## Ausführen und Testen
Um das Formular lokal zu testen, öffnen Sie einfach die Datei `index.html` in einem modernen Webbrowser. Es werden keine speziellen Build-Tools oder Server benötigt.

Ein Screenreader (wie z.B. NVDA auf Windows oder VoiceOver auf macOS) wird empfohlen, um die implementierten Barrierefreiheits-Features (wie Live-Regions und Landmarks) realitätsnah zu verifizieren.
