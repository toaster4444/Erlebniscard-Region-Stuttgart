export function googleMapsLinkFromQuery(query: string) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

export function normalize(s: string) {
  return s.trim().toLowerCase();
}
