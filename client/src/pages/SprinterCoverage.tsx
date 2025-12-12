import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  CheckCircle2,
  Truck,
  Package,
  Plane,
  Briefcase,
  DollarSign,
  FileText
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sprinterHeroImage from "@assets/generated_images/black_luxury_sprinter_van.png";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { CoverageOptionsSection } from "@/components/sections/CoverageOptionsSection";

const sprinterFaqs = [
  {
    question: "What insurance do I need for my Sprinter van fleet?",
    answer: "Sprinter van operators typically need commercial auto liability (minimum $750,000 CSL, often $1M+), physical damage coverage, hired and non-owned auto, general liability, and workers' compensation if you have employees. Higher limits may be required for airport contracts or luxury transportation."
  },
  {
    question: "Does my Sprinter van insurance cover passenger transportation?",
    answer: "Yes, our commercial auto policies for Sprinter vans include passenger transportation coverage. This covers bodily injury to passengers, which is essential for executive shuttles, airport transfers, and group transportation services."
  },
  {
    question: "What's the difference between cargo van and passenger van insurance?",
    answer: "Cargo van insurance covers goods and freight transport with emphasis on cargo liability and theft protection. Passenger van insurance focuses on bodily injury liability for transported passengers and requires higher liability limits. Some operators need both coverages."
  },
  {
    question: "Can I insure a single Sprinter van or do I need a fleet?",
    answer: "We offer insurance for single-vehicle operators as well as large fleets. Our programs accommodate owner-operators with one vehicle up to commercial fleets with 50+ vehicles. Rates are often more competitive for fleets of 3+ vehicles."
  },
  {
    question: "Do you cover modified Sprinter vans with luxury interiors?",
    answer: "Yes, we provide coverage for custom-built and modified Sprinter vans including executive configurations, luxury interiors, and accessibility modifications. We can insure the full value of your customizations and specialized equipment."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Sprinter & Van Insurance", url: "/coverage/sprinter" },
];

export default function SprinterCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Sprinter Van Insurance - Commercial Van & Shuttle Coverage"
        description="Commercial insurance for Sprinter vans, cargo vans, and passenger shuttles. Coverage for executive transportation, airport shuttles, and delivery services. Get a free quote from InsureLimos."
      />
      <FAQSchema faqs={sprinterFaqs} />
      <InsuranceServiceSchema
        serviceName="Sprinter Van and Commercial Van Insurance"
        serviceDescription="Commercial auto insurance for Mercedes Sprinter vans, Ford Transits, cargo vans, and passenger shuttle operations."
        url="/coverage/sprinter"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100">
            <img 
              src={sprinterHeroImage} 
              alt="Black luxury Sprinter van" 
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/60" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Commercial Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sprinter & Van Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Commercial auto insurance for Sprinter vans, cargo vans, and passenger shuttle services.
              </p>
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Sprinter Van Quote
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
                    Mercedes Sprinter vans and commercial vans have become the backbone of executive transportation, airport shuttle services, and delivery operations. Our specialized insurance programs protect your van fleet with comprehensive coverage designed for commercial vehicle operators.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Whether you operate luxury executive Sprinters, passenger shuttles, cargo vans, or medical transport vehicles, we provide tailored coverage through A-rated carriers including Philadelphia Insurance Companies (PHLY), National Interstate, and Texas Insurance Company.
                  </p>
                </div>
              </section>

              {/* Vehicle Types */}
              <section className="py-8 bg-gray-50 rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Vehicles We Insure</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Mercedes Sprinter</h3>
                      <p className="text-sm text-muted-foreground">Executive, passenger, and cargo configurations</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Ford Transit</h3>
                      <p className="text-sm text-muted-foreground">Passenger vans, cargo vans, and cutaway models</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">RAM ProMaster</h3>
                      <p className="text-sm text-muted-foreground">Commercial and passenger configurations</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Chevrolet Express</h3>
                      <p className="text-sm text-muted-foreground">Passenger and cargo van models</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">GMC Savana</h3>
                      <p className="text-sm text-muted-foreground">Passenger and cargo configurations</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Nissan NV</h3>
                      <p className="text-sm text-muted-foreground">Cargo and passenger van models</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Truck className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Custom Conversions</h3>
                      <p className="text-sm text-muted-foreground">Luxury builds, wheelchair accessible, specialty</p>
                    </div>
                    <div className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow">
                      <Package className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-1">Cargo Vans</h3>
                      <p className="text-sm text-muted-foreground">Delivery, courier, and freight operations</p>
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
                      "Executive Sprinter transportation services",
                      "Airport shuttle and hotel transfer operators",
                      "Corporate employee shuttle services",
                      "Wedding and event transportation",
                      "Medical transportation (non-emergency)",
                      "Tour and sightseeing operators",
                      "Delivery and courier services",
                      "Last-mile logistics providers",
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
                    Comprehensive protection designed for commercial van operations.
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
                            "Uninsured/Underinsured Motorist",
                            "Personal Injury Protection",
                            "Passenger liability coverage",
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
                            "Comprehensive and Collision",
                            "Custom equipment coverage",
                            "Zero deductible glass",
                            "Towing and roadside assistance",
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
                          <Package className="h-6 w-6 text-primary" />
                          Cargo Coverage
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {[
                            "Motor truck cargo insurance",
                            "Theft and damage protection",
                            "Temperature-sensitive cargo",
                            "High-value goods coverage",
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
                            "General liability coverage",
                            "Workers' compensation",
                            "Hired and non-owned auto",
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
                        <Plane className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Airport Access</h3>
                        <p className="text-white/80 text-sm">
                          Coverage meets airport authority requirements for ground transportation permits
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <FileText className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">DOT Compliance</h3>
                        <p className="text-white/80 text-sm">
                          Policies meeting DOT and FMCSA requirements for interstate operations
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <DollarSign className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Competitive Rates</h3>
                        <p className="text-white/80 text-sm">
                          Fleet discounts and flexible payment options for growing operations
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Users className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Driver Training</h3>
                        <p className="text-white/80 text-sm">
                          Free online defensive driver training and risk management resources
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Briefcase className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Corporate Contracts</h3>
                        <p className="text-white/80 text-sm">
                          Certificate issuance for corporate client and venue requirements
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/10 border-white/20">
                      <CardContent className="pt-6">
                        <Layers className="h-10 w-10 text-accent mb-4" />
                        <h3 className="font-bold text-white mb-2">Excess Liability</h3>
                        <p className="text-white/80 text-sm">
                          Umbrella coverage available up to $10M for larger operations
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Coverage Options Section */}
              <CoverageOptionsSection />

              {/* FAQ Section */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Sprinter Van Insurance FAQs</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {sprinterFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="text-left font-semibold hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </section>
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
            <Truck className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Protect Your Sprinter Van Fleet Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for commercial van operators. From single vehicles to large fleets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Sprinter Van Quote
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
