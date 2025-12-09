const INDEXNOW_KEY = "b84008cb48a94a9fb067ae2b2481c1bc";
const SITE_HOST = "insurelimos.net";
const SITE_URL = "https://insurelimos.net";

export async function submitToIndexNow(urls: string[]): Promise<boolean> {
  try {
    const response = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    });

    if (response.status === 200 || response.status === 202) {
      console.log(`IndexNow: Successfully submitted ${urls.length} URL(s)`);
      return true;
    } else {
      console.error(`IndexNow: Failed with status ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error("IndexNow submission error:", error);
    return false;
  }
}

export async function submitToBingWebmaster(urls: string[]): Promise<boolean> {
  const apiKey = process.env.BING_WEBMASTER_API_KEY;
  
  if (!apiKey) {
    console.error("Bing Webmaster API: No API key configured");
    return false;
  }

  try {
    const urlListXml = urls
      .map(url => `<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/Arrays">${url}</string>`)
      .join("\n");

    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<SubmitUrlBatch xmlns="http://schemas.datacontract.org/2004/07/Microsoft.Bing.Webmaster.Api">
<siteUrl>${SITE_URL}</siteUrl>
<urlList>
${urlListXml}
</urlList>
</SubmitUrlBatch>`;

    const response = await fetch(
      `https://ssl.bing.com/webmaster/api.svc/pox/SubmitUrlBatch?apikey=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
        },
        body: xmlBody,
      }
    );

    if (response.status === 200) {
      console.log(`Bing Webmaster API: Successfully submitted ${urls.length} URL(s)`);
      return true;
    } else {
      const errorText = await response.text();
      console.error(`Bing Webmaster API: Failed with status ${response.status}`, errorText);
      return false;
    }
  } catch (error) {
    console.error("Bing Webmaster API submission error:", error);
    return false;
  }
}

export async function submitToAllSearchEngines(urls: string[]): Promise<{ indexNow: boolean; bing: boolean }> {
  const [indexNowResult, bingResult] = await Promise.all([
    submitToIndexNow(urls),
    submitToBingWebmaster(urls),
  ]);

  return {
    indexNow: indexNowResult,
    bing: bingResult,
  };
}

export async function submitSingleUrl(path: string): Promise<{ indexNow: boolean; bing: boolean }> {
  const fullUrl = `https://${SITE_HOST}${path.startsWith("/") ? path : "/" + path}`;
  return submitToAllSearchEngines([fullUrl]);
}

export async function submitBlogPost(slug: string): Promise<{ indexNow: boolean; bing: boolean }> {
  return submitSingleUrl(`/blog/${slug}`);
}

export async function submitNewsPost(slug: string): Promise<{ indexNow: boolean; bing: boolean }> {
  return submitSingleUrl(`/news/${slug}`);
}

export async function submitAllSitePages(): Promise<{ indexNow: boolean; bing: boolean }> {
  const allPages = [
    "/",
    "/services",
    "/coverage",
    "/locations",
    "/about",
    "/contact",
    "/blog",
    "/news",
    "/client-support",
    "/get-quote",
    "/quote",
    "/quote/limousine",
    "/quote/tnc",
    "/quote/nemt",
    "/quote/rideshare",
    "/quote/public-auto",
    "/quote/ambulance",
    "/quote/workers-comp",
    "/quote/excess-liability",
    "/quote/cyber-liability",
    "/quote/captive",
    "/coverage/uber-black",
    "/coverage/limo",
    "/coverage/tnc",
    "/coverage/nemt",
    "/coverage/taxi",
    "/coverage/motorcoach",
    "/coverage/school-bus",
    "/coverage/paratransit",
    "/coverage/ambulance",
    "/coverage/captive",
    "/lp/uber-black",
    "/lp/nemt",
    "/lp/limousine",
    "/lp/motorcoach",
    "/lp/taxi",
    "/lp/school-bus",
    "/lp/tnc",
    "/services/commercial-auto/uber-black-california",
    "/privacy",
    "/terms",
  ];

  const fullUrls = allPages.map(page => `https://${SITE_HOST}${page}`);
  return submitToAllSearchEngines(fullUrls);
}

export async function submitLocationPages(citySlug: string): Promise<{ indexNow: boolean; bing: boolean }> {
  const transportTypes = ["uber-black", "nemt", "limo", "motorcoach", "taxi", "school-bus", "tnc"];
  const urls = transportTypes.map(type => `https://${SITE_HOST}/location/${citySlug}/${type}`);
  return submitToAllSearchEngines(urls);
}
