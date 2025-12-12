import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  CheckCircle2,
  HelpCircle,
  Shield,
  Heart,
  DollarSign,
  Scale
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
    question: "Is workers' compensation required for my transportation business?",
    answer: "In California, workers' compensation is mandatory for all businesses with employees, including transportation companies. Independent contractors may be exempt, but classification rules are strict and misclassification can result in penalties."
  },
  {
    question: "What does workers' compensation cover?",
    answer: "Workers' comp covers medical expenses, rehabilitation costs, and wage replacement for employees injured on the job. It also provides death benefits to families of workers killed in workplace accidents."
  },
  {
    question: "How are workers' compensation premiums calculated?",
    answer: "Premiums are based on your industry classification code, payroll, and experience modification rate (mod rate). Transportation businesses are classified based on their specific operations, and rates vary by job classification."
  },
  {
    question: "What is an experience modification rate?",
    answer: "The experience modification rate (mod rate) compares your claims history to similar businesses. A mod rate below 1.0 indicates better-than-average safety and lowers your premium, while a rate above 1.0 increases it."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Workers' Compensation", url: "/coverage/workers-comp" },
];

export default function WorkersCompCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Workers' Compensation Insurance - Employee Injury Coverage"
        description="Protect your transportation employees with workers' compensation insurance. Coverage for medical expenses, lost wages, and rehabilitation. Required in California. Free quote."
      />
      <FAQSchema faqs={faqs} />
      <InsuranceServiceSchema
        serviceName="Workers' Compensation Insurance"
        serviceDescription="Workers' compensation coverage providing medical benefits and wage replacement for transportation employees injured on the job."
        url="/coverage/workers-comp"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Employee Protection</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Workers' Compensation Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Provides medical benefits and wage replacement to employees injured on the job. Mandatory for businesses with employees in California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/workers-comp">
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
                <h2 className="text-3xl font-bold text-primary mb-6">What is Workers' Compensation Insurance?</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Workers' compensation insurance provides benefits to employees who are injured or become ill due to their job. For transportation companies, this includes drivers, dispatchers, mechanics, and office staff.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  In California and most other states, workers' compensation is required by law for all employers. This coverage protects both your employees and your business from the financial impact of workplace injuries.
                </p>
                <p className="text-lg text-muted-foreground">
                  Workers' comp provides a <strong>no-fault</strong> system, meaning employees receive benefits regardless of who caused the injury, and in return, they cannot sue you for workplace injuries.
                </p>
              </section>

              {/* What's Covered */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">What's Covered?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Heart className="h-6 w-6 text-primary" />
                        Medical Expenses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Emergency room and hospital care</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Doctor visits and specialists</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Surgery and hospitalization</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Prescription medications</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Medical equipment and supplies</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <DollarSign className="h-6 w-6 text-primary" />
                        Wage Replacement
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Temporary disability benefits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Permanent disability benefits</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Partial wage replacement during recovery</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Supplemental job displacement</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Users className="h-6 w-6 text-primary" />
                        Rehabilitation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Physical therapy</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Occupational therapy</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Vocational rehabilitation</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Return-to-work programs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Scale className="h-6 w-6 text-primary" />
                        Employer Protection
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Lawsuit protection from employees</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Legal defense coverage</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Regulatory compliance</span>
                        </li>
                        <li className="flex items-start gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span>Death benefits for families</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Transportation-Specific Risks */}
              <section className="mb-12 bg-secondary/20 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">Transportation Industry Risks</h2>
                <p className="text-muted-foreground mb-6">
                  Transportation workers face unique occupational hazards that make workers' compensation essential:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Vehicle Accidents</h3>
                      <p className="text-muted-foreground text-sm">On-the-job collisions and injuries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Slip and Fall</h3>
                      <p className="text-muted-foreground text-sm">Entering/exiting vehicles, loading areas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Repetitive Stress</h3>
                      <p className="text-muted-foreground text-sm">Back injuries from extended driving</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-primary">Assaults</h3>
                      <p className="text-muted-foreground text-sm">Violence from passengers or third parties</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Protect Your Employees Today</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get workers' compensation coverage to protect your team and your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/workers-comp">
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
