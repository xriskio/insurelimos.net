import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation } from "wouter";

import limoImage from "@assets/stock_images/modern_luxury_black__553acbba.jpg";
import taxiImage from "@assets/stock_images/modern_yellow_taxi_c_0c05de67.jpg";
import tncImage from "@assets/stock_images/modern_tesla_model_3_1d1d34d1.jpg";
import nemtImage from "@assets/stock_images/modern_white_wheelch_7343ef67.jpg";
import busImage from "@assets/stock_images/modern_luxury_coach__11fb30ab.jpg";
import sprinterImage from "@assets/stock_images/modern_mercedes_spri_94f57e53.jpg";
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
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    title: "Limousine Insurance",
    description: "Comprehensive coverage for luxury transportation services including sedans, stretch limos, and SUVs.",
    image: limoImage,
    href: "/quote/limousine",
  },
  {
    title: "Taxi & Cab Insurance",
    description: "Specialized protection for taxi fleets and individual owner-operators with competitive rates.",
    image: taxiImage,
    href: "/quote/public-auto",
  },
  {
    title: "TNC & Mobility",
    description: "Tailored solutions for Transportation Network Companies like Uber/Lyft fleets and mobility services.",
    image: tncImage,
    href: "/quote/tnc",
  },
  {
    title: "NEMT Insurance",
    description: "Specialized coverage for Non-Emergency Medical Transportation vehicles and liability needs.",
    image: nemtImage,
    href: "/quote/nemt",
  },
  {
    title: "Bus & Motorcoach",
    description: "Protection for charter buses, tour buses, and motorcoach operators of all fleet sizes.",
    image: busImage,
    href: "/quote/public-auto",
  },
  {
    title: "Sprinter & Van",
    description: "Commercial auto insurance for Sprinter vans, cargo vans, and passenger shuttle services.",
    image: sprinterImage,
    href: "/quote/public-auto",
  },
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

const COVERAGE_TYPES = [
  { value: "limousine", label: "Limousine" },
  { value: "rideshare", label: "Rideshare" },
  { value: "tnc", label: "TNC" },
  { value: "nemt", label: "NEMT" },
  { value: "public-auto", label: "Public Auto" },
  { value: "workers-comp", label: "Workers Comp" },
  { value: "ambulance", label: "Ambulance" },
];

export function ServicesGrid() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof quickQuoteSchema>>({
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

  const onSubmit = async (data: z.infer<typeof quickQuoteSchema>) => {
    setIsSubmitting(true);
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
        setLocation(`/quote-confirmation?ref=${result.quote?.referenceNumber || ''}&type=${data.insuranceType}&business=${encodeURIComponent(data.businessName)}&email=${encodeURIComponent(data.email)}`);
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
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4 sm:text-4xl">Transportation Insurance Solutions</h2>
          <p className="text-lg text-muted-foreground">
            We specialize in public auto insurance. Whether you operate a single vehicle or a large fleet, we have the right program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden border-border/60 bg-white transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="absolute top-0 left-0 h-1 w-full bg-transparent group-hover:bg-accent transition-colors duration-300" />
                <CardHeader className="pb-4">
                  <div className="mb-4 h-24 w-full rounded-lg overflow-hidden bg-primary/5">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link href={service.href}>
                    <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:text-accent transition-colors">
                      Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="sticky top-24">
              <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-[#0a2351] via-[#0d2d5f] to-[#1a3a6e]">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                <div className="relative text-white p-6 text-center border-b border-white/10">
                  <h3 className="text-xl font-bold mb-1">Get Your Free Quote Now</h3>
                  <p className="text-blue-200 text-sm">No commitment required • Takes 2 minutes</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="relative p-6 space-y-4 bg-white">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Business Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company Name" {...field} data-testid="quick-input-business" className="bg-gray-50 border-gray-200" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="contactName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Your Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} data-testid="quick-input-name" className="bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} data-testid="quick-input-phone" className="bg-gray-50 border-gray-200" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} data-testid="quick-input-email" className="bg-gray-50 border-gray-200" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">State *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="quick-select-state" className="bg-gray-50 border-gray-200">
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
                        control={form.control}
                        name="vehicleCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Vehicles *</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="quick-select-vehicles" className="bg-gray-50 border-gray-200">
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
                      control={form.control}
                      name="insuranceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Type of Insurance Needed *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="quick-select-type" className="bg-gray-50 border-gray-200">
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
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg mt-2"
                      data-testid="quick-submit"
                    >
                      {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </Button>

                    <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Lock className="w-3 h-3" aria-hidden="true" />
                        <span>Secure</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-3 h-3" aria-hidden="true" />
                        <span>No Spam</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        <span>24hr Response</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
