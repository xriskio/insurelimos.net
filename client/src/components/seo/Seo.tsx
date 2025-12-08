import { useEffect } from "react";
import { useLocation } from "wouter";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
}

const SITE_NAME = "InsureLimos";
const SITE_URL = "https://insurelimos.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export function Seo({ 
  title, 
  description, 
  canonical,
  ogType = "website",
  ogImage,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  noindex = false,
}: SeoProps) {
  const [location] = useLocation();
  const fullUrl = canonical || `${SITE_URL}${location}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (selector: string, content: string, attr: "name" | "property" = "name") => {
      let meta = document.querySelector(`meta[${attr}="${selector}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, selector);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const removeMetaTag = (selector: string, attr: "name" | "property" = "name") => {
      const meta = document.querySelector(`meta[${attr}="${selector}"]`);
      if (meta) meta.remove();
    };

    updateMetaTag("description", description);
    
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:url", fullUrl, "property");
    updateMetaTag("og:type", ogType, "property");
    updateMetaTag("og:site_name", SITE_NAME, "property");
    updateMetaTag("og:image", imageUrl, "property");
    updateMetaTag("og:locale", "en_US", "property");
    
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", imageUrl);

    if (articlePublishedTime) {
      updateMetaTag("article:published_time", articlePublishedTime, "property");
    } else {
      removeMetaTag("article:published_time", "property");
    }

    if (articleModifiedTime) {
      updateMetaTag("article:modified_time", articleModifiedTime, "property");
    } else {
      removeMetaTag("article:modified_time", "property");
    }

    if (articleAuthor) {
      updateMetaTag("article:author", articleAuthor, "property");
    } else {
      removeMetaTag("article:author", "property");
    }

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.rel = "canonical";
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = fullUrl;

  }, [fullTitle, description, fullUrl, ogType, imageUrl, articlePublishedTime, articleModifiedTime, articleAuthor, noindex]);

  return null;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${SITE_URL}${item.url}`,
      })),
    };

    const existingScript = document.getElementById("breadcrumb-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("breadcrumb-schema");
      if (s) s.remove();
    };
  }, [items]);

  return null;
}

interface ServiceItem {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function ServiceListSchema({ services }: { services: ServiceItem[] }) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Transportation Insurance Services",
      "description": "Specialized commercial insurance services for transportation companies",
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": `${SITE_URL}${service.url}`,
          ...(service.image && { "image": service.image }),
          "provider": {
            "@type": "InsuranceAgency",
            "name": SITE_NAME,
            "url": SITE_URL,
          },
        },
      })),
    };

    const existingScript = document.getElementById("service-list-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "service-list-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("service-list-schema");
      if (s) s.remove();
    };
  }, [services]);

  return null;
}

interface ArticleItem {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  author?: string;
}

export function ArticleListSchema({ articles, listName }: { articles: ArticleItem[]; listName: string }) {
  useEffect(() => {
    if (articles.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": listName,
      "numberOfItems": articles.length,
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": article.headline,
          "description": article.description,
          "url": `${SITE_URL}${article.url}`,
          ...(article.image && { "image": article.image }),
          ...(article.datePublished && { "datePublished": article.datePublished }),
          "author": {
            "@type": "Organization",
            "name": article.author || SITE_NAME,
          },
          "publisher": {
            "@type": "Organization",
            "name": SITE_NAME,
            "url": SITE_URL,
          },
        },
      })),
    };

    const existingScript = document.getElementById("article-list-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "article-list-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("article-list-schema");
      if (s) s.remove();
    };
  }, [articles, listName]);

  return null;
}

export function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  url,
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      "image": image || DEFAULT_OG_IMAGE,
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "author": {
        "@type": "Organization",
        "name": author,
      },
      "publisher": {
        "@type": "Organization",
        "name": SITE_NAME,
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/favicon.png`,
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE_URL}${url}`,
      },
    };

    const existingScript = document.getElementById("article-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "article-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("article-schema");
      if (s) s.remove();
    };
  }, [headline, description, image, datePublished, dateModified, author, url]);

  return null;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  useEffect(() => {
    if (faqs.length === 0) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    };

    const existingScript = document.getElementById("faq-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("faq-schema");
      if (s) s.remove();
    };
  }, [faqs]);

  return null;
}

export function InsuranceServiceSchema({
  serviceName,
  serviceDescription,
  url,
  areaServed,
}: {
  serviceName: string;
  serviceDescription: string;
  url: string;
  areaServed?: string[];
}) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": serviceDescription,
      "url": `${SITE_URL}${url}`,
      "serviceType": "Commercial Transportation Insurance",
      "provider": {
        "@type": "InsuranceAgency",
        "name": SITE_NAME,
        "url": SITE_URL,
        "telephone": "+1-888-254-0089",
        "email": "quotes@insurelimos.net",
      },
      ...(areaServed && {
        "areaServed": areaServed.map((state) => ({
          "@type": "State",
          "name": state,
        })),
      }),
    };

    const existingScript = document.getElementById("service-schema");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "service-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("service-schema");
      if (s) s.remove();
    };
  }, [serviceName, serviceDescription, url, areaServed]);

  return null;
}
