const INDEXNOW_KEY = "b84008cb48a94a9fb067ae2b2481c1bc";
const SITE_HOST = "insurelimos.net";

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

export async function submitSingleUrl(path: string): Promise<boolean> {
  const fullUrl = `https://${SITE_HOST}${path.startsWith("/") ? path : "/" + path}`;
  return submitToIndexNow([fullUrl]);
}

export async function submitBlogPost(slug: string): Promise<boolean> {
  return submitSingleUrl(`/blog/${slug}`);
}

export async function submitNewsPost(slug: string): Promise<boolean> {
  return submitSingleUrl(`/news/${slug}`);
}
