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
  Key,
  Users,
  Wrench
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
    question: "What is hired and non-owned auto insurance?",
    answer: "Hired and non-owned auto insurance covers liability when employees drive vehicles they don't own for business purposes. 'Hired' covers rented or leased vehicles, while 'non-owned' covers employee-owned vehicles used for business."
  },
  {
    question: "Why do I need this coverage if employees have their own insurance?",
    answer: "Personal auto policies may not fully cover business use. If an employee causes an accident while working, the injured party may sue your company. This coverage protects your business from those claims."
  },
  {
    question: "Does this cover damage to the rented vehicle?",
    answer: "Hired and non-owned typically provides liability coverage only, not physical damage to the rented vehicle. You may need to purchase the rental company's collision damage waiver or add physical damage coverage."
  },
  {
    question: "When would I use a substitute vehicle?",
    answer: "Substitute vehicles are often used when your regular fleet vehicle is being serviced, repaired, or is temporarily unavailable. This coverage ensures you're protected while using temporary replacements."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Hired & Non-Owned Auto", url: "/coverage/hired-non-owned" },
];

export default function HiredNonOwnedCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Hired & Non-Owned Auto Insurance - Rental & Employee Vehicle Coverage"
        description="Protect your business with hired and non-owned auto insurance. Coverage for rented vehicles and employee-owned cars used for business. Essential protection for substitute vehicles."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Hired and Non-Owned Auto Insurance"
        serviceDescription="Liability coverage for rented, borrowed, or employee-owned vehicles used for business purposes."
        url="/coverage/hired-non-owned"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Flexible Vehicle Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hired & Non-Owned Auto Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Coverage for vehicles you rent, borrow, or use for business that aren't on your policy. Essential protection for substitute vehicles while your primary vehicle is being serviced.
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is Hired & Non-Owned Auto Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Hired and non-owned auto insurance provides liability coverage when your business uses vehicles that aren't part of your owned fleet. This includes rental cars, employee personal vehicles used for business errands, and substitute vehicles.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  For transportation companies, this coverage is especially important when fleet vehicles are being serviced or repaired and you need temporary replacements to keep operations running.
                </p>
              </section>

              {/* Coverage Types */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Types of Coverage</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Key className="h-6 w-6 text-primary" />
                        Hired Auto Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Covers vehicles you rent or lease for business use.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Rental cars and vans</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Short-term leased vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Borrowed vehicles for business</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Loaner vehicles from dealers</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        Non-Owned Auto Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Covers employee-owned vehicles used for work.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Employee cars on business errands</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Personal vehicles for client visits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Contractor-owned vehicles</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Volunteer driver vehicles</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Wrench className="h-6 w-6 text-primary" />
                        Substitute Vehicle Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Covers temporary replacements for your fleet.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vehicles while yours is in service</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Temporary replacements after accidents</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Backup vehicles during repairs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Overflow capacity vehicles</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Car className="h-6 w-6 text-primary" />
                        What's Protected
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">Liability protection for your business.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Bodily injury to third parties</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Property damage liability</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Legal defense costs</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Settlement and judgment costs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Why You Need It */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Transportation Companies Need This Coverage</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Fleet Downtime Protection</h3>
                      <p className="text-muted-foreground">When your vehicles are being serviced, you need coverage for substitute vehicles to keep operations running.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Gap in Employee Coverage</h3>
                      <p className="text-muted-foreground">Personal auto policies often exclude or limit business use, leaving your company exposed to lawsuits.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Rental Car Gaps</h3>
                      <p className="text-muted-foreground">Rental companies' insurance may not provide adequate limits for commercial transportation operations.</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Get Hired & Non-Owned Coverage</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Don't leave your business exposed when using rental or substitute vehicles.
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
