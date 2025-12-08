import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Seo } from "@/components/seo/Seo";
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
import { 
  Shield, 
  CheckCircle, 
  Phone, 
  Clock, 
  Award, 
  Users,
  Star,
  ArrowRight,
  BadgeCheck
} from "lucide-react";
import { motion } from "framer-motion";

import limoImage from "@assets/generated_images/modern_luxury_suv_limo.png";
import taxiImage from "@assets/generated_images/modern_yellow_taxi_cab.png";
import rideshareImage from "@assets/generated_images/uber_lyft_rideshare_car.png";
import nemtImage from "@assets/generated_images/medical_transport_van.png";
import busImage from "@assets/generated_images/modern_charter_bus.png";
import sprinterImage from "@assets/generated_images/black_luxury_sprinter_van.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Your name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  state: z.string().min(2, "State is required"),
  vehicleCount: z.string().min(1, "Please select vehicle count"),
  insuranceType: z.string().min(1, "Please select insurance type"),
});

const INSURANCE_TYPES = [
  { value: "limousine", label: "Limousine / Black Car" },
  { value: "rideshare", label: "Rideshare (Uber/Lyft)" },
  { value: "tnc", label: "TNC / App-Based" },
  { value: "nemt", label: "NEMT / Medical Transport" },
  { value: "taxi", label: "Taxi / For-Hire" },
  { value: "bus", label: "Bus / Motorcoach" },
  { value: "delivery", label: "Delivery Service" },
  { value: "other", label: "Other Transportation" },
];

const VEHICLE_COUNTS = [
  { value: "1", label: "1 Vehicle" },
  { value: "2-5", label: "2-5 Vehicles" },
  { value: "6-10", label: "6-10 Vehicles" },
  { value: "11-25", label: "11-25 Vehicles" },
  { value: "26-50", label: "26-50 Vehicles" },
  { value: "50+", label: "50+ Vehicles" },
];

const STATES = [
  "AL", "AZ", "CA", "CO", "CT", "FL", "GA", "IL", "IN", "LA", 
  "MD", "MA", "MI", "NV", "NJ", "NY", "NC", "OH", "OR", "PA", 
  "SC", "TN", "TX", "VA", "WA"
];

const INSURANCE_INFO: Record<string, { title: string; description: string; features: string[] }> = {
  limousine: {
    title: "Limousine / Black Car Insurance",
    description: "Premium coverage designed for luxury ground transportation services.",
    features: ["Hired & Non-Owned Auto", "General Liability", "Excess Liability Options", "Garage Keepers Coverage"],
  },
  rideshare: {
    title: "Rideshare Insurance",
    description: "Specialized coverage for Uber, Lyft, and other rideshare drivers.",
    features: ["Gap Coverage (Periods 1, 2, 3)", "Personal Injury Protection", "Uninsured Motorist", "Medical Payments"],
  },
  tnc: {
    title: "TNC / App-Based Insurance",
    description: "Fleet coverage for Transportation Network Companies and app-based services.",
    features: ["Commercial Auto Liability", "Fleet Discounts", "Driver Coverage", "Platform Compliance"],
  },
  nemt: {
    title: "NEMT / Medical Transport Insurance",
    description: "Comprehensive coverage for Non-Emergency Medical Transportation providers.",
    features: ["Professional Liability", "Patient Transport Coverage", "Wheelchair Lift Coverage", "Medicaid Compliance"],
  },
  taxi: {
    title: "Taxi / For-Hire Insurance",
    description: "Traditional taxi and for-hire vehicle coverage solutions.",
    features: ["Commercial Liability", "Physical Damage", "Uninsured Motorist", "Medical Payments"],
  },
  bus: {
    title: "Bus / Motorcoach Insurance",
    description: "Large vehicle coverage for buses, shuttles, and motorcoach operations.",
    features: ["High-Limit Liability", "Passenger Coverage", "Charter Operations", "DOT Compliance"],
  },
  delivery: {
    title: "Delivery Service Insurance",
    description: "Coverage for food delivery, package delivery, and courier services.",
    features: ["Hired Auto Coverage", "Cargo Coverage", "General Liability", "Workers Comp Options"],
  },
  other: {
    title: "Transportation Insurance",
    description: "Custom coverage solutions for your unique transportation needs.",
    features: ["Tailored Coverage", "Competitive Rates", "Multiple Carrier Options", "Expert Guidance"],
  },
};

