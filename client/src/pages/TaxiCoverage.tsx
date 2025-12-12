import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, FAQSchema, InsuranceServiceSchema, BreadcrumbSchema } from "@/components/seo/Seo";
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
  UserCheck,
  Wrench,
  AlertTriangle,
  DollarSign,
  Clock,
  MapPin
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import taxiHeroImage from "@assets/stock_images/taxi_cab_yellow_city_0c5cc1d3.jpg";
import taxiImage1 from "@assets/stock_images/yellow_taxi_cab_city_fda98f2a.jpg";
import taxiImage2 from "@assets/stock_images/yellow_taxi_cab_city_173b09cc.jpg";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

const taxiFaqs = [
  {
    question: "What insurance limits do I need for my taxi business?",
    answer: "Insurance limits depend on your state and local requirements. Most areas require a minimum of $300,000 combined single limit, but many municipalities and airports require $500,000 to $1,000,000 CSL. We can help you determine the right limits for your operation."
  },
  {
    question: "What types of vehicles are eligible for taxi insurance?",
    answer: "We insure a wide variety of taxi vehicles including traditional sedans, SUVs, minivans, wheelchair-accessible vehicles, and even hybrid or electric taxis. Our program covers most makes and models commonly used in taxi service."
  },
  {
    question: "Can I get insurance if I'm just starting my taxi business?",
    answer: "Yes! We specialize in new venture taxi insurance programs. We understand that everyone has to start somewhere, and we offer competitive rates for new taxi operators with less than 3 years of business history."
  },
  {
    question: "Do I need a medallion to get taxi insurance?",
    answer: "Not in all areas. Requirements vary by city and state. Some jurisdictions require medallions or permits, while others use different licensing systems. We can write policies for both medallion and non-medallion taxi operations depending on local regulations."
  }
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Coverage", url: "/coverage" },
  { name: "Taxi Insurance", url: "/coverage/taxi" },
];

