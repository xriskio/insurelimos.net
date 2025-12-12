import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
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

const faqs = [
  {
    question: "What is mobility insurance?",
    answer: "Mobility insurance covers operators of emerging transportation services including shared mobility platforms, electric vehicle services, mobility-as-a-service (MaaS) providers, and other innovative transportation solutions that don't fit traditional categories."
  },
  {
    question: "What types of mobility services need this coverage?",
    answer: "This includes car-sharing services, electric vehicle rentals, corporate shuttle services, mobility hubs, multi-modal transportation platforms, and other emerging mobility solutions that combine various transportation modes."
  },
  {
    question: "Do mobility services need municipal permits?",
    answer: "Yes, most cities require mobility operators to obtain permits and maintain specific insurance coverage. Requirements typically include $1,000,000 general liability, auto liability, workers' compensation, excess coverage, and performance bonds."
  },
  {
    question: "What makes mobility insurance different from traditional auto insurance?",
    answer: "Mobility insurance addresses the unique risks of shared and emerging transportation services, including technology failures, multi-modal operations, platform liability, user injuries, and the complex regulatory landscape of urban mobility."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Specialty Lines", url: "/coverage" },
  { name: "Mobility", url: "/coverage/mobility" },
];

export default function MobilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Mobility Insurance - Shared Mobility & MaaS Coverage"
        description="Insurance for mobility service operators. Coverage for shared mobility, car-sharing, electric vehicles, and mobility-as-a-service platforms including liability, workers comp, and performance bonds."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Mobility Insurance"
        serviceDescription="Comprehensive insurance for mobility service operators including shared mobility, car-sharing, and mobility-as-a-service platforms."
        url="/coverage/mobility"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobility Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive coverage for shared mobility services, car-sharing, electric vehicle programs, and mobility-as-a-service platforms. Municipal permit compliant programs.
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
                <h2 className="text-3xl font-bold text-primary mb-6">Mobility Insurance Programs</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  The mobility industry is rapidly evolving with new transportation models that combine technology, shared assets, and innovative service delivery. From car-sharing to electric vehicle fleets to comprehensive mobility-as-a-service (MaaS) platforms, these services require specialized insurance solutions.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our mobility insurance program provides comprehensive coverage for operators navigating this complex landscape, meeting municipal requirements while protecting against the unique risks of shared and emerging mobility services.
                </p>
              </section>

              {/* Municipal Requirements Alert */}
              <section className="mb-12 bg-accent/10 rounded-lg p-6 border-2 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                  Municipal Insurance Requirements
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>General Liability:</strong> $1,000,000 per occurrence, ISO Form CG 00 01</p>
                  <p><strong>Auto Liability:</strong> $1,000,000 minimum limits</p>
                  <p><strong>Workers' Compensation:</strong> Statutory limits with $1,000,000 Employers' Liability</p>
                  <p><strong>Umbrella/Excess:</strong> $1,000,000 per occurrence</p>
                  <p><strong>Performance Bond:</strong> $100 per vehicle</p>
                  <p className="text-sm italic">City must be named as Primary additional insured on all liability policies.</p>
                </div>
              </section>

              {/* Services Covered */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Mobility Services We Cover</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">Car-Sharing Services</h3>
                      <p className="text-muted-foreground text-sm">Peer-to-peer and fleet-based vehicle sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">Electric Vehicle Fleets</h3>
                      <p className="text-muted-foreground text-sm">EV rental and subscription services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">Corporate Shuttles</h3>
                      <p className="text-muted-foreground text-sm">Employee transportation programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">Mobility Hubs</h3>
                      <p className="text-muted-foreground text-sm">Multi-modal transportation centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">MaaS Platforms</h3>
                      <p className="text-muted-foreground text-sm">Integrated mobility service providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">Last-Mile Solutions</h3>
                      <p className="text-muted-foreground text-sm">First/last mile transportation services</p>
                    </div>
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
                        <Shield className="h-6 w-6 text-primary" />
                        Auto Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 minimum limits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Shared vehicle coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Member/user driver coverage</span>
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
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 per occurrence</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Mobility hub premises</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Products/completed operations</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Platform liability</span>
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
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Third-party vehicle coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Partner vehicle protection</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Employee vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Substitute vehicles</span>
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
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Statutory limits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000 Employers' Liability</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Fleet technicians</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Operations staff</span>
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
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Platform security</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>User data protection</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Payment processing</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Connected vehicle data</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Layers className="h-6 w-6 text-primary" />
                        Excess Liability + Bonds
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>$1,000,000+ excess coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Performance bonds ($100/vehicle)</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Municipal compliance</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Permit requirements</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Mobility Insurance Quote</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive coverage for shared mobility, car-sharing, and emerging transportation services.
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
