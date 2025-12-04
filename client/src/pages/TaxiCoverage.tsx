import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  CheckCircle2,
  HelpCircle,
  Landmark,
  UserCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TaxiCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Taxi Insurance Solutions - Coverage for Taxi Operators"
        description="Specialized taxi insurance for independent drivers, small fleets, and large taxi companies. Comprehensive coverage meeting state and municipal requirements."
        canonical="https://insurelimos.net/coverage/taxi"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent/80 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-full">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <span className="text-white/80 font-medium">Specialized Coverage</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Taxi Insurance Solutions
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Comprehensive insurance coverage for taxi operators, from independent drivers to large fleet owners.
              </p>
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold shadow-lg">
                  Get a Taxi Insurance Quote
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
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                    <Landmark className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Specialized Coverage for Taxi Operators</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At InsureLimos.net, we understand the unique challenges faced by taxi operators in today's competitive transportation market. Your business requires specialized insurance that addresses the specific risks associated with transporting passengers for hire.
                  </p>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our taxi insurance packages are tailored to meet the needs of your operation, whether you're an independent driver, a small fleet owner, or manage a large taxi company.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Taxi Insurance Coverage Options</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive protection for your taxi business and the passengers you serve.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Auto Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for bodily injury and property damage caused to others in an accident involving your taxi. We offer limits that meet or exceed state and municipal requirements.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Car className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Physical Damage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection for your taxi vehicles, including comprehensive and collision coverage to repair or replace your vehicle after an accident, theft, vandalism, or weather damage.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <UserCheck className="h-7 w-7 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Passenger Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enhanced coverage for passenger injuries that may occur during taxi operations, providing protection beyond standard auto liability coverage.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">General Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for non-auto related incidents that may occur during your operations, including slips and falls or other accidents on your premises or at taxi stands.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Workers' Compensation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection for your drivers and staff who may be injured while performing job duties, ensuring they receive proper medical care and wage replacement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent/30 transition-colors">
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
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Taxi Insurance?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Specialized understanding of taxi operations and risks",
                  "Coverage meeting state and municipal requirements",
                  "Policies for independent drivers and large fleets",
                  "Hybrid coverage for taxi and rideshare operators",
                  "Fast proof of insurance for license renewals",
                  "Competitive rates with flexible payment options",
                  "Expert guidance on medallion insurance requirements",
                  "Dedicated claims support for taxi operators",
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
                <p className="text-muted-foreground">Common questions about taxi insurance coverage.</p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="limits" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    What insurance limits do I need for my taxi business?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Insurance limits for taxi operators typically depend on several factors, including state and municipal requirements, the size of your operation, and your risk tolerance. Most taxi operators need at least $1,000,000 in auto liability coverage, though requirements can vary significantly by location. Our team can help you determine the appropriate coverage limits based on your specific situation and local regulations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="off-duty" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Does my taxi insurance cover me when I'm not carrying passengers?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, our taxi insurance policies provide coverage whether you're carrying passengers, en route to pick up a fare, or off-duty. However, it's important to note that some policies may have different coverage limits or deductibles depending on whether you're carrying passengers at the time of an incident.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="premiums" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How can I reduce my taxi insurance premiums?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Several factors can help reduce your taxi insurance costs, including implementing comprehensive driver training programs, maintaining a clean claims history, installing vehicle safety features like dash cams and GPS tracking, and considering higher deductibles. Our team can work with you to develop a risk management strategy that may help lower your premiums over time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rideshare" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    Do I need special insurance if I operate both as a taxi and for rideshare platforms?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, if you operate both as a traditional taxi and through rideshare platforms, you'll need insurance that covers both types of operations. Standard taxi insurance may not cover you while you're operating through a rideshare app, and rideshare insurance typically doesn't cover traditional taxi operations. We offer hybrid policies designed specifically for drivers who operate in multiple capacities.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="proof" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    How quickly can I get proof of insurance for my taxi license or medallion renewal?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Once your policy is bound, we can typically provide proof of insurance immediately. For license or medallion renewals, we understand the time-sensitive nature of these requirements and prioritize providing the necessary documentation quickly. Our team can also work directly with your licensing authority if needed to ensure a smooth renewal process.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Car className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Protect Your Taxi Business Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for the unique needs of taxi operators, from independent drivers to large fleets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get a Taxi Quote
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
