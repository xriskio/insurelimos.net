import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Heart,
  Users, 
  Building,
  Layers,
  CheckCircle2,
  HelpCircle,
  Accessibility,
  Stethoscope
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NemtCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="NEMT Insurance - Non-Emergency Medical Transportation Coverage"
        description="Specialized insurance solutions for NEMT providers. Protect your patients and business with comprehensive medical transportation coverage."
        canonical="https://insurelimos.net/coverage/nemt"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <Accessibility className="h-8 w-8 text-white" />
                </div>
                <span className="text-white/80 font-medium">Specialized Coverage</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Non-Emergency Medical Transportation Insurance
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Specialized insurance solutions for NEMT providers, ensuring your patients and business are protected.
              </p>
              <Link href="/quote/nemt">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold shadow-lg">
                  Get a NEMT Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="hidden md:block shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Specialized Coverage for NEMT Providers</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At InsureLimos.net, we understand the unique challenges faced by Non-Emergency Medical Transportation providers. Your business requires specialized insurance that addresses the specific risks associated with transporting patients to and from medical appointments, dialysis centers, and other healthcare facilities.
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our NEMT insurance packages are tailored to meet the needs of your operation, whether you operate a single vehicle or manage a large fleet of specially equipped vans and buses.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">NEMT Insurance Coverage Options</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for your NEMT business and the patients you serve.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Auto Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for bodily injury and property damage caused to others in an accident involving your NEMT vehicles. We offer limits that meet or exceed state and contractual requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Car className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Physical Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection for your specialized vehicles, including coverage for wheelchair lifts, ramps, and other accessibility modifications essential to your NEMT operations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Accessibility className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Passenger Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enhanced coverage for the unique risks associated with transporting patients, including specialized loading/unloading procedures and securing wheelchairs and medical equipment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">General Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for non-auto related incidents that may occur during your operations, including slips and falls or other accidents on your premises.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Workers' Compensation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection for your drivers and staff who may be injured while performing job duties, including patient assistance and medical equipment handling.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Layers className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Excess Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Additional coverage that extends beyond your primary policy limits, providing extra protection for catastrophic claims that could otherwise threaten your business.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our NEMT Insurance?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Specialized understanding of NEMT operations and risks",
                  "Coverage for wheelchair lifts, ramps, and medical equipment",
                  "Policies that meet healthcare facility contract requirements",
                  "Protection for patient loading and unloading procedures",
                  "Competitive rates for single vehicles or large fleets",
                  "Expert guidance on state-specific NEMT regulations",
                  "Fast certificate of insurance issuance",
                  "Dedicated claims support familiar with NEMT operations",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Common questions about NEMT insurance coverage.</p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="limits" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What insurance limits do I need for my NEMT business?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Insurance limits for NEMT providers typically depend on several factors, including state requirements, contractual obligations with healthcare facilities, and the size of your operation. Most NEMT providers need at least $1,000,000 in auto liability coverage, though many contracts with healthcare facilities may require higher limits. Our team can help you determine the appropriate coverage limits based on your specific situation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="equipment" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Does my NEMT insurance cover the specialized equipment in my vehicles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our NEMT insurance packages can include coverage for specialized equipment such as wheelchair lifts, ramps, stretchers, and other accessibility modifications. This coverage is typically part of your physical damage policy and can be customized to reflect the actual value of your equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="drivers" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Are my drivers covered when assisting patients in and out of vehicles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    This depends on your specific policy. Many NEMT insurance packages include coverage for loading and unloading patients, but the extent of coverage can vary. We recommend a combination of auto liability and general liability coverage to ensure comprehensive protection for all aspects of patient assistance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="medical-equipment" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Do I need special insurance if I transport patients with medical equipment?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, transporting patients with medical equipment such as oxygen tanks or other medical devices presents unique risks that should be addressed in your insurance coverage. Our NEMT insurance specialists can help ensure your policy includes appropriate coverage for these situations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="premiums" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How can I reduce my NEMT insurance premiums?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Several factors can help reduce your NEMT insurance costs, including implementing comprehensive driver training programs, maintaining a clean claims history, installing vehicle safety features, and considering higher deductibles. Our team can work with you to develop a risk management strategy that may help lower your premiums over time.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Stethoscope className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Protect Your NEMT Business Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for the unique needs of non-emergency medical transportation providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/nemt">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get a NEMT Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Speak with a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
