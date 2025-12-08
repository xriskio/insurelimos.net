import { useState } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TransportQuoteForm } from "@/components/forms/TransportQuoteForm";
import { WorkersCompForm } from "@/components/forms/WorkersCompForm";
import { ExcessLiabilityForm } from "@/components/forms/ExcessLiabilityForm";
import { CyberLiabilityForm } from "@/components/forms/CyberLiabilityForm";
import { AmbulanceForm } from "@/components/forms/AmbulanceForm";
import { CaptiveForm } from "@/components/forms/CaptiveForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";

const COVERAGE_TYPES = [
  { value: "limousine", label: "Limousine" },
  { value: "rideshare", label: "Rideshare" },
  { value: "tnc", label: "TNC" },
  { value: "nemt", label: "NEMT" },
  { value: "public-auto", label: "Public Auto" },
  { value: "workers-comp", label: "Workers Comp" },
  { value: "excess-liability", label: "Excess Liability" },
  { value: "cyber-liability", label: "Cyber Liability" },
  { value: "ambulance", label: "Ambulance" },
  { value: "captive", label: "Captive Programs" },
];

export default function QuotePage() {
  const [, params] = useRoute("/quote/:type?");
  const [, setLocation] = useLocation();
  const [selectedType, setSelectedType] = useState(params?.type || "limousine");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setLocation(`/quote/${value}`, { replace: true });
  };

  const renderForm = () => {
    switch (selectedType) {
      case "limousine":
        return <TransportQuoteForm quoteType="limousine" title="Limousine Insurance Quote" description="For sedans, stretch limos, party buses, and luxury fleets." />;
      case "rideshare":
        return <TransportQuoteForm quoteType="rideshare" title="Rideshare Insurance Quote" description="For Uber, Lyft, and other app-based rideshare drivers." />;
      case "tnc":
        return <TransportQuoteForm quoteType="tnc" title="TNC Insurance Quote" description="For Transportation Network Companies, platforms, and fleet operators." />;
      case "nemt":
        return <TransportQuoteForm quoteType="nemt" title="NEMT Insurance Quote" description="For Non-Emergency Medical Transportation providers." />;
      case "public-auto":
        return <TransportQuoteForm quoteType="public-auto" title="Public Auto & Transportation" description="For buses, shuttles, taxis, and general public transportation." />;
      case "workers-comp":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Workers Compensation Insurance</h2>
              <p className="text-muted-foreground">Protect your employees with comprehensive workers comp coverage.</p>
            </div>
            <WorkersCompForm />
          </div>
        );
      case "excess-liability":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Excess & Umbrella Liability</h2>
              <p className="text-muted-foreground">Additional protection above your primary liability limits.</p>
            </div>
            <ExcessLiabilityForm />
          </div>
        );
      case "cyber-liability":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Cyber Liability Insurance</h2>
              <p className="text-muted-foreground">Protect your business from data breaches and cyber threats.</p>
            </div>
            <CyberLiabilityForm />
          </div>
        );
      case "ambulance":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Ambulance & EMS Insurance</h2>
              <p className="text-muted-foreground">Comprehensive coverage for ambulance services and emergency medical transportation.</p>
            </div>
            <AmbulanceForm />
          </div>
        );
      case "captive":
        return (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Captive Insurance Programs</h2>
              <p className="text-muted-foreground">Alternative risk solutions for larger fleets seeking greater control and cost savings.</p>
            </div>
            <CaptiveForm />
          </div>
        );
      default:
        return <TransportQuoteForm quoteType="limousine" title="Limousine Insurance Quote" description="For sedans, stretch limos, party buses, and luxury fleets." />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Get a Transportation Insurance Quote - Limo, Taxi, NEMT"
        description="Request a free, no-obligation quote for your transportation business. Specialized forms for Limousines, Rideshare, and Medical Transport."
        canonical="https://insurelimos.net/quote"
      />
      <Header />
      
      <main className="flex-1 py-12 bg-secondary/20" id="main-content" role="main" aria-label="Quote request form">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Get Your Free Quote</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and one of our transportation insurance specialists will get back to you within 24 hours.
              </p>
            </div>

            {/* Quick Quote Option for users in a hurry */}
            <div className="mb-8 bg-gradient-to-r from-accent to-accent/80 rounded-lg p-4 md:p-6 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-8 w-8 shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="text-lg md:text-xl font-bold">In a Hurry?</h2>
                    <p className="text-white/90 text-sm md:text-base">Get a quick quote in just 2 minutes with our simplified form</p>
                  </div>
                </div>
                <Link href="/get-quote">
                  <Button 
                    className="bg-white text-accent hover:bg-gray-100 font-bold px-6 py-3 shadow-md whitespace-nowrap"
                    data-testid="button-quick-quote"
                  >
                    Quick Quote Form <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_300px]">
              <Card className="border-border/60 shadow-lg w-full">
                <CardHeader className="bg-primary/5 border-b border-border/50">
                  <CardTitle className="text-xl font-bold text-primary">Request a Quote</CardTitle>
                  <CardDescription>Select your business type to get started</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-8">
                    <label htmlFor="coverage-type" className="block text-sm font-medium text-foreground mb-2">
                      Type of Coverage *
                    </label>
                    <Select value={selectedType} onValueChange={handleTypeChange}>
                      <SelectTrigger id="coverage-type" className="w-full md:w-80" data-testid="select-coverage-type">
                        <SelectValue placeholder="Select coverage type" />
                      </SelectTrigger>
                      <SelectContent>
                        {COVERAGE_TYPES.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {renderForm()}
                </CardContent>
              </Card>

              <div className="space-y-6 hidden lg:block">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">Specialized in transportation markets since 1998</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">Access to exclusive programs and rates</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">Same-day certificates of insurance</p>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">Dedicated claims advocacy team</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                  <p className="text-sm opacity-90 mb-4">Prefer to speak with an agent directly?</p>
                  <a href="tel:888-254-0089" className="block w-full text-center bg-white text-primary font-bold py-3 rounded-md hover:bg-gray-100 transition-colors" data-testid="link-call" aria-label="Call 888-254-0089">
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
