import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Home
} from "lucide-react";

interface CoverageOption {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string;
  link: string;
}

const defaultCoverageOptions: CoverageOption[] = [
  {
    icon: Shield,
    title: "Auto Liability",
    description: "The foundation of any commercial auto policy. It protects against financial loss if you or your drivers are found at fault for an accident that injures others or damages their property.",
    details: "Liability limits: $750,000, $1,000,000, $1,500,000, or $5,000,000 Combined Single Limit. Higher limits available upon request. Coverage includes PIP, UM, UIM, and medical payments depending on state requirements.",
    link: "/quote/public-auto"
  },
  {
    icon: Car,
    title: "Auto Physical Damage",
    description: "Covers the cost to repair or replace your vehicle if it's damaged in an accident, stolen, vandalized, or damaged by fire or weather.",
    details: "Deductibles starting as low as $1,000 for specified perils and collision coverage. Includes Collision (accident) and Comprehensive (theft, fire, glass, etc.) coverage. Roadside Coverage subject to $300.00 aggregate per covered auto per policy period. Windshield Replacement covered at $100 deductible. Windshield chip repair without deductible.",
    link: "/quote/public-auto"
  },
  {
    icon: Users,
    title: "Workers' Compensation",
    description: "Provides medical benefits and wage replacement to employees injured on the job. Mandatory for businesses with employees in California.",
    details: "Protects your business from lawsuits related to workplace injuries. Covers medical bills, rehabilitation costs, and lost wages.",
    link: "/quote/workers-comp"
  },
  {
    icon: Building,
    title: "General Liability",
    description: "Protects your business from third-party claims of bodily injury or property damage that occur as a result of your business operations (non-driving).",
    details: "Limits up to $5 million. Higher liability limits available upon request. Crucial for the non-auto exposures at your office, advertising injury, or accidental property damage not involving the vehicle itself.",
    link: "/quote/public-auto"
  },
  {
    icon: Wrench,
    title: "Garage Liability",
    description: "Essential for transportation companies that maintain their own fleet. Covers liability arising from garage operations including vehicle maintenance and repair.",
    details: "Includes Garagekeepers Legal Liability to protect customer vehicles in your care, custody, and control. Hired & non-owned coverage also available.",
    link: "/quote/public-auto"
  },
  {
    icon: Layers,
    title: "Excess Insurance",
    description: "Provides higher liability limits beyond your primary policy. Often required for high-profile contracts, airports, or managed care.",
    details: "Following form excess liability available up to $10 million x $5 million. Excess coverage limits available up to $20,000,000. Acts as a safety net for catastrophic claims.",
    link: "/quote/excess-liability"
  },
  {
    icon: Home,
    title: "Commercial Property",
    description: "Protects your physical business assets, including your office building, furniture, computers, and tools.",
    details: "Can be bundled with General Liability in a Business Owners Policy (BOP) for cost savings.",
    link: "/quote/public-auto"
  },
  {
    icon: AlertTriangle,
    title: "Cyber Liability",
    description: "Protection against data breaches and cyber attacks. Essential for transportation companies handling sensitive client data and payment information.",
    details: "Covers notification costs, credit monitoring, legal fees, and fines associated with data breaches.",
    link: "/quote/cyber-liability"
  }
];

interface CoverageOptionsSectionProps {
  title?: string;
  subtitle?: string;
  options?: CoverageOption[];
  showLimitsReference?: boolean;
}

export function CoverageOptionsSection({ 
  title = "Coverage Options",
  subtitle = "Comprehensive insurance protection designed specifically for your transportation operations.",
  options = defaultCoverageOptions,
  showLimitsReference = true
}: CoverageOptionsSectionProps) {
  return (
    <>
      <section className="py-8 bg-white rounded-lg mb-8">
        <div className="px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">{title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>
          
          <div className="space-y-6">
            {options.map((option, index) => {
              const Icon = option.icon;
              const isLast = index === options.length - 1;
              return (
                <div key={index} className={!isLast ? "border-b border-gray-200 pb-6" : "pb-2"}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-3">{option.description}</p>
                      <p className="text-muted-foreground mb-4">{option.details}</p>
                      <Link href={option.link}>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                          Learn More <span className="ml-2">→</span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {showLimitsReference && (
        <section className="py-8 bg-secondary/20 rounded-lg mb-8">
          <div className="px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Coverage Limits at a Glance</h2>
            </div>
            
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
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>$750,000 / $1M / $1.5M / $5M CSL</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Medical Payments: $5,000 or $10,000</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>PIP where applicable</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>UM/UIM up to $1M available</span>
                    </li>
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
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Deductibles from $1,000</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Roadside: $300 aggregate/vehicle</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Windshield: $100 deductible</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Chip repair: No deductible</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-primary" />
                    General Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Limits up to $5 million</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Higher limits available on request</span>
                    </li>
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
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Up to $20,000,000 available</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span>Following form: $10M x $5M</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
