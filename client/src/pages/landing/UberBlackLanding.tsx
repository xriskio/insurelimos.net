import { useState } from "react";
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
import { Shield, CheckCircle, Phone, Clock, Award, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/black_cadillac_escalade_luxury_suv.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Your name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  state: z.string().min(2, "State is required"),
  vehicleCount: z.string().min(1, "Please select vehicle count"),
  tcpNumber: z.string().optional(),
  dotNumber: z.string().optional(),
});

const VEHICLE_COUNTS = [
  { value: "1", label: "1 Vehicle" },
  { value: "2-5", label: "2-5 Vehicles" },
  { value: "6-10", label: "6-10 Vehicles" },
  { value: "11-25", label: "11-25 Vehicles" },
  { value: "26+", label: "26+ Vehicles" },
];

const STATES = [
  "CA", "AZ", "CO", "ID", "IL", "KS", "KY", "MN", "MO", "NV", 
  "OH", "OK", "PA", "TN", "TX", "UT", "VA", "WI"
];

export default function UberBlackLanding() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      state: "",
      vehicleCount: "",
      tcpNumber: "",
      dotNumber: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quotes/transport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quoteType: "uber-black",
          insuredName: data.businessName,
          contactName: data.contactName,
          contactEmail: data.email,
          contactPhone: data.phone,
          state: data.state,
          mailingAddress: "From Uber Black Landing Page",
          city: "TBD",
          zipCode: "00000",
          tcpNumber: data.tcpNumber || "",
          additionalInfo: `Vehicle Count: ${data.vehicleCount}${data.tcpNumber ? ` | TCP#: ${data.tcpNumber}` : ""}${data.dotNumber ? ` | DOT#: ${data.dotNumber}` : ""} - Uber Black Insurance Lead`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        toast({
          title: "Quote Request Received!",
          description: "We'll contact you within 24 hours with your quote.",
        });
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us at 888-254-0089.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you! Our Uber Black insurance specialist will contact you within 24 hours with your personalized quote.
          </p>
          <a href="tel:888-254-0089" className="inline-block">
            <Button size="lg" className="bg-primary">
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 888-254-0089
            </Button>
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Seo 
        title="Uber Black Insurance - Get a Free Quote in Minutes"
        description="TCP insurance for Uber Black drivers. Next Day CPUC Filings. Competitive rates for luxury rideshare vehicles. Get your free quote now!"
      />
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Uber Black Specialists
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Uber Black Insurance
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              TCP Insurance for luxury rideshare drivers in 18 states. Get covered fast with Next Day CPUC Filings.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Next Day CPUC Filings",
                "Next Day DOT Filings",
                "Competitive Rates for Black SUVs",
                "Coverage for Cadillac, Lincoln, Mercedes",
                "Licensed in 18 States",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:block">
              <img 
                src={heroImage} 
                alt="Black Cadillac Escalade ESV" 
                className="rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Get Your Free Quote</h2>
              <p className="text-gray-600">Quick response within 24 hours</p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} data-testid="input-business-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full name" {...field} data-testid="input-contact-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@example.com" {...field} data-testid="input-email" />
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
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(555) 555-5555" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-state">
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
                        <FormLabel>Vehicles</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-vehicles">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {VEHICLE_COUNTS.map((count) => (
                              <SelectItem key={count.value} value={count.value}>{count.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="tcpNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TCP Number <span className="text-xs text-gray-400">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input placeholder="TCP-XXXXX" {...field} data-testid="input-tcp-number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="dotNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DOT Number <span className="text-xs text-gray-400">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input placeholder="DOT-XXXXXXX" {...field} data-testid="input-dot-number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold text-lg py-6"
                  disabled={isSubmitting}
                  data-testid="button-submit-quote"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Quote"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  Or call us now: <a href="tel:888-254-0089" className="text-primary font-semibold">888-254-0089</a>
                </p>
              </form>
            </Form>

            <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-4 text-center">
              <div>
                <Clock className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-gray-600">24hr Response</p>
              </div>
              <div>
                <Shield className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-gray-600">A-Rated Carriers</p>
              </div>
              <div>
                <Award className="w-6 h-6 text-primary mx-auto mb-1" />
                <p className="text-xs text-gray-600">18 States</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
