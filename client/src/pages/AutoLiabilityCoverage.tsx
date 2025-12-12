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
  AlertTriangle,
  DollarSign,
  FileText,
  Scale,
  Users,
  Car
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
    question: "What is commercial auto liability insurance?",
    answer: "Commercial auto liability insurance protects your business when your drivers are at fault in an accident. It covers bodily injury and property damage to third parties, including medical expenses, legal fees, and repair costs for other vehicles or property."
  },
  {
    question: "What liability limits do I need for my commercial vehicles?",
    answer: "Required limits vary by state and vehicle type. Taxi and livery services typically need $100,000/$300,000 to $1,000,000 CSL. Charter buses and motorcoaches often require $5,000,000 or more. We'll help you determine the right limits for your operation."
  },
  {
    question: "Does auto liability cover my passengers?",
    answer: "Yes, auto liability covers injuries to passengers in other vehicles when you're at fault. For your own passengers, you may need additional coverage depending on your state's requirements and your specific operation type."
  },
  {
    question: "What's the difference between split limits and CSL?",
    answer: "Split limits (like $100,000/$300,000) have separate caps per person and per accident. Combined Single Limit (CSL) provides one total amount that can be applied flexibly to any combination of injuries or damages in a single accident."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Auto Liability", url: "/coverage/auto-liability" },
];

export default function AutoLiabilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Auto Liability Insurance - Commercial Vehicle Liability Coverage"
        description="Protect your transportation business with comprehensive auto liability insurance. Coverage for bodily injury and property damage. Limits from $100,000 to $5 million+. Get a free quote today."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Commercial Auto Liability Insurance"
        serviceDescription="Auto liability coverage protecting transportation businesses from third-party claims for bodily injury and property damage."
        url="/coverage/auto-liability"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Essential Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Liability Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                The foundation of any commercial auto policy. Protects your business when you or your drivers are found at fault in an accident.
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
              {/* What is Auto Liability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What is Auto Liability Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Auto liability insurance is required by law for all commercial vehicles. It protects against financial loss if you or your drivers are found at fault for an accident that injures others or damages their property.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  This coverage pays for bodily injury and property damage to third parties, including medical expenses, lost wages, pain and suffering, and legal defense costs if you're sued.
                </p>
                <p className="text-lg text-muted-foreground">
                  Limits typically range from <strong>$100,000/$300,000</strong> for taxi operations to <strong>$5 Million or more</strong> for charter buses, depending on vehicle capacity and regulatory requirements (PUC/DOT/FMCSA).
                </p>
              </section>

              {/* What's Covered */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What's Covered?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        Bodily Injury Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Medical expenses for injured parties</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Lost wages and income replacement</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Pain and suffering compensation</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Funeral expenses in fatal accidents</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-primary" />
                        Property Damage Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Repair costs for other vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Damage to buildings and structures</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Damage to personal property</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Rental car costs for the other party</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Scale className="h-6 w-6 text-primary" />
                        Legal Defense
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Attorney fees and legal representation</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Court costs and filing fees</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Expert witness fees</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Settlement negotiations</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        Additional Coverages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Medical Payments (MedPay): $5,000-$10,000</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Personal Injury Protection (PIP)</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Uninsured Motorist (UM) up to $1M</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Underinsured Motorist (UIM)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Liability Limits */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Liability Limits by Vehicle Type</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-bold text-primary">Taxi & Livery Services</h3>
                    </div>
                    <p className="text-muted-foreground">$100,000/$300,000 split limits to $1,000,000 CSL depending on state and local requirements</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-bold text-primary">Limousine & Black Car</h3>
                    </div>
                    <p className="text-muted-foreground">$750,000 to $1,500,000 CSL - CPUC/TNC requirements for California</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-bold text-primary">NEMT & Paratransit</h3>
                    </div>
                    <p className="text-muted-foreground">$750,000 to $1,500,000 CSL - Medicaid and managed care contract requirements</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-6 w-6 text-accent" />
                      <h3 className="text-xl font-bold text-primary">Motorcoach & Charter Bus</h3>
                    </div>
                    <p className="text-muted-foreground">$5,000,000+ CSL - FMCSA requirements for interstate carriers</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Auto Liability Quote Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business with the right coverage limits. Our specialists understand transportation insurance requirements.
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
