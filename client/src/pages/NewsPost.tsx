import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Building2 } from "lucide-react";
import { format } from "date-fns";

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Header */}
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <Link href="/news">
              <Button variant="ghost" size="sm" className="mb-4 text-white hover:text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Button>
            </Link>
            <Badge className="mb-4 bg-white/20 text-white">{release.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{release.title}</h1>
            <div className="flex items-center gap-4 text-white/80">
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

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              {/* Summary */}
              <p className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-4 italic">
                {release.summary}
              </p>

              {/* Content */}
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: release.content }}
              />

              {/* Contact Info */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold mb-2">Media Contact</h3>
                <p className="text-muted-foreground">
                  InsureLimos Media Relations<br />
                  Email: <a href="mailto:info@insurelimos.com" className="text-primary">info@insurelimos.com</a><br />
                  Phone: <a href="tel:888-254-0089" className="text-primary">888-254-0089</a>
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Learn More About Our Services</h3>
                <p className="text-muted-foreground mb-4">
                  Discover how InsureLimos can protect your transportation business.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/services">
                    <Button variant="outline">Our Services</Button>
                  </Link>
                  <Link href="/quote">
                    <Button>Get a Quote</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
