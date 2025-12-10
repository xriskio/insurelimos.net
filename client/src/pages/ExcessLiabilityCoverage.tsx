import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Layers,
  CheckCircle2,
  AlertTriangle,
  Building,
  Scale,
  FileText,
  TrendingUp
} from "lucide-react";

export default function ExcessLiabilityCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Excess Liability Insurance - Umbrella Coverage for Transportation Companies"
        description="Excess liability and umbrella insurance for transportation companies. Additional protection beyond primary auto liability limits for limousine, bus, NEMT, and taxi operators."
        canonical="https://insurelimos.net/coverage/excess-liability"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyem0tNiA2aC00di0yaDR2MnptLTYgMGgtNHYtMmg0djJ6bTEyLTZoLTR2LTJoNHYyem0tNiAwaC00di0yaDR2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Additional Protection</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Excess Liability Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Umbrella coverage that provides additional protection beyond your primary auto liability limits. Essential for transportation companies seeking comprehensive risk management.
              </p>
              <Link href="/quote/excess-liability">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get an Excess Liability Quote
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
                    <Layers className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Why Excess Liability Coverage?</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In today's litigious environment, a single catastrophic accident can result in claims that exceed your primary liability limits. Excess liability insurance provides an additional layer of protection, safeguarding your business assets and future earnings from devastating lawsuits.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {[
                  "Limousine operators",
                  "Charter bus companies",
                  "NEMT providers",
                  "Taxi and TNC fleets",
                  "School bus contractors",
                  "Ambulance services",
                  "Shuttle operators",
                  "Paratransit providers",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits of Excess Liability Coverage</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Protection beyond primary liability limits",
                  "Coverage for catastrophic accidents",
                  "Defense costs covered above primary limits",
                  "Broader coverage than underlying policies",
                  "Contract requirement compliance",
                  "Peace of mind for business owners",
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

        {/* Coverage Details */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Coverage Options</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We offer excess liability limits tailored to your operation's risk profile and contract requirements.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Excess Auto Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Additional liability coverage that sits above your primary commercial auto policy. Limits available from $1M to $10M+ depending on your fleet size and risk profile.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Excess General Liability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Coverage that extends beyond your general liability policy for claims arising from your business operations, premises, and products.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Scale className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Umbrella Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Broader coverage that not only provides excess limits but may also cover claims excluded by underlying policies. True umbrella protection for comprehensive risk management.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Contract Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Meet contract requirements from municipalities, school districts, casinos, and corporate clients that require higher liability limits than your primary policy provides.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Limits Available */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Available Limits</h2>
                <p className="text-lg text-muted-foreground">
                  We can provide excess liability coverage with limits to meet virtually any requirement.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  "$1 Million",
                  "$2 Million",
                  "$5 Million",
                  "$10 Million",
                ].map((limit, i) => (
                  <div key={i} className="text-center p-6 bg-primary/5 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary">{limit}</p>
                    <p className="text-sm text-muted-foreground">Excess Limit</p>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-muted-foreground mt-8">
                Higher limits available upon request. Contact us to discuss your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* When You Need It */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="hidden md:block shrink-0">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">When Do You Need Excess Liability?</h2>
                  <ul className="space-y-4">
                    {[
                      "Your contracts require liability limits higher than your primary policy",
                      "You transport passengers in high-risk environments",
                      "You operate large vehicles with higher potential for catastrophic claims",
                      "You want to protect your business assets from worst-case scenarios",
                      "You bid on government or corporate contracts with strict insurance requirements",
                      "Your fleet size or revenue makes you a target for large lawsuits",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Excess Liability Quote Today</h2>
              <p className="text-xl text-white/90 mb-8">
                Protect your transportation business with comprehensive excess liability coverage. Our experienced team will help you find the right limits at competitive rates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote/excess-liability">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold w-full sm:w-auto">
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
