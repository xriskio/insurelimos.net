import { useState, useEffect } from "react";
import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
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
        {/* Hero Banner */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={post.imageUrl || defaultImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="container mx-auto">
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="mb-4 text-white hover:text-white hover:bg-white/20">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
              <Badge className="mb-3 bg-accent text-white">{post.category}</Badge>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-3 max-w-4xl">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
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
          </div>
        </div>

        {/* Content with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  {/* Article Content */}
                  <div 
                    className="prose prose-slate max-w-none prose-headings:text-primary prose-a:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />

                  {/* Share Section */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-medium flex items-center gap-2">
                        <Share2 className="w-4 h-4" /> Share this article:
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
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a 
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
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
