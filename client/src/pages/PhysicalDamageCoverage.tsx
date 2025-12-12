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
  Wrench,
  CloudRain,
  AlertTriangle
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
    question: "What's the difference between collision and comprehensive coverage?",
    answer: "Collision coverage pays for damage when your vehicle hits another vehicle or object. Comprehensive covers non-collision events like theft, vandalism, fire, weather damage, and glass breakage."
  },
  {
    question: "What deductible options are available?",
    answer: "We offer deductibles starting as low as $1,000 for both collision and comprehensive coverage. Higher deductibles result in lower premiums. We'll help you find the right balance for your budget."
  },
  {
    question: "Is roadside assistance included?",
    answer: "Yes, roadside coverage is available subject to an aggregate of $300.00 per covered auto per policy period. This includes towing, jump starts, lockout service, and flat tire changes."
  },
  {
    question: "How does windshield coverage work?",
    answer: "Windshield replacement is covered at a $100 deductible regardless of your comprehensive deductible. Windshield chip repairs are covered without any deductible application."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Physical Damage", url: "/coverage/physical-damage" },
];

export default function PhysicalDamageCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Auto Physical Damage Insurance - Comprehensive & Collision Coverage"
        description="Protect your commercial vehicles with physical damage coverage. Collision and comprehensive insurance for fleets. Deductibles from $1,000. Windshield coverage included. Get a quote."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Auto Physical Damage Insurance"
        serviceDescription="Comprehensive and collision coverage protecting your commercial vehicles from accidents, theft, vandalism, and weather damage."
        url="/coverage/physical-damage"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Protect Your Fleet</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Physical Damage Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Covers the cost to repair or replace your vehicle if it's damaged in an accident, stolen, vandalized, or damaged by fire or weather.
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is Physical Damage Coverage?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Auto physical damage insurance protects your investment in your commercial vehicles. Unlike liability insurance which covers damage you cause to others, physical damage coverage pays to repair or replace your own vehicles.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  This coverage is essential for protecting your fleet investment and keeping your business operating after an accident or covered loss. It includes both Collision and Comprehensive coverage components.
                </p>
              </section>

              {/* Coverage Types */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Types of Physical Damage Coverage</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-primary" />
                        Collision Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Pays when your vehicle collides with another vehicle or object, regardless of fault.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Accidents with other vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Single-vehicle accidents</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Hitting objects (poles, guardrails)</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Rollover accidents</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        Comprehensive Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Covers non-collision events including theft, vandalism, and natural disasters.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Theft and attempted theft</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vandalism and malicious mischief</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Fire and explosion</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Glass breakage</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CloudRain className="h-6 w-6 text-primary" />
                        Weather Damage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection against damage from natural events.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Hail damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Flood and water damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Wind and tornado</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Falling objects</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Wrench className="h-6 w-6 text-primary" />
                        Roadside & Glass
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Additional coverage for common issues.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Roadside: $300 aggregate per vehicle</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Windshield replacement: $100 deductible</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Chip repair: No deductible</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Towing and labor</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Deductible Options */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Deductible Options</h2>
                <p className="text-muted-foreground mb-6">
                  Choose a deductible that fits your budget. Higher deductibles mean lower premiums, but more out-of-pocket costs when you file a claim.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border text-center">
                    <p className="text-3xl font-bold text-primary mb-2">$1,000</p>
                    <p className="text-muted-foreground">Minimum deductible for collision and comprehensive</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border text-center">
                    <p className="text-3xl font-bold text-primary mb-2">$2,500</p>
                    <p className="text-muted-foreground">Popular choice for balanced protection</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border text-center">
                    <p className="text-3xl font-bold text-primary mb-2">$5,000+</p>
                    <p className="text-muted-foreground">Maximum savings on premiums</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Fleet Investment</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get comprehensive physical damage coverage with flexible deductibles. Keep your vehicles on the road.
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
