import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { ChevronRight, Phone, Clock, Shield, CheckCircle2 } from "lucide-react";

import limoImage from "@assets/image_1765589181745.png";
import uberBlackImage from "@assets/image_1765589227005.png";
import taxiImage from "@assets/generated_images/modern_yellow_taxi_cab.png";
import tncImage from "@assets/generated_images/modern_rideshare_tesla.png";
import nemtImage from "@assets/generated_images/ford_transit_wheelchair_ramp_van.png";
import busImage from "@assets/generated_images/modern_charter_bus.png";
import sprinterImage from "@assets/generated_images/black_luxury_sprinter_van.png";
import specialtyImage from "@assets/generated_images/specialty_lines_mobility_devices.png";

const businessTypes = [
  {
    id: "limousine",
    title: "Limousine Insurance",
    description: "Comprehensive coverage for luxury transportation services including sedans, stretch limos, and SUVs.",
    details: "Coverage for luxury sedans, Mercedes Sprinters, stretch limousines, party buses, and executive transportation. Relationship with MN-1 and other A-rated carriers.",
    href: "/quote/limousine",
    image: limoImage
  },
  {
    id: "uber-black",
    title: "Uber Black Insurance",
    description: "Specialized TCP insurance for Uber Black and luxury rideshare drivers. Available in 18 states.",
    details: "Coverage for black sedans, luxury SUVs, and executive vehicles. Next Day DMV and DOT filings plus clearance.",
    href: "/quote/rideshare",
    image: uberBlackImage
  },
  {
    id: "taxi",
    title: "Taxi & Cab Insurance",
    description: "Specialized protection for taxi fleets and individual owner-operators with competitive rates.",
    details: "Coverage meeting state and municipal requirements. Hybrid policies available for drivers who operate both taxi and rideshare services.",
    href: "/quote/public-auto",
    image: taxiImage
  },
  {
    id: "tnc",
    title: "TNC & Mobility",
    description: "Tailored solutions for Transportation Network Companies like Uber/Lyft fleets and mobility services.",
    details: "Coverage for Uber, Lyft, delivery services, micro-mobility, and on-demand transportation. Period-specific protection for all operational phases.",
    href: "/quote/tnc",
    image: tncImage
  },
  {
    id: "nemt",
    title: "NEMT Insurance",
    description: "Specialized coverage for Non-Emergency Medical Transportation vehicles and liability needs.",
    details: "Coverage for wheelchair lifts, ramps, patient loading/unloading, and medical equipment transport. Policies that meet healthcare facility contract requirements.",
    href: "/quote/nemt",
    image: nemtImage
  },
  {
    id: "bus",
    title: "Bus & Motorcoach",
    description: "Protection for charter buses, tour buses, and motorcoach operators of all fleet sizes.",
    details: "Coverage for school district fleets, charter operators, tour companies, and private transportation. Limits up to $5M CSL with excess available.",
    href: "/quote/public-auto",
    image: busImage
  },
  {
    id: "sprinter",
    title: "Sprinter & Van",
    description: "Commercial auto insurance for Sprinter vans, cargo vans, and passenger shuttle services.",
    details: "Coverage for Mercedes Sprinter Executive, luxury Sprinters, cargo vans, and passenger shuttles. Fleet and single-vehicle policies.",
    href: "/quote/limousine",
    image: sprinterImage
  },
  {
    id: "specialty",
    title: "Specialty Lines",
    description: "E-scooters, e-bikes, delivery robots, and emerging mobility services. Municipal permit compliant.",
    details: "General Liability, Auto Liability, Workers Comp, Excess Liability, Cyber Liability, and Performance Bonds. City of LA compliant.",
    href: "/quote/tnc",
    image: specialtyImage
  }
];

export default function QuoteSelection() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Get a Free Quote - Select Your Business Type"
        description="Choose your transportation business type to get a customized insurance quote. Limousine, NEMT, Taxi, Bus, Rideshare, and more."
        canonical="https://insurelimos.net/quote"
      />
      <Header />
      
      <main className="flex-1 py-12 bg-secondary/20" id="main-content" role="main">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get Your Free Quote</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your business type below to get started with a customized insurance quote.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left side - Business type cards */}
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-2 gap-6">
                  {businessTypes.map((business) => (
                    <Card key={business.id} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`card-quote-${business.id}`}>
                      <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                        <img 
                          src={business.image} 
                          alt={business.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-primary text-lg mb-2">{business.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{business.description}</p>
                        <p className="text-muted-foreground text-xs mb-4">{business.details}</p>
                        <Link href={business.href}>
                          <Button 
                            variant="outline" 
                            className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                            data-testid={`button-quote-${business.id}`}
                          >
                            Get Quote <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Additional Insurance Types */}
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-primary mb-6">Additional Coverage Options</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Link href="/quote/workers-comp">
                      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-primary mb-2">Workers Compensation</h4>
                          <p className="text-xs text-muted-foreground mb-3">Protect your employees with comprehensive coverage.</p>
                          <span className="text-accent text-sm font-medium inline-flex items-center">
                            Get Quote <ChevronRight className="h-4 w-4 ml-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link href="/quote/excess-liability">
                      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-primary mb-2">Excess Liability</h4>
                          <p className="text-xs text-muted-foreground mb-3">Additional protection above your primary limits.</p>
                          <span className="text-accent text-sm font-medium inline-flex items-center">
                            Get Quote <ChevronRight className="h-4 w-4 ml-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link href="/quote/cyber-liability">
                      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-primary mb-2">Cyber Liability</h4>
                          <p className="text-xs text-muted-foreground mb-3">Protection from data breaches and cyber threats.</p>
                          <span className="text-accent text-sm font-medium inline-flex items-center">
                            Get Quote <ChevronRight className="h-4 w-4 ml-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right side - Quick Quote Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <QuickQuoteForm />
                  
                  <Card className="bg-primary text-white">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Phone className="h-6 w-6" />
                        <h3 className="font-bold text-lg">Prefer to Call?</h3>
                      </div>
                      <p className="text-white/90 text-sm mb-4">Speak directly with one of our insurance specialists.</p>
                      <a 
                        href="tel:888-254-0089" 
                        className="block w-full text-center bg-white text-primary font-bold py-3 rounded-md hover:bg-gray-100 transition-colors"
                        data-testid="link-call-quote"
                      >
                        888-254-0089
                      </a>
                    </CardContent>
                  </Card>

                  <div className="bg-slate-50 rounded-lg p-5 border">
                    <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      Why Choose Us
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>25+ years specializing in transportation</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Same-day certificates of insurance</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Access to exclusive programs & rates</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>Dedicated claims advocacy team</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
