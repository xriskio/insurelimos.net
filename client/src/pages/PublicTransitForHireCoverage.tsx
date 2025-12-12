import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Car, 
  CheckCircle2,
  HelpCircle,
  Shield,
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

const faqs = [
  {
    question: "What is public transit for hire insurance?",
    answer: "Public transit for hire insurance covers operators of shared autonomous vehicles, micro-transit services, and other for-hire public transportation options. It includes liability, workers' compensation, excess coverage, cyber liability, and performance bonds required by municipalities."
  },
  {
    question: "What coverage do autonomous vehicle operators need?",
    answer: "Autonomous vehicle operators typically need $1,000,000+ general liability, $1,000,000+ auto liability, workers' compensation for remote operators and technicians, excess liability, comprehensive cyber coverage, and municipal performance bonds."
  },
  {
    question: "Are there special requirements for micro-transit services?",
    answer: "Yes, micro-transit services operating in cities like Los Angeles must maintain specific coverage levels, name the city as additional insured, and maintain performance bonds. Requirements vary by municipality."
  },
  {
    question: "Do I need cyber liability for autonomous vehicles?",
    answer: "Absolutely. Autonomous and connected vehicles rely heavily on technology systems. Cyber liability covers risks from vehicle system hacking, passenger data breaches, and operational technology failures."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Specialty Lines", url: "/coverage" },
  { name: "Public Transit For Hire", url: "/coverage/public-transit-for-hire" },
];

export default function PublicTransitForHireCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Public Transit For Hire Insurance - Autonomous & Micro-Transit Coverage"
        description="Insurance for public transit for hire operators. Coverage for autonomous vehicles, micro-transit, and shared mobility services including liability, workers comp, cyber, and performance bonds."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Public Transit For Hire Insurance"
        serviceDescription="Comprehensive insurance for public transit for hire operators including autonomous vehicles, micro-transit, and shared public transportation services."
        url="/coverage/public-transit-for-hire"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Public Transit For Hire Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Coverage for autonomous vehicles, micro-transit, and emerging public transportation services. Municipal permit compliant programs.
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
                <h2 className="text-3xl font-bold text-primary mb-6">Public Transit For Hire Insurance Programs</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  A wide variety of for-hire transportation options exist in cities like Los Angeles, including autonomous vehicles, micro-transit services, and emerging mobility solutions. These innovative services require specialized insurance programs that address unique risks.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our public transit for hire insurance program provides comprehensive coverage designed to meet municipal requirements while protecting operators from the complex risks of next-generation transportation.
                </p>
              </section>

              {/* Municipal Requirements Alert */}
              <section className="mb-12 bg-accent/10 rounded-lg p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                  Municipal Insurance Requirements
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>Commercial General Liability:</strong> $1,000,000 per occurrence, ISO Form CG 00 01</p>
                  <p><strong>Automobile Liability:</strong> $1,000,000 minimum limits</p>
                  <p><strong>Workers' Compensation:</strong> Statutory limits with $1,000,000 Employers' Liability</p>
                  <p><strong>Umbrella Insurance:</strong> $1,000,000 per occurrence minimum</p>
                  <p><strong>Performance Bond:</strong> $100 per vehicle</p>
                  <p className="text-sm italic">City must be named as Primary additional insured on all policies.</p>
                </div>
              </section>

              {/* Coverage Options */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Coverage Options</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        Auto Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Coverage for vehicle operations and accidents.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 minimum limits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Autonomous vehicle coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Passenger injury protection</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>City as additional insured</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        General Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">ISO Form CG 00 01 occurrence basis.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 per occurrence</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Products/completed operations</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Bodily injury and property damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Personal/advertising injury</span>
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
                      <p className="text-muted-foreground mb-4">Coverage for non-fleet vehicles.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Rental vehicles for operations</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Employee personal vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Support vehicle coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Substitute vehicle protection</span>
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
                      <p className="text-muted-foreground mb-4">Employee protection coverage.</p>
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
                          <span>Remote operators covered</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vehicle technicians covered</span>
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
                      <p className="text-muted-foreground mb-4">Higher limits for major claims.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000+ per occurrence</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Excess over primary policies</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Autonomous vehicle risks</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>City as additional insured</span>
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
                      <p className="text-muted-foreground mb-4">Technology and data protection.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vehicle system security</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Passenger data protection</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Operational technology coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Ransomware protection</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Performance Bond */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Performance Bonds</h2>
                <div className="flex items-start gap-4">
                  <FileText className="h-12 w-12 text-accent shrink-0" />
                  <div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Most municipalities require operators to maintain a performance bond, typically calculated at <strong>$100 per vehicle</strong>, payable without condition. This bond ensures compliance with permit requirements including:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Proper vehicle maintenance</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Removal of abandoned or damaged vehicles</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Compliance with operational requirements</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Fleet size and deployment obligations</span>
                      </li>
                    </ul>
                  </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Public Transit Insurance Quote</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive coverage for autonomous vehicles, micro-transit, and emerging mobility services.
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
