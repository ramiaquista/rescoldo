import ImagePlaceholder from "../components/ImagePlaceholder";
import { waLink } from "../config";

export default function Sobre() {
  return (
    <>
      <section style={{ padding: "var(--space-7) 0 var(--space-7)", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,0.9fr)", gap: "var(--space-7)", alignItems: "center" }}>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Nuestra historia</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(32px,4.2vw,50px)", lineHeight: 1.1, margin: 0 }}>Somos el amigo que sabe de asados, no la ferretería de la esquina.</h1>
          <p style={{ fontSize: 16, lineHeight: 1.65, maxWidth: "52ch", margin: "var(--space-5) 0 0", color: "color-mix(in srgb, var(--color-text) 80%, transparent)" }}>Rescoldo nació de una idea simple: conseguir un buen fogonero o asador no debería ser complicado, ni caro, ni una apuesta a ciegas con un vendedor sin nombre. Armamos una línea completa de productos de fuego y asado para que equipar tu patio o terraza sea fácil, con buen rollo y sin sorpresas.</p>
        </div>
        <figure className="washed" style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder label="Foto de una quedada" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
      </section>

      <section style={{ padding: "var(--space-7) 0" }}>
        <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-4)" }}>Cómo somos</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-4)" }}>
          {[
            { k: "Cercana", b: "Hablamos como alguien que también hace asados los domingos, no como un manual técnico." },
            { k: "Confiable", b: "Garantía y seriedad de verdad, sin la frialdad de una corporación." },
            { k: "Alegre y social", b: "Todo vuelve a lo mismo: juntarse. El producto es la excusa." },
            { k: "Simple", b: "Sin tecnicismos innecesarios. Directo, claro, con humor cuando corresponde." },
          ].map((x) => (
            <div key={x.k} className="card"><div className="card-kicker">{x.k}</div><p className="card-body">{x.b}</p></div>
          ))}
        </div>
      </section>

      <section id="envios" style={{ padding: "var(--space-7) 0", display: "grid", gridTemplateColumns: "minmax(0,0.9fr) minmax(0,1fr)", gap: "var(--space-7)", alignItems: "center" }}>
        <figure className="washed" style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
          <ImagePlaceholder label="Foto de producto embalado" style={{ width: "100%", aspectRatio: "4/3" }} />
        </figure>
        <div>
          <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-3)" }}>Cómo compras</span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 28, margin: 0 }}>Sabes qué compras, cómo cuidarlo y tienes soporte real</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.65, margin: "var(--space-3) 0 0", maxWidth: "50ch", color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>Fotos reales, medidas y materiales bien especificados en cada ficha. Envíos a toda España y devolución si algo no cierra. Coordinas todo por WhatsApp, con una persona del otro lado — no un bot.</p>
          <a href={waLink()} className="btn btn-primary" style={{ marginTop: "var(--space-5)", display: "inline-block" }} target="_blank" rel="noopener noreferrer">Escríbenos por WhatsApp</a>
        </div>
      </section>

      <section style={{ padding: "var(--space-6) 0 var(--space-8)" }}>
        <blockquote style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(22px,2.4vw,30px)", lineHeight: 1.4, maxWidth: "34ch", margin: 0 }}>“El fuego, fácil, accesible y para todos.”</blockquote>
      </section>
    </>
  );
}
