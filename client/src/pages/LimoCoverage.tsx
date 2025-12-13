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
  CheckCircle2,
  Building,
  Gem,
  GraduationCap,
  FileText,
  Headphones,
  DollarSign,
  Layers,
  Wine
} from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { limoFaqs } from "@/data/faqs";
import limoHeroImage from "@assets/stock_images/luxury_black_limousi_30942c50.jpg";
import escaladeImage from "@assets/image_1765591483112.png";
import sprinterImage from "@assets/Black-van_1765591606048.png";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { CoverageOptionsSection } from "@/components/sections/CoverageOptionsSection";

export default function LimoCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Limousine & Chauffeured Transportation Insurance - Fleet Coverage"
        description="Specialized insurance for limousine fleets, luxury transportation, and chauffeured services. Coverage for sedans, Sprinters, stretch limos, and party buses."
        canonical="https://insurelimos.net/coverage/limo"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={limoHeroImage} 
            alt="Luxury limousine and chauffeur service" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Premium Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Limousine & Chauffeured Transportation</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized insurance for limousine fleets, luxury transportation, and chauffeured services.
              </p>
              <Link href="/quote/limo">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Limousine Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive insurance solutions tailored specifically for limousine fleets and chauffeured transportation operators. Whether you operate luxury sedans, Mercedes Sprinters, stretch limousines, party buses, or executive transportation services—from a single vehicle to a 20+ vehicle fleet—we provide specialized coverage through industry-leading carriers.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our partnerships include Philadelphia Insurance Companies (PHLY), National Interstate Insurance, Texas Insurance Company, Berkshire Hathaway, and other A-rated carriers specializing in chauffeured transportation.
                  </p>
                </div>
              </section>

              {/* Featured Vehicles Showcase */}
              <section className="py-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl mb-8 overflow-hidden">
                <div className="px-6">
                  <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Fleet Coverage</h2>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:-space-x-8">
                    <div className="relative z-10 w-full md:w-1/2">
                      <img 
                        src={escaladeImage} 
                        alt="Black Cadillac Escalade ESV - Executive SUV" 
                        className="w-full h-auto object-contain drop-shadow-2xl"
                      />
                      <div className="text-center mt-3">
                        <h3 className="text-white font-bold text-lg">Cadillac Escalade ESV</h3>
                        <p className="text-white/70 text-sm">Executive luxury SUV</p>
                      </div>
                    </div>
                    <div className="relative z-0 w-full md:w-1/2">
                      <img 
                        src={sprinterImage} 
                        alt="Black Mercedes Sprinter - Luxury Van" 
                        className="w-full h-auto object-contain drop-shadow-2xl scale-x-[-1]"
                      />
                      <div className="text-center mt-3">
                        <h3 className="text-white font-bold text-lg">Mercedes Sprinter</h3>
                        <p className="text-white/70 text-sm">Executive van and shuttle</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Vehicle Types */}
              <section className="py-8 bg-gray-50 rounded-lg mb-8">
                <div className="px-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Black Sedans</h3>
                      <p className="text-sm text-muted-foreground">Lincoln Continental, Cadillac CT6, Mercedes S-Class</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Luxury SUVs</h3>
                      <p className="text-sm text-muted-foreground">Cadillac Escalade, Lincoln Navigator, BMW X7</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Executive Sedans</h3>
                      <p className="text-sm text-muted-foreground">BMW 7 Series, Audi A8, Genesis G90</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Premium Electric</h3>
                      <p className="text-sm text-muted-foreground">Tesla Model S, Tesla Model X, Lucid Air</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Stretch Limousines</h3>
                      <p className="text-sm text-muted-foreground">Lincoln MKT Stretch, Cadillac Stretch</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Sprinter Vans</h3>
                      <p className="text-sm text-muted-foreground">Mercedes Sprinter Executive, Luxury Sprinter</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">High-Value Imports</h3>
                      <p className="text-sm text-muted-foreground">Bentley, Rolls-Royce, Maybach</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Car className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Airport Black Cars</h3>
                      <p className="text-sm text-muted-foreground">Town Cars, Executive Sedans, Chauffeur Vehicles</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Who Needs This Coverage */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Who Needs This Coverage?</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Luxury sedan and town car services",
                      "Limousine fleet operators (1-20+ vehicles)",
                      "Mercedes Sprinter fleet operators",
                      "Executive and corporate transportation",
                      "Airport shuttle and transfer services",
                      "Wedding and special event limousine services",
                      "Party bus operators",
                      "Non-fleet independent operators",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Includes */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-4 text-center">Coverage Includes</h2>
                  <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                    Comprehensive protection designed for the unique needs of limousine and chauffeured transportation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Shield className="h-6 w-6 text-primary" />
                          Auto Liability
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {[
                            "Up to $1.5M Combined Single Limit",
                            "Uninsured/Underinsured Motorist coverage",
                            "Personal Injury Protection (PIP) where required",
                            "Passenger liability protection",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Car className="h-6 w-6 text-primary" />
                          Physical Damage
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {[
                            "Comprehensive and Collision coverage",
                            "Hired car physical damage including loss of use",
                            "Zero deductible glass coverage",
                            "Single deductible per occurrence",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Layers className="h-6 w-6 text-primary" />
                          Hired & Non-Owned
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {[
                            "Owned, non-owned, and hired auto coverage",
                            "Lease Gap coverage",
                            "Towing and roadside assistance",
                            "Electronic equipment coverage",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Building className="h-6 w-6 text-primary" />
                          Business Operations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {[
                            "General liability for business operations",
                            "Workers' compensation for chauffeurs",
                            "Garagekeepers legal liability",
                            "Liquor liability for party buses",
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Key Benefits */}
              <section className="py-8 bg-primary text-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <GraduationCap className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Driver Training</h3>
                        <p className="text-white/80 text-sm">
                          Free online interactive Defensive Driver Training course and examination
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <FileText className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Risk Management</h3>
                        <p className="text-white/80 text-sm">
                          Product-specific web-based Risk Management Services and regular e-flyer communications
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Users className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Background Checks</h3>
                        <p className="text-white/80 text-sm">
                          Strategic partnership for discounted background checks and MVR checks
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <DollarSign className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Competitive Rates</h3>
                        <p className="text-white/80 text-sm">
                          Rates tailored to your operation size with flexible payment options for fleet operators
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Headphones className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">24/7 Claims Support</h3>
                        <p className="text-white/80 text-sm">
                          Round-the-clock claims reporting and experienced claims handling
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Gem className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Specialty Coverage</h3>
                        <p className="text-white/80 text-sm">
                          Coverage for specialty vehicles, custom equipment, and loss of income during repairs
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Additional Benefits */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Additional Benefits</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Specialized underwriting for chauffeured transportation",
                      "Partnership with PHLY Chauffeured Transportation program",
                      "Coverage for specialty vehicles and custom equipment",
                      "Loss of income protection during covered repairs",
                      "Passenger medical payments coverage",
                      "Zero deductible glass coverage",
                      "Single deductible on comprehensive physical damage per occurrence",
                      "Lease Gap coverage for financed vehicles",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <p className="font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Vehicle Types Grid */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6 text-center">
                  <h2 className="text-3xl font-bold text-primary mb-8">Vehicles We Insure</h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Car, label: "Luxury Sedans" },
                      { icon: Car, label: "Town Cars" },
                      { icon: Car, label: "Mercedes Sprinters" },
                      { icon: Car, label: "Stretch Limousines" },
                      { icon: Wine, label: "Party Buses" },
                      { icon: Car, label: "Executive SUVs" },
                      { icon: Users, label: "Passenger Vans" },
                      { icon: Car, label: "Custom Vehicles" },
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-white rounded-lg shadow-sm text-center">
                        <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Options Section */}
              <CoverageOptionsSection />

              {/* FAQ Section */}
              <FaqSchema faqs={limoFaqs} title="Limousine Insurance FAQs" />
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
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Gem className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Protect Your Limousine Business Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for the unique needs of limousine and chauffeured transportation operators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/limo">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Limousine Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Speak with a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
