const categories = [
  { name: "Fisch", image: "https://images.unsplash.com/photo-1574137117079-54a7b19b39b7?auto=format&fit=crop&w=1200&q=85" },
  { name: "Fleisch", image: "https://images.unsplash.com/photo-1584048603508-4b31894439a9?auto=format&fit=crop&w=1200&q=85" },
  { name: "Asia", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" },
  { name: "Exklusive Spezialitäten", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1400&q=90" },
  { name: "Wein", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85" },
  { name: "Spirituosen", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=85" },
  { name: "Obst & Gemüse", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85" },
  { name: "Verschiedenes", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85" },
];

const bestsellers = [
  { name: "Dorade Royal", meta: "Fisch · mediterraner Klassiker", tag: "Bestseller", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1000&q=85" },
  { name: "Premium Rind", meta: "Fleisch · ausgewählte Zuschnitte", tag: "Gastro-Favorit", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1000&q=85" },
  { name: "Asia Essentials", meta: "Asia · für authentische Küche", tag: "Beliebt", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85" },
  { name: "Kaviar Selection", meta: "Exklusives · feinste Auswahl", tag: "Premium", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1000&q=85" },
  { name: "Königskrabbe", meta: "Fisch · besondere Qualität", tag: "Exklusiv", image: "https://images.unsplash.com/photo-1574137117079-54a7b19b39b7?auto=format&fit=crop&w=1000&q=85" },
  { name: "Primitivo Riserva", meta: "Wein · vollmundig und elegant", tag: "Empfehlung", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=85" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="announcement-copy">Frische Auswahl für Köln &amp; Umgebung</span>
        <span className="certifications" aria-label="Zertifizierungen">
          <img
            src="/fairtrade-mark.svg"
            alt="Fairtrade"
          />
          <img
            src="/asc-certified.png"
            alt="ASC zertifiziert"
          />
        </span>
      </div>
      <header className="site-header">
        <a className="header-logo" href="#start" aria-label="Mare Atlantico Startseite">
          <img src="/mare-atlantico-logo.png" alt="Mare Atlantico – Feinkost aus aller Welt für Gastronomie und Privatkunden" />
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#sortiment">Sortiment</a>
          <a href="#samstag-exklusiv">Täglich &amp; Samstag</a>
          <a href="#gastro">Für Gastronomen</a>
          <a href="#ueber-uns">Über uns</a>
        </nav>
        <a className="header-cta" href="#kontakt">Kontakt <Arrow /></a>
      </header>

      <section className="hero" id="start">
        <div className="hero-copy">
          <p className="eyebrow">Delikatessen für Köln</p>
          <h1>Gutes kommt von <em>überall.</em></h1>
          <p className="hero-text">Ausgewählte Lebensmittel, frischer Fisch, Fleisch, Asia-Spezialitäten, Wein und Spirituosen, für Gastronomie und Privatkunden.</p>
          <div className="button-row">
            <a className="button button-yellow" href="#sortiment">Sortiment entdecken <Arrow /></a>
            <a className="text-link" href="#kontakt">Besuch planen <span>↓</span></a>
          </div>
          <div className="hero-facts">
            <div><strong>6</strong><span>Sortimentswelten</span></div>
            <div><strong>Köln</strong><span>lokal erreichbar</span></div>
            <div><strong>B2B + B2C</strong><span>persönlich beraten</span></div>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Frischer Fisch auf Eis">
          <div className="image-note"><span>Im Fokus</span><strong>Frische &amp; Auswahl</strong></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Unser Qualitätsversprechen">
        <div><small>Sortiment</small><p>International ausgewählt, lokal für Sie da.</p></div>
        <div><small>Familienbetrieb</small><p>Über 50 Jahre Erfahrung, gewachsen über drei Generationen.</p></div>
        <div><small>Gastronomie</small><p>Verlässlich auch für größere Mengen.</p></div>
        <div><small>Privatkunden</small><p>Kulinarische Vielfalt entdecken und vor Ort erleben.</p></div>
      </section>

      <section className="section assortment" id="sortiment">
        <div className="section-heading">
          <div><p className="eyebrow blue">Kleiner Einblick in unser Sortiment</p><h2>Von der Küste<br />bis in die Küche.</h2></div>
          <p>Erhalten Sie einen kleinen Einblick in unser vielseitiges Sortiment. Insgesamt bieten wir über 1.000 verschiedene Produkte an. Bei Fragen zu bestimmten Produkten oder zur aktuellen Verfügbarkeit sprechen Sie uns gerne direkt an.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <a className={`category-card card-${index + 1}`} href="#kontakt" key={category.name}>
              <img src={category.image} alt="" />
              <span className="card-shade" />
              <span className="card-copy"><strong>{category.name}</strong></span>
              <span className="card-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section bestsellers">
        <div className="section-heading compact">
          <div><p className="eyebrow yellow">Ausgewählt für Sie</p><h2>Unsere Bestseller.</h2></div>
          <p>Besonders gefragte Produkte aus unserem Sortiment.</p>
        </div>
        <div className="product-grid">
          {bestsellers.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-image"><img src={product.image} alt="" /><span>{product.tag}</span></div>
              <div className="product-info"><div><h3>{product.name}</h3><p>{product.meta}</p></div><a href="#kontakt" aria-label={`${product.name} anfragen`}><Arrow /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="saturday" id="samstag-exklusiv">
        <div className="saturday-heading">
          <div>
            <p className="eyebrow blue">Genuss bei Mare Atlantico</p>
            <h2>Täglich genießen.<br />Samstags exklusiv.</h2>
          </div>
          <div>
            <p className="saturday-lead">Ciabattas, Platten, Kaffee und ausgewählte Getränke genießen Sie bei uns an jedem Öffnungstag.</p>
            <p>Samstags wird Mare Atlantico zum besonderen kulinarischen Treffpunkt. In entspannter Atmosphäre servieren wir zusätzlich Austern, Tartare, Hummer und Pulpo.</p>
          </div>
        </div>

        <div className="saturday-gallery" aria-label="Samstags bei Mare Atlantico">
          <figure className="saturday-photo saturday-photo-main">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=88" alt="Einladende Atmosphäre mit gedeckten Tischen" />
            <figcaption>Zusammenkommen &amp; genießen</figcaption>
          </figure>
          <figure className="saturday-photo">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=88" alt="Frisch zubereitete Ciabattas" />
            <figcaption>Frisch aus unserer Theke</figcaption>
          </figure>
          <figure className="saturday-photo">
            <img src="https://images.unsplash.com/photo-1715249792892-ec2689ab016e?auto=format&fit=crop&w=1000&q=88" alt="Austern und Champagner auf einem gedeckten Tisch" />
            <figcaption>Austern &amp; feine Begleiter</figcaption>
          </figure>
        </div>

        <div className="saturday-details">
          <div className="saturday-menu">
            <p className="detail-label">Täglich für Sie</p>
            <h3>Genuss an jedem Öffnungstag.</h3>
            <ul className="menu-list">
              <li>Ciabattas in verschiedenen Variationen</li>
              <li>Käse und Schinkenplatten</li>
              <li>Kaffee und Softdrinks</li>
              <li>Champagner, Prosecco und ausgewählte Weine</li>
            </ul>
            <div className="season-note"><span>Im Sommer täglich</span><strong>Aperol Spritz &amp; Lillet Spritz</strong></div>
          </div>
          <div className="saturday-drinks">
            <p className="detail-label">Samstags zusätzlich</p>
            <h3>Besondere Meeresküche.</h3>
            <ul className="menu-list">
              <li>Frische Austern</li>
              <li>Thunfisch und Lachstatar</li>
              <li>Pulposalat</li>
              <li>Halber Hummer</li>
            </ul>
          </div>
          <aside className="reservation-card">
            <p className="detail-label">Tischreservierung</p>
            <h3>Am liebsten samstags.</h3>
            <p>Reservierungen nehmen wir ab fünf Personen entgegen. Für besondere Anlässe können Sie nach Absprache auch unter der Woche reservieren. Ihre individuellen Wünsche können Sie direkt bei der Anfrage angeben.</p>
            <div className="reservation-actions">
              <a href="#kontakt">Telefonisch anfragen <Arrow /></a>
              <a href="mailto:info@mare-atlantico.de?subject=Reservierungsanfrage%20Samstag%20Exklusiv">Per E-Mail reservieren <Arrow /></a>
            </div>
            <div className="counter-hours">
              <small>Öffnungszeiten Kaffee und Feinkosttheke</small>
              <strong>[Uhrzeit ergänzen]</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="gastro" id="gastro">
        <div className="gastro-image" />
        <div className="gastro-copy">
          <p className="eyebrow yellow">Für Profis, die Qualität planen</p>
          <h2>Ein starker Partner für Ihre Gastronomie.</h2>
          <p>Ob Restaurant, Hotel, Bar oder Café: Wir unterstützen Sie mit spezialisiertem Sortiment, flexiblen Mengen und direkter Kommunikation. Für den Einkauf als Gastronomiekunde legen Sie vorab ein Geschäftskundenkonto bei uns an.</p>
          <ul>
            <li><span>01</span> Persönliche Sortimentsberatung</li>
            <li><span>02</span> Flexible Mengen &amp; angepasste Preise</li>
            <li><span>03</span> Lieferungen in Köln &amp; Umgebung</li>
            <li><span>04</span> Geschäftskundenkonto für Gastronomiekunden</li>
          </ul>
          <a className="button button-yellow" href="mailto:info@mare-atlantico.de">Gastro-Anfrage starten <Arrow /></a>
        </div>
      </section>

      <section className="section about" id="ueber-uns">
        <p className="eyebrow blue">Über uns</p>

        <div className="about-feature">
          <blockquote className="chef-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>[Persönliches Zitat des Geschäftsführers ergänzen]</p>
            <cite>[Name des Geschäftsführers] · Mare Atlantico</cite>
          </blockquote>
          <div className="chef-video" role="img" aria-label="Platzhalter für das Video des Geschäftsführers">
            <span className="play-symbol" aria-hidden="true">▶</span>
            <div><small>Persönliche Einblicke</small><strong>Video des Geschäftsführers folgt</strong></div>
          </div>
        </div>

        <div className="history">
          <div className="history-copy">
            <p className="detail-label">Unsere Geschichte</p>
            <h2>Über 50 Jahre.<br />Drei Generationen.</h2>
            <p className="history-lead">Was mit dem Gründer der Familie begann, wird heute mit derselben Leidenschaft und neuen Ideen weitergeführt.</p>
            <p>Seit mehr als fünf Jahrzehnten steht Mare Atlantico für persönliche Beziehungen, besondere Lebensmittel und die Freude daran, Qualität mit anderen zu teilen. Aus dem Lebenswerk des Großvaters ist ein Familienunternehmen über drei Generationen gewachsen.</p>
          </div>
          <div className="founder-gallery" aria-label="Historische Fotos des Gründers">
            <div className="founder-photo founder-photo-large"><span>Gründerfoto<br />ergänzen</span></div>
            <div className="founder-photo"><span>Historisches Foto<br />ergänzen</span></div>
            <div className="founder-photo"><span>Familienfoto<br />ergänzen</span></div>
          </div>
        </div>
      </section>

      <section className="voices" aria-labelledby="voices-title">
        <div className="voices-heading">
          <div>
            <p className="eyebrow yellow">Stimmen &amp; Presse</p>
            <h2 id="voices-title">Was andere<br />über uns sagen.</h2>
          </div>
          <p>Persönliche Eindrücke unserer Kundschaft und redaktionelle Beiträge über Mare Atlantico in Köln.</p>
        </div>

        <div className="review-grid">
          <article className="review-card">
            <div className="review-stars" aria-label="5 von 5 Sternen">★★★★★</div>
            <blockquote>„Wie ein kleiner Urlaub, dort einzukaufen. Tolle Auswahl an Fisch und Fleisch.“</blockquote>
            <div><strong>Lu</strong><span>Kundenbewertung bei STILPUNKTE</span></div>
          </article>
          <article className="review-card">
            <div className="review-stars" aria-label="5 von 5 Sternen">★★★★★</div>
            <blockquote>„Immer wieder frisches Fleisch und Fisch. Alle sind sehr nett und zuvorkommend.“</blockquote>
            <div><strong>Manfred Geritz</strong><span>Kundenbewertung bei STILPUNKTE</span></div>
          </article>
        </div>

        <div className="press-grid">
          <a className="press-card press-ksta" href="https://www.ksta.de/koeln/am-koelner-grossmarkt-fischladen-ist-in-location-175608" target="_blank" rel="noreferrer">
            <span className="press-source">Kölner Stadt-Anzeiger</span>
            <div><small>Porträt · 2022</small><h3>Wie aus einem Fischladen eine In-Location wurde</h3><p>Ein ausführlicher Blick auf Auswahl, Atmosphäre, Familie und die Entwicklung von Mare Atlantico.</p></div>
            <span className="press-arrow"><Arrow /></span>
          </a>
          <a className="press-card press-ksta-light" href="https://www.ksta.de/freizeit/geniessen/mediterrane-supermaerkte-in-koeln-einkaufen-und-essen-wie-im-urlaub-317273" target="_blank" rel="noreferrer">
            <span className="press-source">Kölner Stadt-Anzeiger</span>
            <div><small>Genuss in Köln</small><h3>Mare Atlantico mit Ciabatta-Theke in Köln-Bayenthal</h3><p>Über mediterrane Spezialitäten, Kaffee, Getränke und den Genuss direkt vor Ort.</p></div>
            <span className="press-arrow"><Arrow /></span>
          </a>
          <a className="press-card press-stilpunkte" href="https://www.stilpunkte.de/koeln/eintraege/mare-atlantico-delikatessen-gmbh/" target="_blank" rel="noreferrer">
            <span className="press-source">STILPUNKTE®</span>
            <div><small>Geprüft &amp; ausgezeichnet</small><h3>Eine der besonderen Feinkostadressen in Köln</h3><p>Das Unternehmensporträt mit Sortiment, Auszeichnung und Kundenbewertungen.</p></div>
            <span className="press-arrow"><Arrow /></span>
          </a>
        </div>
      </section>

      <section className="visit" id="kontakt">
        <div>
          <p className="eyebrow yellow">Besuchen Sie uns</p>
          <h2>Ihr Stück Atlantik<br />mitten in Köln.</h2>
          <p className="visit-intro">Die finalen Kontaktdaten und Öffnungszeiten werden vor Veröffentlichung ergänzt.</p>
        </div>
        <div className="contact-panel">
          <div><small>Adresse</small><strong>Mare Atlantico Delikatessen GmbH<br /> Marktstraße 10 - 12 <br /> 50968 Köln</strong></div>
          <div><small>Kontakt</small><strong>Tel.: 0221 / 888 276-0<br /> E-Mail: info@mare-atlantico.de </strong></div>
          <a href="https://maps.google.com/?q=K%C3%B6ln" target="_blank" rel="noreferrer">Route öffnen <Arrow /></a>
        </div>
        <div className="hours-panel">
          <small>Öffnungszeiten</small>
          <div><span>Montag - Mittwoch </span><strong> 06:00 Uhr bis 18:00 Uhr </strong></div>
          <div><span>Donnerstag - Freitag </span><strong> 06:00 Uhr bis 19:00 Uhr </strong></div>
          <div><span>Samstag</span><strong> 06:00 Uhr bis 16:00 Uhr </strong></div>
          <div><span>Sonntag</span><strong>Geschlossen</strong></div>
          <p>Sonderöffnungszeiten können abweichen.</p>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#start"><span className="wordmark-main">MARE</span><span className="wordmark-sub">ATLANTICO · KÖLN</span></a>
        <p>Delikatessen für Gastronomie &amp; Privatkunden.</p>
        <div><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#kontakt">Kontakt</a></div>
        <small>© 2026 Mare Atlantico Delikatessen GmbH</small>
      </footer>
    </main>
  );
}
