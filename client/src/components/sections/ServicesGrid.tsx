import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Bus, Smartphone, Truck, Ambulance, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "Limousine Insurance",
    description: "Comprehensive coverage for luxury transportation services including sedans, stretch limos, and SUVs.",
    icon: Car,
    href: "/quote/limousine",
  },
  {
    title: "Taxi & Cab Insurance",
    description: "Specialized protection for taxi fleets and individual owner-operators with competitive rates.",
    icon: Car,
    href: "/quote/public-auto",
  },
  {
    title: "TNC & Mobility",
    description: "Tailored solutions for Transportation Network Companies like Uber/Lyft fleets and mobility services.",
    icon: Smartphone,
    href: "/quote/tnc",
  },
  {
    title: "NEMT Insurance",
    description: "Specialized coverage for Non-Emergency Medical Transportation vehicles and liability needs.",
    icon: Ambulance,
    href: "/quote/nemt",
  },
  {
    title: "Bus & Motorcoach",
    description: "Protection for charter buses, tour buses, and motorcoach operators of all fleet sizes.",
    icon: Bus,
    href: "/quote/public-auto",
  },
  {
    title: "Sprinter & Van",
    description: "Commercial auto insurance for Sprinter vans, cargo vans, and passenger shuttle services.",
    icon: Truck,
    href: "/quote/public-auto",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4 sm:text-4xl">Transportation Insurance Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We specialize in public auto insurance. Whether you operate a single vehicle or a large fleet, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-border/60 bg-white transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
              <div className="absolute top-0 left-0 h-1 w-full bg-transparent group-hover:bg-accent transition-colors duration-300" />
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Link href={service.href}>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:text-accent transition-colors">
                    Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
