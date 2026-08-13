import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { waLink, INSTAGRAM_URL } from "../config";

function NavItem({ to, end, children, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      style={({ isActive }) => (isActive ? { color: "var(--color-accent)" } : undefined)}
    >
      {children}
    </NavLink>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "var(--font-body)", minHeight: "100vh" }}>
      <nav className="nav" style={{ paddingInline: "max(var(--space-6), calc((100% - 1200px)/2 + var(--space-6)))" }}>
        <Link to="/" className="nav-brand" onClick={close} style={{ background: "var(--color-neutral-900)", borderRadius: "var(--radius-sm)", padding: "6px 10px", lineHeight: 0 }}>
          <img src="/brand/logo-full.png" alt="AR Fuegos" style={{ height: 26, width: "auto", display: "block" }} />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6 18 18M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <div className={`nav-links${open ? " open" : ""}`}>
          <NavItem to="/" end onClick={close}>Inicio</NavItem>
          <NavItem to="/catalogo" onClick={close}>Catálogo</NavItem>
          <NavItem to="/sobre" onClick={close}>Nosotros</NavItem>
          <a href={waLink()} className="btn btn-primary" target="_blank" rel="noopener noreferrer" onClick={close}>Escríbenos</a>
        </div>
      </nav>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-6)" }}>{children}</div>

      <footer style={{ borderTop: "1px solid var(--color-neutral-200)", padding: "var(--space-7) 0" }}>
        <div className="rs-grid-4-tight" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 var(--space-6)", gap: "var(--space-6)" }}>
          <div>
            <div style={{ display: "inline-block", background: "var(--color-neutral-900)", borderRadius: "var(--radius-sm)", padding: "6px 10px", marginBottom: "var(--space-3)", lineHeight: 0 }}>
              <img src="/brand/logo-full.png" alt="AR Fuegos" style={{ height: 24, width: "auto", display: "block" }} />
            </div>
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
            <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "var(--space-3)", color: "color-mix(in srgb, var(--color-text) 70%, transparent)" }}>AR Fuegos</div>
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
        <div style={{ maxWidth: 1200, margin: "var(--space-6) auto 0", padding: "0 var(--space-6)", fontSize: 13, color: "color-mix(in srgb, var(--color-text) 60%, transparent)" }}>© 2026 AR Fuegos. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}
