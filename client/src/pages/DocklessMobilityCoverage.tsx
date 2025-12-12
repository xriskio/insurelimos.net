import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bike, 
  CheckCircle2,
  HelpCircle,
  Shield,
  Car,
  Users,
  Building,
  Layers,
  AlertTriangle,
  FileText
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

import escooterImage from "@assets/generated_images/electric_scooter_sharing_service.png";
import ebikeImage from "@assets/generated_images/electric_bike_sharing_service.png";

const faqs = [
  {
    question: "What is dockless mobility insurance?",
    answer: "Dockless mobility insurance covers operators of shared e-scooters, e-bikes, and similar micro-mobility devices. It includes general liability, auto liability, workers' compensation, excess liability, cyber liability, and performance bonds required by municipalities."
  },
  {
    question: "What insurance do cities require for dockless mobility operators?",
    answer: "Most cities require minimum $1,000,000 general liability, $1,000,000 auto liability, workers' compensation with statutory limits, $1,000,000 umbrella/excess coverage, and performance bonds (typically $100 per vehicle). The city must be named as additional insured."
  },
  {
    question: "Do I need a performance bond for my e-scooter program?",
    answer: "Yes, most municipalities require a performance bond, typically $100 per vehicle. This ensures operators fulfill their obligations including proper device maintenance, removal of abandoned devices, and compliance with permit requirements."
  },
  {
    question: "What coverage is needed for e-scooter rider injuries?",
    answer: "General liability coverage protects against third-party bodily injury claims. You'll need minimum $1,000,000 per occurrence coverage on an ISO CG 00 01 occurrence form, including products and completed operations."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Specialty Lines", url: "/coverage" },
  { name: "Dockless Mobility", url: "/coverage/dockless-mobility" },
];

export default function DocklessMobilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Dockless Mobility Insurance - E-Scooter & E-Bike Coverage"
        description="Insurance for dockless mobility operators. E-scooter and e-bike fleet coverage including general liability, auto liability, workers comp, excess liability, cyber coverage and performance bonds. City of LA compliant."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Dockless Mobility Insurance"
        serviceDescription="Comprehensive insurance for dockless mobility operators including e-scooters, e-bikes, and shared micro-mobility devices with municipal compliance."
        url="/coverage/dockless-mobility"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialty Lines</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dockless Mobility Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive insurance programs for e-scooter, e-bike, and shared micro-mobility operators. Municipal permit compliant coverage for your fleet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/public-auto">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Get a Free Quote
                  </Button>
                </Link>
                <a href="tel:888-254-0089">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                    Call 888-254-0089
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Dockless Mobility Insurance Programs</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  The dockless mobility industry—including e-scooters, e-bikes, and other shared micro-mobility devices—faces unique insurance requirements from municipalities. Cities like Los Angeles require specific coverage levels and naming the city as additional insured.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our dockless mobility insurance program is designed to meet or exceed all municipal requirements while protecting your business from the unique risks of operating shared mobility services.
                </p>
              </section>

              {/* Images */}
              <section className="mb-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src={escooterImage} alt="Electric scooter sharing service" className="w-full h-48 object-cover" />
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-primary">E-Scooter Programs</h3>
                      <p className="text-sm text-muted-foreground">Shared electric scooter fleet insurance</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img src={ebikeImage} alt="Electric bike sharing service" className="w-full h-48 object-cover" />
                    <div className="p-4 bg-white">
                      <h3 className="font-bold text-primary">E-Bike Programs</h3>
                      <p className="text-sm text-muted-foreground">Shared electric bicycle fleet insurance</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Multi-City Requirements */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
                  <AlertTriangle className="h-8 w-8 text-accent" />
                  Municipal Insurance Requirements
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Each city has specific insurance requirements for shared micro-mobility operators. We help you meet all municipal requirements across California and Nevada.
                </p>

                {/* San Francisco SFMTA */}
                <div className="mb-6 bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-primary mb-4">San Francisco (SFMTA)</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Commercial General Liability:</strong> $2,000,000 per occurrence, $5,000,000 general aggregate</p>
                    <p><strong>Workers' Compensation:</strong> Statutory limits, $1,000,000 Employers' Liability</p>
                    <p><strong>Auto Liability:</strong> $1,000,000 minimum</p>
                    <p><strong>Umbrella/Excess:</strong> $1,000,000 per occurrence</p>
                    <p className="text-sm italic">City and County of San Francisco must be named as additional insured.</p>
                  </div>
                </div>

                {/* City of Los Angeles */}
                <div className="mb-6 bg-accent/10 rounded-lg p-6 border-2 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-4">City of Los Angeles</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> $1,000,000 per occurrence, ISO Form CG 00 01</p>
                    <p><strong>Auto Liability:</strong> $1,000,000 limits</p>
                    <p><strong>Workers' Compensation:</strong> Statutory limits, $1,000,000 Employers' Liability</p>
                    <p><strong>Umbrella/Excess:</strong> $1,000,000 per occurrence</p>
                    <p><strong>Performance Bond:</strong> $100 per vehicle</p>
                    <p className="text-sm italic">City of Los Angeles, its officers, agents and employees must be named as Primary additional insureds.</p>
                  </div>
                </div>

                {/* San Diego */}
                <div className="mb-6 bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-primary mb-4">City of San Diego</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> $2,000,000 per occurrence, $4,000,000 aggregate</p>
                    <p><strong>Umbrella/Excess:</strong> $4,000,000 umbrella policy</p>
                    <p><strong>Workers' Compensation:</strong> Statutory limits</p>
                    <p><strong>Performance Bond:</strong> $65 per device</p>
                    <p><strong>Permit Fee:</strong> $150 per device annually</p>
                    <p className="text-sm italic">Must indemnify City of San Diego from all liability claims.</p>
                  </div>
                </div>

                {/* San Jose */}
                <div className="mb-6 bg-purple-50 rounded-lg p-6 border-2 border-purple-200">
                  <h3 className="text-xl font-bold text-primary mb-4">City of San Jose</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> $5,000,000 per occurrence (LA County standard)</p>
                    <p><strong>Umbrella/Excess:</strong> $5,000,000+ umbrella policy</p>
                    <p><strong>Workers' Compensation:</strong> Statutory limits</p>
                    <p><strong>Application Fee:</strong> $3,351 annual permit fee</p>
                    <p><strong>Device Fee:</strong> $139 per scooter annually</p>
                    <p><strong>Deposit:</strong> $10,000 property repair deposit</p>
                    <p className="text-sm italic">Proof of insurance required before permit issuance.</p>
                  </div>
                </div>

                {/* Las Vegas */}
                <div className="mb-6 bg-orange-50 rounded-lg p-6 border-2 border-orange-200">
                  <h3 className="text-xl font-bold text-primary mb-4">City of Las Vegas</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> $5,000,000 per occurrence (industry standard)</p>
                    <p><strong>Umbrella/Excess:</strong> $5,000,000+ umbrella policy</p>
                    <p><strong>Cyber/E&O Insurance:</strong> $2,000,000 minimum</p>
                    <p><strong>Workers' Compensation:</strong> Statutory limits</p>
                    <p className="text-sm italic">Higher limits recommended for faster permit approvals in Nevada.</p>
                  </div>
                </div>

                {/* Santa Monica */}
                <div className="mb-6 bg-teal-50 rounded-lg p-6 border-2 border-teal-200">
                  <h3 className="text-xl font-bold text-primary mb-4">City of Santa Monica</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> $5,000,000 per occurrence (occurrence basis)</p>
                    <p><strong>Workers' Compensation:</strong> California statutory limits, $1,000,000 Employers' Liability</p>
                    <p><strong>Coverage Must Include:</strong> Products/completed operations, property damage, bodily injury, personal/advertising injury</p>
                    <p><strong>Permit Fee:</strong> $20,000/year operator fee + $130/year per device + $1/device/day PROW fee</p>
                    <p className="text-sm italic">City of Santa Monica must be named as additional insured. 30-day cancellation notice required.</p>
                  </div>
                </div>

                {/* Long Beach */}
                <div className="mb-6 bg-cyan-50 rounded-lg p-6 border-2 border-cyan-200">
                  <h3 className="text-xl font-bold text-primary mb-4">City of Long Beach</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>General Liability:</strong> Commercial liability insurance required per CA AB 371</p>
                    <p><strong>State Requirement:</strong> $10,000+ per person for personal injury or death (CA AB 371)</p>
                    <p><strong>Indemnification:</strong> Must indemnify City of Long Beach</p>
                    <p><strong>Liability Waiver:</strong> City waiver must be included in app sign-up process</p>
                    <p><strong>Fleet Size:</strong> 500-1,000 e-scooters per operator (4 operators max)</p>
                    <p className="text-sm italic">Contact GoActiveLB@longbeach.gov for current permit requirements.</p>
                  </div>
                </div>

                {/* South Bay Beach Cities */}
                <div className="mb-6 bg-slate-50 rounded-lg p-6 border-2 border-slate-200">
                  <h3 className="text-xl font-bold text-primary mb-4">South Bay Beach Cities</h3>
                  <p className="text-muted-foreground mb-3">Hermosa Beach, Manhattan Beach, Huntington Beach</p>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Status:</strong> Limited or no formal shared scooter/e-bike programs</p>
                    <p><strong>Recommended Coverage:</strong> $1,000,000+ GL per occurrence, $5,000,000 aggregate</p>
                    <p><strong>Workers' Compensation:</strong> California statutory limits</p>
                    <p><strong>Business License:</strong> Required for any commercial operation</p>
                    <p className="text-sm italic">Contact individual city Community Development departments for current permit availability and requirements.</p>
                  </div>
                </div>
              </section>

              {/* Coverage Options */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Coverage Options</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        General Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">ISO Form CG 00 01 occurrence basis coverage.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 per occurrence minimum</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Products and completed operations</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Personal and advertising injury</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>City named as additional insured</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-primary" />
                        Hired & Non-Owned Auto
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Coverage for service vehicles and employee autos.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 liability limits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Fleet maintenance vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Device collection/redistribution</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>City named as additional insured</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        Workers' Compensation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection for your field and operations staff.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>California statutory limits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 Employers' Liability</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Field technicians covered</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Warehouse staff covered</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Layers className="h-6 w-6 text-primary" />
                        Excess/Umbrella Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Higher limits for catastrophic claims.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 minimum per occurrence</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Excess over GL, Auto, EL</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Higher limits available</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>City named as additional insured</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                        Cyber Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection for app and user data.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>User data breach coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Payment information protection</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>GPS tracking data security</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Notification and monitoring</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        Performance Bond
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Municipal permit compliance bond.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$100 per vehicle (typical)</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Payable without condition</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Device removal guarantee</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Permit compliance assurance</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-12">
                <div className="text-center mb-8">
                  <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-4">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Dockless Mobility Insurance Quote</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Municipal-compliant coverage for your e-scooter or e-bike fleet. We handle the complex requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Request a Quote
                </Button>
              </Link>
              <a href="tel:888-254-0089">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Call 888-254-0089
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
