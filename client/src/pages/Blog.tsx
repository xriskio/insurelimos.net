import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { Seo, ArticleListSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  imageUrl: string | null;
  readTime: string | null;
  createdAt: string;
}

const defaultImage = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop";

const categories = ["All", "Insurance Basics", "TNC & Rideshare", "NEMT", "Limousine", "Taxi", "Cost Savings", "Regulations", "Industry News"];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/blog");
      const data = await response.json();
      if (data.success) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === "All" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const articleSchemaData = posts.map(post => ({
    headline: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    image: post.imageUrl || defaultImage,
    datePublished: post.createdAt,
    author: post.author,
  }));

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="Transportation Insurance Blog - Expert Insights & Industry News"
        description="Stay informed with InsureLimos blog. Read expert articles on limousine insurance, TNC/rideshare coverage, NEMT regulations, taxi fleet protection, and commercial auto tips. Updated weekly."
      />
      <BreadcrumbSchema items={breadcrumbs} />
      {posts.length > 0 && <ArticleListSchema articles={articleSchemaData} listName="InsureLimos Blog Posts" />}
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Hero Section with Image */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&h=600&fit=crop"
              alt="Transportation insurance insights"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              InsureLimos Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Expert insights, industry news, and tips for transportation insurance
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto" role="navigation" aria-label="Blog categories">
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

        {/* Blog Posts Grid with Sidebar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Posts */}
              <div className="lg:col-span-2">
                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Loading posts...</p>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`card-blog-${post.slug}`}>
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.imageUrl || defaultImage}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{post.category}</Badge>
                          </div>
                          <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {format(new Date(post.createdAt), "MMM d")}
                              </span>
                              {post.readTime && (
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime}
                                </span>
                              )}
                            </div>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="link" className="p-0 mt-3 text-primary" data-testid={`link-read-${post.slug}`}>
                              Read More <ArrowRight className="w-4 h-4 ml-1" />
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
