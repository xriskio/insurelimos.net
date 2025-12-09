import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle, 
  Phone, 
  Shield, 
  Car, 
  Users, 
  Clock, 
  DollarSign,
  FileText,
  Award,
  MapPin,
  ArrowRight
} from "lucide-react";

export default function UberBlackCalifornia() {
  const coverageFeatures = [
    "Commercial Auto Liability up to $1.5M CSL",
    "Uninsured/Underinsured Motorist Coverage",
    "Personal Injury Protection (PIP)",
    "Comprehensive & Collision Coverage",
    "Hired & Non-Owned Auto Coverage",
    "Gap Coverage for Leased Vehicles",
    "Zero Deductible Glass Coverage",
    "24/7 Claims Support"
  ];

  const vehicleTypes = [
    "Black Sedans (Lincoln Town Car, Cadillac XTS)",
    "Luxury SUVs (Cadillac Escalade, Lincoln Navigator)",
    "Mercedes-Benz S-Class",
    "BMW 7 Series",
    "Audi A8",
    "Tesla Model S/X",
    "Genesis G90",
    "Executive Sprinter Vans"
  ];

  const benefits = [
    { icon: Shield, title: "TCP Gap Coverage", description: "Covers periods when the app is on but no ride is in progress" },
    { icon: DollarSign, title: "Competitive Rates", description: "Specialized pricing for Uber Black and luxury rideshare operators" },
    { icon: Clock, title: "Fast Quotes", description: "Get quoted within 24 hours with quick policy binding" },
    { icon: Users, title: "Fleet Discounts", description: "Multi-vehicle discounts for operators with 2+ vehicles" },
    { icon: FileText, title: "COI Same Day", description: "Certificates of Insurance issued same day for TCP compliance" },
    { icon: FileText, title: "Next Day CPUC Filings", description: "CPUC filings submitted next day once your policy is bound" },
    { icon: Award, title: "A-Rated Carriers", description: "Coverage through top-rated insurance carriers" }
  ];

  const californiaAreas = [
    "Los Angeles", "San Francisco", "San Diego", "Sacramento", 
    "San Jose", "Oakland", "Long Beach", "Fresno",
    "Anaheim", "Santa Monica", "Beverly Hills", "Irvine"
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Uber Black Insurance California - Black Sedan & SUV Coverage"
        description="Specialized commercial auto insurance for Uber Black drivers in California. Coverage for black sedans, luxury SUVs, and executive vehicles. Get a free quote today. Call 888-254-0089."
        canonical="https://insurelimos.net/services/commercial-auto/uber-black-california"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <Car className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">Premium TCP Coverage</span>
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Uber Black Insurance<br />
                <span className="text-amber-400">California</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Specialized commercial auto insurance for Uber Black, Uber Black SUV, and luxury rideshare operators throughout California. Protect your premium vehicle and business with coverage designed for executive transportation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote/tnc">
                  <Button 
                    size="lg" 
                    className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
                    data-testid="button-uber-quote"
                  >
                    Get Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:888-254-0089">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black font-bold"
                    data-testid="button-uber-call"
                  >
                    <Phone className="h-4 w-4 mr-2" /> Call 888-254-0089
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="overview-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="overview-heading" className="text-3xl font-bold text-primary mb-6">
                  Why Uber Black Drivers Need Specialized Insurance
                </h2>
                <p className="text-muted-foreground mb-4">
                  As an Uber Black or Uber Black SUV driver in California, your personal auto insurance doesn't cover you while you're driving for the platform. Uber's commercial insurance only provides limited coverage, leaving gaps that could put your luxury vehicle and livelihood at risk.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our specialized TCP insurance for Uber Black drivers provides comprehensive coverage from the moment you turn on the app until the ride is complete—protecting your high-value vehicle, your passengers, and your income.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h3 className="font-bold text-amber-800 mb-2">California TCP Requirements</h3>
                  <p className="text-sm text-amber-700">
                    California requires all TCP drivers to maintain commercial auto liability coverage. Our policies meet and exceed CPUC requirements for rideshare operators.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-6">Coverage Includes</h3>
                <div className="grid gap-3">
                  {coverageFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 shrink-0" aria-hidden="true" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="vehicles-heading">
          <div className="container mx-auto px-4">
            <h2 id="vehicles-heading" className="text-3xl font-bold text-primary mb-4 text-center">
              Vehicles We Insure
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We specialize in insuring luxury and executive vehicles that meet Uber Black and Uber Black SUV requirements in California.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {vehicleTypes.map((vehicle, idx) => (
                <div 
                  key={idx}
                  className="bg-white border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <Car className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
                  <p className="font-medium text-foreground">{vehicle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="text-3xl font-bold text-primary mb-12 text-center">
              Why Choose InsureLimos for Uber Black Coverage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => (
                <Card key={idx} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white" aria-labelledby="areas-heading">
          <div className="container mx-auto px-4">
            <h2 id="areas-heading" className="text-3xl font-bold mb-4 text-center">
              Serving Uber Black Drivers Throughout California
            </h2>
            <p className="text-primary-foreground/80 text-center mb-8 max-w-2xl mx-auto">
              We provide coverage for Uber Black and luxury rideshare drivers in all major California markets.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {californiaAreas.map((area, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                >
                  <MapPin className="h-4 w-4 text-amber-400" aria-hidden="true" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/quote/tnc">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
                  data-testid="button-uber-quote-bottom"
                >
                  Get Your Free Quote Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="faq-heading" className="text-3xl font-bold text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Do I need special insurance for Uber Black?</h3>
                <p className="text-muted-foreground">
                  Yes. Your personal auto insurance typically excludes commercial use, and Uber's insurance has coverage gaps. Commercial TCP insurance ensures you're fully protected from app-on to ride complete.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">What vehicles qualify for Uber Black in California?</h3>
                <p className="text-muted-foreground">
                  Uber Black requires luxury sedans (black exterior, leather interior) that are 2019 or newer. Popular qualifying vehicles include Cadillac XTS, Lincoln Continental, Mercedes S-Class, BMW 7 Series, and similar luxury models.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">How much does Uber Black insurance cost in California?</h3>
                <p className="text-muted-foreground">
                  Rates vary based on your vehicle, driving history, and coverage needs. Most Uber Black operators pay between $300-$600 per month for comprehensive commercial coverage. Get a personalized quote to see your exact rate.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Can I also drive for Uber Black SUV with this insurance?</h3>
                <p className="text-muted-foreground">
                  Yes! Our TCP insurance covers both Uber Black and Uber Black SUV services. Just ensure your vehicle meets the platform requirements for each service tier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold text-primary mb-4">
              Ready to Protect Your Uber Black Business?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Get a free, no-obligation quote for your Uber Black or luxury rideshare vehicle. Our specialists understand the unique needs of premium TCP operators in California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/tnc">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 font-bold"
                  data-testid="button-uber-final-quote"
                >
                  Get Your Free Quote
                </Button>
              </Link>
              <a href="tel:888-254-0089">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="font-bold"
                  data-testid="button-uber-final-call"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call 888-254-0089
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
