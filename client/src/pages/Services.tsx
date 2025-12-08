import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bus, Smartphone, Truck, Ambulance, ShieldCheck, GraduationCap, Stethoscope, Check } from "lucide-react";
import { Link } from "wouter";
import { Seo, ServiceListSchema, BreadcrumbSchema } from "@/components/seo/Seo";

const services = [
  {
    id: "limo",
    title: "Limousine Insurance",
    description: "Comprehensive coverage for luxury transportation services. Whether you run a single stretch limo or a fleet of luxury sedans, we protect your high-value assets and liability.",
    icon: Car,
    features: ["Liability & Physical Damage", "Chauffeur Coverage", "Loss of Use", "Personal Effects"]
  },
  {
    id: "taxi",
    title: "Taxi Insurance",
    description: "Specialized protection for taxi fleets and individual operators. We understand the unique risks of point-to-point transport in urban environments.",
    icon: Car,
    features: ["24/7 Claims Service", "Driver Protection", "Passenger Accident", "Competitive Fleet Rates"]
  },
  {
    id: "tnc",
    title: "TNC & Mobility Insurance",
    description: "Coverage solutions for Transportation Network Companies and rideshare drivers (Uber, Lyft, etc.). Bridging the gap between personal and commercial policies.",
    icon: Smartphone,
    features: ["Period 1, 2 & 3 Coverage", "Gap Insurance", "Deductible Reimbursement", "Regulatory Compliance"]
  },
  {
    id: "nemt",
    title: "NEMT Insurance",
    description: "Specialized coverage for Non-Emergency Medical Transportation. Essential for businesses transporting patients to appointments, dialysis, and therapy.",
    icon: Ambulance,
    features: ["General & Professional Liability", "Abuse & Molestation", "Loading & Unloading", "Wheelchair Equipment"]
  },
  {
    id: "tcp",
    title: "TCP Insurance",
    description: "Tailored insurance for Transportation Charter Party carriers in California. We ensure you meet all CPUC requirements for your permit.",
    icon: ShieldCheck,
    features: ["PUC Filings", "PL & PD Limits", "Workers Compensation", "Certificate Management"]
  },
  {
    id: "bus",
    title: "Bus & Motorcoach",
    description: "Comprehensive protection for bus and motorcoach operators. From charter buses to tour operators, we handle fleets of all sizes.",
    icon: Bus,
    features: ["Passenger Liability", "Medical Payments", "Emergency Evacuation", "Interstate Filings"]
  },
  {
    id: "school-bus",
    title: "School Bus Insurance",
    description: "Safety-first coverage for private school bus contractors. Protecting the most precious cargo with high-limit liability and specialized terms.",
    icon: GraduationCap,
    features: ["Student Accident", "Contract Liability", "Sexual Misconduct", "Auto Liability"]
  },
  {
    id: "sprinter",
    title: "Sprinter & Van",
    description: "Commercial auto insurance for Sprinter vans, cargo vans, and passenger shuttles. Perfect for last-mile delivery or executive transport.",
    icon: Truck,
    features: ["Cargo Insurance", "Non-Owned Auto", "Roadside Assistance", "Custom Equipment"]
  },
  {
    id: "medical-daycare",
    title: "Medical Day Care Van",
    description: "Transport insurance for adult day care and medical facility shuttles. Reliable coverage for scheduled transport services.",
    icon: Stethoscope,
    features: ["Door-to-Door Liability", "Elderly Care Transport", "Scheduled Routes", "Fleet Safety Programs"]
  }
];

const serviceSchemaData = services.map(s => ({
  name: s.title,
  description: s.description,
  url: `/quote/${s.id === 'limo' ? 'limousine' : s.id}`,
}));

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Commercial Transportation Insurance Services"
        description="InsureLimos offers specialized commercial auto insurance for limousines, taxis, TNC/rideshare (Uber, Lyft), NEMT, buses, school buses, and paratransit. Compare coverage options and get a free quote. Licensed in 18 states."
      />
      <ServiceListSchema services={serviceSchemaData} />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Header */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Specialized insurance solutions for every sector of the transportation industry. 
              We keep your vehicles on the road and your business protected.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="flex flex-col h-full hover:shadow-lg transition-shadow border-border/60">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/quote/${service.id === 'limo' ? 'limousine' : service.id === 'tnc' ? 'tnc' : service.id === 'nemt' ? 'nemt' : 'public-auto'}`}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white">
                      Get a Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Specific Need?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We offer custom insurance programs tailored to unique transportation businesses. 
              Contact us to discuss your specific requirements.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
