import { useState, useEffect } from "react";
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

import teslaModelXImage from "@assets/modelX_1765269534582.png";
import teslaModelSImage from "@assets/Black-Model-S-P90D-Arachnid-Wheel-e1464681843999-1000x600-1_1765267126798.png";
import cadillacEscaladeImage from "@assets/25Cadillac-EscaladeESV-Sport-BlackRaven-Jellybean_1765269534582.avif";
import lincolnNavigatorImage from "@assets/image_(1)_1765269534582.avif";

export default function UberBlackCalifornia() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const requirementImages = [
    { src: teslaModelXImage, alt: "Black Tesla Model X electric SUV" },
    { src: cadillacEscaladeImage, alt: "Black Cadillac Escalade ESV luxury SUV" },
    { src: lincolnNavigatorImage, alt: "Black Lincoln Navigator luxury SUV" },
    { src: teslaModelSImage, alt: "Black Tesla Model S electric sedan" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % requirementImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    {
      icon: Car,
      title: "Vehicles",
      description: "Only specific vehicle makes and models qualify for Uber Black and/or Uber Black SUV trips. The vehicle's model year must be no older than 5 years ago. The vehicle must also have a black exterior and a black leather or vegan leather interior."
    },
    {
      icon: Award,
      title: "Ratings",
      description: "All drivers using Uber Black must maintain a 4.85 rating or above. Star ratings are based on drivers' most recent 500 rated trips."
    },
    {
      icon: FileText,
      title: "Documents",
      description: "Drivers using Uber Black must be professional drivers with commercial auto insurance (personal auto insurance does not qualify) and have all permits required by their city to operate a commercial livery vehicle in their area."
    }
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

        <section className="py-12 bg-gray-50" aria-labelledby="quote-form-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
              <h2 id="quote-form-heading" className="text-2xl font-bold text-primary text-center mb-2">
                Get Your Free Quote
              </h2>
              <p className="text-muted-foreground text-center mb-6">Quick response within 24 hours</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="businessName" className="block text-sm font-semibold text-primary mb-1">Business Name</label>
                  <input 
                    type="text" 
                    id="businessName"
                    placeholder="Your company name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    data-testid="input-business-name"
                  />
                </div>
                
                <div>
                  <label htmlFor="yourName" className="block text-sm font-semibold text-primary mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="yourName"
                    placeholder="Full name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    data-testid="input-your-name"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="email@example.com" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      placeholder="(555) 555-5555" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-primary mb-1">State</label>
                    <select 
                      id="state"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                      data-testid="select-state"
                    >
                      <option value="">Select</option>
                      <option value="CA">California</option>
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="MN">Minnesota</option>
                      <option value="MO">Missouri</option>
                      <option value="NV">Nevada</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VA">Virginia</option>
                      <option value="WI">Wisconsin</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vehicles" className="block text-sm font-semibold text-primary mb-1">Vehicles</label>
                    <select 
                      id="vehicles"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white"
                      data-testid="select-vehicles"
                    >
                      <option value="">Select</option>
                      <option value="1">1 Vehicle</option>
                      <option value="2-5">2-5 Vehicles</option>
                      <option value="6-10">6-10 Vehicles</option>
                      <option value="11-25">11-25 Vehicles</option>
                      <option value="26+">26+ Vehicles</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tcpNumber" className="block text-sm font-semibold text-primary mb-1">
                      TCP Number <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      id="tcpNumber"
                      placeholder="TCP-XXXXX" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      data-testid="input-tcp-number"
                    />
                  </div>
                  <div>
                    <label htmlFor="dotNumber" className="block text-sm font-semibold text-primary mb-1">
                      DOT Number <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      id="dotNumber"
                      placeholder="DOT-XXXXXXX" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      data-testid="input-dot-number"
                    />
                  </div>
                </div>
                
                <Link href="/quote/tnc">
                  <Button 
                    type="button"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 text-lg rounded-lg"
                    data-testid="button-get-free-quote"
                  >
                    Get My Free Quote
                  </Button>
                </Link>
                
                <p className="text-center text-muted-foreground">
                  Or call us now: <a href="tel:888-254-0089" className="text-primary font-semibold hover:underline">888-254-0089</a>
                </p>
              </form>
              
              <div className="flex justify-center gap-8 mt-8 pt-6 border-t">
                <div className="flex flex-col items-center">
                  <Clock className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-muted-foreground">24hr Response</span>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-muted-foreground">A-Rated Carriers</span>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 text-primary mb-1" />
                  <span className="text-sm text-muted-foreground">18 States</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="requirements-heading">
          <div className="container mx-auto px-4">
            <h2 id="requirements-heading" className="text-3xl font-bold text-primary mb-4 text-center">
              Uber Black Requirements
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              To drive for Uber Black, you must meet specific vehicle, rating, and documentation requirements. We provide the commercial auto insurance you need to qualify.
            </p>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-black aspect-video">
                  {requirementImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img.src} 
                      alt={img.alt}
                      className={`absolute inset-0 w-full h-full object-contain bg-black transition-opacity duration-700 ${
                        idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {requirementImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentImageIndex ? 'bg-primary' : 'bg-gray-300'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {uberBlackRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <req.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{req.title}</h3>
                      <p className="text-muted-foreground text-sm">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50" aria-labelledby="what-is-heading">
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
                <p className="text-muted-foreground">
                  Our Uber Black insurance bridges this gap completely. From the moment you turn on the app until the ride is complete, you're fully protected against third-party claims, vehicle damage, and liability—even if you're at fault.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md">
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
            
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                <img src={teslaModelXImage} alt="Black Tesla Model X" className="w-full h-48 object-contain bg-black" />
                <div className="p-3 text-center bg-white">
                  <span className="font-semibold text-foreground">Tesla Model X</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                <img src={cadillacEscaladeImage} alt="Black Cadillac Escalade ESV" className="w-full h-48 object-contain bg-black" />
                <div className="p-3 text-center bg-white">
                  <span className="font-semibold text-foreground">Cadillac Escalade ESV</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                <img src={lincolnNavigatorImage} alt="Black Lincoln Navigator" className="w-full h-48 object-contain bg-black" />
                <div className="p-3 text-center bg-white">
                  <span className="font-semibold text-foreground">Lincoln Navigator</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg bg-black">
                <img src={teslaModelSImage} alt="Black Tesla Model S" className="w-full h-48 object-contain bg-black" />
                <div className="p-3 text-center bg-white">
                  <span className="font-semibold text-foreground">Tesla Model S</span>
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