export default function LandingPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState<{
    referenceNumber: string;
    insuranceType: string;
    businessName: string;
    email: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
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
          mailingAddress: "From Landing Page",
          city: "TBD",
          zipCode: "00000",
          additionalInfo: `Vehicle Count: ${data.vehicleCount} - Lead from advertising landing page`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionData({
          referenceNumber: result.quote?.referenceNumber || "Pending",
          insuranceType: data.insuranceType,
          businessName: data.businessName,
          email: data.email,
        });
        setSubmitted(true);
        toast({
          title: "Quote Request Received!",
          description: "Check your email for confirmation.",
        });
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

  if (submitted && submissionData) {
    const insuranceInfo = INSURANCE_INFO[submissionData.insuranceType] || INSURANCE_INFO.other;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628] py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-2">Quote Request Submitted!</h2>
              <p className="text-green-100">A confirmation email has been sent to {submissionData.email}</p>
            </div>

            <div className="p-8">
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Reference Number</p>
                    <p className="text-2xl font-bold text-[#0a2351] font-mono">{submissionData.referenceNumber}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Business Name</p>
                    <p className="text-lg font-semibold text-gray-800">{submissionData.businessName}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0a2351]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#0a2351]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{insuranceInfo.title}</h3>
                    <p className="text-gray-600 mb-4">{insuranceInfo.description}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {insuranceInfo.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-blue-900 mb-2">What Happens Next?</h4>
                <ol className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">1</span>
                    <span>Our underwriting team will review your request within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">2</span>
                    <span>A licensed specialist will contact you to discuss your specific needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">3</span>
                    <span>Receive competitive quotes from multiple A-rated carriers</span>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-yellow-600" />
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
                  onClick={() => window.location.href = "/"}
                  className="flex-1 bg-[#0a2351] hover:bg-[#0a2351]/90"
                >
                  Return to Homepage
                </Button>
                <Button 
                  onClick={() => {
                    const coverageRoutes: Record<string, string> = {
                      limousine: "limo",
                      rideshare: "tnc",
                      tnc: "tnc",
                      nemt: "nemt",
                      taxi: "taxi",
                      bus: "paratransit",
                      delivery: "tnc",
                      other: "limo",
                    };
                    window.location.href = `/coverage/${coverageRoutes[submissionData.insuranceType] || "limo"}`;
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Learn More About {insuranceInfo.title.split(" ")[0]} Coverage
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1a2744] to-[#0a1628]">
      <Seo 
        title="Get Your Free Quote - Save 20% on Transportation Insurance"
        description="Get a free, no-obligation commercial transportation insurance quote in under 2 minutes. Limousines, rideshare, NEMT, taxis, and more. Licensed in 18 states."
      />
      <a href="#quote-form" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-primary focus:rounded-md">
        Skip to quote form
      </a>
      <main id="main-content" role="main" className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white"
          >
            <a href="/" className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity cursor-pointer">
              <Shield className="w-10 h-10 text-red-500" />
              <span className="text-2xl font-bold">InsureLimos</span>
            </a>
            
            <div className="mb-4">
              <a 
                href="/" 
                className="text-sm text-gray-400 hover:text-white transition-colors underline"
              >
                ← Back to InsureLimos.net
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Save Up To <span className="text-red-500">20%</span> On Commercial Transportation Insurance
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Get a free, no-obligation quote in under 2 minutes. We specialize in hard-to-place transportation risks that other insurers won't touch.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Clock, text: "Same-Day Quotes" },
                { icon: Award, text: "A-Rated Carriers" },
                { icon: Users, text: "25+ Years Experience" },
                { icon: BadgeCheck, text: "Licensed in 18 States" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                  <item.icon className="w-6 h-6 text-red-400" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">We Insure:</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { image: limoImage, label: "Limousines" },
                  { image: rideshareImage, label: "Uber / Lyft" },
                  { image: nemtImage, label: "NEMT / Paratransit" },
                  { image: sprinterImage, label: "Sprinter Vans" },
                  { image: busImage, label: "Buses / Motorcoaches" },
                  { image: taxiImage, label: "Taxis" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 rounded-xl overflow-hidden hover:bg-white/20 transition-colors">
                    <div className="text-center py-2 px-2 bg-white/5">
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="h-20 bg-gradient-to-b from-slate-700/50 to-slate-800/50">
                      <img 
                        src={item.image} 
                        alt={item.label}
                        className="w-full h-full object-contain object-center p-1"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#0a2351] text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">Get Your Free Quote Now</h2>
              <p className="text-blue-200">No commitment required • Takes 2 minutes</p>
            </div>

            <Form {...form}>
              <form id="quote-form" onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-4" aria-label="Request a free quote">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Company Name" 
                          data-testid="landing-business-name"
                          className="h-12"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Smith" 
                            data-testid="landing-contact-name"
                            className="h-12"
                            {...field} 
                          />
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
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(555) 123-4567" 
                            data-testid="landing-phone"
                            className="h-12"
                            {...field} 
                          />
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
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="you@company.com" 
                          data-testid="landing-email"
                          className="h-12"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12" data-testid="landing-state">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {STATES.map(state => (
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
                        <FormLabel>Vehicles *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12" data-testid="landing-vehicles">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {VEHICLE_COUNTS.map(vc => (
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
                      <FormLabel>Type of Insurance Needed *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12" data-testid="landing-type">
                            <SelectValue placeholder="Select Insurance Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INSURANCE_TYPES.map(type => (
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
                  className="w-full h-14 text-lg font-bold bg-red-600 hover:bg-red-700 mt-4"
                  data-testid="landing-submit"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Get My Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-center gap-4 pt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>24hr Response</span>
                  </div>
                </div>
              </form>
            </Form>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white text-center mb-6">Trusted By Transportation Companies Nationwide</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: "5,000+", label: "Policies Written" },
                { number: "98%", label: "Client Retention" },
                { number: "24hrs", label: "Avg Quote Time" },
                { number: "$2.5M", label: "Saved for Clients" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl md:text-4xl font-bold text-red-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Questions? Call us directly: <a href="tel:+18882540089" className="text-white font-semibold hover:text-red-400" aria-label="Call us at 1-888-254-0089">1-888-254-0089</a>
          </p>
        </div>
      </main>
    </div>
  );
}
