/**
 * Derives a URL-safe slug from a person's name.
 * Normalizes unicode, strips diacritics, lowercases, and kebab-cases.
 * Never stored in data — always derived at runtime/build time.
 */
export function toSlug(name: string): string {
  return name
    .normalize("NFD")                   // decompose accented chars (é → e + ́)
    .replace(/[\u0300-\u036f]/g, "")    // strip combining diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")       // remove non-alphanumeric (except spaces/hyphens)
    .trim()
    .replace(/[\s]+/g, "-")             // spaces → hyphens
    .replace(/-+/g, "-");               // collapse multiple hyphens
}
