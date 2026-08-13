import ImagePlaceholder from "../components/ImagePlaceholder";
import { waLink } from "../config";

export default function Sobre() {
  return (
    <>
      <section className="rs-grid-2" style={{ padding: "var(--space-7) 0 var(--space-7)", gap: "var(--space-7)", alignItems: "center" }}>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Nuestra historia</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(32px,4.2vw,50px)", lineHeight: 1.1, margin: 0 }}>Somos el amigo que sabe de asados, no la ferretería de la esquina.</h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, maxWidth: "52ch", margin: "var(--space-5) 0 0", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>AR Fuegos nació de una idea simple: conseguir un buen fogonero o asador no debería ser complicado, ni caro, ni una apuesta a ciegas con un vendedor sin nombre. Armamos una línea completa de productos de fuego y asado para que equipar tu patio o terraza sea fácil, con buen rollo y sin sorpresas.</p>
        </div>
        <figure style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder src="/products/hero-main.webp" label="Foto de una quedada" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
      </section>

      <section className="rs-grid-2" style={{ padding: "var(--space-7) 0", gap: "var(--space-7)", alignItems: "center" }}>
        <figure style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder src="/products/fogonero-3.webp" label="Detalle de soldadura a mano" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Cómo lo hacemos</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(24px,2.8vw,32px)", margin: 0, maxWidth: "20ch" }}>Cada pieza sale de un taller, no de una línea de producción</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, margin: "var(--space-4) 0 0", maxWidth: "48ch", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>Trabajamos el hierro y el acero a mano: se corta, se suelda y se pule pieza por pieza. Por eso tu fogonero no va a ser idéntico al de al lado — una veta distinta en el óxido, una marca de soldadura que cuenta que alguien lo hizo con las manos, no una máquina en serie.</p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, margin: "var(--space-3) 0 0", maxWidth: "48ch", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>Así se hacían los fogoneros de toda la vida. Así los seguimos haciendo.</p>
        </div>
      </section>

      <section className="rs-band rs-logo-watermark" style={{ padding: "var(--space-7) 0" }}>
        <div className="rs-band-inner">
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Cómo somos</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(24px,2.8vw,32px)", margin: "0 0 var(--space-6)", maxWidth: "38ch" }}>Cuatro cosas que no cambiamos</h2>

          <div className="rs-grid-4-tight" style={{ gap: "var(--space-4)" }}>
            {[
              {
                bg: "var(--color-accent-100)", fg: "var(--color-accent-700)",
                icon: <path d="M12 20.5 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9a4.6 4.6 0 0 1 6.5 6.5L12 20.5z" strokeLinejoin="round" />,
                k: "Cercana", b: "Hablamos como alguien que también hace asados los domingos, no como un manual técnico.",
              },
              {
                bg: "var(--color-accent-2-200)", fg: "var(--color-accent-2-700)",
                icon: <><path d="M12 3.5 19 6.5v5c0 4.2-3 6.9-7 8.5-4-1.6-7-4.3-7-8.5v-5l7-3z" strokeLinejoin="round" /><path d="m9 12 2 2 4-4.2" /></>,
                k: "Confiable", b: "Garantía y seriedad de verdad, sin la frialdad de una corporación.",
              },
              {
                bg: "var(--color-accent-100)", fg: "var(--color-accent-700)",
                icon: <><circle cx="8.5" cy="9" r="2.6" /><circle cx="16" cy="9.5" r="2.1" /><path d="M3.5 19c.6-3 2.5-4.6 5-4.6s4.4 1.6 5 4.6" /><path d="M13.5 14.6c2.1.1 3.8 1.6 4.3 4.4" /></>,
                k: "Alegre y social", b: "Todo vuelve a lo mismo: juntarse. El producto es la excusa.",
              },
              {
                bg: "var(--color-accent-2-200)", fg: "var(--color-accent-2-700)",
                icon: <path d="M13 3 5 13.5h5.5L11 21l8-10.8h-5.7L13 3Z" strokeLinejoin="round" />,
                k: "Simple", b: "Sin tecnicismos innecesarios. Directo, claro, con humor cuando corresponde.",
              },
            ].map((x) => (
              <div key={x.k} className="feature-card elev-sm" style={{ padding: "var(--space-5)", background: "var(--color-bg)" }}>
                <div className="feature-icon" style={{ width: 44, height: 44, background: x.bg, color: x.fg, marginBottom: "var(--space-3)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">{x.icon}</svg>
                </div>
                <div className="card-kicker">{x.k}</div>
                <p className="card-body" style={{ marginTop: 4 }}>{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="envios" className="rs-grid-2" style={{ padding: "var(--space-7) 0", gap: "var(--space-7)", alignItems: "center" }}>
        <figure style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder src="/products/packaging-1.jpg" label="Foto de producto embalado" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Cómo compras</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 28, margin: 0 }}>Sabes qué compras, cómo cuidarlo y tienes soporte real</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, margin: "var(--space-3) 0 0", maxWidth: "50ch", color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>Fotos reales, medidas y materiales bien especificados en cada ficha. Envíos a toda España y devolución si algo no cierra. Coordinas todo por WhatsApp, con una persona del otro lado — no un bot.</p>
          <a href={waLink()} className="btn btn-primary" style={{ marginTop: "var(--space-5)", display: "inline-block" }} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
        </div>
      </section>

      <section className="rs-band" style={{ padding: "var(--space-7) 0" }}>
        <div className="rs-band-inner">
          <blockquote style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.4, maxWidth: "34ch", margin: 0 }}>“El fuego, fácil, accesible y para todos.”</blockquote>
        </div>
      </section>
    </>
  );
}
