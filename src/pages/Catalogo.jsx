import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { CATEGORIES, productsByCategory } from "../data/products";

export default function Catalogo() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <>
      <section style={{ padding: "var(--space-7) 0 var(--space-5)" }}>
        <span style={{ display: "block", fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600, color: "var(--color-accent-700)", marginBottom: "var(--space-2)" }}>Catálogo</span>
        <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(32px,4vw,48px)", margin: 0 }}>Todo para encender fuego este finde</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, maxWidth: "60ch", margin: "var(--space-3) 0 0", color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>Fotos reales, medidas claras. Elige la categoría o mira todo.</p>
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-5)" }}>
          {CATEGORIES.map((c, i) => (
            <a key={c.id} href={`#${c.id}`} className={`tag chip ${i % 2 === 0 ? "tag-accent" : "tag-accent-2"}`} style={{ textDecoration: "none" }}>{c.label}</a>
          ))}
        </div>
      </section>

      {CATEGORIES.map((c) => (
        <section key={c.id} id={c.id} style={{ padding: "var(--space-6) 0" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 26, margin: "0 0 var(--space-4)" }}>{c.label}</h2>
          <div className="rs-grid-4" style={{ gap: "var(--space-4)" }}>
            {productsByCategory(c.id).map((p) => (
              <Link key={p.slug} to={`/producto/${p.slug}`} className="card" style={{ textDecoration: "none", color: "inherit", padding: 0, overflow: "hidden" }}>
                <ImagePlaceholder label={p.name} style={{ width: "100%", aspectRatio: "1" }} />
                <div style={{ padding: "var(--space-3)" }}>
                  <div className="card-title" style={{ fontSize: 16 }}>{p.name}</div>
                  <p className="card-body" style={{ margin: "var(--space-1) 0 0" }}>Consultar precio</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
