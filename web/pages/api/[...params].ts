import { NextApiRequest, NextApiResponse } from "next";
import { getArticleWithSlug } from "../../lib/sanity/api/articles";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.params ||
    req.query.params.length !== 2
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const [type, slug] = req.query.params as Array<string>;

  if (!type || !slug) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  let document, documentPath;
  // Fetch the headless CMS to check if the provided `_id` exists
  switch (type) {
    case "article":
      document = await getArticleWithSlug(slug, true);
      documentPath = "articles";
      break;
    default:
      return res.status(401).json({ message: "Invalid slug" });
  }

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!document) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: `/${documentPath}/${document._id}` });
  res.end();
}
