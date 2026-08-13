import { Link, useParams } from "react-router-dom";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { PRODUCTS, productBySlug, categoryLabel } from "../data/products";
import { waLink } from "../config";

export default function Producto() {
  const { slug } = useParams();
  const product = productBySlug(slug);

  if (!product) {
    return (
      <section style={{ padding: "var(--space-8) 0" }}>
        <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)" }}>Producto no encontrado</h1>
        <Link to="/catalogo" className="btn btn-ghost">Volver al catálogo</Link>
      </section>
    );
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <>
      <div style={{ padding: "var(--space-4) 0", fontSize: 13, color: "color-mix(in srgb, var(--color-text) 65%, transparent)" }}>
        <Link to="/catalogo">Catálogo</Link> / <Link to={`/catalogo#${product.category}`}>{categoryLabel(product.category)}</Link> / {product.name}
      </div>

      <section className="rs-grid-2" style={{ padding: "var(--space-4) 0 var(--space-7)", gap: "var(--space-7)", alignItems: "start" }}>
        <div>
          <figure style={{ margin: 0, borderRadius: "calc(2*var(--radius-lg))", overflow: "hidden" }}>
            <ImagePlaceholder src={product.image} label="Foto principal del producto" style={{ width: "100%", aspectRatio: "1" }} />
          </figure>
          <div className="rs-grid-4" style={{ gap: "var(--space-3)", marginTop: "var(--space-3)" }}>
            {["Foto 2", "Foto 3", "Foto 4", "En uso"].map((l) => (
              <ImagePlaceholder key={l} shape="rounded" label={l} style={{ width: "100%", aspectRatio: "1" }} />
            ))}
          </div>
        </div>

        <div>
          <span className="tag tag-accent" style={{ marginBottom: "var(--space-3)", display: "inline-block" }}>{categoryLabel(product.category)}</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: "clamp(28px,3.4vw,38px)", margin: 0 }}>{product.name}</h1>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "color-mix(in srgb, var(--color-text) 78%, transparent)", margin: "var(--space-3) 0 0", maxWidth: "48ch" }}>{product.desc}</p>

          <div style={{ margin: "var(--space-5) 0", fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 22 }}>Consultar precio</div>

          <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
            <a href={waLink(`Hola! Quiero consultar por el ${product.name}`)} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
            <Link to="/catalogo" className="btn btn-ghost">Volver al catálogo</Link>
          </div>

          <div style={{ marginTop: "var(--space-7)", display: "grid", gap: "var(--space-5)" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 18, margin: "0 0 var(--space-2)" }}>Medidas y materiales</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>{product.measures}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 18, margin: "0 0 var(--space-2)" }}>Envíos y devoluciones</h3>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "color-mix(in srgb, var(--color-text) 78%, transparent)" }}>Envío a toda España. Puedes devolverlo dentro de los 10 días si no es lo que esperabas — sin vueltas.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--space-6) 0 var(--space-8)" }}>
        <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: "var(--font-heading-weight)", fontSize: 24, margin: "0 0 var(--space-4)" }}>También te puede interesar</h2>
        <div className="rs-grid-4" style={{ gap: "var(--space-4)" }}>
          {related.map((p) => (
            <Link key={p.slug} to={`/producto/${p.slug}`} className="card" style={{ textDecoration: "none", color: "inherit", padding: 0, overflow: "hidden" }}>
              <ImagePlaceholder src={p.image} label={p.name} style={{ width: "100%", aspectRatio: "1" }} />
              <div style={{ padding: "var(--space-3)" }}><div className="card-title" style={{ fontSize: 16 }}>{p.name}</div></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
