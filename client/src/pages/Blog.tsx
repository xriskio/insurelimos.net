import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="Insurance Blog"
        description="Read the latest insights on transportation insurance, including tips for limousine, TNC, NEMT, taxi, and commercial auto coverage. Expert advice from InsureLimos."
      />
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              InsureLimos Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.createdAt), "MMM d, yyyy")}
                          </span>
                          {post.readTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="link" className="p-0 mt-4 text-primary" data-testid={`link-read-${post.slug}`}>
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Informed</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest transportation insurance news, tips, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email address for newsletter"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
