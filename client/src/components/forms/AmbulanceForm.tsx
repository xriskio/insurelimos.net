import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  serviceType: z.string().min(1, "Service type is required"),
  numberOfAmbulances: z.string().min(1, "Number of ambulances is required"),
  serviceArea: z.string().optional(),
  annualCalls: z.string().optional(),
  hasAutoLiability: z.boolean().default(false),
  hasPhysicalDamage: z.boolean().default(false),
  hasWorkersComp: z.boolean().default(false),
  hasInlandMarine: z.boolean().default(false),
  hasGeneralLiability: z.boolean().default(false),
  hasProfessionalLiability: z.boolean().default(false),
  hasProperty: z.boolean().default(false),
  hasUmbrella: z.boolean().default(false),
  hasEbl: z.boolean().default(false),
  currentCarrier: z.string().optional(),
  currentPremium: z.string().optional(),
  notes: z.string().optional(),
});

export function AmbulanceForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      numberOfAmbulances: "",
      serviceArea: "",
      annualCalls: "",
      hasAutoLiability: false,
      hasPhysicalDamage: false,
      hasWorkersComp: false,
      hasInlandMarine: false,
      hasGeneralLiability: false,
      hasProfessionalLiability: false,
      hasProperty: false,
      hasUmbrella: false,
      hasEbl: false,
      currentCarrier: "",
      currentPremium: "",
      notes: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/quotes/ambulance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote');
      }

      toast({
        title: "Ambulance Quote Request Received",
        description: "Our EMS insurance specialists will review your information and contact you shortly.",
      });
      
      form.reset();
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
                      <Input placeholder="Your Ambulance Service Name" {...field} data-testid="input-businessName" />
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
                name="address"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Business Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St, Los Angeles, CA 90015" {...field} data-testid="input-address" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Service Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-serviceType">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="bls">BLS (Basic Life Support)</SelectItem>
                        <SelectItem value="als">ALS (Advanced Life Support)</SelectItem>
                        <SelectItem value="critical_care">Critical Care Transport</SelectItem>
                        <SelectItem value="air_ambulance">Air Ambulance / HEMS</SelectItem>
                        <SelectItem value="interfacility">Interfacility Transport</SelectItem>
                        <SelectItem value="911_service">911 Emergency Service</SelectItem>
                        <SelectItem value="combined">Combined 911 & Interfacility</SelectItem>
                        <SelectItem value="event_medical">Event Medical Services</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfAmbulances"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Ambulances</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-numberOfAmbulances">
                          <SelectValue placeholder="Select fleet size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 Ambulances</SelectItem>
                        <SelectItem value="3-5">3-5 Ambulances</SelectItem>
                        <SelectItem value="6-10">6-10 Ambulances</SelectItem>
                        <SelectItem value="11-20">11-20 Ambulances</SelectItem>
                        <SelectItem value="21-50">21-50 Ambulances</SelectItem>
                        <SelectItem value="50+">50+ Ambulances</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serviceArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Area / Radius</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Los Angeles County" {...field} data-testid="input-serviceArea" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annualCalls"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Call Volume (Est.)</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-annualCalls">
                          <SelectValue placeholder="Select volume" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_500">Under 500</SelectItem>
                        <SelectItem value="500_1000">500 - 1,000</SelectItem>
                        <SelectItem value="1000_5000">1,000 - 5,000</SelectItem>
                        <SelectItem value="5000_10000">5,000 - 10,000</SelectItem>
                        <SelectItem value="10000_25000">10,000 - 25,000</SelectItem>
                        <SelectItem value="over_25000">Over 25,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Coverage Needs (Select All That Apply)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="hasAutoLiability"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-autoLiability" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Auto Liability</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasPhysicalDamage"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-physicalDamage" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Auto Physical Damage</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasWorkersComp"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-workersComp" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Workers' Compensation</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasInlandMarine"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-inlandMarine" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Inland Marine (Equipment)</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasGeneralLiability"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-generalLiability" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>General Liability</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasProfessionalLiability"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-professionalLiability" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Professional Liability</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasProperty"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-property" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Commercial Property</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasUmbrella"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-umbrella" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Umbrella / Excess</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasEbl"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} data-testid="checkbox-ebl" />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Employee Benefits Liability</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Current Insurance (if applicable)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="currentCarrier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Insurance Carrier</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., PHLY, Hartford" {...field} data-testid="input-currentCarrier" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentPremium"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Annual Premium (Est.)</FormLabel>
                    <FormControl>
                      <Input placeholder="$50,000" {...field} data-testid="input-currentPremium" />
                    </FormControl>
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
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any additional information about your operation, claims history, or specific coverage needs..." 
                      className="min-h-[100px]"
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
          Request Ambulance Insurance Quote
        </Button>
      </form>
    </Form>
  );
}
