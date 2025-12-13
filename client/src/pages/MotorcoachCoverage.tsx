import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  CheckCircle2,
  Bus,
  Map,
  Wrench,
  FileText,
  AlertTriangle,
  Briefcase
} from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { motorcoachFaqs } from "@/data/faqs";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { CoverageOptionsSection } from "@/components/sections/CoverageOptionsSection";
import busExteriorImage from "@assets/J3500_night-2_1765592058762.jpg";
import busInteriorImage from "@assets/Livery_1765592058762.jpg";

export default function MotorcoachCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Motorcoach & Bus Insurance - Coverage for Charter and Tour Bus Operators"
        description="Specialized insurance solutions for motorcoach operators, charter bus companies, and tour bus services. Comprehensive coverage for intercity buses, charter operations, and sightseeing tours."
        canonical="https://insurelimos.net/coverage/motorcoach"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2aC00di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTEyLTZoLTR2LTJoNHYyem0tNiAwaC00di0yaDR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Commercial Transportation</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Motorcoach & Bus Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive insurance solutions for charter bus companies, tour operators, and intercity bus services. Protect your fleet and passengers with specialized coverage.
              </p>
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Motorcoach Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Introduction */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="hidden md:block shrink-0">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <Bus className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Coverage for Motorcoach Operations</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        At InsureLimos.net, we understand the unique challenges faced by motorcoach and bus operators. Our specialized insurance programs are designed to provide comprehensive protection for charter bus companies, tour operators, intercity bus services, and casino shuttle operations across 18 states.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-10">
                    {[
                      "Charter bus companies",
                      "Tour and sightseeing operators",
                      "Intercity bus services",
                      "Casino shuttle operators",
                      "Church and religious groups",
                      "Corporate shuttle services",
                      "Sports team transportation",
                      "Convention and event transportation",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Fleet Coverage Images */}
              <section className="py-10 bg-white rounded-2xl mb-8 overflow-hidden border shadow-sm">
                <div className="px-6">
                  <h2 className="text-2xl font-bold text-primary mb-8 text-center">Our Fleet Coverage</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="relative w-full md:w-1/2 bg-white rounded-xl p-4">
                      <img 
                        src={busExteriorImage} 
                        alt="Luxury Charter Bus - Exterior Night View"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-3">Luxury Charter Coach</p>
                    </div>
                    <div className="relative w-full md:w-1/2 bg-white rounded-xl p-4">
                      <img 
                        src={busInteriorImage} 
                        alt="Luxury Bus Interior - Premium Seating"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-3">Premium Interior</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="py-8 bg-primary text-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Motorcoach Insurance?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Specialized underwriting for charter and tour bus operations",
                      "Competitive rates with flexible payment options",
                      "Coverage for luxury coaches and high-value equipment",
                      "Experienced claims handling with 24/7 support",
                      "DOT and FMCSA compliance assistance",
                      "Multi-state operating authority support",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <p className="text-white/90">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Options */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Coverage Options</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We offer a wide range of coverage options to protect your motorcoach operation.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Shield className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Auto Liability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Coverage meets or exceeds FMCSA requirements for interstate passenger carriers. Limits from $1.5M to $10M available for charter and tour operations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Car className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Physical Damage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Comprehensive protection including collision, theft, vandalism, and weather damage. Coverage for high-value coaches, entertainment systems, and onboard amenities.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Building className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">General Liability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Protection from third-party claims for bodily injury, property damage, and personal injury that may occur on your premises or during tour operations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Users className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Passenger Accident</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Medical payments coverage for passengers injured while boarding, riding, or exiting your motorcoach, regardless of fault.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Layers className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Hired & Non-Owned Auto</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Coverage for vehicles you rent, borrow, or use that aren't owned by your company. Essential for overflow capacity needs.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Briefcase className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Cargo & Baggage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Protection for passengers' personal belongings and luggage during transit. Essential coverage for tour and charter operations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Bus Types We Cover */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Types of Buses We Cover</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      From luxury touring coaches to mini buses, we have coverage solutions for all types of motorcoach operations.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Luxury Touring Coaches", desc: "Full-size 45-56 passenger coaches with premium amenities" },
                      { title: "Charter Buses", desc: "Standard charter buses for group transportation" },
                      { title: "Mini Coaches", desc: "24-35 passenger coaches for smaller groups" },
                      { title: "Executive Coaches", desc: "VIP and executive transportation coaches" },
                      { title: "Double-Decker Buses", desc: "Sightseeing and tour double-decker buses" },
                      { title: "Shuttle Buses", desc: "Casino, hotel, and corporate shuttle buses" },
                    ].map((type, i) => (
                      <div key={i} className="p-6 bg-secondary/10 rounded-xl hover:bg-secondary/20 transition-colors">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Bus className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                        <p className="text-muted-foreground text-sm">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Regulatory Compliance */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">DOT & FMCSA Compliance</h2>
                    <p className="text-lg text-muted-foreground">
                      We help you meet all federal and state regulatory requirements.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <FileText className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Federal Filings</h3>
                      <ul className="space-y-2">
                        {[
                          "FMCSA Form MCS-90 endorsement",
                          "DOT operating authority assistance",
                          "Interstate carrier compliance",
                          "USDOT number registration support",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                      <Map className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">State Requirements</h3>
                      <ul className="space-y-2">
                        {[
                          "Multi-state operating authority",
                          "State-specific filing requirements",
                          "PUC/PSC compliance assistance",
                          "Certificate of insurance filing",
                        ].map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Coverage Options Section */}
              <CoverageOptionsSection />

              {/* FAQ Section */}
              <FaqSchema faqs={motorcoachFaqs} title="Motorcoach Insurance FAQs" />
            </div>

            {/* Sidebar with QuickQuoteForm */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-4">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Motorcoach Insurance Quote Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Our experienced team specializes in motorcoach and charter bus insurance. Contact us for a competitive quote tailored to your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote/public-auto">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
