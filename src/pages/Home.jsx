import { Link } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { CATEGORIES } from "../data/products";
import { waLink } from "../config";

export default function Home() {
  return (
    <>
      <section className="rs-grid-2" style={{ position: "relative", overflow: "hidden", padding: "calc(var(--space-8)*1.4) 0 var(--space-8)", gap: "var(--space-8)", alignItems: "center" }}>
        <div style={{ position: "absolute", right: -140, top: -160, width: 360, height: 360, borderRadius: "50%", background: "var(--color-accent-2-200)", zIndex: -1 }}></div>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Fogoneros y asadores</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(38px,5.2vw,64px)", lineHeight: 1.08, margin: 0 }}>El fuego, fácil,<br />accesible y para todos.</h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: "46ch", margin: "var(--space-5) 0 0", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>No vendemos hierros. Vendemos la excusa perfecta para juntarse: fogoneros, braseros, asadores y parrillas para que tu patio o terraza esté siempre listo para una buena quedada.</p>
          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
            <a href={waLink()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
            <Link to="/catalogo" className="btn btn-ghost">Ver catálogo</Link>
          </div>
        </div>
        <figure style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder src="/products/hero-main-2.jpg" label="Foto de un asado en uso" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
      </section>

      <section style={{ position: "relative", overflow: "hidden", padding: "var(--space-8) 0" }}>
        <div style={{ position: "absolute", left: -120, bottom: -140, width: 320, height: 320, borderRadius: "50%", background: "var(--color-accent-100)", filter: "blur(10px)", opacity: 0.7, zIndex: -1 }}></div>

        <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Por qué Rescoldo</span>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(26px,3vw,34px)", margin: "0 0 var(--space-6)", maxWidth: "36ch" }}>Todo lo bueno de comprar en una ferretería de barrio, sin salir de casa.</h2>

        <div className="rs-grid-3" style={{ gap: "var(--space-6)" }}>
          {[
            {
              bg: "var(--color-accent-100)", fg: "var(--color-accent-700)",
              icon: <path d="M11.6 3.5 20.5 12.4l-8.1 8.1L3.5 11.6V3.5h8.1z" strokeLinejoin="round" />,
              dot: true,
              title: "Precio de amigo",
              body: "Buena calidad sin pagar de más. Equipa tu patio sin vaciar el bolsillo.",
            },
            {
              bg: "var(--color-accent-2-200)", fg: "var(--color-accent-2-700)",
              icon: <><path d="M12 3.5 20 7.5v6c0 4.5-3.2 7-8 9-4.8-2-8-4.5-8-9v-6l8-4z" strokeLinejoin="round" /><path d="m9 12.2 2 2 4.2-4.4" /></>,
              title: "Compra 100% online",
              body: "Fotos reales, medidas claras y envío a toda España. Sabes qué compras y cómo cuidarlo.",
            },
            {
              bg: "var(--color-accent-100)", fg: "var(--color-accent-700)",
              icon: <path d="M21 11.6a8.6 8.6 0 0 1-12.9 7.4L4 20l1.1-4A8.6 8.6 0 1 1 21 11.6Z" strokeLinejoin="round" />,
              title: "Soporte de verdad",
              body: "Consultas por WhatsApp, respuestas de gente que también hace asado los domingos.",
            },
          ].map((f) => (
            <div key={f.title} className="feature-card elev-sm" style={{ padding: "var(--space-6) var(--space-5)", background: "var(--color-surface)" }}>
              <div className="feature-icon" style={{ background: f.bg, color: f.fg, marginBottom: "var(--space-4)" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                  {f.icon}
                  {f.dot && <circle cx="8.6" cy="8.6" r="1.3" fill="currentColor" stroke="none" />}
                </svg>
              </div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 22, margin: "0 0 var(--space-2)" }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "var(--space-8) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "var(--space-4)", flexWrap: "wrap", marginBottom: "var(--space-5)" }}>
          <div>
            <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-2)" }}>Catálogo</span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 32, margin: 0 }}>Elige tu forma de hacer fuego</h2>
          </div>
          <Link to="/catalogo" className="btn btn-secondary">Ver todo el catálogo</Link>
        </div>
        <div className="rs-grid-5" style={{ gap: "var(--space-4)" }}>
          {CATEGORIES.map((c) => (
            <Link key={c.id} to={`/catalogo#${c.id}`} className="card" style={{ textDecoration: "none", color: "inherit", padding: 0, overflow: "hidden" }}>
              <ImagePlaceholder src={c.image} label={c.label} style={{ width: "100%", aspectRatio: "1" }} />
              <div style={{ padding: "var(--space-3)" }}><span className="card-title" style={{ fontSize: 16 }}>{c.label}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ position: "relative", overflow: "hidden", padding: "var(--space-8) 0" }}>
        <div style={{ position: "absolute", right: -130, top: -60, width: 300, height: 300, borderRadius: "50%", background: "var(--color-accent-2-200)", filter: "blur(10px)", opacity: 0.6, zIndex: -1 }}></div>

        <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Cómo compras</span>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(26px,3vw,34px)", margin: "0 0 var(--space-6)", maxWidth: "36ch" }}>De la idea a tu patio, en tres pasos</h2>

        <div style={{ position: "relative" }}>
          <div className="rs-step-line" style={{ position: "absolute", left: "16.5%", right: "16.5%", top: 27, height: 2, backgroundImage: "repeating-linear-gradient(to right, var(--color-accent-300) 0 10px, transparent 10px 20px)", zIndex: 0 }}></div>

          <div className="rs-grid-3" style={{ gap: "var(--space-5)" }}>
            {[
              { n: "1", title: "Elige tu producto", body: "Medidas, materiales y fotos reales en cada ficha. Sin sorpresas." },
              { n: "2", title: "Coordinamos por WhatsApp", body: "Confirmamos stock, forma de pago y envío. Cuotas disponibles." },
              { n: "3", title: "Te llega a casa", body: "Envíos a toda España. Si algo no cierra, hay devolución." },
            ].map((s) => (
              <div key={s.n} className="feature-card elev-sm" style={{ position: "relative", zIndex: 1, padding: "var(--space-6) var(--space-5) var(--space-5)", background: "var(--color-surface)" }}>
                <div
                  style={{
                    width: 54, height: 54, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--color-bg)", border: "2px solid var(--color-accent)", color: "var(--color-accent-700)",
                    fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 20,
                    marginBottom: "var(--space-4)",
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 19, margin: "0 0 var(--space-2)" }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--space-8) 0 calc(var(--space-8)*1.3)" }}>
        <div className="rs-cta" style={{ background: "var(--color-accent-2-100)", borderRadius: "calc(2*var(--radius-lg))", padding: "var(--space-7) clamp(24px,4vw,56px)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "var(--space-6)", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 26, margin: 0 }}>¿Listo para tu próxima quedada?</h3>
            <p style={{ margin: "var(--space-2) 0 0", fontSize: 15.5, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 78%, transparent)", maxWidth: "56ch" }}>Cuéntanos qué necesitas y te ayudamos a elegir. Respondemos rápido, sin vueltas.</p>
          </div>
          <a href={waLink()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
        </div>
      </section>
    </>
  );
}
