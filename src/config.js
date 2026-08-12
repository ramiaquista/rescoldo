// Central place for site-wide contact info. Update before going live.
export const WHATSAPP_NUMBER = "34600000000"; // TODO: real number, digits only, country code first (34 = España)
export const INSTAGRAM_URL = "https://instagram.com"; // TODO: real handle

export function waLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
