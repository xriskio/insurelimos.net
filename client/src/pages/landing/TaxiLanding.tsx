import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Seo } from "@/components/seo/Seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
import { Shield, CheckCircle, Phone, Clock, Award, Car } from "lucide-react";
import { motion } from "framer-motion";
import taxiImage from "@assets/generated_images/modern_yellow_taxi_cab.png";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Your name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number is required"),
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  vehicleCount: z.string().min(1, "Please select vehicle count"),
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

export default function TaxiLanding() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      vehicleCount: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/quotes/transport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quoteType: "taxi",
          insuredName: data.businessName,
          contactName: data.contactName,
          contactEmail: data.email,
          contactPhone: data.phone,
          mailingAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
          additionalInfo: `Vehicle Count: ${data.vehicleCount} - Taxi Insurance Lead`,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReferenceNumber(result.quote?.referenceNumber || "");
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
        description: "Something went wrong. Please call us at 888-254-0089.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h2>
            {referenceNumber && (
              <div className="bg-primary/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600 mb-1">Your Reference Number</p>
                <p className="text-2xl font-bold text-primary tracking-wide">{referenceNumber}</p>
              </div>
            )}
            <p className="text-gray-600 mb-6">
              A confirmation email has been sent to your inbox. Our taxi insurance specialist will contact you within 24 hours with your personalized quote.
            </p>
            <a href="tel:888-254-0089" className="inline-block">
              <Button size="lg" className="bg-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: 888-254-0089
              </Button>
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="Taxi Insurance - Coverage for Cab Operators & Fleets"
        description="Specialized insurance for taxi cabs, for-hire vehicles, and cab fleets. Competitive rates for new and established operators. Get your free quote today!"
      />
      <Header />
      
      <main className="flex-1 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-gray-900"
            >
              <div className="inline-flex items-center gap-2 bg-gray-900/20 text-gray-900 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Car className="w-4 h-4" />
                Taxi Specialists
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Taxi Insurance
              </h1>
              <p className="text-xl text-gray-800 mb-6">
                Specialized coverage for taxi cabs and for-hire vehicles. New ventures welcome. Competitive rates for fleets.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "New Venture Programs",
                  "Fleet Discounts Available",
                  "Medallion & Non-Medallion",
                  "For-Hire Vehicle Coverage",
                  "Physical Damage Options",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-900 shrink-0" />
                    <span className="text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Coverage Summary */}
              <div className="mt-8 bg-gray-900/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Coverage Available</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Auto Liability (AL)</p>
                    <p className="text-gray-700">$300K - $1M CSL</p>
                  </div>
                  <div>
                    <p className="font-semibold">Physical Damage (APD)</p>
                    <p className="text-gray-700">Comp & Collision</p>
                  </div>
                  <div>
                    <p className="font-semibold">PUC Filings</p>
                    <p className="text-gray-700">Same Day Available</p>
                  </div>
                  <div>
                    <p className="font-semibold">UM/UIM Coverage</p>
                    <p className="text-gray-700">State Minimums+</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <img 
                  src={taxiImage} 
                  alt="Yellow taxi cab" 
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

                  <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="123 Main St" {...field} data-testid="input-street" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Los Angeles" {...field} data-testid="input-city" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="90001" {...field} data-testid="input-zip" />
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

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold text-lg py-6"
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
      </main>
      <Footer />
    </div>
  );
}
