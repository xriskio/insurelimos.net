import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  businessType: z.string().min(1, "Business type is required"),
  fleetSize: z.string().min(1, "Fleet size is required"),
  annualPremium: z.string().min(1, "Annual premium is required"),
  yearsInBusiness: z.string().optional(),
  captiveType: z.string().min(1, "Captive type is required"),
  currentCarrier: z.string().optional(),
  lossRatio: z.string().optional(),
  safetyProgram: z.string().optional(),
  riskManagement: z.string().optional(),
  notes: z.string().optional(),
});

export function CaptiveForm() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
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
      businessType: "",
      fleetSize: "",
      annualPremium: "",
      yearsInBusiness: "",
      captiveType: "",
      currentCarrier: "",
      lossRatio: "",
      safetyProgram: "",
      riskManagement: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { streetAddress, city, state, zipCode, ...rest } = values;
      const submitData = {
        ...rest,
        address: `${streetAddress}, ${city}, ${state} ${zipCode}`,
      };
      const response = await fetch('/api/quotes/captive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote');
      }

      const referenceNumber = data.quote?.referenceNumber || 'Pending';
      form.reset();
      
      setLocation(`/quote-confirmation?ref=${encodeURIComponent(referenceNumber)}&business=${encodeURIComponent(values.businessName)}&email=${encodeURIComponent(values.email)}&type=captive`);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Alert className="border-primary/20 bg-primary/5">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary">Captive Program Eligibility</AlertTitle>
          <AlertDescription className="text-muted-foreground">
            Captive programs are best suited for operations with annual premiums of $250,000+ and strong risk management practices. 
            Our team will evaluate your eligibility based on the information provided.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Name" {...field} data-testid="input-businessName" />
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
                    <FormLabel>Contact Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} data-testid="input-contactName" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} data-testid="input-email" />
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
                      <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Street Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St" {...field} data-testid="input-streetAddress" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="CA" {...field} data-testid="input-state" />
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
                      <Input placeholder="90015" {...field} data-testid="input-zipCode" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Operation Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-businessType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="limousine">Limousine Service</SelectItem>
                        <SelectItem value="taxi">Taxi / For-Hire</SelectItem>
                        <SelectItem value="tnc">TNC / Rideshare Platform</SelectItem>
                        <SelectItem value="nemt">NEMT Provider</SelectItem>
                        <SelectItem value="ambulance">Ambulance / EMS</SelectItem>
                        <SelectItem value="bus">Bus / Motorcoach</SelectItem>
                        <SelectItem value="trucking">Trucking / Delivery</SelectItem>
                        <SelectItem value="mixed">Mixed Fleet Operations</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fleetSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fleet Size</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-fleetSize">
                          <SelectValue placeholder="Select fleet size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="10-25">10-25 Vehicles</SelectItem>
                        <SelectItem value="26-50">26-50 Vehicles</SelectItem>
                        <SelectItem value="51-100">51-100 Vehicles</SelectItem>
                        <SelectItem value="101-250">101-250 Vehicles</SelectItem>
                        <SelectItem value="251-500">251-500 Vehicles</SelectItem>
                        <SelectItem value="500+">500+ Vehicles</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annualPremium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Annual Premium</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-annualPremium">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="1m_2m">$1,000,000 - $2,000,000</SelectItem>
                        <SelectItem value="2m_5m">$2,000,000 - $5,000,000</SelectItem>
                        <SelectItem value="over_5m">Over $5,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Captive programs typically require $250K+ in annual premiums</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yearsInBusiness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Years in Business</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-yearsInBusiness">
                          <SelectValue placeholder="Select years" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="6-10">6-10 Years</SelectItem>
                        <SelectItem value="11-20">11-20 Years</SelectItem>
                        <SelectItem value="20+">20+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Captive Program Interest</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="captiveType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Captive Program Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-captiveType">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="group_captive">Group Captive</SelectItem>
                        <SelectItem value="single_parent">Single-Parent Captive</SelectItem>
                        <SelectItem value="large_deductible">Large Deductible Program</SelectItem>
                        <SelectItem value="self_insured">Self-Insured Retention (SIR)</SelectItem>
                        <SelectItem value="not_sure">Not Sure - Need Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentCarrier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Insurance Carrier</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., PHLY, Hartford, Zurich" {...field} data-testid="input-currentCarrier" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lossRatio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>3-Year Loss Ratio (if known)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-lossRatio">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_30">Under 30%</SelectItem>
                        <SelectItem value="30_50">30% - 50%</SelectItem>
                        <SelectItem value="50_70">50% - 70%</SelectItem>
                        <SelectItem value="70_90">70% - 90%</SelectItem>
                        <SelectItem value="over_90">Over 90%</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Lower loss ratios improve captive eligibility</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Risk Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="safetyProgram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Safety Program in Place</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-safetyProgram">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="comprehensive">Comprehensive Written Program</SelectItem>
                        <SelectItem value="basic">Basic Safety Policies</SelectItem>
                        <SelectItem value="developing">Currently Developing</SelectItem>
                        <SelectItem value="minimal">Minimal / None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="riskManagement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Risk Management Practices</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-riskManagement">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="advanced">Advanced (Telematics, Driver Training, etc.)</SelectItem>
                        <SelectItem value="moderate">Moderate (Regular Training, MVR Checks)</SelectItem>
                        <SelectItem value="basic">Basic (Hiring Standards Only)</SelectItem>
                        <SelectItem value="needs_improvement">Needs Improvement</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Information</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your goals for a captive program, any specific concerns, or questions you have about alternative risk solutions..." 
                      className="min-h-[120px]"
                      {...field} 
                      data-testid="textarea-notes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg" data-testid="button-submit">
          Request Captive Program Consultation
        </Button>
      </form>
    </Form>
  );
}
