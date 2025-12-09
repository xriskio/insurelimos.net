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
  ArrowRight,
  Truck,
  AlertTriangle,
  Building
} from "lucide-react";

import teslaModelXImage from "@assets/stock_images/black_tesla_model_x__9cf98afb.jpg";
import teslaModelSImage from "@assets/stock_images/black_tesla_model_s__9fb38562.jpg";
import lincolnAviatorImage from "@assets/stock_images/black_lincoln_aviato_7ed927eb.jpg";
import chevySuburbanImage from "@assets/stock_images/black_chevrolet_subu_58a2d5c9.jpg";
import escaladeImage from "@assets/stock_images/black_cadillac_escal_b8aa6da4.jpg";
import mercedesS580Image from "@assets/stock_images/black_mercedes_s-cla_47240d5b.jpg";
import cadillacCT5Image from "@assets/stock_images/black_cadillac_ct5_l_b971f996.jpg";

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
    { name: "Black Sedans", examples: "Lincoln Continental, Cadillac CT6, Mercedes S-Class" },
    { name: "Luxury SUVs", examples: "Cadillac Escalade, Lincoln Navigator, BMW X7" },
    { name: "Executive Sedans", examples: "BMW 7 Series, Audi A8, Genesis G90" },
    { name: "Premium Electric", examples: "Tesla Model S, Tesla Model X, Lucid Air" },
    { name: "Stretch Limousines", examples: "Lincoln MKT Stretch, Cadillac Stretch" },
    { name: "Sprinter Vans", examples: "Mercedes Sprinter Executive, Luxury Sprinter" },
    { name: "High-Value Imports", examples: "Bentley, Rolls-Royce, Maybach" },
    { name: "Airport Black Cars", examples: "Town Cars, Executive Sedans, Chauffeur Vehicles" }
  ];

  const benefits = [
    { icon: Shield, title: "TCP Gap Coverage", description: "Full protection from app-on to ride complete, covering gaps in Uber's insurance" },
    { icon: DollarSign, title: "Competitive Rates", description: "Affordable pricing tailored for luxury rideshare and livery operators" },
    { icon: Clock, title: "Fast Quotes", description: "Get quoted within 24 hours with quick policy binding available" },
    { icon: FileText, title: "Next Day CPUC Filings", description: "CPUC filings submitted next business day once your policy is bound" },
    { icon: FileText, title: "Next Day DOT Filings", description: "DOT filings processed next business day for interstate operations" },
    { icon: Users, title: "Fleet Discounts", description: "Multi-vehicle discounts for operators with 2+ luxury vehicles" },
    { icon: FileText, title: "Same Day COI", description: "Certificates of Insurance and Auto ID cards issued same day" },
    { icon: Award, title: "A-Rated Carriers", description: "Coverage through Philadelphia Insurance, National Interstate, and other top carriers" }
  ];

  const states = [
    "California", "Arizona", "Colorado", "Idaho", "Illinois", "Kansas", 
    "Kentucky", "Minnesota", "Missouri", "Nevada", "Ohio", "Oklahoma", 
    "Pennsylvania", "Tennessee", "Texas", "Utah", "Virginia", "Wisconsin"
  ];

  const stateAbbreviations = [
    "CA", "AZ", "CO", "ID", "IL", "KS", "KY", "MN", "MO", 
    "NV", "OH", "OK", "PA", "TN", "TX", "UT", "VA", "WI"
  ];

  const uberBlackRequirements = [
    "Must hold commercial auto insurance (personal auto does not qualify)",
    "Vehicle must meet luxury standards (black exterior, leather interior)",
    "Vehicle must be no more than 5 years old",
    "Drivers must maintain a high star rating (typically 4.85+)",
    "Vehicle must pass Uber's inspection requirements"
  ];

  const insuranceCoverages = [
    {
      icon: Shield,
      title: "Auto Liability",
      description: "Protects you and your business if you're at fault in an accident. Covers repair costs to other vehicles, medical expenses for all parties, and legal defense if a lawsuit is filed against you."
    },
    {
      icon: AlertTriangle,
      title: "Comprehensive & Collision",
      description: "Protects your luxury vehicle from damages whether you're at fault or not. Covers collision damage, theft, vandalism, fire, and weather events. Available for owned or leased vehicles with flexible deductible options."
    },
    {
      icon: Building,
      title: "Hired & Non-Owned Auto",
      description: "Coverage for vehicles you rent, borrow, or use for business that aren't on your policy. Essential protection for substitute vehicles while your primary vehicle is being serviced."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Uber Black Insurance - Commercial Coverage for Black Sedans & Luxury SUVs"
        description="Specialized commercial auto insurance for Uber Black drivers in 18 states. Coverage for black sedans, luxury SUVs, and executive vehicles. Next day CPUC and DOT filings. Call 888-254-0089."
        canonical="https://insurelimos.net/services/commercial-auto/uber-black-california"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 md:py-24" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-amber-400 mb-4">
                <Car className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-wide">Premium Commercial Auto Coverage</span>
              </div>
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Uber Black Insurance<br />
                <span className="text-amber-400">For Professional Drivers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Drive with confidence knowing your luxury vehicle and livelihood are protected. Our commercial auto insurance is specifically designed for Uber Black, Uber Black SUV, and premium rideshare operators.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {stateAbbreviations.map((state, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                    {state}
                  </span>
                ))}
              </div>
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

        <section className="py-16 bg-white" aria-labelledby="what-is-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 id="what-is-heading" className="text-3xl font-bold text-primary mb-6">
                  What is Uber Black Insurance, and Do You Need It?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Uber Black insurance is specialized commercial auto coverage designed for professional drivers using luxury vehicles on the Uber Black platform. Unlike standard rideshare, your personal auto policy does not qualify you to drive for Uber Black—you must carry commercial auto insurance.
                </p>
                <p className="text-muted-foreground mb-4">
                  Personal auto insurance policies typically exclude coverage for commercial livery operations. This creates a dangerous gap that could leave you personally liable for accidents, vehicle damage, and passenger injuries while working.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our Uber Black insurance bridges this gap completely. From the moment you turn on the app until the ride is complete, you're fully protected against third-party claims, vehicle damage, and liability—even if you're at fault.
                </p>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-6">
                  <h3 className="font-bold text-amber-800 mb-3">Uber Black Requirements</h3>
                  <ul className="space-y-2">
                    {uberBlackRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-amber-700">
                        <CheckCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
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
                <div className="mt-6 pt-6 border-t">
                  <Link href="/quote/tnc">
                    <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                      Start Your Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="vehicles-heading">
          <div className="container mx-auto px-4">
            <h2 id="vehicles-heading" className="text-3xl font-bold text-primary mb-4 text-center">
              Luxury Vehicles We Insure
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We specialize in insuring premium vehicles that meet Uber Black and Uber Black SUV platform requirements. Our policies cover a wide range of luxury and executive transportation vehicles.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {vehicleTypes.map((vehicle, idx) => (
                <div 
                  key={idx}
                  className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow"
                >
                  <Car className="h-8 w-8 text-primary mb-3" aria-hidden="true" />
                  <h3 className="font-bold text-foreground mb-1">{vehicle.name}</h3>
                  <p className="text-sm text-muted-foreground">{vehicle.examples}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Featured Uber Black Vehicles</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={chevySuburbanImage} alt="Black Chevrolet Suburban" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Chevrolet Suburban</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={lincolnAviatorImage} alt="Black Lincoln Aviator" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Lincoln Aviator</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={escaladeImage} alt="Black Cadillac Escalade ESV" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Cadillac Escalade ESV</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={teslaModelXImage} alt="Black Tesla Model X SUV" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Tesla Model X</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={teslaModelSImage} alt="Black Tesla Model S Sedan" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Tesla Model S</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={mercedesS580Image} alt="Black Mercedes S580 Sedan" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Mercedes S580</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                <img src={cadillacCT5Image} alt="Black Cadillac CT5 Sedan" className="w-full h-48 object-cover" />
                <div className="p-3 text-center">
                  <span className="font-semibold text-foreground">Cadillac CT5</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="coverages-heading">
          <div className="container mx-auto px-4">
            <h2 id="coverages-heading" className="text-3xl font-bold text-primary mb-12 text-center">
              Insurance Coverages Offered
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {insuranceCoverages.map((coverage, idx) => (
                <Card key={idx} className="border-border/50">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <coverage.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl">{coverage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{coverage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <h2 id="benefits-heading" className="text-3xl font-bold mb-4 text-center">
              Why Choose InsureLimos for Uber Black Coverage?
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              With decades of experience insuring limousines, black cars, and transportation network companies, we understand what it takes to keep you on the road and protected.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="p-2 bg-amber-500/20 rounded-lg w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-amber-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white" aria-labelledby="states-heading">
          <div className="container mx-auto px-4">
            <h2 id="states-heading" className="text-3xl font-bold mb-4 text-center">
              Coverage Available in 18 States
            </h2>
            <p className="text-primary-foreground/80 text-center mb-8 max-w-2xl mx-auto">
              We provide Uber Black and luxury rideshare insurance across the country. Get protected no matter where you operate.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-12">
              {states.map((state, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center gap-2 bg-white/10 px-4 py-3 rounded-lg"
                >
                  <MapPin className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                  <span className="font-medium">{state}</span>
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
                <h3 className="font-bold text-foreground mb-2">How much does Uber Black insurance cost?</h3>
                <p className="text-muted-foreground">
                  Rates vary based on your location, vehicle type, driving history, and coverage needs. Contact us for a personalized quote tailored to your specific situation. We work with multiple carriers to find you the most competitive rates available.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Does Uber Black insurance qualify as commercial auto insurance?</h3>
                <p className="text-muted-foreground">
                  Yes. Our Uber Black policies are full commercial auto insurance policies that meet all Uber requirements and state regulations. Unlike personal auto with a rideshare endorsement, our policies are specifically designed for professional livery operations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">What vehicles qualify for Uber Black?</h3>
                <p className="text-muted-foreground">
                  Uber Black requires luxury vehicles with black exterior and leather interior, typically no more than 5 years old. Popular qualifying vehicles include Cadillac CT6/Escalade, Lincoln Continental/Navigator, Mercedes S-Class, BMW 7 Series, Audi A8, and Tesla Model S/X.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">How quickly can I get my CPUC or DOT filings?</h3>
                <p className="text-muted-foreground">
                  Once your policy is bound, we submit CPUC filings (California) and DOT filings the next business day. Certificates of Insurance and Auto ID cards are issued same day, so you can get on the road quickly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-foreground mb-2">Can I also drive for Uber Black SUV with this insurance?</h3>
                <p className="text-muted-foreground">
                  Yes! Our TCP insurance covers both Uber Black (sedan) and Uber Black SUV services. Just ensure your vehicle meets the platform requirements for each service tier you want to operate.
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
              Get a free, no-obligation quote for your Uber Black or luxury rideshare vehicle. Our specialists understand the unique needs of premium transportation operators and can help you find the right coverage at a competitive price.
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
