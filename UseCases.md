# Use Cases

#### UC-01: Produktkatalog ansehen

Akteur: Privatkunde oder Gastronom
Ziel: Produkte einer Kategorie ansehen

Vorbedingung: Produkte wurden im System veröffentlicht.

Ablauf:

1. Nutzer öffnet „Sortiment“.
2. Nutzer wählt eine Kategorie.
3. System zeigt Bestseller und Produktliste.
4. Nutzer kann Produkte filtern oder sortieren.
5. Nutzer öffnet ein Produkt.

Ergebnis: Nutzer erhält alle öffentlich verfügbaren Produktinformationen.

⸻

#### UC-02: Produkt suchen

Akteur: Webseitenbesucher
Ziel: Ein bestimmtes Produkt finden

Ablauf:

1. Nutzer öffnet die Suche.
2. Nutzer gibt Produktname, Marke oder Stichwort ein.
3. System durchsucht relevante Produktfelder.
4. System zeigt passende Ergebnisse.
5. Nutzer öffnet das gewünschte Produkt.

Alternative: Es wurden keine Treffer gefunden. Das System bietet eine Kontaktanfrage an.

⸻

#### UC-03: Kontaktanfrage senden

Akteur: Webseitenbesucher
Ziel: Kontakt zum Unternehmen aufnehmen

Ablauf:

1. Nutzer öffnet das Kontaktformular.
2. Nutzer gibt Name, E-Mail-Adresse und Nachricht ein.
3. Nutzer bestätigt die Datenschutzhinweise.
4. System validiert die Eingaben.
5. System speichert oder versendet die Anfrage.
6. Nutzer erhält eine Bestätigung.

Missbrauchsschutz:

* serverseitige Validierung,
* Rate Limiting,
* Spam-Schutz,
* keine sensiblen Fehlermeldungen.

⸻

#### UC-04: Gastronomieanfrage senden

Akteur: Geschäftskunde
Ziel: Produkte, Mengen oder Konditionen anfragen

Zusätzliche Felder:

* Firmenname,
* Ansprechpartner,
* Branche,
* Telefonnummer,
* gewünschte Produkte,
* geschätzte Mengen,
* gewünschter Kontaktweg.

Ergebnis: Das Unternehmen erhält eine qualifizierte Geschäftsanfrage.

⸻

#### UC-05: Produkt verwalten

Akteur: Administrator oder Mitarbeiter
Ziel: Produkt anlegen oder aktualisieren

Ablauf:

1. Mitarbeiter meldet sich im Verwaltungsbereich an.
2. Mitarbeiter öffnet die Produktverwaltung.
3. Mitarbeiter erfasst oder ändert Produktinformationen.
4. Mitarbeiter lädt ein Bild hoch.
5. Mitarbeiter weist eine Kategorie zu.
6. Mitarbeiter setzt Sichtbarkeit und Bestseller-Status.
7. System validiert und speichert die Daten.

⸻

#### UC-06: Öffnungszeiten aktualisieren

Akteur: Administrator
Ziel: Öffnungszeiten oder Sonderöffnungszeiten ändern

Ablauf:

1. Administrator öffnet die Einstellungen.
2. Administrator ändert reguläre oder besondere Öffnungszeiten.
3. System speichert die Angaben.
4. Neue Zeiten werden auf allen relevanten Seiten angezeigt.

⸻

#### UC-07: Produkt reservieren – spätere Phase

Akteur: Kunde
Ziel: Produkt zur Abholung reservieren

Ablauf:

1. Nutzer öffnet ein Produkt.
2. Nutzer wählt Menge und Abholtermin.
3. Nutzer übermittelt Kontaktdaten.
4. System erstellt eine Reservierungsanfrage.
5. Unternehmen bestätigt die Anfrage.
6. Kunde erhält die Bestätigung.

Wichtig: Eine Reservierungsanfrage ist zunächst nicht automatisch mit einer garantierten Warenverfügbarkeit gleichzusetzen.

⸻

#### UC-08: Newsletter abonnieren – spätere Phase

Akteur: Webseitenbesucher
Ziel: Newsletter erhalten

Ablauf:

1. Nutzer trägt seine E-Mail-Adresse ein.
2. Nutzer stimmt der Verarbeitung zu.
3. System sendet eine Bestätigungs-E-Mail.
4. Nutzer bestätigt den Link.
5. System aktiviert das Abonnement.

Das Verfahren sollte als Double-Opt-in umgesetzt werden.