import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Bus,
  CheckCircle2,
  FileText,
  Scale,
  Clock,
  Users,
  AlertTriangle,
  Building,
  Zap
} from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { tcpFaqs } from "@/data/faqs";

export default function CaliforniaTcpInsurance() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="California TCP Insurance - CPUC Compliant Charter-Party Carrier Coverage"
        description="TCP insurance meeting California CPUC requirements for limousines, motorcoaches, party buses, Uber Black, and charter-party carriers. General Order 115-G compliant coverage with next-day filings."
        canonical="https://insurelimos.net/california-tcp-insurance"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-primary to-primary/90">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aC0ydi00aDJ2NHptMC02di00aC0ydjRoMnptLTYgNmgtNHYtMmg0djJ6bS02IDBoLTR2LTJoNHYyem0xMi02aC00di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                CPUC Compliant Coverage
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                California TCP Insurance
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Charter-Party Carrier Insurance Meeting CPUC Requirements
              </p>
              <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
                General Order 115-G compliant coverage for limousines, motorcoaches, party buses, Uber Black vehicles, and all charter-party carriers operating in California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lp/uber-black">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold w-full sm:w-auto">
                    Get a TCP Insurance Quote
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Speak with a Specialist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CPUC Requirement Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6 mb-8">
                <div className="hidden md:block shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Scale className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">What is TCP Insurance?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    TCP (Transportation Charter-Party) insurance is required by the California Public Utilities Commission (CPUC) for all charter-party carriers of passengers operating in California. This includes limousine services, motorcoach operators, party bus companies, and luxury rideshare services like Uber Black.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Under <strong>General Order 115-G</strong>, adopted August 18, 2016 and amended March 21, 2024, all charter-party carriers must maintain adequate liability protection before operating on California highways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Requirements Table */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">CPUC Minimum Coverage Requirements</h2>
                <p className="text-lg text-muted-foreground">
                  General Order 115-G establishes minimum liability coverage based on vehicle seating capacity
                </p>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <div className="bg-primary text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Charter-Party Carrier Coverage Requirements</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Vehicle Seating Capacity (including driver)</th>
                        <th className="px-6 py-4 text-right font-semibold text-gray-900">Minimum Coverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Bus className="h-5 w-5 text-primary" />
                            <span>16 persons or more</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-primary">$5,000,000</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Bus className="h-5 w-5 text-primary" />
                            <span>9 through 15 persons</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-primary">$1,500,000</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Car className="h-5 w-5 text-primary" />
                            <span>8 persons or less</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-2xl font-bold text-primary">$750,000</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2">Important Notice</h4>
                    <p className="text-amber-700">
                      Coverage must remain in effect at all times while operating. The CPUC requires 30 days advance notice before any policy cancellation. Operating without valid insurance is grounds for suspension or revocation of your TCP authority.
                    </p>
                  </div>
                </div>
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
                <p className="text-lg text-muted-foreground">
                  We provide CPUC-compliant TCP insurance for all charter-party carrier vehicle types
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Car, 
                    title: "Uber Black Sedan", 
                    desc: "Tesla Model S, Mercedes S-Class, BMW 7 Series",
                    coverage: "$750,000"
                  },
                  { 
                    icon: Car, 
                    title: "Uber Black SUV", 
                    desc: "Tesla Model X, Cadillac Escalade ESV, Lincoln Navigator",
                    coverage: "$750,000"
                  },
                  { 
                    icon: Zap, 
                    title: "Uber Black Tesla EV", 
                    desc: "Tesla Model S, Model X, Model 3 (qualifying)",
                    coverage: "$750,000"
                  },
                  { 
                    icon: Car, 
                    title: "Limousines", 
                    desc: "Stretch limos, Lincoln Town Cars, executive sedans",
                    coverage: "$750K - $1.5M"
                  },
                  { 
                    icon: Bus, 
                    title: "Party Buses", 
                    desc: "Party buses, limo buses, entertainment vehicles",
                    coverage: "$1.5M - $5M"
                  },
                  { 
                    icon: Bus, 
                    title: "Motorcoaches", 
                    desc: "Charter buses, touring coaches, shuttle buses",
                    coverage: "$1.5M - $5M"
                  },
                ].map((vehicle, i) => (
                  <Card key={i} className="border-2 hover:border-primary/30 transition-colors">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                        <vehicle.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{vehicle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-3">{vehicle.desc}</p>
                      <p className="text-primary font-semibold">Coverage: {vehicle.coverage}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TNC Requirements */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">TNC Insurance Requirements</h2>
                <p className="text-lg text-white/80">
                  Additional requirements for Transportation Network Company (TNC) vehicles under P.U. Code Section 5431(a)
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-white/10">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Coverage Type</th>
                        <th className="px-6 py-4 text-right font-semibold">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr>
                        <td className="px-6 py-4">
                          <p className="font-medium">Bodily Injury and Property Damage</p>
                          <p className="text-sm text-white/60">P.U. Code Section 5433(b)(1)</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-xl font-bold text-amber-400">$1,000,000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <p className="font-medium">Uninsured/Underinsured Motorist Coverage</p>
                          <p className="text-sm text-white/60">P.U. Code Section 5433(b)(2)</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-xl font-bold text-amber-400">$1,000,000</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4">
                          <p className="font-medium">Period 1 Coverage (App On, No Passenger)</p>
                          <p className="text-sm text-white/60">P.U. Code Section 5433(c)</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="text-sm text-white/80">
                            <p>$50,000 per person bodily injury</p>
                            <p>$100,000 per incident bodily injury</p>
                            <p>$30,000 property damage</p>
                            <p>$200,000 excess coverage</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Our TCP Insurance Services</h2>
                <p className="text-lg text-muted-foreground">
                  Complete support for California charter-party carriers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-7 w-7 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">Next-Day CPUC Filings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We file your insurance with the CPUC the next business day. Don't wait weeks to start operating - our expedited filing service gets you on the road faster.
                    </p>
                    <ul className="space-y-2">
                      {["Electronic filing to CPUC", "Next business day processing", "Confirmation documentation", "Status tracking"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Complete Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Receive all required documentation for CPUC compliance, including certificates of insurance, ID cards, and proof of coverage.
                    </p>
                    <ul className="space-y-2">
                      {["Certificate of Insurance", "Electronic ID cards", "CPUC filing confirmation", "Policy documents"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Comprehensive Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Beyond minimum requirements, we offer additional coverage options to fully protect your business and passengers.
                    </p>
                    <ul className="space-y-2">
                      {["Physical damage coverage", "Hired & non-owned auto", "General liability", "Excess liability"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Expert Support</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our team specializes in California TCP insurance. We understand CPUC requirements and help you maintain compliance.
                    </p>
                    <ul className="space-y-2">
                      {["CPUC compliance guidance", "Renewal reminders", "Claims support", "Policy modifications"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Reference */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">CPUC Regulatory Reference</h2>
                <p className="text-lg text-muted-foreground">
                  Our coverage meets requirements established by the California Public Utilities Commission
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Building className="h-8 w-8 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">General Order 115-G</h3>
                    <p className="text-muted-foreground mb-4">
                      Rules requiring all charter-party carriers of passengers subject to the Public Utilities Code to provide and thereafter continue in effect adequate protection against liability imposed by law upon such carriers.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Adopted:</strong> August 18, 2016 | <strong>Amended:</strong> March 21, 2024 (Resolution TL-19147)
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-bold mb-4">Key Requirements:</h4>
                  <ul className="space-y-3">
                    {[
                      "Insurance must be provided by a company licensed to write insurance in California or by non-admitted insurers subject to Section 1763 of the Insurance Code",
                      "Coverage shall not be cancelable on less than 30 days' notice to the CPUC",
                      "Insurance must remain in full force and effect while operating on California highways",
                      "Cancellation or suspension of coverage is grounds for suspension or revocation of operating authority"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h4 className="font-bold mb-4">Official Resources:</h4>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/charter-party-carriers" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      CPUC Charter-Party Carriers
                    </a>
                    <a 
                      href="https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/transportation-network-companies/tnc-insurance-requirements" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      TNC Insurance Requirements
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSchema faqs={tcpFaqs} title="California TCP Insurance FAQs" />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get CPUC-Compliant TCP Insurance Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Whether you operate an Uber Black vehicle, limousine service, or motorcoach company, we provide the coverage you need to comply with California CPUC requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/lp/uber-black">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold w-full sm:w-auto">
                    Get a Quote Now
                  </Button>
                </Link>
                <a href="tel:+18005551234">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                    Call (800) 555-1234
                  </Button>
                </a>
              </div>
              <p className="text-white/70 mt-6 text-sm">
                Next-day CPUC filings available | Licensed in California
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
