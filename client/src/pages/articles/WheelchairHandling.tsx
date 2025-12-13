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
  Accessibility
} from "lucide-react";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Risk Management", url: "/services/risk-management" },
  { name: "Wheelchair Handling Best Practices", url: "/articles/wheelchair-handling" },
];

export default function WheelchairHandling() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Wheelchair & Passenger Handling Best Practices for Drivers"
        description="Essential safety guidelines for NEMT & paratransit drivers on wheelchair securement, manual handling, ramp guidance, and communication best practices."
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Wheelchair & Passenger Handling Best Practices for Drivers</h1>
              <p className="text-lg text-white/90">
                Essential information for NEMT & paratransit drivers to ensure passenger safety during transport.
              </p>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Common Incident Types */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-accent" />
                Common Incident Types
              </h2>
              <p className="text-muted-foreground mb-4">
                Understanding the most common types of incidents helps drivers stay alert and prevent accidents:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Wheelchair Tip-Overs</h4>
                    <p className="text-sm text-muted-foreground">Often occur during loading/unloading or when brakes are not properly engaged before passengers transfer.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Falls During Transfer</h4>
                    <p className="text-sm text-muted-foreground">Can happen when passengers attempt to stand or move without proper assistance or handholds.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Securement Failures</h4>
                    <p className="text-sm text-muted-foreground">Improper tie-down of wheelchairs leading to movement during transit or sudden stops.</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-4">
                    <h4 className="font-semibold text-primary mb-2">Ramp-Related Injuries</h4>
                    <p className="text-sm text-muted-foreground">Incidents occurring when ramps are deployed incorrectly or on uneven surfaces.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Securement Policies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Shield className="h-6 w-6 text-accent" />
                Securement Policies
              </h2>
              <div className="bg-slate-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-primary mb-3">Four-Point Tie-Down System</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Secure all four points of the wheelchair frame (two front, two rear)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Ensure straps are tight with no slack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Attach to the wheelchair frame, not armrests or wheels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Position wheelchair facing forward when possible</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3">Occupant Restraint System</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Use lap and shoulder belts separate from wheelchair securement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Lap belt should be positioned low across the hips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Shoulder belt should cross the chest without touching the neck</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Manual Wheelchair Handling */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Accessibility className="h-6 w-6 text-accent" />
                Manual Wheelchair Handling
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Before Pushing</h4>
                  <p className="text-muted-foreground text-sm">Always ask the passenger if they're ready before moving. Communicate every action you're about to take.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Proper Grip</h4>
                  <p className="text-muted-foreground text-sm">Grip the push handles firmly and maintain control at all times. Keep your back straight and use your legs when navigating inclines.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Speed Control</h4>
                  <p className="text-muted-foreground text-sm">Move at a walking pace. Slow down for turns, curbs, and uneven surfaces. Never run or move quickly with a passenger.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-primary mb-2">Obstacles</h4>
                  <p className="text-muted-foreground text-sm">For curbs and small obstacles, tip the wheelchair back slightly and lift the front wheels. Always go backward down slopes.</p>
                </div>
              </div>
            </section>

            {/* Ramp Guidance */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6">Ramp Guidance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                  <h4 className="font-semibold text-green-800 mb-3">Do:</h4>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Inspect ramp condition before each use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Ensure ramp is on flat, stable ground</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Engage wheelchair brakes before boarding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Go slowly and steadily up or down</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                  <h4 className="font-semibold text-red-800 mb-3">Don't:</h4>
                  <ul className="space-y-2 text-sm text-red-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Deploy ramp on wet, icy, or uneven surfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Let go of the wheelchair while on the ramp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Rush the boarding or exiting process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>Exceed the ramp's weight capacity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Communication Best Practices */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-accent" />
                Communication Best Practices
              </h2>
              <div className="bg-slate-900 text-white rounded-lg p-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Introduce Yourself</h4>
                      <p className="text-white/80 text-sm">Greet passengers warmly and identify yourself as their driver.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Ask About Preferences</h4>
                      <p className="text-white/80 text-sm">Every passenger is different. Ask how they prefer to be assisted.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Explain Your Actions</h4>
                      <p className="text-white/80 text-sm">Before moving, securing, or adjusting anything, tell the passenger what you're about to do.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Check In During the Trip</h4>
                      <p className="text-white/80 text-sm">Ask if the passenger is comfortable and if there's anything you can do to help.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-accent text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold mb-1">Be Patient and Respectful</h4>
                      <p className="text-white/80 text-sm">Allow time for passengers to respond and never rush them.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-primary/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-3">Need Help With Driver Training?</h3>
              <p className="text-muted-foreground mb-6">Our risk management team can help you develop comprehensive training programs for your drivers.</p>
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
