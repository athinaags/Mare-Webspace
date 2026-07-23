# 1.Requirements Specification

### 1.1 Funktionale Anforderungen für das MVP

#### FR-01 Startseite

Das System muss eine responsive Startseite bereitstellen.

Die Startseite muss mindestens enthalten:

* Unternehmensname,
* Hauptbotschaft,
* Produktkategorien,
* Bestseller,
* Zielgruppenansprache,
* Öffnungszeiten,
* Kontaktmöglichkeit,
* Standort,
* Links zu rechtlichen Seiten.

#### FR-02 Produktkategorien

Das System muss Produkte nach Kategorien darstellen können.

Pflichtkategorien:

* Fisch
* Fleisch
* Asia
* Verschiedenes
* Wein
* Spirituosen

#### FR-03 Produktliste

Das System muss pro Kategorie eine Produktliste anzeigen.

Jedes Produkt muss mindestens besitzen:

* Name,
* Kategorie,
* Kurzbeschreibung,
* Sichtbarkeitsstatus.

Optional:

* Bild,
* Preis,
* Marke,
* Herkunft,
* Verpackungsgröße,
* Bestseller-Status.

#### FR-04 Bestseller

Das System muss Produkte als Bestseller kennzeichnen können.

Bestseller müssen:

* auf der Startseite darstellbar sein,
* innerhalb der Kategorie hervorgehoben werden können,
* durch einen Administrator steuerbar sein.

#### FR-05 Produktdetail

Das System sollte für jedes Produkt eine eigene Detailansicht bereitstellen.

#### FR-06 Kontakt

Das System muss mindestens Telefonnummer, E-Mail-Adresse und Anschrift anzeigen.

#### FR-07 Kontaktformular

Das System sollte ein Kontaktformular bereitstellen.

Pflichtfelder:

* Name
* E-Mail-Adresse
* Nachricht
* Datenschutzbestätigung

#### FR-08 Öffnungszeiten

Das System muss reguläre Öffnungszeiten darstellen.

Das System sollte Sonderöffnungszeiten beziehungsweise Hinweise ermöglichen.

#### FR-09 Impressum und Datenschutz

Das System muss separate Seiten für Impressum und Datenschutz bereitstellen.

#### FR-10 Responsive Darstellung

Alle öffentlichen Inhalte müssen auf Smartphones, Tablets und Desktop-Geräten nutzbar sein.

#### FR-11 Administration

Empfohlen wird ein geschützter Administrationsbereich für:

* Produkte,
* Kategorien,
* Bestseller,
* Öffnungszeiten,
* Kontaktinformationen,
* Seiteninhalte.

#### FR-12 Suchmaschinenoptimierung

Das System muss je Seite individuelle Metadaten unterstützen:

* Seitentitel,
* Meta-Beschreibung,
* kanonische URL,
* Social-Media-Vorschaubild,
* Indexierungsstatus.

#### FR-13 Social Media

Das System sollte konfigurierbare Links zu sozialen Netzwerken bereitstellen.

#### FR-14 Karte und Route

Die Kontaktseite sollte eine Karten- oder Routenverlinkung enthalten.

Aus Datenschutzgründen kann zunächst ein externer Kartenlink verwendet werden, statt automatisch eine eingebettete Karte zu laden.

### 1.2 Anforderungen für spätere Phasen

#### FR-20 Reservierungen

Das System soll Produkt- oder Abholreservierungen ermöglichen.

#### FR-21 Reservierungsverwaltung

Mitarbeiter sollen Reservierungen:

* ansehen,
* bestätigen,
* ablehnen,
* als erledigt markieren können.

#### FR-22 Newsletter

Das System soll Newsletter-Anmeldungen mit Double-Opt-in ermöglichen.

#### FR-23 Newsletter-Integration

Das System soll entweder:

* ein externes Newsletter-System anbinden oder
* Abonnenten in einer eigenen Datenbank verwalten.

Ein professioneller externer Anbieter ist in vielen Fällen die bessere Lösung.

#### FR-24 Gastronomieportal

Geschäftskunden sollen später einen geschützten Zugang erhalten können.

#### FR-25 Bestellfunktionen

Das System kann später um Warenkorb, Checkout, Lieferoptionen und Zahlungsanbieter erweitert werden.


### 1.3 Nichtfunktionale Anforderungen

#### NFR-01 Performance

Die wichtigsten Seiten sollten bei normaler Verbindung schnell laden.

Zielwerte:

* optimierte Bilder,
* minimale unnötige Skripte,
* Seitenaufbau möglichst innerhalb weniger Sekunden,
* gute Core-Web-Vitals-Werte.

#### NFR-02 Sicherheit

Die Anwendung muss mindestens folgende Maßnahmen vorsehen:

* HTTPS,
* sichere Passworthashes,
* serverseitige Eingabevalidierung,
* Schutz vor SQL-Injection,
* Schutz vor Cross-Site-Scripting,
* Schutz vor Cross-Site-Request-Forgery,
* Rate Limiting für Formulare,
* sichere Session-Cookies,
* regelmäßige Backups,
* getrennte Konfiguration für Entwicklung und Produktion.

#### NFR-03 Datenschutz

Es sollen nur notwendige personenbezogene Daten erhoben werden.

Anforderungen:

* transparente Datenschutzerklärung,
* dokumentierte Speicherfristen,
* Löschkonzept,
* Einwilligung bei Newsletter,
* kein unnötiges Tracking,
* datenschutzfreundliche Einbindung externer Dienste.

#### NFR-04 Barrierearmut

Die Webseite sollte:

* ausreichend große Schrift,
* gute Kontraste,
* Tastaturbedienbarkeit,
* Alternativtexte für Bilder,
* verständliche Formularfehler,
* semantische Überschriften verwenden.

#### NFR-05 Wartbarkeit

Code und Datenmodell müssen modular aufgebaut und dokumentiert sein.

#### NFR-06 Erweiterbarkeit

Neue Kategorien, Produkte, Inhalte und Module müssen ohne grundlegenden Umbau ergänzt werden können.

#### NFR-07 Verfügbarkeit

Die Webseite sollte öffentlich dauerhaft erreichbar sein. Datenbank- oder E-Mail-Fehler dürfen nicht zum vollständigen Ausfall der öffentlichen Produktseiten führen.

#### NFR-08 Browserunterstützung

Unterstützt werden sollen aktuelle Versionen von:

* Chrome,
* Safari,
* Firefox,
* Edge,
* mobilen Browsern auf Android und iOS.