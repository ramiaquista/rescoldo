export const CATEGORIES = [
  { id: "fogoneros", label: "Fogoneros", image: "/products/fogonero-1.jpg" },
  { id: "braseros", label: "Braseros", image: "/products/brasero-1.webp" },
  { id: "asadores-fijos", label: "Asadores fijos", image: "/products/asador-fijo-1.jpg" },
  { id: "parrillas-portatiles", label: "Parrillas portátiles", image: "/products/parrilla-portatil-1.webp" },
  { id: "accesorios", label: "Accesorios", image: "/products/accesorios-1.jpg" },
];

export const PRODUCTS = [
  { slug: "fogonero-redondo-classic", category: "fogoneros", name: "Fogonero Redondo Classic", image: "/products/fogonero-1.jpg",
    desc: "El de siempre, el que no falla. Chapa gruesa, base estable y patas plegables para guardarlo sin que ocupe medio trastero. Aguanta toda la quedada, findes de verano incluidos.",
    measures: "70cm de diámetro x 45cm de alto · Chapa de hierro 1.6mm · Pintura antical · Patas plegables · Peso aproximado 8kg." },
  { slug: "fogonero-cuadrado-compacto", category: "fogoneros", name: "Fogonero Cuadrado Compacto", image: "/products/fogonero-2.jpg",
    desc: "Compacto y prolijo, ideal para patios chicos. Fácil de guardar, fácil de encender.",
    measures: "60cm x 60cm x 40cm de alto · Chapa de hierro 1.6mm · Pintura antical · Peso aproximado 7kg." },
  { slug: "fogonero-xl-para-grupos", category: "fogoneros", name: "Fogonero XL para Grupos", image: "/products/fogonero-3.webp",
    desc: "Para quedadas grandes. Más superficie de fuego, más lugar alrededor.",
    measures: "90cm de diámetro x 50cm de alto · Chapa de hierro 2mm · Pintura antical · Peso aproximado 12kg." },
  { slug: "fogonero-con-grilla", category: "fogoneros", name: "Fogonero con Grilla", image: "/products/fogonero-4.jpg",
    desc: "Fogonero clásico con grilla incluida para cocinar directo sobre las brasas.",
    measures: "70cm de diámetro x 45cm de alto · Grilla desmontable · Chapa de hierro 1.6mm · Peso aproximado 9kg." },
  { slug: "brasero-rustico", category: "braseros", name: "Brasero Rústico", image: "/products/brasero-1.webp",
    desc: "Terminación rústica en hierro, para un rincón con estilo de patio de campo.",
    measures: "55cm de diámetro x 35cm de alto · Hierro forjado · Peso aproximado 6kg." },
  { slug: "brasero-con-parrilla", category: "braseros", name: "Brasero con Parrilla", image: "/products/brasero-1.webp",
    desc: "Dos en uno: calienta y cocina. Parrilla incluida ajustable en altura.",
    measures: "60cm de diámetro x 38cm de alto · Parrilla ajustable · Peso aproximado 8kg." },
  { slug: "brasero-portatil", category: "braseros", name: "Brasero Portátil", image: "/products/brasero-1.webp",
    desc: "Liviano y con asas, para llevar a la costa, el camping o lo de un amigo.",
    measures: "45cm de diámetro x 30cm de alto · Patas plegables · Peso aproximado 4kg." },
  { slug: "brasero-hexagonal", category: "braseros", name: "Brasero Hexagonal", image: "/products/brasero-1.webp",
    desc: "Diseño hexagonal para un patio con estilo distinto.",
    measures: "58cm de diámetro x 36cm de alto · Chapa de hierro 1.6mm · Peso aproximado 7kg." },
  { slug: "asador-fijo-doble-parrilla", category: "asadores-fijos", name: "Asador Fijo Doble Parrilla", image: "/products/asador-fijo-1.jpg",
    desc: "Para instalar y no mover nunca más. Dos parrillas a distinta altura para manejar el fuego con precisión.",
    measures: "120cm x 60cm de base · Dos parrillas cromadas · Estructura de hierro reforzado." },
  { slug: "asador-fijo-con-mesada", category: "asadores-fijos", name: "Asador Fijo con Mesada", image: "/products/asador-fijo-2.jpg",
    desc: "Incluye mesada lateral para apoyar fuentes, tablas y utensilios mientras asas.",
    measures: "140cm x 65cm de base · Mesada de hierro · Parrilla cromada regulable." },
  { slug: "asador-fijo-compacto", category: "asadores-fijos", name: "Asador Fijo Compacto", image: "/products/asador-fijo-1.jpg",
    desc: "Versión compacta para patios chicos que igual quieren un asador de instalación fija.",
    measures: "90cm x 50cm de base · Parrilla cromada · Estructura de hierro." },
  { slug: "parrilla-plegable-camping", category: "parrillas-portatiles", name: "Parrilla Plegable Camping", image: "/products/parrilla-portatil-1.webp",
    desc: "Se pliega en segundos y entra en el maletero. La solución para el asado improvisado.",
    measures: "40cm x 30cm plegada · Acero inoxidable · Peso aproximado 2.5kg." },
  { slug: "parrilla-portatil-a-gas", category: "parrillas-portatiles", name: "Parrilla Portátil a Gas", image: "/products/parrilla-portatil-2.jpg",
    desc: "Encendido instantáneo, sin carbón ni espera. Para cuando el tiempo apremia.",
    measures: "50cm x 35cm · Conexión a garrafa · Encendido piezoeléctrico." },
  { slug: "parrilla-portatil-carbon", category: "parrillas-portatiles", name: "Parrilla Portátil Carbón", image: "/products/parrilla-portatil-3.webp",
    desc: "El sabor de siempre, en formato chico y transportable.",
    measures: "45cm de diámetro x 25cm de alto · Patas plegables · Peso aproximado 3kg." },
  { slug: "set-de-utensilios-x5", category: "accesorios", name: "Set de Utensilios x5", image: "/products/accesorios-1.jpg",
    desc: "Todo lo que necesitas para manejar el fuego y servir: pinza, espátula, tenedor, cuchillo y cepillo.",
    measures: "5 piezas · Mango de madera · Acero inoxidable." },
  { slug: "pinza-y-atizador", category: "accesorios", name: "Pinza y Atizador", image: "/products/accesorios-1.jpg",
    desc: "Los dos imprescindibles para mover brasas y acomodar la leña sin quemarte.",
    measures: "2 piezas · 45cm de largo · Acero." },
  { slug: "guantes-ignifugos", category: "accesorios", name: "Guantes Ignífugos", image: "/products/accesorios-1.jpg",
    desc: "Protección real para manipular parrillas, ollas y leña caliente.",
    measures: "Par · Resisten hasta 500°C · Talla única." },
];

export function productBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(categoryId) {
  return PRODUCTS.filter((p) => p.category === categoryId);
}

export function categoryLabel(categoryId) {
  return CATEGORIES.find((c) => c.id === categoryId)?.label ?? categoryId;
}
