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
  AlertTriangle,
  FileText,
  DollarSign,
  Briefcase,
  Scale,
  Wrench,
  Bus
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ParatransitCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Paratransit Insurance - Non-Emergency Transportation Coverage | InsureLimos"
        description="Specialized paratransit insurance coverage for California and nationwide. Protect your NEMT business with comprehensive auto liability, physical damage, and general liability coverage."
        canonical="https://insurelimos.net/coverage/paratransit"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium flex items-center gap-2">
                <Accessibility className="h-5 w-5" />
                Specialized Coverage
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Paratransit Insurance</h1>
              <p className="text-xl text-white/90 mb-2">
                NEMT Transportation Insurance | Non-Emergency Transportation
              </p>
              <p className="text-lg text-white/80 mb-6">
                Comprehensive coverage for paratransit companies serving passengers with disabilities and special needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/paratransit">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Get a Paratransit Quote
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

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Running a paratransit company comes with its share of risks. You are in the business of helping people but you have to prepare for the unexpected. Your passengers are handicapped or have special needs which creates additional risks and responsibilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You also need to determine how much coverage is enough. There are a number of factors involved: how many drivers you have, the number of customers and the length of your routes. Our team is made up of experts in transportation insurance who can help you evaluate the special risks you face running a paratransit company so you have the right insurance, the right company and the right amount.
              </p>
            </div>
          </div>
        </section>

        {/* Lines of Business */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Lines of Business</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection designed specifically for paratransit operations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Building, label: "General Liability" },
                  { icon: Car, label: "Auto Liability (Commercial)" },
                  { icon: Shield, label: "One Way Coverage for Accidents" },
                  { icon: Users, label: "Worker's Compensation" },
                  { icon: Wrench, label: "Property Damage" },
                  { icon: Briefcase, label: "Professional Liability With Retroactive Coverage" },
                  { icon: AlertTriangle, label: "Sexual Abuse and Molestation Coverages" },
                  { icon: Layers, label: "Excess Liability Up to $20,000,000" },
                  { icon: Scale, label: "Director and Officers Liability" },
                  { icon: FileText, label: "Crime Coverage" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border">
                    <item.icon className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Coverage Details</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Liability Coverage/Limits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Up to <strong>$5,000,000 CSL</strong></span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Higher limits available at Underwriter's discretion</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Excess coverage up to <strong>$20,000,000</strong></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Car className="h-6 w-6 text-primary" />
                      Physical Damage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Minimum $500 deductible for comp/collision</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Minimum stated value: $10,000</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Values over $250,000 must be reinsured</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Units older than 10 years require Underwriting approval</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Bus className="h-6 w-6 text-primary" />
                      Eligible Vehicles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Sedans and vans with seating capacity up to 14 passengers</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Units may be equipped with wheelchair ramps or lifts</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Vehicles must have proper tie-downs for wheelchairs</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Written procedures for loading/unloading passengers required</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Accessibility className="h-6 w-6 text-accent" />
                      Eligible Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>For-Hire transportation of patients (contract or demand-response)</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Medicars & Ambulettes</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Social service organizations & medical facilities transport</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>Minimum 85% revenue from NEMT operations required</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Requirements */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Operations Requirements</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    Standard Requirements
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Insured must conform to all laws regarding matrons/aides on vehicles",
                      "Patients must be belted in and strapped securely",
                      "Contracts and/or financials may be requested for verification",
                      "Not more than 15% revenue can come from taxi exposure",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 p-3 bg-white rounded-lg shadow-sm">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-amber-500" />
                    Operations Requiring In-Depth Approval
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Ambulances or emergency vehicles equipped with lights and sirens",
                      "Risks that provide any medical, paramedical or first-aid service",
                      "Risks that transport oxygen",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Accessibility className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Specialized Coverage</h3>
                    <p className="text-white/80 text-sm">
                      Designed specifically for paratransit and NEMT operations with wheelchair accessibility
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <DollarSign className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">High Liability Limits</h3>
                    <p className="text-white/80 text-sm">
                      Up to $5,000,000 CSL with excess liability available up to $20,000,000
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <AlertTriangle className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">SAM Coverage</h3>
                    <p className="text-white/80 text-sm">
                      Sexual Abuse and Molestation coverage to protect against serious allegations
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Heart className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Patient Protection</h3>
                    <p className="text-white/80 text-sm">
                      Comprehensive coverage for vulnerable populations with special needs
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <FileText className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">D&O Liability</h3>
                    <p className="text-white/80 text-sm">
                      Directors and Officers liability coverage for business management protection
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Briefcase className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Professional Liability</h3>
                    <p className="text-white/80 text-sm">
                      Professional liability with retroactive coverage for comprehensive protection
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Common questions about paratransit insurance coverage.</p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="limits" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What liability limits are available for paratransit insurance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer liability coverage up to $5,000,000 CSL (Combined Single Limit). Higher limits are available at the Underwriter's discretion, and we can provide excess liability coverage up to $20,000,000 for larger operations that need additional protection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="vehicles" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What types of vehicles are eligible for paratransit insurance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We cover sedans and vans with seating capacity up to 14 passengers. Vehicles may be equipped with wheelchair ramps or lifts. All vehicles must have proper tie-downs for wheelchairs during transport and must display written procedures for loading and unloading passengers in wheelchairs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="requirements" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What are the eligibility requirements for coverage?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To qualify for our paratransit insurance, your business must generate a minimum of 85% revenue from NEMT-type operations. Not more than 15% of your revenue can come from taxi-type exposures. We may request contracts and/or financials for verification.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sam" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What is Sexual Abuse and Molestation (SAM) coverage?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    SAM coverage protects your business against allegations of sexual misconduct. Given the vulnerable populations served by paratransit providers, this critical coverage protects your business against serious allegations that could otherwise be financially devastating. Our policies include this important protection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="older-vehicles" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Can I insure vehicles older than 10 years?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Vehicles older than 10 years require Underwriting approval. A current mechanic's statement and photograph may be required at the Underwriter's discretion to verify the vehicle's condition and roadworthiness.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Accessibility className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Protect Your Paratransit Business Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Our team is made up of experts in transportation insurance. We can help you evaluate the special risks you face running a paratransit company so you have the right insurance, the right company and the right amount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/paratransit">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get a Paratransit Quote
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
