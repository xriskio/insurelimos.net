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
  Users,
  FileText,
  AlertTriangle,
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
    question: "What does general liability insurance cover?",
    answer: "General liability covers third-party claims for bodily injury, property damage, and personal/advertising injury that occur on your premises or as a result of your business operations (excluding auto accidents, which are covered by auto liability)."
  },
  {
    question: "Do I need general liability if I have auto liability?",
    answer: "Yes. Auto liability only covers incidents involving your vehicles. General liability protects you from claims arising from your office, waiting area, advertising, or other non-driving business activities."
  },
  {
    question: "What limits are available for general liability?",
    answer: "We offer general liability limits up to $5 million per occurrence, with higher limits available upon request. Many transportation companies choose $1 million per occurrence with a $2 million aggregate."
  },
  {
    question: "Can I bundle general liability with other coverages?",
    answer: "Yes. General liability can be bundled with commercial property in a Business Owners Policy (BOP) for cost savings. We can also package it with your auto and workers' compensation policies."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "General Liability", url: "/coverage/general-liability" },
];

export default function GeneralLiabilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="General Liability Insurance - Business Liability Coverage"
        description="Protect your transportation business with general liability insurance. Coverage for premises liability, personal injury, and property damage. Limits up to $5 million. Free quote."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="General Liability Insurance"
        serviceDescription="Business liability coverage protecting transportation companies from third-party claims for bodily injury and property damage from non-auto operations."
        url="/coverage/general-liability"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Business Protection</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">General Liability Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Protects your business from third-party claims of bodily injury or property damage that occur on your premises or as a result of your business operations.
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is General Liability Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  General liability insurance (also called Commercial General Liability or CGL) protects your business from claims arising from your operations that don't involve your vehicles. This includes slip-and-fall accidents at your office, damage to customer property, and advertising injuries.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  For transportation companies, general liability is crucial for protecting against exposures at your office, waiting areas, or any physical location where customers or visitors may be present.
                </p>
                <p className="text-lg text-muted-foreground">
                  Limits are available up to <strong>$5 million</strong> per occurrence, with higher limits available upon request through excess liability coverage.
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
                        Premises Liability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection for injuries occurring on your property.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Slip-and-fall accidents</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Customer injuries in waiting areas</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Injuries from unsafe conditions</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Visitor accidents at your office</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Building className="h-6 w-6 text-primary" />
                        Property Damage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Coverage for damage you cause to others' property.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Customer property damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Damage during operations</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Accidental property damage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Non-auto related damages</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        Personal & Advertising Injury
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Protection against non-physical injuries.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Libel and slander claims</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Copyright infringement</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>False advertising claims</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Wrongful eviction</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-primary" />
                        Legal Defense
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Coverage for defending against lawsuits.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Attorney fees</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Court costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Settlement costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Judgments against you</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Limits */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Coverage Limits</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border">
                    <h3 className="text-xl font-bold text-primary mb-4">Per Occurrence</h3>
                    <p className="text-3xl font-bold text-accent mb-2">Up to $5 Million</p>
                    <p className="text-muted-foreground">Maximum payout for a single claim or incident</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border">
                    <h3 className="text-xl font-bold text-primary mb-4">Aggregate Limit</h3>
                    <p className="text-3xl font-bold text-accent mb-2">Higher Available</p>
                    <p className="text-muted-foreground">Total payout for all claims during policy period</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Business Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get comprehensive general liability coverage to protect against everyday business risks.
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
