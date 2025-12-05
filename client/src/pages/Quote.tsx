import { useRoute } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TransportQuoteForm } from "@/components/forms/TransportQuoteForm";
import { WorkersCompForm } from "@/components/forms/WorkersCompForm";
import { ExcessLiabilityForm } from "@/components/forms/ExcessLiabilityForm";
import { CyberLiabilityForm } from "@/components/forms/CyberLiabilityForm";
import { AmbulanceForm } from "@/components/forms/AmbulanceForm";
import { CaptiveForm } from "@/components/forms/CaptiveForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Seo } from "@/components/seo/Seo";

export default function QuotePage() {
  const [match, params] = useRoute("/quote/:type?");
  const type = params?.type || "limousine";

  const activeTab = ["limousine", "rideshare", "tnc", "nemt", "public-auto", "workers-comp", "excess-liability", "cyber-liability", "ambulance", "captive", "transportation"].includes(type) 
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Get Your Free Quote</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and one of our transportation insurance specialists will get back to you within 24 hours.
              </p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_300px]">
              <Card className="border-border/60 shadow-lg w-full">
                <CardHeader className="bg-primary/5 border-b border-border/50">
                  <CardTitle className="text-xl font-bold text-primary">Request a Quote</CardTitle>
                  <CardDescription>Select your business type to get started</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                    <TabsList className="flex flex-wrap justify-start gap-2 h-auto mb-8 bg-muted p-2 rounded-lg">
                      <TabsTrigger value="limousine" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-limo">Limousine</TabsTrigger>
                      <TabsTrigger value="rideshare" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-rideshare">Rideshare</TabsTrigger>
                      <TabsTrigger value="tnc" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-tnc">TNC</TabsTrigger>
                      <TabsTrigger value="nemt" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-nemt">NEMT</TabsTrigger>
                      <TabsTrigger value="public-auto" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-public-auto">Public Auto</TabsTrigger>
                      <TabsTrigger value="workers-comp" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-workers-comp">Workers Comp</TabsTrigger>
                      <TabsTrigger value="excess-liability" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-excess">Excess Liability</TabsTrigger>
                      <TabsTrigger value="cyber-liability" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-cyber">Cyber Liability</TabsTrigger>
                      <TabsTrigger value="ambulance" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-ambulance">Ambulance</TabsTrigger>
                      <TabsTrigger value="captive" className="py-2 px-4 text-sm whitespace-nowrap" data-testid="tab-captive">Captive Programs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="limousine" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="limousine"
                        title="Limousine Insurance Quote"
                        description="For sedans, stretch limos, party buses, and luxury fleets."
                      />
                    </TabsContent>
                    
                    <TabsContent value="rideshare" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="rideshare"
                        title="Rideshare Insurance Quote"
                        description="For Uber, Lyft, and other app-based rideshare drivers."
                      />
                    </TabsContent>
                    
                    <TabsContent value="tnc" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="tnc"
                        title="TNC Insurance Quote"
                        description="For Transportation Network Companies, platforms, and fleet operators."
                      />
                    </TabsContent>
                    
                    <TabsContent value="nemt" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="nemt"
                        title="NEMT Insurance Quote"
                        description="For Non-Emergency Medical Transportation providers."
                      />
                    </TabsContent>
                    
                    <TabsContent value="public-auto" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="public-auto"
                        title="Public Auto & Transportation"
                        description="For buses, shuttles, taxis, and general public transportation."
                      />
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

                    <TabsContent value="ambulance" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Ambulance & EMS Insurance</h2>
                        <p className="text-muted-foreground">Comprehensive coverage for ambulance services and emergency medical transportation.</p>
                      </div>
                      <AmbulanceForm />
                    </TabsContent>

                    <TabsContent value="captive" className="mt-0">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">Captive Insurance Programs</h2>
                        <p className="text-muted-foreground">Alternative risk solutions for larger fleets seeking greater control and cost savings.</p>
                      </div>
                      <CaptiveForm />
                    </TabsContent>

                    <TabsContent value="transportation" className="mt-0">
                      <TransportQuoteForm 
                        quoteType="public-auto"
                        title="Public Transportation Quote"
                        description="For municipal and private mass transit solutions."
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

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
                  <a href="tel:888-254-0089" className="block w-full text-center bg-white text-primary font-bold py-3 rounded-md hover:bg-gray-100 transition-colors" data-testid="link-call">
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
