import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: "understanding-commercial-auto-insurance",
    title: "Understanding Commercial Auto Insurance for Transportation Companies",
    excerpt: "Learn the basics of commercial auto insurance and why it's essential for limousine, taxi, and other transportation businesses. We cover liability limits, coverage types, and how to choose the right policy.",
    category: "Insurance Basics",
    author: "InsureLimos Team",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop"
  },
  {
    id: "tnc-insurance-requirements-2024",
    title: "TNC Insurance Requirements in 2024: What Uber and Lyft Drivers Need to Know",
    excerpt: "Stay compliant with the latest TNC insurance requirements. This comprehensive guide covers state-by-state regulations, coverage gaps, and how to protect yourself while driving for rideshare platforms.",
    category: "TNC & Rideshare",
    author: "InsureLimos Team",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?w=800&h=400&fit=crop"
  },
  {
    id: "nemt-compliance-guide",
    title: "NEMT Compliance Guide: Meeting State and Federal Requirements",
    excerpt: "Non-Emergency Medical Transportation providers face unique regulatory challenges. Learn about Medicaid compliance, driver certifications, vehicle requirements, and insurance mandates.",
    category: "NEMT",
    author: "InsureLimos Team",
    date: "November 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&h=400&fit=crop"
  },
  {
    id: "reducing-fleet-insurance-costs",
    title: "10 Proven Strategies to Reduce Your Fleet Insurance Costs",
    excerpt: "Insurance premiums eating into your profits? Discover actionable tips to lower your transportation insurance costs without sacrificing coverage. From driver training to telematics, we cover it all.",
    category: "Cost Savings",
    author: "InsureLimos Team",
    date: "November 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop"
  },
  {
    id: "limousine-insurance-coverage-types",
    title: "Complete Guide to Limousine Insurance Coverage Types",
    excerpt: "From liability to physical damage, understand every coverage type available for your limousine business. Make informed decisions about protecting your luxury fleet and passengers.",
    category: "Limousine",
    author: "InsureLimos Team",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop"
  },
  {
    id: "taxi-insurance-urban-operators",
    title: "Taxi Insurance for Urban Operators: Navigating City Regulations",
    excerpt: "Operating a taxi in a major city comes with unique insurance challenges. Learn about municipal requirements, medallion coverage, and protecting your business in high-traffic environments.",
    category: "Taxi",
    author: "InsureLimos Team",
    date: "November 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?w=800&h=400&fit=crop"
  }
];

const categories = ["All", "Insurance Basics", "TNC & Rideshare", "NEMT", "Limousine", "Taxi", "Cost Savings"];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
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
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`card-blog-${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.id}`}>
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
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="link" className="p-0 mt-4 text-primary" data-testid={`link-read-${post.id}`}>
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
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
