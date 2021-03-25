export default function resolveProductionUrl(document) {
  return `${process.env.SANITY_STUDIO_PREVIEW_URL}/api/preview/${document._type}/${document.slug.current}?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`
}
