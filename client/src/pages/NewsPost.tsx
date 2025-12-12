import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Building2, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { format } from "date-fns";
import { Seo, ArticleSchema, BreadcrumbSchema } from "@/components/seo/Seo";

interface NewsRelease {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string | null;
  publishDate: string;
}

const defaultImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop";

export default function NewsPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [release, setRelease] = useState<NewsRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchRelease();
  }, [slug]);

  const fetchRelease = async () => {
    try {
      const response = await fetch(`/api/news/${slug}`);
      const data = await response.json();
      if (data.success) {
        setRelease(data.release);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to fetch release:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" role="main" className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !release) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" role="main" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">News Release Not Found</h1>
            <p className="text-muted-foreground mb-6">The news release you're looking for doesn't exist.</p>
            <Link href="/news">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "News", url: "/news" },
    { name: release.title, url: `/news/${release.slug}` },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title={release.title}
        description={release.summary}
        ogType="article"
        ogImage={release.imageUrl || defaultImage}
        articlePublishedTime={release.publishDate}
        articleAuthor={release.author}
      />
      <ArticleSchema 
        headline={release.title}
        description={release.summary}
        image={release.imageUrl || defaultImage}
        datePublished={release.publishDate}
        author={release.author}
        url={`/news/${release.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Hero Banner */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={release.imageUrl || defaultImage}
            alt={release.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <Link href="/news">
                <Button variant="ghost" size="sm" className="mb-4 text-white hover:text-white hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to News
                </Button>
              </Link>
              <Badge className="mb-3 bg-accent text-white">{release.category}</Badge>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-4xl">{release.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(release.publishDate), "MMMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {release.author}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  {/* Summary */}
                  <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4 italic">
                    {release.summary}
                  </p>

                  {/* Content */}
                  <div 
                    className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: release.content }}
                  />

                  {/* Media Contact */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-bold mb-2">Media Contact</h3>
                    <p className="text-muted-foreground">
                      InsureLimos Media Relations<br />
                      Email: <a href="mailto:info@insurelimos.com" className="text-primary hover:underline">info@insurelimos.com</a><br />
                      Phone: <a href="tel:888-254-0089" className="text-primary hover:underline">888-254-0089</a>
                    </p>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share this release:
                      </span>
                      <div className="flex gap-2">
                        <a 
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a 
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(release.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a 
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(release.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
