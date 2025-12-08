import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import teamImage from "@assets/generated_images/modern_insurance_agency_office_team.png";
import { Seo } from "@/components/seo/Seo";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="About InsureLimos - Your Transportation Insurance Experts"
        description="InsureLimos is an independent insurance agency specializing in commercial transportation coverage. We serve limousine, taxi, TNC, NEMT, and bus operators across 18 states including CA, TX, AZ, NV, and more. Get personalized service from industry experts."
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">About InsureLimos</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Public Auto Specialists. Dedicated to keeping your transportation business moving forward.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src={teamImage} 
                alt="InsureLimos Team" 
                className="rounded-xl shadow-xl w-full object-cover h-[500px]"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <span className="text-accent font-bold uppercase tracking-wider text-sm">Who We Are</span>
              <h2 className="text-3xl font-bold text-primary">A Casurance Company</h2>
              
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Welcome to InsureLimos.com. We are an Independent Insurance Agency, which means we work for you, not the insurance carriers. This independence allows us to search the market and find the right insurance company for your specific needs and budget.
                </p>
                <p>
                  Located in <strong>Los Angeles</strong>, we service the entire state of California, as well as <strong>Arizona, Colorado, Idaho, Illinois, Kansas, Kentucky, Minnesota, Missouri, Nevada, Ohio, Oklahoma, Pennsylvania, Tennessee, Texas, Utah, Virginia, and Wisconsin</strong>. Our deep understanding of the local market and strict transportation regulations sets us apart.
                </p>
                <p>
                  At InsureLimos.com, each one of our clients is given a dedicated team that works together to proficiently address all your concerns. We don't just sell policies; we build long-term partnerships with our clients to ensure their businesses thrive.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Independent Agency", 
                  "California Specialists", 
                  "Dedicated Support Team", 
                  "Access to Exclusive Markets"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                    Meet Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Why Us */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose InsureLimos?</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                We specialize in Public Auto Insurance. It's not just something we do; it's all we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-accent">Industry Expertise</h3>
                <p className="text-primary-foreground/80">
                  Our agents understand the difference between TNC, TCP, and NEMT. We speak your language and know the regulations.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-accent">Speed & Efficiency</h3>
                <p className="text-primary-foreground/80">
                  We know that in transportation, time is money. We provide same-day certificates and quick quote turnarounds.
                </p>
              </div>
              <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold mb-3 text-accent">Competitive Rates</h3>
                <p className="text-primary-foreground/80">
                  By accessing multiple carriers, we force them to compete for your business, ensuring you get the best possible rate.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
