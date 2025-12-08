import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { CALIFORNIA_CITIES, NEVADA_CITIES, TRANSPORT_INSURANCE_TYPES } from "@/data/locations";
import { MapPin, ArrowRight, Bus, Car, Heart, Ambulance, Accessibility, Phone, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Locations() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Transportation Insurance by Location - California & Nevada"
        description="Find specialized transportation insurance for NEMT, paratransit, buses, ambulances, limousines, and taxis in California and Nevada cities. Local coverage with nationwide support."
        canonical="https://insurelimos.net/locations"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        <section className="bg-primary text-white py-16 md:py-24" aria-labelledby="locations-heading">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-accent mb-4">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">Serving Transportation Businesses</span>
            </div>
            <h1 id="locations-heading" className="text-4xl md:text-5xl font-bold mb-6">
              Transportation Insurance by Location
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Find specialized commercial transportation insurance tailored to your city. We provide coverage for NEMT, paratransit, buses, ambulances, limousines, and taxis across California and Nevada.
            </p>
          </div>
        </section>

        <section className="py-16 bg-secondary/20" aria-labelledby="ca-locations">
          <div className="container mx-auto px-4">
            <h2 id="ca-locations" className="text-3xl font-bold text-primary mb-4">California Locations</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Serving transportation businesses throughout the Golden State with comprehensive commercial auto insurance solutions for NEMT providers, paratransit operators, bus companies, ambulance services, and limousine fleets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {CALIFORNIA_CITIES.map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/location/${city.slug}/nemt`}
                  className="block"
                >
                  <div 
                    className="bg-white border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer h-full"
                    data-testid={`card-location-${city.slug}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Building className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">{city.county}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {city.industries.map((industry) => (
                            <Badge key={industry} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                          View Insurance Options <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="nv-locations">
          <div className="container mx-auto px-4">
            <h2 id="nv-locations" className="text-3xl font-bold text-primary mb-4">Nevada Locations</h2>
            <p className="text-muted-foreground mb-8 max-w-3xl">
              Protecting transportation businesses across the Silver State with tailored insurance coverage for limousines, NEMT services, paratransit, buses, and ambulance operators.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {NEVADA_CITIES.map((city) => (
                <Link 
                  key={city.slug} 
                  href={`/location/${city.slug}/nemt`}
                  className="block"
                >
                  <div 
                    className="bg-white border border-border rounded-lg p-4 hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer h-full"
                    data-testid={`card-location-${city.slug}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Building className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-foreground">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">{city.county}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {city.industries.map((industry) => (
                            <Badge key={industry} variant="secondary" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                          View Insurance Options <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary/20" aria-labelledby="insurance-types">
          <div className="container mx-auto px-4">
            <h2 id="insurance-types" className="text-3xl font-bold text-primary mb-4 text-center">Transportation Insurance Types Available</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
              We specialize in commercial auto insurance for transportation businesses. Here are the coverage types we offer across all locations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TRANSPORT_INSURANCE_TYPES.map((type) => (
                <div 
                  key={type.slug}
                  className="bg-white border border-border rounded-lg p-6 shadow-sm"
                  data-testid={`card-insurance-type-${type.slug}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      {type.slug === "limo" && <Car className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "nemt" && <Heart className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "paratransit" && <Accessibility className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "bus" && <Bus className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "ambulance" && <Ambulance className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "taxi" && <Car className="h-6 w-6 text-primary" aria-hidden="true" />}
                      {type.slug === "tnc" && <Car className="h-6 w-6 text-primary" aria-hidden="true" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{type.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                      <p className="text-sm font-semibold text-primary">Avg: {type.avgCost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white" aria-labelledby="cta-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-4">Don't See Your City Listed?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              InsureLimos provides commercial transportation insurance coverage for businesses in 18 US states. Contact us for a personalized quote for your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-bold"
                  data-testid="button-locations-quote"
                >
                  Get a Quote
                </Button>
              </Link>
              <a href="tel:888-254-0089">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary font-bold"
                  data-testid="button-locations-call"
                >
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
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