export default function TaxiCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Taxi Insurance - Coverage for Cab Operators & Fleets"
        description="Get specialized taxi cab insurance for independent drivers and fleets. Comprehensive auto liability, physical damage, and general liability coverage. New ventures welcome. Free quote from InsureLimos."
      />
      <FAQSchema faqs={taxiFaqs} />
      <InsuranceServiceSchema
        serviceName="Taxi and Cab Insurance"
        serviceDescription="Comprehensive insurance coverage for taxi operators, from independent drivers to large fleet owners."
        url="/coverage/taxi"
        areaServed={["California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={taxiHeroImage} 
            alt="Yellow taxi cab in city" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialized Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Taxi & Cab Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive insurance coverage for taxi operators, from independent drivers to large fleet owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/public-auto">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Get a Taxi Insurance Quote
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
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Operating a Taxi or Cab service requires specialized insurance. You are responsible for the safety of your passengers. You will also need insurance that covers your vehicle(s) from damage or theft. You also need to take into consideration how many drivers you have or plan to have.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Anyone who's owned this type of business can tell you that it's very competitive and complex. We can help. You will want to talk to an insurance professional who can help evaluate all of the moving parts and not only help you cover the necessary risks but also find where the discounts are.
                  </p>
                </div>
              </section>

              {/* Fleet Gallery */}
              <section className="py-8 bg-gray-50 rounded-lg mb-8">
                <div className="px-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={taxiImage1} 
                        alt="Yellow taxi cab in city" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={taxiImage2} 
                        alt="Taxi fleet transportation service" 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Lines of Business */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">Lines of Business</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Comprehensive protection designed specifically for taxi and cab operations.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { icon: Shield, label: "Automobile Liability" },
                      { icon: Car, label: "Physical Damage" },
                      { icon: Building, label: "General Liability" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 bg-white rounded-lg shadow-sm border">
                        <item.icon className="h-8 w-8 text-primary shrink-0" />
                        <span className="text-lg font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Details */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-8">
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
                            <span>Up to <strong>$1,000,000 CSL</strong></span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Higher limits available at Underwriter's discretion</span>
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
                            <span>Minimum <strong>$500 deductible</strong> for comp/collision</span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Minimum stated value: <strong>$3,000</strong></span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Units older than 10 years require Underwriting approval</span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Mechanic's statement and photograph may be required</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Car className="h-6 w-6 text-primary" />
                          Eligible Vehicles
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Sedans and minivans</span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Capacity up to <strong>7 passengers</strong> (excluding driver)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-primary/30 transition-colors">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <UserCheck className="h-6 w-6 text-accent" />
                          Eligible Operations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>For-Hire passenger transportation</span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Must be dispatched from a radio group/association or possess a medallion</span>
                          </li>
                          <li className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span>Demand-response units with less than 24-hour prearranged pickups</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Eligibility Requirements */}
              <section className="py-8 bg-muted/30 rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Eligibility & Requirements</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        icon: CheckCircle2,
                        text: "New venture individuals and partnerships are acceptable with résumé or letter of experience indicating years operating similar vehicle types"
                      },
                      {
                        icon: CheckCircle2,
                        text: "In jurisdictions where owner-operators receive a discount, refer to state-specific filing for eligibility and credit allowed"
                      },
                      {
                        icon: CheckCircle2,
                        text: "Double shifts are eligible with proof of a current formal maintenance program"
                      },
                      {
                        icon: AlertTriangle,
                        text: "Units older than 10 years require Underwriting approval with current mechanic's statement and photograph"
                      },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-lg ${item.icon === AlertTriangle ? 'bg-amber-50 border border-amber-200' : 'bg-white shadow-sm border'}`}>
                        <item.icon className={`h-6 w-6 shrink-0 mt-0.5 ${item.icon === AlertTriangle ? 'text-amber-500' : 'text-accent'}`} />
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Options */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary mb-4">Additional Coverage Options</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Comprehensive protection for your taxi business and the passengers you serve.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="border-2 hover:border-accent/30 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <UserCheck className="h-7 w-7 text-primary" />
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
              </section>

              {/* Why Choose Us */}
              <section className="py-8 bg-primary text-white rounded-lg mb-8">
                <div className="px-6">
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
                      "Owner-operator discounts where available",
                      "Double shift coverage with maintenance program proof",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <p className="text-white/90">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Service Areas */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary mb-4">Nationwide Coverage</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We provide taxi insurance coverage across 18 states. Whether you operate in California, Texas, or anywhere in between, give us a call for a free consultation.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">States We Serve</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {["CA", "AZ", "CO", "ID", "IL", "KS", "KY", "MN", "MO", "NV", "OH", "OK", "PA", "TN", "TX", "UT", "VA", "WI"].map((state) => (
                        <span key={state} className="px-4 py-2 bg-primary text-white rounded-full shadow-sm font-bold">
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Major Cities</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      {[
                        "Los Angeles", "San Diego", "San Francisco", "Sacramento",
                        "Las Vegas", "Denver", "Boise", "Chicago",
                        "Cleveland", "Columbus", "Pittsburgh", "Memphis",
                        "Milwaukee", "Phoenix", "Dallas", "Houston",
                        "Salt Lake City", "Minneapolis", "Kansas City", "Louisville"
                      ].map((city) => (
                        <span key={city} className="px-4 py-2 bg-white rounded-full shadow-sm border text-muted-foreground font-medium">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="py-8 bg-white rounded-lg">
                <div className="px-6">
                  <div className="text-center mb-10">
                    <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">Common questions about taxi insurance coverage.</p>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="limits" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        What insurance limits do I need for my taxi business?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        We offer liability coverage up to $1,000,000 CSL (Combined Single Limit). Higher limits are available at the Underwriter's discretion. Most taxi operators need at least $1,000,000 in auto liability coverage, though requirements can vary by location and municipal regulations.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="vehicles" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        What types of vehicles are eligible for taxi insurance?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        We cover sedans and minivans with capacity up to 7 passengers, excluding the driver. Vehicles older than 10 years may require underwriting approval, including a current mechanic's statement and photograph.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="new-venture" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        Can I get insurance if I'm just starting my taxi business?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes! New venture individuals and partnerships are acceptable with a résumé or letter of experience indicating how many years you have experience operating a similar vehicle type. We work with new operators to help them get started.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="medallion" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        Do I need a medallion to get taxi insurance?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Insured must be dispatched from or be a member of a radio group or association, or possess a medallion. This ensures your operation meets the for-hire transportation requirements for eligibility.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="double-shifts" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        Can I run double shifts with my taxi?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes, double shifts are eligible with proof of a current formal maintenance program. This ensures your vehicles are properly maintained for the increased usage.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rideshare" className="border rounded-lg px-6 bg-muted/20">
                      <AccordionTrigger className="text-left font-semibold">
                        Do I need special insurance if I operate both as a taxi and for rideshare platforms?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        Yes, if you operate both as a traditional taxi and through rideshare platforms, you'll need insurance that covers both types of operations. We offer hybrid policies designed specifically for drivers who operate in multiple capacities.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </section>
            </div>

            <div className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-4">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <Car className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Protect Your Taxi Business Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for the unique needs of taxi operators. Our team can help you evaluate your risks, find discounts, and get the right coverage at the right price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get a Taxi Quote
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
