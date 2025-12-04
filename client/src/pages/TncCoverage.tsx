import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Clock, 
  Users, 
  Smartphone, 
  Lock, 
  FileText, 
  CheckCircle2,
  Bike,
  Truck,
  Building,
  Briefcase,
  Layers,
  Package,
  Wrench,
  AlertTriangle
} from "lucide-react";
import tncHeroImage from "@assets/stock_images/rideshare_uber_lyft__8a562653.jpg";

export default function TncCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="TNC & Mobility Insurance - Rideshare, Transportation Network Coverage"
        description="Specialized insurance solutions for TNCs, rideshare companies, and modern mobility services. Coverage for Uber, Lyft, and on-demand transportation."
        canonical="https://insurelimos.net/coverage/tnc"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={tncHeroImage} 
            alt="Rideshare and TNC vehicle" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialized Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transportation Network Companies (TNC)</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized insurance for TNC, rideshare, and shared economy transportation platforms.
              </p>
              <Link href="/quote/tnc">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a TNC Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today's shared, or gig, economy represents a variety of distinctive businesses and platforms encountering unchartered insurance-related shortcomings — from limited insurance marketplace options to cost-restrictive policies and coverage gaps.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                While the shared economy continues to grow and evolve, so do the myriad risks. You need a partner with in-depth knowledge of your unique industry to ensure you receive affordable and tailored coverage to manage your risk effectively.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Car, label: "Rideshare Companies" },
                  { icon: Smartphone, label: "On-Demand Services" },
                  { icon: Bike, label: "Micro-Mobility" },
                  { icon: Truck, label: "Delivery Services" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
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
                  "Transportation Network Companies (TNC)",
                  "Non-Emergency Medical Transit (NEMT) operators",
                  "Student Transport services",
                  "Delivery Network Companies (DNC)",
                  "Rideshare Rental Operators",
                  "Peer-to-Peer (P2P) Rental Operations",
                  "Vehicle Subscription Models",
                  "Autonomous Vehicle Services and Platforms",
                  "Shared Scooter or eBike Platforms",
                  "On-Demand Service Providers",
                  "Cannabis Delivery services",
                  "1099 Staffing Agencies and Aggregators",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
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
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Coverage Includes</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Comprehensive protection designed for the unique needs of TNCs and shared economy platforms.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Car, title: "Commercial Auto Insurance", desc: "Full coverage for your fleet operations" },
                  { icon: Building, title: "General Liability Insurance", desc: "Protection for premises and operations" },
                  { icon: Users, title: "Occupational Accident Insurance", desc: "Coverage for 1099 contractors" },
                  { icon: Shield, title: "Workers' Compensation", desc: "For employee drivers and staff" },
                  { icon: Layers, title: "Excess Liability & Umbrella", desc: "Additional protection up to $10M" },
                  { icon: Package, title: "Cargo Legal Liability", desc: "Protection for goods in transit" },
                  { icon: AlertTriangle, title: "Contingent Liability", desc: "Coverage for third-party risks" },
                  { icon: Building, title: "Property Insurance", desc: "Protect your business assets" },
                  { icon: Wrench, title: "Garage Liability", desc: "Coverage for maintenance operations" },
                  { icon: Lock, title: "Cyber Liability", desc: "Data breach and cyber attack protection" },
                  { icon: Briefcase, title: "D&O and EPL", desc: "Management liability protection" },
                ].map((item, i) => (
                  <Card key={i} className="border hover:border-primary/30 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Period-Specific Coverage */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Period-Specific TNC Coverage</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Our TNC insurance provides coverage across all operational periods, addressing the unique needs of each phase.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Period 1</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      When the app is on but no ride has been accepted
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-accent/30 hover:border-accent/50 transition-colors">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Car className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">Period 2</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      When a ride has been accepted and en route to pick up
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-500/30 hover:border-green-500/50 transition-colors">
                  <CardHeader className="text-center pb-2">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">Period 3</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      When passengers are in the vehicle
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Product Basics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Product Basics</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    "Commercial Auto Insurance for TNC and rideshare platforms",
                    "General Liability limits tailored to your operations",
                    "Occupational Accident coverage for 1099 contractors",
                    "Workers' Compensation for employee drivers",
                    "Umbrella/Excess Liability up to $10 million",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <Card className="bg-primary text-white">
                  <CardHeader>
                    <CardTitle className="text-xl">Management Liability Package</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Directors & Officers Liability",
                      "Employment Practices Liability",
                      "Cyber Liability protection",
                      "Fiduciary Liability coverage",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Specialized coverage for shared economy operations",
                  "Understanding of TNC and gig economy exposures",
                  "Tailored solutions for digital platforms",
                  "Risk management tools and expert insights",
                  "Long-standing carrier relationships for competitive rates",
                  "Deep understanding of TNC and mobility business models",
                  "Flexible policies that adapt to your operational needs",
                  "Expertise in navigating complex regulatory environments",
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

        {/* Risk Control Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Risk Control Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Fleet Safety Assessment", desc: "Comprehensive fleet monitoring and evaluation" },
                  { title: "Driver Qualification Programs", desc: "Training and qualification standards" },
                  { title: "Technology Integration Risk Analysis", desc: "Assessment of platform technology risks" },
                  { title: "Platform Liability Evaluation", desc: "Thorough review of liability exposure" },
                  { title: "Compliance and Regulatory Guidance", desc: "Navigate complex regulations" },
                  { title: "Claims Management Support", desc: "24/7 reporting and dedicated adjusters" },
                ].map((item, i) => (
                  <Card key={i} className="border hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Coverages */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Enhanced Coverages Available</h2>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  "Contingent Auto Liability",
                  "Non-Owned Auto Coverage",
                  "Hired Auto Liability",
                  "Cargo Legal Liability",
                  "Garage Liability",
                  "Garage Keepers Legal Liability",
                  "Technology Errors & Omissions",
                  "Platform Liability Coverage",
                  "Cyber Liability and Data Breach",
                  "Business Interruption",
                  "Equipment Breakdown",
                  "Crime Coverage",
                  "Umbrella/Excess Liability",
                  "Environmental Liability",
                  "Employment Practices Liability",
                  "Fiduciary Liability",
                  "D&O Liability",
                  "Professional Liability",
                  "Product Liability for modifications",
                  "Bailee Coverage for vehicle storage",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-md shadow-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage and Services Summary */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Coverage and Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-primary/5 rounded-xl">
                  <h3 className="font-bold text-primary mb-4 text-lg">Primary Coverages</h3>
                  <div className="space-y-2">
                    {[
                      "Commercial General Liability",
                      "Commercial Auto and Physical Damage",
                      "Inland Marine",
                      "Property",
                      "Marketplace Cyber and Technology Platform Liability",
                      "Workers' Compensation (for select risks)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-accent/5 rounded-xl">
                  <h3 className="font-bold text-primary mb-4 text-lg">Specialized Services</h3>
                  <div className="space-y-2">
                    {[
                      "Fleet Safety Assessment and Monitoring",
                      "Driver Qualification and Training Programs",
                      "Technology Integration Risk Analysis",
                      "Platform Liability Evaluation",
                      "Compliance and Regulatory Guidance",
                      "Claims Management Support",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your TNC Business?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get a customized quote for your transportation network or mobility service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/tnc">
                <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-bold">
                  Get a TNC Quote
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
