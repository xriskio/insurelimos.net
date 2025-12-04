import { useEffect } from "react";
import { useLocation } from "wouter";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

export function Seo({ title, description, canonical }: SeoProps) {
  const [location] = useLocation();
  const siteUrl = "https://insurelimos.net";
  const fullUrl = canonical || `${siteUrl}${location}`;

  useEffect(() => {
    // Update Title
    document.title = `${title} | InsureLimos`;

    // Update Meta Tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", fullUrl);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:url");
      meta.content = fullUrl;
      document.head.appendChild(meta);
    }

    // Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", fullUrl);

  }, [title, description, fullUrl]);

  return null;
}
