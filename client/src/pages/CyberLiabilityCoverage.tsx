import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle2,
  HelpCircle,
  Lock,
  AlertTriangle,
  CreditCard,
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
    question: "Why do transportation companies need cyber liability insurance?",
    answer: "Transportation companies handle sensitive customer data including names, addresses, payment information, and travel schedules. A data breach can expose this information and result in significant financial liability, legal costs, and reputational damage."
  },
  {
    question: "What does cyber liability insurance cover?",
    answer: "Cyber liability covers costs related to data breaches including customer notification, credit monitoring, legal defense, regulatory fines, forensic investigations, and business interruption losses from cyber attacks."
  },
  {
    question: "Does my general liability policy cover cyber incidents?",
    answer: "No, most general liability policies specifically exclude cyber-related claims. You need a dedicated cyber liability policy to protect against data breaches, ransomware, and other cyber threats."
  },
  {
    question: "How much cyber liability coverage do I need?",
    answer: "Coverage needs vary based on the amount of customer data you store, payment processing volume, and regulatory requirements. Most small to medium transportation companies start with $1 million in coverage."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Cyber Liability", url: "/coverage/cyber-liability" },
];

export default function CyberLiabilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Cyber Liability Insurance - Data Breach Protection"
        description="Protect your transportation business from cyber attacks and data breaches with cyber liability insurance. Coverage for notification costs, legal fees, and business interruption. Free quote."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Cyber Liability Insurance"
        serviceDescription="Cyber liability coverage protecting transportation companies from data breaches, ransomware, and cyber attacks."
        url="/coverage/cyber-liability"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Digital Protection</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cyber Liability Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Protection against data breaches and cyber attacks. Essential for transportation companies handling sensitive client data and payment information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/cyber-liability">
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is Cyber Liability Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Cyber liability insurance protects your business from the financial consequences of data breaches, cyber attacks, and other technology-related incidents. As transportation companies increasingly rely on digital systems for booking, dispatch, and payment processing, cyber risks have become a significant concern.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  A single data breach can cost hundreds of thousands of dollars in notification costs, credit monitoring, legal fees, and regulatory fines. Cyber liability insurance covers these costs and helps your business recover.
                </p>
              </section>

              {/* What's Covered */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What's Covered?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                        Data Breach Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Customer notification costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Credit monitoring services</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Forensic investigation</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Public relations/crisis management</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        Legal & Regulatory
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Legal defense costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Regulatory fines and penalties</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Settlement costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Class action defense</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Lock className="h-6 w-6 text-primary" />
                        Cyber Extortion
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Ransomware payments</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Extortion negotiation services</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>System restoration costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Data recovery expenses</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                        Business Interruption
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Lost income during downtime</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Extra expense coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>System failure coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Dependent business interruption</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Transportation-Specific Risks */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Transportation Cyber Risks</h2>
                <p className="text-muted-foreground mb-6">
                  Transportation companies face unique cyber vulnerabilities:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Customer Data</h3>
                      <p className="text-muted-foreground">Names, addresses, phone numbers, and travel patterns of passengers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Payment Information</h3>
                      <p className="text-muted-foreground">Credit card data from online bookings and in-vehicle payments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Dispatch Systems</h3>
                      <p className="text-muted-foreground">GPS tracking, scheduling software, and communication systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Healthcare Data (NEMT)</h3>
                      <p className="text-muted-foreground">Protected health information subject to HIPAA requirements</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business from Cyber Threats</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get cyber liability coverage to protect your customer data and digital operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/cyber-liability">
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
