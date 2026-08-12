import { Link, NavLink } from "react-router-dom";
import { waLink, INSTAGRAM_URL } from "../config";

function NavItem({ to, end, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      style={({ isActive }) => (isActive ? { color: "var(--color-accent)" } : undefined)}
    >
      {children}
    </NavLink>
  );
}

export default function Layout({ children }) {
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <nav className="nav" style={{ paddingInline: "max(var(--space-6), calc((100% - 1200px)/2 + var(--space-6)))" }}>
        <Link to="/" className="nav-brand">Rescoldo</Link>
        <NavItem to="/" end>Inicio</NavItem>
        <NavItem to="/catalogo">Catálogo</NavItem>
        <NavItem to="/sobre">Nosotros</NavItem>
        <a href={waLink()} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Escríbenos</a>
      </nav>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-6)" }}>{children}</div>

      <footer style={{ borderTop: "1px solid var(--color-neutral-200)", padding: "var(--space-7) 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-6)", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "var(--space-6)" }}>
          <div>
            <span className="nav-brand" style={{ display: "block", marginBottom: "var(--space-2)" }}>Rescoldo</span>
            <p style={{ margin: 0, fontSize: 14, color: "color-mix(in srgb, var(--color-text) 70%, transparent)", maxWidth: "32ch" }}>Fogoneros y asadores para juntarte con los tuyos, sin gastar de más.</p>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-3)", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>Catálogo</div>
            <div style={{ display: "grid", gap: "var(--space-2)", fontSize: 14 }}>
              <Link to="/catalogo#fogoneros">Fogoneros</Link>
              <Link to="/catalogo#braseros">Braseros</Link>
              <Link to="/catalogo#asadores-fijos">Asadores fijos</Link>
              <Link to="/catalogo#parrillas-portatiles">Parrillas portátiles</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-3)", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>Rescoldo</div>
            <div style={{ display: "grid", gap: "var(--space-2)", fontSize: 14 }}>
              <Link to="/sobre">Nuestra historia</Link>
              <Link to="/sobre#envios">Envíos y devoluciones</Link>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-3)", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>Síguenos</div>
            <div style={{ display: "grid", gap: "var(--space-2)", fontSize: 14 }}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: "var(--space-6) auto 0", padding: "0 var(--space-6)", fontSize: 13, color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>© 2026 Rescoldo. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
