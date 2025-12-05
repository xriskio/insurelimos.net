import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, User } from "lucide-react";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}> = {
  "understanding-commercial-auto-insurance": {
    title: "Understanding Commercial Auto Insurance for Transportation Companies",
    excerpt: "Learn the basics of commercial auto insurance and why it's essential for limousine, taxi, and other transportation businesses.",
    category: "Insurance Basics",
    author: "InsureLimos Team",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=600&fit=crop",
    content: `
      <h2>What is Commercial Auto Insurance?</h2>
      <p>Commercial auto insurance is a type of coverage designed specifically for vehicles used for business purposes. Unlike personal auto insurance, commercial policies account for the unique risks associated with operating vehicles as part of a business, including higher liability limits and coverage for multiple drivers.</p>
      
      <h2>Why Transportation Companies Need Specialized Coverage</h2>
      <p>Transportation businesses face unique risks that standard commercial auto policies may not adequately address:</p>
      <ul>
        <li><strong>Higher liability exposure:</strong> Transporting passengers creates significant liability risks</li>
        <li><strong>Regulatory requirements:</strong> State and federal regulations often mandate specific coverage levels</li>
        <li><strong>Multiple drivers:</strong> Fleet operations need coverage that extends to all authorized drivers</li>
        <li><strong>Specialized vehicles:</strong> Limousines, buses, and NEMT vehicles require tailored coverage</li>
      </ul>
      
      <h2>Key Coverage Types</h2>
      <h3>Liability Coverage</h3>
      <p>This is the foundation of any commercial auto policy. It covers bodily injury and property damage you may cause to others. For transportation companies, liability limits typically range from $1 million to $5 million, depending on state requirements and the type of service.</p>
      
      <h3>Physical Damage Coverage</h3>
      <p>Protects your vehicles against collision damage and comprehensive losses (theft, vandalism, weather damage). For luxury limousines and specialty vehicles, this coverage is essential to protect your significant investment.</p>
      
      <h3>Hired and Non-Owned Auto Coverage</h3>
      <p>Covers vehicles you rent or borrow for business use, as well as employee-owned vehicles used for company business.</p>
      
      <h3>Medical Payments Coverage</h3>
      <p>Pays for medical expenses for you, your employees, and passengers, regardless of fault.</p>
      
      <h2>Choosing the Right Policy</h2>
      <p>When selecting commercial auto insurance for your transportation company, consider:</p>
      <ol>
        <li>Your state's minimum requirements and any additional regulatory mandates</li>
        <li>The value of your fleet and replacement costs</li>
        <li>The number of drivers and their driving records</li>
        <li>Your claims history and risk profile</li>
        <li>Whether you need additional coverages like uninsured motorist or cargo coverage</li>
      </ol>
      
      <h2>Getting Started</h2>
      <p>Ready to protect your transportation business? Contact InsureLimos today for a customized quote. Our specialists understand the unique needs of limousine services, taxis, TNCs, and NEMT providers, and can help you find the right coverage at competitive rates.</p>
    `
  },
  "tnc-insurance-requirements-2024": {
    title: "TNC Insurance Requirements in 2024: What Uber and Lyft Drivers Need to Know",
    excerpt: "Stay compliant with the latest TNC insurance requirements.",
    category: "TNC & Rideshare",
    author: "InsureLimos Team",
    date: "November 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556122071-e404eaedb77f?w=1200&h=600&fit=crop",
    content: `
      <h2>The TNC Insurance Landscape in 2024</h2>
      <p>Transportation Network Companies (TNCs) like Uber and Lyft have transformed the transportation industry. However, the insurance requirements for TNC drivers can be complex and vary significantly by state.</p>
      
      <h2>Understanding the Coverage Periods</h2>
      <p>TNC insurance typically operates in three distinct periods:</p>
      
      <h3>Period 0: App Off</h3>
      <p>When the app is off, your personal auto insurance applies. Most personal policies exclude commercial use, which is why additional coverage may be necessary.</p>
      
      <h3>Period 1: App On, Waiting for Ride Request</h3>
      <p>Coverage from the TNC typically provides limited liability coverage. Many states require:</p>
      <ul>
        <li>$50,000 per person for bodily injury</li>
        <li>$100,000 per accident for bodily injury</li>
        <li>$25,000 for property damage</li>
      </ul>
      
      <h3>Period 2 & 3: Ride Accepted and In Progress</h3>
      <p>TNCs typically provide $1 million in liability coverage during these periods, plus contingent comprehensive and collision coverage.</p>
      
      <h2>The Coverage Gap Problem</h2>
      <p>The biggest risk for TNC drivers is the "coverage gap" during Period 1. Your personal insurance likely won't cover you, and the TNC's coverage is minimal. This is where rideshare-specific insurance becomes crucial.</p>
      
      <h2>State-by-State Requirements</h2>
      <p>Requirements vary significantly by state. Some key variations include:</p>
      <ul>
        <li><strong>California:</strong> Requires specific TNC coverage with minimum limits</li>
        <li><strong>Texas:</strong> Allows flexibility in coverage arrangements</li>
        <li><strong>New York:</strong> Strict requirements for commercial coverage</li>
      </ul>
      
      <h2>Protecting Yourself</h2>
      <p>To ensure you're fully protected while driving for TNCs:</p>
      <ol>
        <li>Notify your personal auto insurer that you drive for a TNC</li>
        <li>Consider a rideshare endorsement or hybrid policy</li>
        <li>Understand your TNC's coverage and its limitations</li>
        <li>Maintain records of all policies and coverage periods</li>
      </ol>
      
      <h2>Get Proper Coverage</h2>
      <p>Don't leave gaps in your coverage. InsureLimos specializes in TNC and rideshare insurance, helping drivers find comprehensive protection that works with their platform's coverage.</p>
    `
  },
  "nemt-compliance-guide": {
    title: "NEMT Compliance Guide: Meeting State and Federal Requirements",
    excerpt: "Non-Emergency Medical Transportation providers face unique regulatory challenges.",
    category: "NEMT",
    author: "InsureLimos Team",
    date: "November 20, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=1200&h=600&fit=crop",
    content: `
      <h2>Understanding NEMT Compliance</h2>
      <p>Non-Emergency Medical Transportation (NEMT) is a critical service that helps Medicaid beneficiaries and others access healthcare. However, operating a NEMT business comes with significant regulatory requirements.</p>
      
      <h2>Federal Requirements</h2>
      <p>At the federal level, NEMT providers must comply with:</p>
      <ul>
        <li>Americans with Disabilities Act (ADA) requirements</li>
        <li>HIPAA regulations for patient information</li>
        <li>Medicaid program requirements (if participating)</li>
        <li>Department of Transportation regulations</li>
      </ul>
      
      <h2>State-Level Requirements</h2>
      <p>Each state has its own requirements for NEMT providers, which may include:</p>
      <ul>
        <li>Business licensing and permits</li>
        <li>Vehicle inspection and safety standards</li>
        <li>Driver background checks and certifications</li>
        <li>Insurance minimum requirements</li>
        <li>Medicaid provider enrollment</li>
      </ul>
      
      <h2>Insurance Requirements</h2>
      <p>NEMT insurance typically requires:</p>
      <ul>
        <li><strong>Commercial auto liability:</strong> Often $1 million or more</li>
        <li><strong>General liability:</strong> Covers non-auto related claims</li>
        <li><strong>Professional liability:</strong> For patient care-related claims</li>
        <li><strong>Workers' compensation:</strong> If you have employees</li>
      </ul>
      
      <h2>Vehicle Requirements</h2>
      <p>NEMT vehicles must meet specific standards:</p>
      <ul>
        <li>Wheelchair accessibility (for certain services)</li>
        <li>Regular safety inspections</li>
        <li>Proper maintenance records</li>
        <li>Required safety equipment</li>
      </ul>
      
      <h2>Driver Requirements</h2>
      <p>NEMT drivers typically must:</p>
      <ul>
        <li>Pass background checks</li>
        <li>Complete defensive driving training</li>
        <li>Obtain CPR/First Aid certification</li>
        <li>Complete passenger assistance training</li>
        <li>Maintain clean driving records</li>
      </ul>
      
      <h2>Staying Compliant</h2>
      <p>To maintain compliance, NEMT providers should:</p>
      <ol>
        <li>Develop comprehensive policies and procedures</li>
        <li>Maintain detailed documentation</li>
        <li>Conduct regular training updates</li>
        <li>Perform vehicle inspections on schedule</li>
        <li>Stay informed about regulatory changes</li>
      </ol>
      
      <h2>Partner with InsureLimos</h2>
      <p>InsureLimos understands the unique challenges facing NEMT providers. We offer specialized coverage designed to meet state and federal requirements while protecting your business.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 flex items-center justify-center">
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img
            src={post.image}
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
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
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
