const featuredItems = [
  {
    name: 'Velvet Bloom Dress',
    price: '$148',
    tag: 'New Arrival'
  },
  {
    name: 'Aurora Silk Set',
    price: '$126',
    tag: 'Editor’s Pick'
  },
  {
    name: 'Golden Hour Bag',
    price: '$94',
    tag: 'Limited Edition'
  }
];

const services = ['Private styling sessions', 'Express alterations', 'Gift wrapping & concierge'];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">Maison Éclat</div>
          <div className="nav-links">
            <a href="#collection">Collection</a>
            <a href="#story">Story</a>
            <a href="#visit">Visit</a>
          </div>
        </nav>

        <div className="hero-content">
          <div>
            <p className="eyebrow">Boutique • Curated fashion • Timeless elegance</p>
            <h1>Discover pieces that feel like your signature.</h1>
            <p className="hero-text">
              Step into a world of soft tailoring, elevated essentials, and intimate styling support made for modern life.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#collection">Shop the edit</a>
              <a className="btn secondary" href="#story">Our story</a>
            </div>
          </div>
          <div className="hero-card">
            <p>Seasonal Spotlight</p>
            <h3>Parisian inspired layers in rich neutrals.</h3>
            <span>Free local delivery over $150</span>
          </div>
        </div>
      </header>

      <main>
        <section id="collection" className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured collection</p>
            <h2>Pieces designed to move effortlessly from day to evening.</h2>
          </div>
          <div className="card-grid">
            {featuredItems.map((item) => (
              <article className="product-card" key={item.name}>
                <div className="product-badge">{item.tag}</div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button type="button">Add to bag</button>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="section story-section">
          <div>
            <p className="eyebrow">Why clients love us</p>
            <h2>Personalized service shaped around your taste and schedule.</h2>
            <p>
              We blend thoughtful curation with attentive care, helping you build a wardrobe that feels polished, expressive, and easy.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <div key={service} className="service-item">{service}</div>
            ))}
          </div>
        </section>

        <section id="visit" className="section visit-section">
          <div className="visit-card">
            <p className="eyebrow">Visit the boutique</p>
            <h2>Book a private appointment or stop by for a styling consult.</h2>
            <p>Open Tuesday to Sunday • 10:00 AM – 7:00 PM</p>
            <a className="btn primary" href="mailto:hello@maison-eclat.com">Book now</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Maison Éclat • 18 Rue de Lumière • Paris</p>
        <p>hello@maison-eclat.com • +33 1 23 45 67 89</p>
      </footer>
    </div>
  );
}

export default App;
