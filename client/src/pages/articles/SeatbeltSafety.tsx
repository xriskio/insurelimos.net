import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Users,
  FileText,
  XCircle
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Risk Management", url: "/services/risk-management" },
  { name: "Seatbelt Safety Tips", url: "/articles/seatbelt-safety" },
];

export default function SeatbeltSafety() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Seatbelt Safety Tips for NEMT & Paratransit Operators"
        description="Essential seatbelt safety guidelines for NEMT and paratransit operators. Learn about securement policies, handling best practices, and passenger refusal guidance."
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-12 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/services/risk-management" className="inline-flex items-center text-white/80 hover:text-white mb-4 text-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Risk Management
            </Link>
            <div className="max-w-3xl text-white">
              <p className="text-accent font-bold mb-2 uppercase tracking-wider">Articles & Resources</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Seatbelt Safety Tips for NEMT & Paratransit Operators</h1>
              <p className="text-lg text-white/90">
                Essential information on implementing effective seatbelt policies and handling passenger safety.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Common Loss Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-accent" />
                Common Loss Types
              </h2>
              <p className="text-muted-foreground mb-4">
                Understanding common loss types helps operators prioritize safety measures and training:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Passenger Ejection</h4>
                    <p className="text-sm text-muted-foreground">Unbelted passengers can be thrown from their seats during sudden stops or collisions, leading to severe injuries.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Impact Injuries</h4>
                    <p className="text-sm text-muted-foreground">Without proper restraints, passengers can strike interior surfaces, equipment, or other passengers during maneuvers.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Wheelchair Movement</h4>
                    <p className="text-sm text-muted-foreground">Unsecured wheelchairs can slide or tip during transit, causing passenger injuries even if the chair is secured.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Liability Claims</h4>
                    <p className="text-sm text-muted-foreground">Failure to properly secure passengers can result in significant liability claims and regulatory penalties.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Implementing Securement Policies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-accent" />
                Implementing Securement Policies
              </h2>
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Written Policy Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Clear statement that seatbelt use is mandatory for all passengers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Step-by-step procedures for proper securement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Documentation requirements for each trip</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Protocol for handling passenger refusals</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="font-semibold text-primary mb-3">Driver Training Components</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Initial training on all securement equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Regular refresher courses (at least annually)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Hands-on practice with different wheelchair types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Communication skills for handling difficult situations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Handling Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                Handling Best Practices
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Pre-Trip Inspection</h4>
                  <p className="text-muted-foreground text-sm">Check all seatbelts and securement equipment before each shift. Report any damage or wear immediately.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Proper Positioning</h4>
                  <p className="text-muted-foreground text-sm">Lap belts should sit low across the hips, not the stomach. Shoulder belts should cross the chest without touching the neck.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Securing Children</h4>
                  <p className="text-muted-foreground text-sm">Use appropriate child safety seats when required. Follow manufacturer guidelines and state regulations for child restraints.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Wheelchair Occupant Restraints</h4>
                  <p className="text-muted-foreground text-sm">Use vehicle-mounted occupant restraints separate from wheelchair securement. Never use wheelchair seatbelts as the primary restraint during transport.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Verification Check</h4>
                  <p className="text-muted-foreground text-sm">Before moving the vehicle, verify all passengers are properly secured. Make this a consistent part of your departure routine.</p>
                </div>
              </div>
            </section>

            {/* Passenger Refusal Guidance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <XCircle className="h-6 w-6 text-accent" />
                When Passengers Refuse Securement
              </h2>
              <div className="bg-slate-900 text-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Step-by-Step Protocol</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Explain the Requirement</h4>
                      <p className="text-white/80 text-sm">Calmly explain that seatbelt use is required by company policy and/or state law for the safety of all passengers.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Address Concerns</h4>
                      <p className="text-white/80 text-sm">Listen to the passenger's concerns. Sometimes a simple adjustment can resolve comfort issues.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Contact Dispatch</h4>
                      <p className="text-white/80 text-sm">If the passenger still refuses, contact your dispatcher or supervisor for guidance before proceeding.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Document Everything</h4>
                      <p className="text-white/80 text-sm">Record the refusal, your attempts to resolve it, and any instructions from dispatch. Documentation protects you and your company.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                  <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Important Considerations
                  </h4>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li>• Medical exemptions may apply in some cases</li>
                    <li>• Some states have specific exemption procedures</li>
                    <li>• Always follow your company's specific policies</li>
                    <li>• Never argue or become confrontational</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                  <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Communication Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-blue-700">
                    <li>• Stay calm and professional at all times</li>
                    <li>• Use empathetic language</li>
                    <li>• Focus on passenger safety, not rules</li>
                    <li>• Offer alternatives when possible</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Documentation Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Documentation Requirements</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-muted-foreground mb-4">Proper documentation protects both the operator and the company. For each trip, document:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Passenger name and pickup/dropoff times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Type of mobility device if applicable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Securement method used</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Any issues or refusals encountered</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Actions taken to resolve issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">Any equipment problems noted</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Need Help Developing Safety Policies?</h3>
              <p className="text-muted-foreground mb-6">Our risk management team can help you create comprehensive securement policies and training programs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white">
                    Contact Our Team
                  </Button>
                </Link>
                <Link href="/services/risk-management">
                  <Button variant="outline">
                    View Risk Management Services
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
