import { Shield, AlertCircle, Users, Zap, Lock, Briefcase, Phone, Mail } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const coverages = [
  {
    title: "General Liability",
    description: "Essential protection against third-party bodily injury and property damage claims that occur on your business premises.",
    icon: Shield,
  },
  {
    title: "Commercial Auto",
    description: "Insures your vehicles for physical damage and liability coverages not covered by a personal auto policy.",
    icon: Briefcase,
  },
  {
    title: "Excess Liability",
    description: "Higher limits when your underlying umbrella policy limits have been reached for catastrophic protection.",
    icon: Zap,
  },
  {
    title: "Workers' Compensation",
    description: "Mandatory coverage providing medical benefits and wage replacement to employees injured on the job.",
    icon: Users,
  },
  {
    title: "Cyber Liability",
    description: "Protection against data breaches and cyber attacks - critical for modern transportation companies.",
    icon: Lock,
  },
  {
    title: "Physical Damage",
    description: "Coverage for damage to your vehicles from accidents, theft, vandalism, or weather events.",
    icon: AlertCircle,
  },
];

export function CoverageList() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:w-1/3 sticky top-24">
            <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Coverage Options</span>
            <h2 className="text-3xl font-bold text-primary mb-6 sm:text-4xl leading-tight">
              Comprehensive Protection for Your Business
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just sell policies; we build insurance programs. Our expertise in the transportation sector ensures you have the exact coverage you need—nothing more, nothing less.
            </p>
            <div className="p-6 bg-primary rounded-xl text-white shadow-lg">
              <h3 className="font-bold text-xl mb-2">Need Help Deciding?</h3>
              <p className="text-primary-foreground/80 mb-4">Our agents are specialists in California transportation regulations.</p>
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors" data-testid="button-talk-agent">
                    Talk to an Agent
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4" align="center">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-center mb-3">Choose how to reach us:</p>
                    <a 
                      href="tel:888-254-0089" 
                      className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium"
                      data-testid="link-call-agent"
                    >
                      <Phone className="h-5 w-5" />
                      <div>
                        <div className="font-bold">Call Us</div>
                        <div className="text-sm text-muted-foreground">888-254-0089</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:info@insurelimos.net" 
                      className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors text-accent font-medium"
                      data-testid="link-email-agent"
                    >
                      <Mail className="h-5 w-5" />
                      <div>
                        <div className="font-bold">Email Us</div>
                        <div className="text-sm text-muted-foreground">info@insurelimos.net</div>
                      </div>
                    </a>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverages.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
