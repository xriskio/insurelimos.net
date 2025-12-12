import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  CheckCircle2,
  HelpCircle,
  Monitor,
  Package,
  Shield
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
    question: "What is commercial property insurance?",
    answer: "Commercial property insurance protects your physical business assets including buildings, equipment, furniture, computers, and inventory from damage or loss due to fire, theft, vandalism, and other covered perils."
  },
  {
    question: "What's a Business Owners Policy (BOP)?",
    answer: "A BOP bundles commercial property and general liability coverage into one policy, often at a lower cost than purchasing them separately. It's a popular choice for small to medium transportation companies."
  },
  {
    question: "Does commercial property cover my vehicles?",
    answer: "No, commercial property insurance covers your buildings and business personal property, not your vehicles. Your fleet is covered by commercial auto insurance policies."
  },
  {
    question: "What perils are typically covered?",
    answer: "Standard coverage includes fire, lightning, explosion, windstorm, hail, smoke, vandalism, and theft. You can add coverage for flood, earthquake, and other perils based on your location and needs."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Commercial Property", url: "/coverage/commercial-property" },
];

export default function CommercialPropertyCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Commercial Property Insurance - Business Property Coverage"
        description="Protect your transportation business property with commercial property insurance. Coverage for buildings, equipment, and business assets. Bundle with liability in a BOP. Free quote."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Commercial Property Insurance"
        serviceDescription="Property coverage protecting transportation company buildings, equipment, furniture, and business assets from fire, theft, and other perils."
        url="/coverage/commercial-property"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Asset Protection</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Property Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Protects your physical business assets, including your office building, furniture, computers, and tools.
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is Commercial Property Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Commercial property insurance protects your business's physical assets from damage or loss. For transportation companies, this includes your office building (if owned), office furniture, computers, dispatch equipment, tools, and other business personal property.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  This coverage can be bundled with General Liability in a <strong>Business Owners Policy (BOP)</strong> for cost savings. A BOP is often the most economical way to get comprehensive protection for your business premises.
                </p>
              </section>

              {/* What's Covered */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What's Covered?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        Building Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection for your physical structure.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Office building structure</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Garage and maintenance facilities</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Permanently installed fixtures</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>HVAC and electrical systems</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Monitor className="h-6 w-6 text-primary" />
                        Business Personal Property
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Coverage for your business contents.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Office furniture and fixtures</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Computers and electronics</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Dispatch and communication equipment</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Tools and maintenance equipment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Package className="h-6 w-6 text-primary" />
                        Additional Coverages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Extended protection options.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Business income/interruption</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Extra expense coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Equipment breakdown</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Signs and outdoor property</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        Covered Perils
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection against common risks.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Fire and smoke damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Theft and vandalism</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Wind and hail</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Lightning and explosion</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* BOP Section */}
              <section className="mb-12 bg-accent/10 rounded-lg p-8 border-2 border-accent">
                <h2 className="text-3xl font-bold text-primary mb-4">Business Owners Policy (BOP)</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Save money by bundling Commercial Property and General Liability into one convenient policy. A BOP provides comprehensive protection at a lower cost than purchasing separate policies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-muted-foreground">Combined coverage, lower premium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-muted-foreground">Simplified policy management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-muted-foreground">One deductible for most claims</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    <span className="text-muted-foreground">Business income included</span>
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business Assets</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get comprehensive commercial property coverage or save with a Business Owners Policy.
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
