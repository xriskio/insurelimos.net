import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articlePublishedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
}

const SITE_NAME = "InsureLimos";
const SITE_URL = "https://insurelimos.net";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const fullCanonicalUrl = canonicalUrl ? `${SITE_URL}${canonicalUrl}` : undefined;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    updateMetaTag("description", description);
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", SITE_NAME, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    if (fullCanonicalUrl) {
      updateMetaTag("og:url", fullCanonicalUrl, true);
      updateLinkTag("canonical", fullCanonicalUrl);
    }

    if (articlePublishedTime) {
      updateMetaTag("article:published_time", articlePublishedTime, true);
    }
    if (articleAuthor) {
      updateMetaTag("article:author", articleAuthor, true);
    }

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }
  }, [fullTitle, description, fullCanonicalUrl, ogImage, ogType, articlePublishedTime, articleAuthor, noindex]);

  return null;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
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

  useEffect(() => {
    const existingScript = document.getElementById("breadcrumb-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "breadcrumb-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        "url": `${SITE_URL}${service.url}`,
        "provider": {
          "@type": "InsuranceAgency",
          "name": SITE_NAME,
          "url": SITE_URL,
        },
        ...(service.image && { "image": service.image }),
      },
    })),
  };

  useEffect(() => {
    const existingScript = document.getElementById("service-list-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "service-list-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("service-list-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": listName,
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

  useEffect(() => {
    const existingScript = document.getElementById("article-list-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "article-list-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("article-list-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [articles, listName]);

  return null;
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
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

  useEffect(() => {
    const existingScript = document.getElementById("faq-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "faq-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [faqs]);

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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image || DEFAULT_IMAGE,
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

  useEffect(() => {
    const existingScript = document.getElementById("article-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "article-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("article-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [headline, description, image, datePublished, dateModified, author, url]);

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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": `${SITE_URL}${url}`,
    "provider": {
      "@type": "InsuranceAgency",
      "name": SITE_NAME,
      "url": SITE_URL,
      "telephone": "+1-888-254-0089",
      "email": "quotes@insurelimos.net",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
      },
    },
    "serviceType": "Commercial Transportation Insurance",
    ...(areaServed && {
      "areaServed": areaServed.map((state) => ({
        "@type": "State",
        "name": state,
      })),
    }),
  };

  useEffect(() => {
    const existingScript = document.getElementById("service-schema");
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = "service-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("service-schema");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [serviceName, serviceDescription, url, areaServed]);

  return null;
}
