import "./globals.css";

const PHONE_DISPLAY = "(809) 426-1923";
const PHONE_TEL = "tel:+18094261923";
const WHATSAPP = "https://wa.me/18094261923";
const INSTAGRAM = "https://www.instagram.com/erimaldi12";
const ADDRESS =
  "Calle 2da esq. Pepillo Salcedo, Ensanche Kennedy, Santo Domingo, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Taller%20de%20Mec%C3%A1nica%20y%20Repuestos%20Erimaldi%2C%20Calle%202da%20Pepillo%20Salcedo%2C%20Ensanche%20Kennedy%2C%20Santo%20Domingo&output=embed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "🔧",
    title: "Diagnóstico computarizado",
    text: "Revisamos tu vehículo con equipos de diagnóstico para detectar la falla exacta y resolverla de una vez.",
  },
  {
    icon: "🛢️",
    title: "Cambio de aceite y filtros",
    text: "Mantenimiento preventivo con aceite y filtros de calidad para alargar la vida de tu motor.",
  },
  {
    icon: "🛑",
    title: "Sistema de frenos",
    text: "Revisión y cambio de bandas, discos y líquido de frenos para que frenes con total seguridad.",
  },
  {
    icon: "⚙️",
    title: "Transmisión",
    text: "Reparamos y damos mantenimiento a transmisiones automáticas y mecánicas de vehículos americanos, japoneses, coreanos y europeos.",
  },
  {
    icon: "❄️",
    title: "Aire acondicionado",
    text: "Carga, reparación y mantenimiento del sistema de climatización para andar fresco siempre.",
  },
  {
    icon: "🔩",
    title: "Venta de repuestos",
    text: "Repuestos para tu vehículo disponibles en el mismo taller: rápido, seguro y sin vueltas.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">🔧</span>
            <span className="brand-name">
              Taller Erimaldi
              <small>Mecánica y repuestos · Ensanche Kennedy</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">🔧 Taller mecánico en Ensanche Kennedy</span>
              <h1>
                Tu vehículo en <span>manos expertas</span>
              </h1>
              <p className="lead">
                Reparamos todo tipo de vehículos americanos, japoneses, coreanos
                y europeos. Diagnóstico honesto, repuestos en el mismo taller y
                trabajo garantizado en el corazón de Santo Domingo.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Cotiza por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Ensanche Kennedy</strong>
                  Santo Domingo, D.N.
                </div>
                <div>
                  <strong>🕘 Lun–Sáb 9am–6pm</strong>
                  Domingo cerrado
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Tu carro necesita revisión?</h2>
              <p>
                Escríbenos por WhatsApp, cuéntanos qué le pasa a tu vehículo y
                te damos una cotización sin compromiso.
              </p>
              <ul className="hours-list">
                <li>
                  <span>Lunes – Sábado</span>
                  <span>9:00 am – 6:00 pm</span>
                </li>
                <li>
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Pedir mi cotización
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Mecánica integral para tu vehículo</h2>
              <p>
                Desde el diagnóstico hasta los repuestos: todo lo que tu carro
                necesita, en un solo lugar.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--orange-500)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>Un taller de confianza en Ensanche Kennedy</h2>
              <p>
                El Taller de Mecánica y Repuestos Erimaldi es un taller
                automotriz ubicado en Ensanche Kennedy, Santo Domingo,
                especializado en la reparación de vehículos americanos,
                japoneses, coreanos y europeos.
              </p>
              <p>
                Nuestro enfoque es directo: diagnóstico honesto, precio justo y
                repuestos disponibles en el mismo taller para que no pierdas
                tiempo buscando piezas.
              </p>
              <ul className="about-points">
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Todas las marcas:</strong> americanos, japoneses,
                    coreanos y europeos.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Repuestos en el taller:</strong> piezas sin tener
                    que salir a buscarlas.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Cotización por WhatsApp:</strong> escríbenos y te
                    respondemos rápido.
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Mecánico trabajando en el taller" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="Trabajo en el taller Erimaldi" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>
                    Lunes a sábado: 9:00 am – 6:00 pm
                    <br />
                    Domingos: cerrado
                  </p>
                </div>
                <div className="info-card">
                  <h3>🚗 Cómo llegar</h3>
                  <p>
                    Estamos en la Calle 2da esquina Pepillo Salcedo, en el
                    Ensanche Kennedy. Abre el mapa para ver la ruta desde tu
                    ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Taller de Mecánica y Repuestos Erimaldi"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Cotiza hoy mismo</h2>
              <p>
                Escríbenos por WhatsApp o llámanos: te atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Pide tu cotización aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Llámanos en horario de taller →</div>
              </a>
              <a className="contact-card" href={INSTAGRAM} target="_blank" rel="noreferrer">
                <div className="label">Instagram</div>
                <div className="value">@erimaldi12</div>
                <div className="hint">Mira nuestros trabajos →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Taller de Mecánica y Repuestos Erimaldi</strong>
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY}
            </div>
            <div>
              <strong>Horario</strong>
              Lun–Sáb 9:00 am – 6:00 pm
              <br />
              Dom cerrado
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los servicios mostrados son categorías generales de mecánica
            automotriz y pueden ajustarse a la oferta real del taller.
          </p>
        </div>
      </footer>
    </>
  );
}
