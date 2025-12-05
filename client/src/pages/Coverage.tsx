import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, Users, Briefcase, Layers, Lock, Building, Smartphone, ArrowRight, Accessibility, Car, Bus, Gem, Building2, Ambulance, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";

const coverages = [
  {
    id: "tnc-mobility",
    title: "TNC & Mobility",
    icon: Smartphone,
    description: "Specialized insurance solutions for transportation network companies (TNCs), rideshare platforms, and modern mobility services.",
    details: "Coverage for Uber, Lyft, delivery services, micro-mobility, and on-demand transportation. Period-specific protection for all operational phases.",
    hasPage: true,
    pageUrl: "/coverage/tnc"
  },
  {
    id: "nemt",
    title: "NEMT Insurance",
    icon: Accessibility,
    description: "Specialized insurance solutions for Non-Emergency Medical Transportation providers, ensuring your patients and business are protected.",
    details: "Coverage for wheelchair lifts, ramps, patient loading/unloading, and medical equipment transport. Policies that meet healthcare facility contract requirements.",
    hasPage: true,
    pageUrl: "/coverage/nemt"
  },
  {
    id: "taxi",
    title: "Taxi Insurance",
    icon: Car,
    description: "Comprehensive insurance coverage for taxi operators, from independent drivers to large fleet owners.",
    details: "Coverage meeting state and municipal requirements. Hybrid policies available for drivers who operate both taxi and rideshare services.",
    hasPage: true,
    pageUrl: "/coverage/taxi"
  },
  {
    id: "school-bus",
    title: "School Bus Insurance",
    icon: Bus,
    description: "Specialized insurance solutions for school bus operators and contractors. Protection for your business and the students you serve.",
    details: "Coverage for school district fleets, independent contractors, private schools, and special needs transportation. Risk management focused on student safety.",
    hasPage: true,
    pageUrl: "/coverage/school-bus"
  },
  {
    id: "limo",
    title: "Limousine & Chauffeured",
    icon: Gem,
    description: "Specialized insurance for limousine fleets, luxury transportation, and chauffeured services.",
    details: "Coverage for luxury sedans, Mercedes Sprinters, stretch limousines, party buses, and executive transportation. Partnership with PHLY and other A-rated carriers.",
    hasPage: true,
    pageUrl: "/coverage/limo"
  },
  {
    id: "captive",
    title: "Captive Insurance Programs",
    icon: Building2,
    description: "Alternative risk solutions for larger transportation fleets seeking greater control, cost savings, and risk retention.",
    details: "Group captives, large deductible programs, and single-parent captive formation. Ideal for operations with $250K+ annual premiums and strong risk management practices.",
    hasPage: true,
    pageUrl: "/coverage/captive"
  },
  {
    id: "ambulance",
    title: "Ambulance & EMS",
    icon: Ambulance,
    description: "Comprehensive insurance solutions for ambulance services, EMS providers, and emergency medical transportation operations.",
    details: "Coverage for BLS, ALS, and critical care transport. Auto liability, professional liability, inland marine for medical equipment, workers' compensation, and umbrella policies.",
    hasPage: true,
    pageUrl: "/coverage/ambulance"
  },
  {
    id: "paratransit",
    title: "Paratransit Insurance",
    icon: HeartHandshake,
    description: "Specialized insurance for paratransit companies transporting passengers with disabilities and special needs.",
    details: "Coverage for wheelchair-accessible vehicles, medicars, ambulettes, and demand-response transportation. Liability up to $5M CSL with excess up to $20M available.",
    hasPage: true,
    pageUrl: "/coverage/paratransit"
  },
  {
    id: "auto-liability",
    title: "Auto Liability",
    icon: Shield,
    description: "The foundation of any commercial auto policy. It protects against financial loss if you or your drivers are found at fault for an accident that injures others or damages their property.",
    details: "Required by law for all commercial vehicles. Limits typically range from $750,000 to $5 Million depending on vehicle capacity and regulatory requirements (PUC/DOT)."
  },
  {
    id: "physical-damage",
    title: "Auto Physical Damage",
    icon: AlertTriangle,
    description: "Covers the cost to repair or replace your vehicle if it's damaged in an accident, stolen, vandalized, or damaged by fire or weather.",
    details: "Includes Collision (accidents) and Comprehensive (theft, fire, glass, etc.) coverage. Essential for protecting your fleet investment."
  },
  {
    id: "workers-comp",
    title: "Workers' Compensation",
    icon: Users,
    description: "Provides medical benefits and wage replacement to employees injured on the job. Mandatory for businesses with employees in California.",
    details: "Protects your business from lawsuits related to workplace injuries. Covers medical bills, rehabilitation costs, and lost wages."
  },
  {
    id: "general-liability",
    title: "General Liability",
    icon: Briefcase,
    description: "Protects your business from third-party claims of bodily injury or property damage that occur on your premises or as a result of your business operations (non-driving).",
    details: "Crucial for slip-and-fall accidents at your office, advertising injury, or customer property damage not involving the vehicle itself."
  },
  {
    id: "excess",
    title: "Excess Insurance",
    icon: Layers,
    description: "Provides higher liability limits beyond your primary policy. Often required for high-profile contracts, airports, or municipal bids.",
    details: "Can extend coverage limits to $10 Million, $20 Million or more. Acts as a safety net for catastrophic claims."
  },
  {
    id: "property",
    title: "Commercial Property",
    icon: Building,
    description: "Protects your physical business assets, including your office building, furniture, computers, and tools.",
    details: "Can be bundled with General Liability in a Business Owners Policy (BOP) for cost savings."
  },
  {
    id: "cyber",
    title: "Cyber Liability",
    icon: Lock,
    description: "Protection against data breaches and cyber attacks. Essential for transportation companies handling sensitive client data and payment information.",
    details: "Covers notification costs, credit monitoring, legal fees, and fines associated with data breaches."
  }
];

export default function Coverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Commercial Auto Coverage Options - Liability, Physical Damage"
        description="Understanding your commercial auto insurance coverage. From General Liability to Workers Compensation and Cyber Liability."
        canonical="https://insurelimos.net/coverage"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Header */}
        <section className="bg-accent text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 z-0" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coverage Options</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive protection for your transportation business. 
              Understand your policy and ensure you have the right limits.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid gap-8 max-w-5xl mx-auto">
            {coverages.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-lg text-foreground/90 mb-4 font-medium">
                    {item.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.details}
                  </p>
                  {item.hasPage && item.pageUrl && (
                    <Link href={item.pageUrl}>
                      <Button variant="outline" className="group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary text-primary-foreground py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Unsure What You Need?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Our agents are experts in California transportation regulations. 
              We'll review your operations and recommend the exact coverage to keep you compliant and protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="font-bold">
                  Speak with an Agent
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Start a Quote
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
