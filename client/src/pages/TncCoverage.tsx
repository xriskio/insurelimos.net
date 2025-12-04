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
  Building
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">TNC & Mobility Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized insurance solutions for transportation network companies and modern mobility services.
              </p>
              <Link href="/quote/tnc">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a TNC Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Insurance for the Modern Transportation Economy</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The transportation landscape has evolved dramatically with the rise of transportation network companies (TNCs) and new mobility services. At InsureLimos.net, we've developed specialized insurance solutions to address the unique risks and challenges faced by these innovative transportation businesses.
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
                  "Non-Emergency Medical Transit (NEMT)",
                  "Student Transport Services",
                  "Delivery Network Companies (DNC)",
                  "Rideshare Rental Operators",
                  "Peer-to-Peer (P2P) Rental Operations",
                  "Vehicle Subscription Models",
                  "Autonomous Vehicle Services",
                  "Shared Scooter or eBike Platforms",
                  "On-Demand Service Providers",
                  "Cannabis Delivery Services",
                  "1099 Staffing Agencies",
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

        {/* Period-Specific Coverage */}
        <section className="py-16 bg-white">
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

        {/* Coverage Options */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Comprehensive Coverage Options</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                We offer a wide range of coverage options to protect your TNC or mobility business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Commercial Auto Insurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive auto liability coverage meeting or exceeding state and local requirements for TNCs and mobility services.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="h-6 w-6 text-primary" />
                      General Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection for non-auto related claims, including premises liability and personal injury claims.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      Workers' Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for employee injuries and illnesses, with options tailored for the gig economy and 1099 contractors.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Lock className="h-6 w-6 text-primary" />
                      Cyber Liability
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Protection against data breaches and cyber attacks, crucial for app-based transportation businesses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Coverages List */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Enhanced Coverages Available</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
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
                  "D&O Liability",
                  "Professional Liability",
                  "Bailee Coverage for Storage",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-md">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our TNC & Mobility Insurance?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Deep understanding of TNC and mobility business models",
                  "Coverage designed for the unique risks of on-demand transportation",
                  "Flexible policies that adapt to your operational needs",
                  "Competitive rates tailored to your specific risk profile",
                  "Expertise in navigating complex regulatory environments",
                  "Innovative coverage options for emerging mobility technologies",
                  "Risk management tools and expert insights",
                  "Long-standing carrier relationships for competitive rates",
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

        {/* Risk Management */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Risk Control Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Fleet Safety Assessment", desc: "Comprehensive monitoring and evaluation of your fleet operations." },
                  { title: "Driver Training Programs", desc: "Qualification standards and ongoing safety training resources." },
                  { title: "Technology Risk Analysis", desc: "Integration risk analysis for app-based platforms." },
                  { title: "Platform Liability Evaluation", desc: "Thorough assessment of your platform's liability exposure." },
                  { title: "Regulatory Compliance", desc: "Guidance on state-specific TNC regulations and requirements." },
                  { title: "Claims Management", desc: "24/7 claims reporting with dedicated TNC-familiar adjusters." },
                ].map((item, i) => (
                  <Card key={i}>
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
