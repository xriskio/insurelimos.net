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
  FileText,
  Clock,
  Star
} from "lucide-react";

export default function UberBlackCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Uber Black Insurance - TCP Coverage for Luxury Rideshare Drivers"
        description="Specialized TCP insurance for Uber Black, Uber Black SUV, and luxury rideshare drivers. CPUC filings, competitive rates, and coverage in 18 states."
        canonical="https://insurelimos.net/coverage/uber-black"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnptLTYgNmgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0xMi02aC00di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Premium Coverage
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Uber Black Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                TCP insurance for luxury rideshare drivers. Get covered fast with next-day CPUC filings and competitive rates for Uber Black and Uber Black SUV vehicles.
              </p>
              <Link href="/lp/uber-black">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold">
                  Get an Uber Black Insurance Quote
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
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                    <Car className="h-10 w-10 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">TCP Coverage for Uber Black Drivers</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At InsureLimos.net, we specialize in TCP (Transportation Charter-Party) insurance for Uber Black and luxury rideshare drivers. Whether you drive a Tesla Model X, Cadillac Escalade ESV, Lincoln Navigator, or Mercedes-Benz, we have the coverage you need to operate legally and protect your investment.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {[
                  "Uber Black drivers",
                  "Uber Black SUV drivers",
                  "Uber Premier drivers",
                  "Uber Comfort drivers",
                  "Lyft Lux drivers",
                  "Private executive car service",
                  "Airport sedan service",
                  "Corporate transportation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Uber Black Insurance?</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Next-day CPUC filings for California drivers",
                  "Competitive rates for luxury vehicles",
                  "Coverage for Tesla, Cadillac, Lincoln, Mercedes",
                  "TCP Gap coverage for all periods",
                  "Licensed in 18 states",
                  "Experienced claims handling with 24/7 support",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-white/90">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Coverage Options</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive insurance solutions designed specifically for Uber Black and luxury rideshare drivers.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-amber-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-amber-400" />
                    </div>
                    <CardTitle className="text-xl">Auto Liability (AL)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage options from $750K to $1.5M CSL. Meets CPUC requirements for TCP carriers in California and regulatory requirements in all 18 states we serve.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-amber-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                      <Car className="h-7 w-7 text-amber-400" />
                    </div>
                    <CardTitle className="text-xl">Physical Damage (APD)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive and collision coverage for your luxury vehicle. Protection against theft, vandalism, weather damage, and accidents.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-amber-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                      <Layers className="h-7 w-7 text-amber-400" />
                    </div>
                    <CardTitle className="text-xl">TCP Gap Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage for all periods - from app-on waiting for rides to passenger drop-off. Fill the gaps left by Uber's commercial policy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-amber-300 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-7 w-7 text-amber-400" />
                    </div>
                    <CardTitle className="text-xl">CPUC/DOT Filings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Next-day CPUC filings for California TCP carriers. DOT filings available for interstate operations. We handle the paperwork so you can focus on driving.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicles We Cover */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Vehicles We Cover</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We specialize in coverage for luxury vehicles that meet Uber Black requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Tesla Model X", type: "Electric SUV" },
                  { name: "Tesla Model S", type: "Electric Sedan" },
                  { name: "Cadillac Escalade ESV", type: "Luxury SUV" },
                  { name: "Lincoln Navigator", type: "Luxury SUV" },
                  { name: "Mercedes-Benz S-Class", type: "Luxury Sedan" },
                  { name: "BMW 7 Series", type: "Luxury Sedan" },
                  { name: "Audi A8", type: "Luxury Sedan" },
                  { name: "Genesis G90", type: "Luxury Sedan" },
                ].map((vehicle, i) => (
                  <div key={i} className="p-6 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{vehicle.name}</h3>
                    <p className="text-muted-foreground text-sm">{vehicle.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fast Filing */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Next-Day CPUC Filings</h2>
                  <p className="text-xl text-white/90 mb-4">
                    Don't wait weeks to start driving. Our expedited filing service gets your CPUC paperwork processed the next business day, so you can start earning sooner.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "CPUC TCP-A filings for California",
                      "DOT filings for interstate operations",
                      "Certificate of insurance same-day",
                      "ID cards delivered electronically",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Uber Black Insurance Quote Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of Uber Black drivers who trust InsureLimos for their TCP insurance needs. Get a competitive quote in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lp/uber-black">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-bold w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
