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
  Stethoscope,
  AlertTriangle,
  FileText,
  DollarSign,
  Briefcase,
  Truck,
  UserCheck,
  Clock,
  Package
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ambulanceHeroImage from "@assets/image_1764901940245.png";

export default function AmbulanceCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Ambulance Insurance - Emergency Medical Services Coverage"
        description="Comprehensive insurance coverage for ambulance services and EMS providers. Auto liability, professional liability, inland marine, and more."
        canonical="https://insurelimos.net/coverage/ambulance"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={ambulanceHeroImage} 
            alt="Ambulance emergency medical services vehicle" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialized Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Ambulance Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive insurance solutions for ambulance services, EMS providers, and emergency medical transportation.
              </p>
              <Link href="/quote/ambulance">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get an Ambulance Insurance Quote
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
                Ambulance and Emergency Medical Services (EMS) providers face unique risks that require specialized insurance coverage. From responding to emergencies at high speeds to providing life-saving medical care, your operations demand comprehensive protection that understands the critical nature of your work.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our ambulance insurance program provides tailored coverage for BLS (Basic Life Support), ALS (Advanced Life Support), critical care transport, and air ambulance operations. We work with A-rated carriers who understand EMS operations and provide the specialized coverage you need.
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
                  "Private ambulance service providers",
                  "Municipal EMS departments",
                  "Hospital-based ambulance services",
                  "Fire department EMS operations",
                  "Critical care transport providers",
                  "BLS and ALS ambulance operators",
                  "Air ambulance and helicopter EMS",
                  "Interfacility transport services",
                  "Event medical services providers",
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
                  Comprehensive protection designed specifically for ambulance and EMS operations.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                        "Bodily injury and property damage",
                        "Emergency response coverage",
                        "High-speed operation protection",
                        "Hired and non-owned auto",
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
                      Auto Physical Damage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Collision and comprehensive",
                        "Ambulance box and chassis",
                        "Emergency lighting systems",
                        "Communications equipment",
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
                      <Users className="h-6 w-6 text-primary" />
                      Workers' Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "EMT and paramedic coverage",
                        "On-scene injury protection",
                        "Lifting and transport injuries",
                        "Exposure incident coverage",
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
                      <Package className="h-6 w-6 text-accent" />
                      Inland Marine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Medical equipment coverage",
                        "Cardiac monitors and defibrillators",
                        "Stretchers and gurneys",
                        "Portable medical devices",
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
                      <Briefcase className="h-6 w-6 text-primary" />
                      General Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Premises liability coverage",
                        "Operations liability",
                        "Products/completed operations",
                        "Personal and advertising injury",
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
                      <Stethoscope className="h-6 w-6 text-accent" />
                      Professional Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Medical malpractice coverage",
                        "Patient care errors and omissions",
                        "Protocol deviation protection",
                        "Treatment decision coverage",
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
                      Commercial Property
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Station and building coverage",
                        "Business personal property",
                        "Equipment and supplies",
                        "Business interruption",
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
                      Umbrella / Excess
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Higher liability limits",
                        "Catastrophic claim protection",
                        "Coverage over primary policies",
                        "Limits up to $25 million",
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
                      <UserCheck className="h-6 w-6 text-accent" />
                      Employee Benefits Liability (EBL)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Benefits administration errors",
                        "ERISA compliance protection",
                        "Enrollment and eligibility errors",
                        "Claims handling mistakes",
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
                    <h3 className="font-bold text-white mb-2">EMS Expertise</h3>
                    <p className="text-white/80 text-sm">
                      Deep understanding of ambulance operations, protocols, and regulatory requirements
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Clock className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">24/7 Coverage</h3>
                    <p className="text-white/80 text-sm">
                      Round-the-clock protection for emergency response operations
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <DollarSign className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Competitive Rates</h3>
                    <p className="text-white/80 text-sm">
                      Industry-specific pricing with flexible payment options
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Heart className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Patient Care Focus</h3>
                    <p className="text-white/80 text-sm">
                      Coverage designed around patient care and medical treatment
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <FileText className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Contract Compliance</h3>
                    <p className="text-white/80 text-sm">
                      Meet insurance requirements for municipal and hospital contracts
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardContent className="pt-6">
                    <Truck className="h-10 w-10 text-accent mb-4" />
                    <h3 className="font-bold text-white mb-2">Fleet Coverage</h3>
                    <p className="text-white/80 text-sm">
                      Protection for single units to large ambulance fleets
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
                  "Specialized focus on ambulance and EMS industry",
                  "Coverage for BLS, ALS, and critical care transport",
                  "Professional liability for medical treatment decisions",
                  "Inland marine coverage for expensive medical equipment",
                  "Workers' compensation for high-risk EMS personnel",
                  "Understanding of HIPAA and patient privacy requirements",
                  "Support for municipal contract insurance requirements",
                  "Coverage for emergency response and high-speed operations",
                  "Protection for controlled substances handling",
                  "Flexible coverage for 911 and interfacility operations",
                  "Risk management resources for EMS providers",
                  "Claims support from adjusters who understand EMS",
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
                <p className="text-muted-foreground">Common questions about ambulance and EMS insurance coverage.</p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="limits" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What insurance limits do ambulance services typically need?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Most ambulance services need at least $1,000,000 in auto liability coverage, though many municipal contracts require $2,000,000 or higher. Professional liability limits typically range from $1,000,000 to $3,000,000. We offer umbrella policies up to $25,000,000 for larger operations or those with high-value contracts.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="equipment" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Is our medical equipment covered when it's in the ambulance?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, inland marine coverage protects your medical equipment including cardiac monitors, defibrillators, stretchers, IV pumps, and other portable medical devices. This coverage applies whether equipment is in the ambulance, at a scene, or temporarily removed for maintenance or calibration.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="professional" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What does professional liability cover for EMS providers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Professional liability (medical malpractice) coverage protects against claims arising from patient care, including treatment decisions, medication errors, protocol deviations, and patient assessment mistakes. This coverage is essential for both BLS and ALS operations where medical treatment is provided.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="workers" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    Why is workers' compensation important for ambulance services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    EMS personnel face significant occupational hazards including lifting injuries, needle sticks, exposure to infectious diseases, and on-scene injuries. Workers' compensation provides medical benefits and wage replacement for injured employees. EMS-specific policies understand the unique risks and provide appropriate coverage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ebl" className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold">
                    What is Employee Benefits Liability (EBL) coverage?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    EBL coverage protects your organization against claims arising from errors in administering employee benefit programs, such as health insurance enrollment mistakes, retirement plan errors, or ERISA compliance issues. This is important for ambulance services with employee benefit programs.
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Ambulance Service Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get comprehensive coverage designed for the unique needs of ambulance services and EMS providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/ambulance">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get an Ambulance Quote
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
