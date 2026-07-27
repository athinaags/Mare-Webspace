const categories = [
  { name: "Fisch", note: "Frisch · TK · Meeresfrüchte", image: "https://images.unsplash.com/photo-1574137117079-54a7b19b39b7?auto=format&fit=crop&w=1200&q=85" },
  { name: "Fleisch", note: "Rind · Geflügel · Lamm", image: "https://images.unsplash.com/photo-1584048603508-4b31894439a9?auto=format&fit=crop&w=1200&q=85" },
  { name: "Asia", note: "Saucen · Reis · Gewürze", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85" },
  { name: "Wein", note: "Rot · Weiß · Rosé", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=85" },
  { name: "Spirituosen", note: "Klassiker · Spezialitäten", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1200&q=85" },
  { name: "Verschiedenes", note: "Feinkost · Konserven · Mehr", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85" },
];

const bestsellers = [
  { name: "Dorade Royal", meta: "Fisch · mediterraner Klassiker", tag: "Bestseller", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1000&q=85" },
  { name: "Premium Rind", meta: "Fleisch · ausgewählte Zuschnitte", tag: "Gastro-Favorit", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1000&q=85" },
  { name: "Asia Essentials", meta: "Asia · für authentische Küche", tag: "Beliebt", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85" },
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
          <a href="#kontakt">Samstag Exklusiv</a>
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
          <div className="image-note"><span>Heute im Fokus</span><strong>Frische &amp; Auswahl</strong></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Unser Qualitätsversprechen">
        <div><small>01 · Sortiment</small><p>International ausgewählt, lokal für Sie da.</p></div>
        <div><small>02 · Beratung</small><p>Persönlich, erfahren und unkompliziert.</p></div>
        <div><small>03 · Gastronomie</small><p>Verlässlich auch für größere Mengen.</p></div>
      </section>

      <section className="section assortment" id="sortiment">
        <div className="section-heading">
          <div><p className="eyebrow blue">Unser Sortiment</p><h2>Von der Küste<br />bis in die Küche.</h2></div>
          <p>Entdecken Sie unser vielseitiges Angebot. Die konkrete Verfügbarkeit kann saisonal variieren – sprechen Sie uns für aktuelle Ware gerne direkt an.</p>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <a className={`category-card card-${index + 1}`} href="#kontakt" key={category.name}>
              <img src={category.image} alt="" />
              <span className="card-shade" />
              <span className="card-index">0{index + 1}</span>
              <span className="card-copy"><strong>{category.name}</strong><small>{category.note}</small></span>
              <span className="card-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section bestsellers">
        <div className="section-heading compact">
          <div><p className="eyebrow yellow">Ausgewählt für Sie</p><h2>Unsere Bestseller.</h2></div>
          <p>Besonders gefragte Produkte aus unserem Sortiment. Bilder und Produktdetails dienen in dieser ersten Version als Beispiel.</p>
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

      <section className="gastro" id="gastro">
        <div className="gastro-image" />
        <div className="gastro-copy">
          <p className="eyebrow yellow">Für Profis, die Qualität planen</p>
          <h2>Ein starker Partner für Ihre Gastronomie.</h2>
          <p>Ob Restaurant, Hotel, Bar oder Catering: Wir unterstützen Sie mit spezialisiertem Sortiment, größeren Gebinden und direkter Kommunikation.</p>
          <ul>
            <li><span>01</span> Persönliche Sortimentsberatung</li>
            <li><span>02</span> Flexible Mengen &amp; Gebinde</li>
            <li><span>03</span> Lieferungen in Köln &amp; Umgebung</li>
          </ul>
          <a className="button button-yellow" href="mailto:info@mare-atlantico.de">Gastro-Anfrage starten <Arrow /></a>
        </div>
      </section>

      <section className="section about" id="ueber-uns">
        <p className="eyebrow blue">Mare Atlantico</p>
        <div className="about-grid">
          <h2>Geschmack kennt<br /><em>keine Grenzen.</em></h2>
          <div><p className="lead">Wir bringen internationale Spezialitäten und persönliche Beratung an einen Ort.</p><p>Mare Atlantico steht für Qualität, Frische und ein Sortiment, das Profiküchen ebenso begeistert wie neugierige Hobbyköche. Unser Anspruch: gute Produkte verständlich beraten und verlässlich verfügbar machen.</p></div>
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
