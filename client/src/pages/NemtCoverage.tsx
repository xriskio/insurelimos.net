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
  Stethoscope,
  AlertTriangle,
  FileText,
  DollarSign,
  Briefcase
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import nemtHeroImage from "@assets/stock_images/medical_transportati_bedcf76d.jpg";

export default function NemtCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="NEMT and Paratransit Insurance - Non-Emergency Medical Transportation Coverage"
        description="Specialized insurance coverage for Non-Emergency Medical Transportation and Paratransit operators. Protect your patients and business."
        canonical="https://insurelimos.net/coverage/nemt"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={nemtHeroImage} 
            alt="NEMT medical transportation vehicle" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialized Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">NEMT and Paratransit Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized insurance coverage for Non-Emergency Medical Transportation and Paratransit operators.
              </p>
              <Link href="/quote/nemt">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a NEMT Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Non-Emergency Medical Transportation (NEMT) and Paratransit insurance provides comprehensive coverage specifically designed for businesses that transport patients to medical appointments, dialysis centers, and healthcare facilities. For far too long, insurance companies have neglected the needs of this ever-growing industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our specialized program addresses the unique risks associated with transporting passengers with disabilities, special needs, and medical conditions. Whether you operate a small fleet or a large-scale operation, we have the coverage you need.
              </p>
            </div>
          </div>
        </section>

        {/* Who Needs This Coverage */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Who Needs This Coverage?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Non-Emergency Medical Transportation (NEMT) providers",
                  "Paratransit service operators",
                  "Medicaid and Medicare transportation contractors",
                  "Wheelchair van transportation services",
                  "Ambulette and medical car services",
                  "Dialysis transportation company operators",
                  "Healthcare facility patient transport services",
                  "Social service organization transportation programs",
                  "Demand-response transportation providers",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Includes */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Coverage Includes</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection designed specifically for NEMT and Paratransit operations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Auto Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Bodily injury and property damage coverage",
                        "Meets state and contractual requirements",
                        "Hired and non-owned auto liability",
                        "Loading and unloading liability coverage",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
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
                    <ul className="space-y-2">
                      {[
                        "Coverage for specialized vehicles",
                        "Wheelchair lifts and ramps protection",
                        "Accessibility equipment coverage",
                        "Medical equipment securement coverage",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Accessibility className="h-6 w-6 text-accent" />
                      Passenger Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Enhanced coverage for patient transportation",
                        "Medical payments coverage for injuries",
                        "Coverage during patient loading/unloading",
                        "Protection for vulnerable populations",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-primary" />
                      Business Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "General liability for premises operations",
                        "Workers' compensation for drivers",
                        "Professional liability coverage",
                        "Crime and employee dishonesty coverage",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-accent" />
                      Critical Coverages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Sexual abuse and molestation (SAM) coverage",
                        "Protection against serious allegations",
                        "Coverage for patient assistance personnel",
                        "Patient loading, unloading, and assistance",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Layers className="h-6 w-6 text-primary" />
                      Excess Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Catastrophic claims protection",
                        "Limits up to $20,000,000 available",
                        "High-limit capacity for growing operations",
                        "Extended coverage beyond primary limits",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
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
                    <Stethoscope className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Industry Expertise</h3>
                    <p className="text-white/80 text-sm">
                      Exclusive focus on NEMT and paratransit industry with deep understanding of operations
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <DollarSign className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Competitive Pricing</h3>
                    <p className="text-white/80 text-sm">
                      Pricing designed specifically for medical transportation with flexible payment options
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Accessibility className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Equipment Coverage</h3>
                    <p className="text-white/80 text-sm">
                      Protection for wheelchair lifts, ramps, and accessibility modifications
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Heart className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Patient Safety</h3>
                    <p className="text-white/80 text-sm">
                      Risk management programs focused on patient safety and proper protocols
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <FileText className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Contract Compliance</h3>
                    <p className="text-white/80 text-sm">
                      Compliance with Medicaid, Medicare, and healthcare facility contract requirements
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Briefcase className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Flexible Operations</h3>
                    <p className="text-white/80 text-sm">
                      Support for both contract-based and demand-response operations
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Benefits List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Us?</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Exclusive focus on NEMT and paratransit industry expertise",
                  "Competitive pricing designed specifically for medical transportation",
                  "Protection for wheelchair lifts, ramps, and accessibility modifications",
                  "Enhanced passenger liability for vulnerable populations",
                  "Critical SAM coverage protecting against serious allegations",
                  "Coverage during patient loading, unloading, and assistance",
                  "Compliance with Medicaid, Medicare, and healthcare facility requirements",
                  "Understanding of patient transportation operations and safety protocols",
                  "Flexible payment options to manage cash flow",
                  "Coverage for specialized medical equipment securement",
                  "Risk management programs focused on patient safety",
                  "High-limit capacity available for growing operations",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p className="font-medium">{benefit}</p>
                  </div>
                ))}
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
                <p className="text-muted-foreground">Common questions about NEMT and Paratransit insurance coverage.</p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="limits" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What insurance limits do I need for my NEMT business?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Insurance limits for NEMT providers typically depend on several factors, including state requirements, contractual obligations with healthcare facilities, and the size of your operation. Most NEMT providers need at least $1,000,000 in auto liability coverage, though many contracts with healthcare facilities may require higher limits. We offer excess liability up to $20,000,000 for larger operations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="equipment" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Does my NEMT insurance cover the specialized equipment in my vehicles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our NEMT insurance packages include coverage for specialized equipment such as wheelchair lifts, ramps, stretchers, and other accessibility modifications. We also cover medical equipment securement devices and other accessibility features essential to your operations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sam" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What is SAM coverage and why do I need it?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Sexual Abuse and Molestation (SAM) coverage protects your business against allegations of sexual misconduct. Given the vulnerable populations served by NEMT providers, this critical coverage protects your business against serious allegations that could otherwise be financially devastating. Our policies include this important protection.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="drivers" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Are my drivers covered when assisting patients in and out of vehicles?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our NEMT coverage includes protection for patient loading, unloading, and assistance. This covers your drivers and patient assistance personnel during all phases of patient transport, including helping patients in and out of vehicles and securing wheelchairs and medical equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="medicaid" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Does your insurance meet Medicaid and Medicare requirements?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our NEMT insurance programs are designed to comply with Medicaid, Medicare, and healthcare facility contract requirements. We understand the specific insurance requirements for government contracts and can provide the certificates and endorsements needed to meet these obligations.
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
              Get specialized coverage designed for the unique needs of Non-Emergency Medical Transportation and Paratransit operators.
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
