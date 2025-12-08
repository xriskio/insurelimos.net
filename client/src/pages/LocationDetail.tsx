import { useRoute, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { 
  getCityBySlug, 
  getTransportTypeBySlug, 
  getNearbyCities, 
  TRANSPORT_INSURANCE_TYPES,
  ALL_CITIES
} from "@/data/locations";
import { 
  MapPin, 
  ArrowRight, 
  Bus, 
  Car, 
  Heart, 
  Ambulance, 
  Accessibility, 
  Phone, 
  CheckCircle,
  Clock,
  Shield,
  Users,
  DollarSign,
  FileText,
  Building
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function getIconForType(slug: string) {
  switch (slug) {
    case "limo": return <Car className="h-5 w-5" aria-hidden="true" />;
    case "nemt": return <Heart className="h-5 w-5" aria-hidden="true" />;
    case "paratransit": return <Accessibility className="h-5 w-5" aria-hidden="true" />;
    case "bus": return <Bus className="h-5 w-5" aria-hidden="true" />;
    case "ambulance": return <Ambulance className="h-5 w-5" aria-hidden="true" />;
    case "taxi": return <Car className="h-5 w-5" aria-hidden="true" />;
    case "tnc": return <Car className="h-5 w-5" aria-hidden="true" />;
    default: return <Car className="h-5 w-5" aria-hidden="true" />;
  }
}

export default function LocationDetail() {
  const [, params] = useRoute("/location/:city/:type");
  
  const citySlug = params?.city || "";
  const typeSlug = params?.type || "nemt";
  
  const city = getCityBySlug(citySlug);
  const insuranceType = getTransportTypeBySlug(typeSlug);
  const nearbyCities = getNearbyCities(citySlug, 6);
  
  if (!city) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
            <Link href="/locations">
              <Button>View All Locations</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const availableTypes = TRANSPORT_INSURANCE_TYPES.filter(t => 
    city.transportTypes.includes(t.slug)
  );

  const currentType = insuranceType || availableTypes[0];

  const coveragePoints = [
    "Bodily injury and property damage liability",
    "Personal injury protection coverage",
    "Medical payments coverage",
    "Uninsured/underinsured motorist protection",
    "Comprehensive coverage",
    "Collision coverage"
  ];

  const benefits = [
    { icon: Clock, text: "Fast quotes within 24 hours" },
    { icon: Shield, text: "A-rated insurance carriers" },
    { icon: Users, text: "Local agents ready to help" },
    { icon: DollarSign, text: "Competitive rates tailored to California" },
    { icon: FileText, text: "Easy claims process" },
    { icon: CheckCircle, text: "Coverage tailored to state regulations" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title={`${city.name}, ${city.stateAbbr} ${currentType?.name || "Transportation Insurance"}`}
        description={`Get ${currentType?.name || "transportation insurance"} in ${city.name}, ${city.state}. Specialized coverage for ${city.industries.join(", ")} businesses. Free quotes available. Call 888-254-0089.`}
        canonical={`https://insurelimos.net/location/${citySlug}/${typeSlug}`}
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        <nav className="bg-secondary/30 py-3 border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4">
            <ol className="flex items-center gap-2 text-sm" role="list">
              <li>
                <Link href="/locations" className="text-muted-foreground hover:text-primary">
                  Insurance by Location
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li>
                <Link href={`/location/${citySlug}/${typeSlug}`} className="text-muted-foreground hover:text-primary">
                  {city.name}, {city.stateAbbr}
                </Link>
              </li>
              <li className="text-muted-foreground">/</li>
              <li className="text-foreground font-medium">{currentType?.name}</li>
            </ol>
          </div>
        </nav>

        <section className="bg-primary text-white py-12 md:py-16" aria-labelledby="city-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 id="city-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {city.name}, {city.stateAbbr} {currentType?.name}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-6 max-w-3xl">
                InsureLimos is your trusted partner for {currentType?.name?.toLowerCase()} in {city.name}, {city.state}. 
                We understand the unique challenges facing businesses in {city.county} and provide tailored insurance solutions to protect your operations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/quote">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white font-bold"
                    data-testid="button-city-quote"
                  >
                    Get a Free Quote
                  </Button>
                </Link>
                <a href="tel:888-254-0089">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary font-bold"
                    data-testid="button-city-call"
                  >
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    Call 888-254-0089
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    About {currentType?.name} in {city.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {currentType?.description}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {city.name} is home to a thriving community of {city.industries.join(" and ").toLowerCase()} businesses. 
                    Whether you're starting up or scaling an established business, InsureLimos has the insurance expertise to protect your {city.name} operations.
                  </p>

                  <h3 className="text-lg font-bold text-foreground mb-3">What's Covered</h3>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {coveragePoints.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-secondary/30 rounded-lg p-4 flex items-center gap-4">
                    <DollarSign className="h-8 w-8 text-primary shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-sm text-muted-foreground">Average Cost in {city.stateAbbr}</p>
                      <p className="text-xl font-bold text-primary">{currentType?.avgCost}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Why Choose InsureLimos for Your {city.name} Business
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                          <benefit.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                        </div>
                        <span className="text-muted-foreground">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    Other Transportation Insurance in {city.name}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {availableTypes.filter(t => t.slug !== typeSlug).map((type) => (
                      <Link 
                        key={type.slug} 
                        href={`/location/${citySlug}/${type.slug}`}
                        className="block"
                      >
                        <Card className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer h-full">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                {getIconForType(type.slug)}
                              </div>
                              <CardTitle className="text-base">{type.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                              {type.description.substring(0, 100)}...
                            </p>
                            <div className="flex items-center gap-1 text-primary text-sm font-medium">
                              Learn More <ArrowRight className="h-3 w-3" aria-hidden="true" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-primary/20 shadow-lg">
                  <CardHeader className="bg-primary text-white rounded-t-lg">
                    <CardTitle>Get Your Free Quote</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Request a no-obligation {currentType?.name?.toLowerCase()} quote for your {city.name} business.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>Fast Quotes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>Two-Click Binding</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>Expert Support</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                        <span>Licensed agents ready to help</span>
                      </div>
                    </div>
                    <Link href="/quote" className="block">
                      <Button className="w-full bg-accent hover:bg-accent/90" data-testid="button-sidebar-quote">
                        Request a Quote <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                      </Button>
                    </Link>
                    <div className="text-center">
                      <a 
                        href="tel:888-254-0089" 
                        className="text-primary font-bold hover:underline"
                        data-testid="link-sidebar-phone"
                      >
                        888-254-0089
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Insurance Types in {city.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {availableTypes.map((type) => (
                      <Link 
                        key={type.slug}
                        href={`/location/${citySlug}/${type.slug}`}
                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          type.slug === typeSlug 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "hover:bg-secondary text-muted-foreground"
                        }`}
                      >
                        {getIconForType(type.slug)}
                        <span className="text-sm">{type.name}</span>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {nearbyCities.length > 0 && (
          <section className="py-12 bg-secondary/20" aria-labelledby="nearby-heading">
            <div className="container mx-auto px-4">
              <h2 id="nearby-heading" className="text-2xl font-bold text-primary mb-6">
                {currentType?.name} in Nearby Cities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {nearbyCities.map((nearbyCity) => (
                  <Link 
                    key={nearbyCity.slug}
                    href={`/location/${nearbyCity.slug}/${typeSlug}`}
                    className="block"
                  >
                    <div className="bg-white border rounded-lg p-4 text-center hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
                      <Building className="h-6 w-6 text-primary mx-auto mb-2" aria-hidden="true" />
                      <p className="font-medium text-sm">{nearbyCity.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 bg-primary text-white" aria-labelledby="final-cta">
          <div className="container mx-auto px-4 text-center">
            <h2 id="final-cta" className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Protect Your {city.name} Business?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Get a free, no-obligation quote for {currentType?.name?.toLowerCase()} today. Our licensed agents are ready to help find the right coverage for your transportation business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-bold"
                  data-testid="button-final-quote"
                >
                  Get a Quote
                </Button>
              </Link>
              <a href="tel:888-254-0089">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-bold"
                  data-testid="button-final-call"
                >
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
