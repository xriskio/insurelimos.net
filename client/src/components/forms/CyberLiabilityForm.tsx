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
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  annualRevenue: z.string().min(1, "Annual revenue is required"),
  numberOfRecords: z.string().min(1, "Number of records is required"),
  hasCurrentCoverage: z.boolean().default(false),
  acceptsCreditCards: z.boolean().default(false),
  storesCustomerData: z.boolean().default(false),
  desiredLimit: z.string().optional(),
  notes: z.string().optional(),
});

export function CyberLiabilityForm() {
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
      annualRevenue: "",
      numberOfRecords: "",
      hasCurrentCoverage: false,
      acceptsCreditCards: false,
      storesCustomerData: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { streetAddress, city, state, zipCode, ...rest } = values;
      const submitData = {
        ...rest,
      };
      const response = await fetch('/api/quotes/cyber-liability', {
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
      
      setLocation(`/quote-confirmation?ref=${encodeURIComponent(referenceNumber)}&business=${encodeURIComponent(values.businessName)}&email=${encodeURIComponent(values.email)}&type=cyber-liability`);
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
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Company Name" {...field} />
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
                      <Input placeholder="John Doe" {...field} />
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
                      <Input placeholder="john@example.com" {...field} />
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
                      <Input placeholder="(555) 123-4567" {...field} />
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
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Business & Data Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="annualRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Revenue</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_500k">Under $500,000</SelectItem>
                        <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="1m_5m">$1,000,000 - $5,000,000</SelectItem>
                        <SelectItem value="5m_10m">$5,000,000 - $10,000,000</SelectItem>
                        <SelectItem value="over_10m">Over $10,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfRecords"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer/Employee Records Stored</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="under_1k">Under 1,000</SelectItem>
                        <SelectItem value="1k_10k">1,000 - 10,000</SelectItem>
                        <SelectItem value="10k_50k">10,000 - 50,000</SelectItem>
                        <SelectItem value="50k_100k">50,000 - 100,000</SelectItem>
                        <SelectItem value="over_100k">Over 100,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="desiredLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Coverage Limit</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="250k">$250,000</SelectItem>
                        <SelectItem value="500k">$500,000</SelectItem>
                        <SelectItem value="1m">$1,000,000</SelectItem>
                        <SelectItem value="2m">$2,000,000</SelectItem>
                        <SelectItem value="5m">$5,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Data Handling</h3>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="acceptsCreditCards"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Do you accept credit card payments?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="storesCustomerData"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Do you store sensitive customer data (SSN, health info, etc.)?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="hasCurrentCoverage"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Do you currently have cyber liability coverage?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any previous data breaches or specific concerns..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg">
          Request Cyber Liability Quote
        </Button>
      </form>
    </Form>
  );
}
