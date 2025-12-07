import { useState } from "react";
import { useRoute, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Shield, Clock, Phone, Lock, ArrowRight } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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

const quickQuoteSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Your name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  state: z.string().min(2, "State is required"),
  vehicleCount: z.string().min(1, "Please select vehicle count"),
  insuranceType: z.string().min(1, "Please select insurance type"),
});

const STATES = [
  "CA", "AZ", "CO", "ID", "IL", "KS", "KY", "MN", "MO", "NV", 
  "OH", "OK", "PA", "TN", "TX", "UT", "VA", "WI"
];

const VEHICLE_COUNTS = [
  { value: "1", label: "1 Vehicle" },
  { value: "2-5", label: "2-5 Vehicles" },
  { value: "6-10", label: "6-10 Vehicles" },
  { value: "11-25", label: "11-25 Vehicles" },
  { value: "26-50", label: "26-50 Vehicles" },
  { value: "50+", label: "50+ Vehicles" },
];

export default function QuotePage() {
  const [, params] = useRoute("/quote/:type?");
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [selectedType, setSelectedType] = useState(params?.type || "limousine");
  const [quickQuoteSubmitting, setQuickQuoteSubmitting] = useState(false);
  const [quickQuoteSubmitted, setQuickQuoteSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<{
    referenceNumber: string;
    businessName: string;
    email: string;
    insuranceType: string;
  } | null>(null);

  const quickQuoteForm = useForm<z.infer<typeof quickQuoteSchema>>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      state: "",
      vehicleCount: "",
      insuranceType: "",
    },
  });

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    setLocation(`/quote/${value}`, { replace: true });
  };

  const onQuickQuoteSubmit = async (data: z.infer<typeof quickQuoteSchema>) => {
    setQuickQuoteSubmitting(true);
    try {
      const response = await fetch("/api/quotes/transport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quoteType: data.insuranceType,
          insuredName: data.businessName,
          contactName: data.contactName,
          contactEmail: data.email,
          contactPhone: data.phone,
          state: data.state,
          mailingAddress: "Quick Quote Request",
          city: "TBD",
          zipCode: "00000",
          additionalInfo: `Vehicle Count: ${data.vehicleCount} - Quick Quote Request`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionData({
          referenceNumber: result.quote?.referenceNumber || "Pending",
          businessName: data.businessName,
          email: data.email,
          insuranceType: data.insuranceType,
        });
        setQuickQuoteSubmitted(true);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setQuickQuoteSubmitting(false);
    }
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

  if (quickQuoteSubmitted && submissionData) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Seo title="Quote Submitted - InsureLimos" description="Your quote request has been submitted successfully." />
        <Header />
        <main className="flex-1 py-12 bg-secondary/20" id="main-content" role="main">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-12 h-12" aria-hidden="true" />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Quote Request Submitted!</h1>
                  <p className="text-green-100">A confirmation email has been sent to {submissionData.email}</p>
                </div>

                <CardContent className="p-8">
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Reference Number</p>
                        <p className="text-2xl font-bold text-primary font-mono">{submissionData.referenceNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Business Name</p>
                        <p className="text-lg font-semibold text-gray-800">{submissionData.businessName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <h3 className="font-semibold text-lg">What happens next?</h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">1</span>
                        <span>Our team will review your information within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">2</span>
                        <span>We'll contact you to gather any additional details needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-primary">3</span>
                        <span>Receive competitive quotes from multiple A-rated carriers</span>
                      </li>
                    </ol>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-yellow-600" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-yellow-800">Need Immediate Assistance?</p>
                        <p className="text-sm text-yellow-700">
                          Call us now: <a href="tel:+18882540089" className="font-bold hover:underline">1-888-254-0089</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setLocation("/")}
                      className="flex-1 bg-primary hover:bg-primary/90"
                    >
                      Return to Homepage
                    </Button>
                    <Button
                      onClick={() => {
                        setQuickQuoteSubmitted(false);
                        setSubmissionData(null);
                        quickQuoteForm.reset();
                      }}
                      variant="outline"
                      className="flex-1"
                    >
                      Submit Another Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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

            {/* Quick Quote Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Need a Quick Quote?</h2>
                <p className="text-muted-foreground">Get a fast response with our simplified quote form</p>
              </div>

              <Card className="max-w-2xl mx-auto border-0 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#0a2351] to-[#1a3a6e] text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">Get Your Free Quote Now</h3>
                  <p className="text-blue-200 text-sm">No commitment required • Takes 2 minutes</p>
                </div>

                <Form {...quickQuoteForm}>
                  <form onSubmit={quickQuoteForm.handleSubmit(onQuickQuoteSubmit)} className="p-6 space-y-4">
                    <FormField
                      control={quickQuoteForm.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} data-testid="quick-input-business" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={quickQuoteForm.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} data-testid="quick-input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={quickQuoteForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} data-testid="quick-input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={quickQuoteForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} data-testid="quick-input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={quickQuoteForm.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="quick-select-state">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {STATES.map((state) => (
                                  <SelectItem key={state} value={state}>{state}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={quickQuoteForm.control}
                        name="vehicleCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Vehicles *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="quick-select-vehicles">
                                  <SelectValue placeholder="Select" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {VEHICLE_COUNTS.map((vc) => (
                                  <SelectItem key={vc.value} value={vc.value}>{vc.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={quickQuoteForm.control}
                      name="insuranceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type of Insurance Needed *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="quick-select-type">
                                <SelectValue placeholder="Select Insurance Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {COVERAGE_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={quickQuoteSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg"
                      data-testid="quick-submit"
                    >
                      {quickQuoteSubmitting ? "Submitting..." : "Get My Free Quote"}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>

                    <div className="flex items-center justify-center gap-6 pt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Lock className="w-4 h-4" aria-hidden="true" />
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4" aria-hidden="true" />
                        <span>No Spam</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span>24hr Response</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
