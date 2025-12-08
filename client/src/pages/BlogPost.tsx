import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { format } from "date-fns";
import { Seo, ArticleSchema, BreadcrumbSchema } from "@/components/seo/Seo";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  imageUrl: string | null;
  readTime: string | null;
  createdAt: string;
}

const defaultImage = "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`);
      const data = await response.json();
      if (data.success) {
        setPost(data.post);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to fetch post:", err);
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

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" role="main" className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
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
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title={post.title}
        description={post.excerpt}
        ogType="article"
        ogImage={post.imageUrl || defaultImage}
        articlePublishedTime={post.createdAt}
        articleAuthor={post.author}
      />
      <ArticleSchema 
        headline={post.title}
        description={post.excerpt}
        image={post.imageUrl || defaultImage}
        datePublished={post.createdAt}
        author={post.author}
        url={`/blog/${post.slug}`}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main id="main-content" role="main" className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={post.imageUrl || defaultImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              {/* Article Header */}
              <div className="mb-8">
                <Link href="/blog">
                  <Button variant="ghost" size="sm" className="mb-4">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
                
                <Badge className="mb-4">{post.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(post.createdAt), "MMMM d, yyyy")}
                  </span>
                  {post.readTime && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  )}
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA */}
              <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Ready to Get Protected?</h3>
                <p className="text-muted-foreground mb-4">
                  Get a customized insurance quote for your transportation business today.
                </p>
                <Link href="/quote">
                  <Button size="lg">Get a Free Quote</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="py-16" />
      </main>
      <Footer />
    </div>
  );
}
