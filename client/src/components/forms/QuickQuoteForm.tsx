import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Lock, Clock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quickQuoteSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Your name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(1, "Please select a state"),
  zipCode: z.string().min(5, "ZIP code is required"),
  vehicleCount: z.string().min(1, "Please select vehicle count"),
  insuranceType: z.string().min(1, "Please select insurance type"),
});

type QuickQuoteData = z.infer<typeof quickQuoteSchema>;

const states = [
  "Arizona", "California", "Colorado", "Florida", "Georgia", "Illinois", "Indiana",
  "Maryland", "Michigan", "Nevada", "New Jersey", "New York", "Ohio", "Oregon",
  "Pennsylvania", "Tennessee", "Texas", "Virginia"
];

const vehicleCounts = ["1", "2-5", "6-10", "11-25", "26-50", "50+"];

const insuranceTypes = [
  { value: "limo", label: "Limousine" },
  { value: "uber-black", label: "Uber Black / TCP" },
  { value: "tnc", label: "TNC / Rideshare" },
  { value: "nemt", label: "NEMT" },
  { value: "taxi", label: "Taxi" },
  { value: "motorcoach", label: "Motorcoach / Bus" },
  { value: "school-bus", label: "School Bus" },
  { value: "ambulance", label: "Ambulance" },
];

export function QuickQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<QuickQuoteData>({
    resolver: zodResolver(quickQuoteSchema),
  });

  const onSubmit = async (data: QuickQuoteData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.contactName,
          email: data.email,
          phone: data.phone,
          company: data.businessName,
          subject: `Quick Quote Request - ${data.insuranceType}`,
          message: `Address: ${data.streetAddress}, ${data.city}, ${data.state} ${data.zipCode}\nVehicles: ${data.vehicleCount}\nInsurance Type: ${data.insuranceType}`,
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Quote Request Received!",
          description: "Our team will contact you within 24 hours.",
        });
        reset();
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden sticky top-4">
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-6 text-center">
        <h3 className="text-xl font-bold mb-1">Get Your Free Quote Now</h3>
        <p className="text-sm text-white/80">No commitment required - Takes 2 minutes</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
        <div>
          <Label htmlFor="businessName">Business Name *</Label>
          <Input
            id="businessName"
            placeholder="Your Company Name"
            {...register("businessName")}
            className={errors.businessName ? "border-red-500" : ""}
            data-testid="input-quick-business"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contactName">Your Name *</Label>
            <Input
              id="contactName"
              placeholder="John Smith"
              {...register("contactName")}
              className={errors.contactName ? "border-red-500" : ""}
              data-testid="input-quick-name"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              placeholder="(555) 123-4567"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
              data-testid="input-quick-phone"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
            data-testid="input-quick-email"
          />
        </div>

        <div>
          <Label htmlFor="streetAddress">Street Address *</Label>
          <Input
            id="streetAddress"
            placeholder="123 Main St"
            {...register("streetAddress")}
            className={errors.streetAddress ? "border-red-500" : ""}
            data-testid="input-quick-street"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              placeholder="Los Angeles"
              {...register("city")}
              className={errors.city ? "border-red-500" : ""}
              data-testid="input-quick-city"
            />
          </div>
          <div>
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              placeholder="90001"
              {...register("zipCode")}
              className={errors.zipCode ? "border-red-500" : ""}
              data-testid="input-quick-zip"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>State *</Label>
            <Select onValueChange={(value) => setValue("state", value)}>
              <SelectTrigger data-testid="select-quick-state">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {states.map((state) => (
                  <SelectItem key={state} value={state}>{state}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Vehicles *</Label>
            <Select onValueChange={(value) => setValue("vehicleCount", value)}>
              <SelectTrigger data-testid="select-quick-vehicles">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {vehicleCounts.map((count) => (
                  <SelectItem key={count} value={count}>{count}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <Label>Type of Insurance Needed *</Label>
          <Select onValueChange={(value) => setValue("insuranceType", value)}>
            <SelectTrigger data-testid="select-quick-type">
              <SelectValue placeholder="Select Insurance Type" />
            </SelectTrigger>
            <SelectContent>
              {insuranceTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg"
          disabled={isSubmitting}
          data-testid="button-quick-submit"
        >
          {isSubmitting ? "Submitting..." : "Get My Free Quote"} →
        </Button>
        
        <div className="flex justify-center gap-4 text-xs text-muted-foreground pt-2">
          <span className="flex items-center gap-1">
            <Lock className="w-3 h-3" /> Secure
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3" /> No Spam
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> 24hr Response
          </span>
        </div>
      </form>
      
      <div className="bg-gray-50 p-4 text-center border-t">
        <p className="text-sm text-muted-foreground mb-2">Prefer to talk?</p>
        <a href="tel:888-254-0089" className="flex items-center justify-center gap-2 text-primary font-bold hover:underline">
          <Phone className="w-4 h-4" />
          888-254-0089
        </a>
      </div>
    </div>
  );
}
