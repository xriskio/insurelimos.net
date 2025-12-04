import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LimoQuoteForm } from "@/components/forms/LimoForm";
import { TNCForm } from "@/components/forms/TNCForm";
import { NEMTForm } from "@/components/forms/NEMTForm";
import { PublicAutoForm } from "@/components/forms/PublicAutoForm";
import { WorkersCompForm } from "@/components/forms/WorkersCompForm";
import { ExcessLiabilityForm } from "@/components/forms/ExcessLiabilityForm";
import { CyberLiabilityForm } from "@/components/forms/CyberLiabilityForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo/Seo";

export default function QuotePage() {
  const [match, params] = useRoute("/quote/:type?");
  const type = params?.type || "limousine";

  // Helper to determine active tab based on route or default
  const activeTab = ["limousine", "tnc", "nemt", "public-auto", "workers-comp", "excess-liability", "cyber-liability", "transportation"].includes(type) 
    ? type 
    : "limousine";

  const handleTabChange = (value: string) => {
    window.location.href = `/quote/${value}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Get a Transportation Insurance Quote - Limo, Taxi, NEMT"
        description="Request a free, no-obligation quote for your transportation business. Specialized forms for Limousines, Rideshare, and Medical Transport."
        canonical="https://insurelimos.net/quote"
      />
      <Header />
      
      <main className="flex-1 py-12 bg-secondary/20" id="main-content">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Get Your Free Quote</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and one of our California transportation insurance specialists will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
              {/* Main Form Area */}
              <Card className="border-border/60 shadow-lg">
                <CardHeader className="bg-primary/5 border-b border-border/50">
                  <CardTitle className="text-xl font-bold text-primary">Request a Quote</CardTitle>
                  <CardDescription>Select your business type to get started</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto mb-8 bg-muted p-1 gap-1">
                      <TabsTrigger value="limousine" className="py-2 text-xs sm:text-sm">Limousine</TabsTrigger>
                      <TabsTrigger value="tnc" className="py-2 text-xs sm:text-sm">TNC</TabsTrigger>
                      <TabsTrigger value="nemt" className="py-2 text-xs sm:text-sm">NEMT</TabsTrigger>
                      <TabsTrigger value="public-auto" className="py-2 text-xs sm:text-sm">Public Auto</TabsTrigger>
                      <TabsTrigger value="workers-comp" className="py-2 text-xs sm:text-sm">Workers Comp</TabsTrigger>
                      <TabsTrigger value="excess-liability" className="py-2 text-xs sm:text-sm">Excess</TabsTrigger>
                      <TabsTrigger value="cyber-liability" className="py-2 text-xs sm:text-sm">Cyber</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="limousine" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Limousine Insurance Quote</h2>
                        <p className="text-muted-foreground">For sedans, stretch limos, party buses, and luxury fleets.</p>
                      </div>
                      <LimoQuoteForm />
                    </TabsContent>
                    
                    <TabsContent value="tnc" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">TNC & Rideshare Quote</h2>
                        <p className="text-muted-foreground">For Uber, Lyft, and other app-based transportation drivers.</p>
                      </div>
                      <TNCForm />
                    </TabsContent>
                    
                    <TabsContent value="nemt" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">NEMT Insurance Quote</h2>
                        <p className="text-muted-foreground">For Non-Emergency Medical Transportation providers.</p>
                      </div>
                      <NEMTForm />
                    </TabsContent>
                    
                    <TabsContent value="public-auto" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Public Auto & Transportation</h2>
                        <p className="text-muted-foreground">For buses, shuttles, taxis, and general public transportation.</p>
                      </div>
                      <PublicAutoForm />
                    </TabsContent>

                    <TabsContent value="workers-comp" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Workers Compensation Insurance</h2>
                        <p className="text-muted-foreground">Protect your employees with comprehensive workers comp coverage.</p>
                      </div>
                      <WorkersCompForm />
                    </TabsContent>

                    <TabsContent value="excess-liability" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Excess & Umbrella Liability</h2>
                        <p className="text-muted-foreground">Additional protection above your primary liability limits.</p>
                      </div>
                      <ExcessLiabilityForm />
                    </TabsContent>

                    <TabsContent value="cyber-liability" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Cyber Liability Insurance</h2>
                        <p className="text-muted-foreground">Protect your business from data breaches and cyber threats.</p>
                      </div>
                      <CyberLiabilityForm />
                    </TabsContent>

                    <TabsContent value="transportation" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Public Transportation Quote</h2>
                        <p className="text-muted-foreground">For municipal and private mass transit solutions.</p>
                      </div>
                      <PublicAutoForm />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Sidebar Info */}
              <div className="space-y-6 hidden lg:block">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <p className="text-sm text-muted-foreground">Specialized in transportation markets since 1998</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <p className="text-sm text-muted-foreground">Access to exclusive programs and rates</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <p className="text-sm text-muted-foreground">Same-day certificates of insurance</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <p className="text-sm text-muted-foreground">Dedicated claims advocacy team</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                  <p className="text-sm opacity-90 mb-4">Prefer to speak with an agent directly?</p>
                  <a href="tel:888-254-0089" className="block w-full text-center bg-white text-primary font-bold py-3 rounded-md hover:bg-gray-100 transition-colors">
                    Call 888-254-0089
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
