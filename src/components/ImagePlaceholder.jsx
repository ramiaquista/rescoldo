const RADIUS = { rect: "0", rounded: "16px", circle: "50%", pill: "999px" };

// Two layers on purpose: aspect-ratio lives on a plain block box (outer),
// centering lives on an absolutely-positioned flex box (inner). Some
// browsers mis-size an element that is BOTH a flex container AND sized by
// aspect-ratio when its parent is a stretch-aligned grid track — the
// aspect-ratio gets ignored and the box stretches to the row height
// instead. Splitting the two responsibilities across two elements avoids
// that interaction entirely.
export default function ImagePlaceholder({ shape = "rounded", label = "Imagen", style }) {
  return (
    <div
      className="img-placeholder"
      style={{
        position: "relative",
        borderRadius: RADIUS[shape] ?? RADIUS.rounded,
        background: "var(--color-neutral-200)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--color-text)",
          opacity: 0.55,
          fontSize: 13,
          padding: 8,
          boxSizing: "border-box",
        }}
      >
        {label}
      </div>
    </div>
  );
}
