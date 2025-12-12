import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  CheckCircle2,
  Truck,
  DollarSign,
  FileText,
  Headphones,
  TrendingDown,
  Award
} from "lucide-react";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { CoverageOptionsSection } from "@/components/sections/CoverageOptionsSection";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Fleet Insurance", url: "/services/fleet-insurance" },
];

export default function FleetInsurance() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Fleet Insurance - Commercial Vehicle Fleet Coverage"
        description="Comprehensive fleet insurance for transportation companies. Coverage for 5 to 500+ vehicles. Competitive rates, flexible payment plans, and dedicated fleet specialists."
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Commercial Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Fleet Insurance Programs</h1>
              <p className="text-xl text-white/90 mb-6">
                Comprehensive insurance solutions for transportation fleets of all sizes. From 5 vehicles to 500+, we have the right program for your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/public-auto">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Get a Fleet Quote
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
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Fleet Insurance Solutions</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Managing a transportation fleet requires specialized insurance that understands the unique risks of commercial vehicle operations. Our fleet insurance programs are designed to provide comprehensive coverage while controlling costs.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We work with A-rated carriers including Philadelphia Insurance Companies (PHLY), National Interstate, Berkshire Hathaway, and other top-tier insurers to deliver competitive rates and superior claims service.
                </p>
              </section>

              {/* Fleet Sizes */}
              <section className="mb-12 bg-secondary/20 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Fleet Sizes We Serve</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-primary mb-2">5-15</div>
                      <p className="text-muted-foreground">Small Fleet</p>
                      <p className="text-sm text-muted-foreground/80 mt-2">Growing operations with dedicated fleet programs</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center border-accent border-2">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-accent mb-2">16-50</div>
                      <p className="text-muted-foreground">Mid-Size Fleet</p>
                      <p className="text-sm text-muted-foreground/80 mt-2">Volume discounts and loss control services</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="pt-6">
                      <div className="text-4xl font-bold text-primary mb-2">50+</div>
                      <p className="text-muted-foreground">Large Fleet</p>
                      <p className="text-sm text-muted-foreground/80 mt-2">Custom programs and captive options</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Coverage Includes */}
              <section className="mb-12 bg-white rounded-xl p-8 border">
                <h2 className="text-3xl font-bold text-primary mb-4 text-center">Fleet Coverage Includes</h2>
                <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                  Comprehensive protection designed for commercial fleet operations.
                </p>
                
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
                          "Combined Single Limits up to $5M",
                          "Hired and Non-Owned Auto",
                          "Uninsured/Underinsured Motorist",
                          "DOT and PUC compliant filings",
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
                          "Comprehensive and Collision",
                          "Fleet-wide deductible programs",
                          "Zero deductible glass",
                          "Towing and roadside assistance",
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
                          "Statutory limits coverage",
                          "Employers' Liability up to $1M",
                          "Driver injury protection",
                          "Return-to-work programs",
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
                          "Umbrella limits up to $20M",
                          "Follows underlying coverage",
                          "Airport and venue compliant",
                          "Contract requirements met",
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
              </section>

              {/* Key Benefits */}
              <section className="mb-12 bg-primary text-white rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Fleet Program Benefits</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <TrendingDown className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Volume Discounts</h3>
                      <p className="text-white/80 text-sm">
                        Larger fleets qualify for significant premium discounts
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <FileText className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Single Policy</h3>
                      <p className="text-white/80 text-sm">
                        One policy for all vehicles simplifies administration
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <DollarSign className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Flexible Payment</h3>
                      <p className="text-white/80 text-sm">
                        Monthly payment plans with low down payments
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <Headphones className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Dedicated Support</h3>
                      <p className="text-white/80 text-sm">
                        Fleet account manager for all your insurance needs
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <Award className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Loss Control</h3>
                      <p className="text-white/80 text-sm">
                        Free driver training and safety resources
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 border-white/20">
                    <CardContent className="pt-6">
                      <Truck className="h-10 w-10 text-accent mb-4" />
                      <h3 className="font-bold text-white mb-2">Easy Add/Remove</h3>
                      <p className="text-white/80 text-sm">
                        Quick vehicle changes with same-day certificates
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Coverage Options Section */}
              <CoverageOptionsSection />
            </div>

            {/* Sidebar with QuickQuoteForm */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-4">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Truck className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Get Your Fleet Quote Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Competitive rates for fleets of all sizes. Our fleet specialists are ready to create a customized program for your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get a Fleet Quote
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
