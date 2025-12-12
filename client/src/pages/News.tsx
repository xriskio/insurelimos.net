import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import { format } from "date-fns";

interface NewsRelease {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  imageUrl: string | null;
  publishDate: string;
}

const categories = ["All", "Company News", "Product Launch", "Partnership", "Industry Update", "Award", "Event"];

export default function News() {
  const [releases, setReleases] = useState<NewsRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchReleases();
  }, []);

  const fetchReleases = async () => {
    try {
      const response = await fetch("/api/news");
      const data = await response.json();
      if (data.success) {
        setReleases(data.releases);
      }
    } catch (error) {
      console.error("Failed to fetch releases:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredReleases = selectedCategory === "All" 
    ? releases 
    : releases.filter(release => release.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="News & Press Releases"
        description="Stay updated with the latest news and press releases from InsureLimos. Company announcements, partnerships, and transportation insurance industry updates."
      />
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&h=600&fit=crop"
              alt="InsureLimos news and press releases"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              News & Press Releases
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stay updated with the latest news from InsureLimos
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto" role="navigation" aria-label="News categories">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* News Releases with Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Loading news...</p>
                  </div>
                ) : filteredReleases.length === 0 ? (
                  <div className="text-center py-12">
                    <Newspaper className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No news releases available yet. Check back soon!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredReleases.map((release) => (
                      <Card key={release.id} className="hover:shadow-lg transition-shadow" data-testid={`card-news-${release.slug}`}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{release.category}</Badge>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {format(new Date(release.publishDate), "MMMM d, yyyy")}
                            </span>
                          </div>
                          <CardTitle className="text-xl hover:text-primary transition-colors">
                            <Link href={`/news/${release.slug}`}>
                              {release.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {release.summary}
                          </p>
                          <Link href={`/news/${release.slug}`}>
                            <Button variant="link" className="p-0 text-primary" data-testid={`link-read-${release.slug}`}>
                              Read Full Release <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
