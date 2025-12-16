import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ObjectUploader } from "@/components/ObjectUploader";
import { FileText, X, Plus, Trash2, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const vehicleSchema = z.object({
  year: z.string().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  vin: z.string().optional(),
  seatingCapacity: z.string().optional(),
  value: z.string().optional(),
});

const driverSchema = z.object({
  fullName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  licenseNumber: z.string().optional(),
  licenseState: z.string().optional(),
  yearsExperience: z.string().optional(),
  dateOfHire: z.string().optional(),
});

const formSchema = z.object({
  quoteType: z.string(),
  insuredName: z.string().min(2, "Business name is required"),
  dba: z.string().optional(),
  contactName: z.string().min(2, "Contact name is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(10, "Phone number is required"),
  businessWebsite: z.string().optional(),
  yearsInBusiness: z.string().optional(),
  businessType: z.string().optional(),
  mailingAddress: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  cpucNumber: z.string().optional(),
  tcpNumber: z.string().optional(),
  effectiveDate: z.string().optional(),
  liabilityLimit: z.string().optional(),
  currentCarrier: z.string().optional(),
  currentPremium: z.string().optional(),
  expirationDate: z.string().optional(),
  operatingRadius: z.string().optional(),
  statesOfOperation: z.string().optional(),
  filingsNeeded: z.array(z.string()).optional(),
  vehicles: z.array(vehicleSchema).optional(),
  drivers: z.array(driverSchema).optional(),
  lossHistory: z.string().optional(),
  additionalInfo: z.string().optional(),
  uploadedDocuments: z.array(z.string()).optional(),
});

interface TransportQuoteFormProps {
  quoteType: "limousine" | "rideshare" | "tnc" | "nemt" | "public-auto";
  title: string;
  description: string;
}

const BUSINESS_TYPES: Record<string, { value: string; label: string }[]> = {
  limousine: [
    { value: "sedan", label: "Luxury Sedan Service" },
    { value: "stretch", label: "Stretch Limousine" },
    { value: "suv", label: "SUV/Executive" },
    { value: "party_bus", label: "Party Bus" },
    { value: "sprinter", label: "Sprinter/Van" },
    { value: "mixed", label: "Mixed Fleet" },
  ],
  rideshare: [
    { value: "uber", label: "Uber Driver" },
    { value: "lyft", label: "Lyft Driver" },
    { value: "both", label: "Multiple Platforms (Uber + Lyft)" },
    { value: "other", label: "Other Rideshare Platform" },
  ],
  tnc: [
    { value: "platform", label: "TNC Platform Operator" },
    { value: "fleet", label: "Fleet Operator" },
    { value: "delivery", label: "Delivery Network Company" },
    { value: "p2p", label: "P2P Rental Platform" },
    { value: "subscription", label: "Vehicle Subscription Service" },
    { value: "autonomous", label: "Autonomous Vehicle Service" },
  ],
  nemt: [
    { value: "wheelchair", label: "Wheelchair Transport" },
    { value: "stretcher", label: "Stretcher Transport" },
    { value: "ambulatory", label: "Ambulatory Only" },
    { value: "mixed", label: "Mixed Services" },
  ],
  "public-auto": [
    { value: "taxi", label: "Taxi/Cab Service" },
    { value: "shuttle", label: "Shuttle Service" },
    { value: "bus", label: "Bus/Motorcoach" },
    { value: "charter", label: "Charter Service" },
    { value: "airport", label: "Airport Transport" },
  ],
};

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const STEPS = [
  { id: 1, name: "Insured Information", description: "Business & contact details" },
  { id: 2, name: "Coverage Information", description: "Liability & policy details" },
  { id: 3, name: "Vehicles & Drivers", description: "Fleet & driver information" },
];

export function TransportQuoteForm({ quoteType, title, description }: TransportQuoteFormProps) {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quoteType,
      insuredName: "",
      dba: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      businessWebsite: "",
      yearsInBusiness: "",
      businessType: "",
      mailingAddress: "",
      city: "",
      state: "",
      zipCode: "",
      cpucNumber: "",
      tcpNumber: "",
      effectiveDate: "",
      liabilityLimit: "",
      currentCarrier: "",
      currentPremium: "",
      expirationDate: "",
      operatingRadius: "",
      statesOfOperation: "",
      filingsNeeded: [],
      vehicles: [{ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "" }],
      drivers: [{ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", yearsExperience: "", dateOfHire: "" }],
      lossHistory: "",
      additionalInfo: "",
      uploadedDocuments: [],
    },
  });

  const { fields: vehicleFields, append: appendVehicle, remove: removeVehicle } = useFieldArray({
    control: form.control,
    name: "vehicles",
  });

  const { fields: driverFields, append: appendDriver, remove: removeDriver } = useFieldArray({
    control: form.control,
    name: "drivers",
  });

  const handleGetUploadParameters = async () => {
    const response = await fetch('/api/objects/upload', { method: 'POST' });
    const data = await response.json();
    return { method: 'PUT' as const, url: data.uploadURL };
  };

  const handleUploadComplete = async (result: any) => {
    if (result.successful && result.successful.length > 0) {
      const newFiles: string[] = [];
      for (const file of result.successful) {
        try {
          const response = await fetch('/api/objects/finalize', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uploadURL: file.uploadURL }),
          });
          const data = await response.json();
          newFiles.push(data.objectPath);
        } catch (error) {
          console.error('Error finalizing upload:', error);
        }
      }
      setUploadedFiles(prev => [...prev, ...newFiles]);
      toast({
        title: "Documents Uploaded",
        description: `${newFiles.length} document(s) uploaded successfully.`,
      });
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof z.infer<typeof formSchema>)[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ['insuredName', 'contactName', 'contactEmail', 'contactPhone', 'mailingAddress', 'city', 'state', 'zipCode'];
        break;
      case 2:
        fieldsToValidate = [];
        break;
      case 3:
        fieldsToValidate = [];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    try {
      const isValid = await validateStep(currentStep);
      if (isValid && currentStep < 3) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Form validation error:', error);
      toast({
        title: "Please check your form",
        description: "Some required fields may be missing or incorrect.",
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const submitData = {
        ...values,
        vehicles: JSON.stringify(values.vehicles),
        drivers: JSON.stringify(values.drivers),
        uploadedDocuments: uploadedFiles.length > 0 ? uploadedFiles : null,
      };

      const response = await fetch('/api/quotes/transport', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote');
      }

      const referenceNumber = data.quote?.referenceNumber || 'N/A';
      
      form.reset();
      setUploadedFiles([]);
      
      setLocation(`/quote-confirmation?ref=${encodeURIComponent(referenceNumber)}&business=${encodeURIComponent(values.insuredName)}&email=${encodeURIComponent(values.contactEmail)}&type=${encodeURIComponent(quoteType)}`);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const businessTypes = BUSINESS_TYPES[quoteType] || BUSINESS_TYPES.limousine;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <input type="hidden" {...form.register("quoteType")} value={quoteType} />

        {/* Step Progress Indicator */}
        <div className="mb-8">
          <nav aria-label="Progress">
            <ol className="flex items-center">
              {STEPS.map((step, stepIdx) => (
                <li key={step.id} className={cn("relative", stepIdx !== STEPS.length - 1 ? "flex-1" : "")}>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => step.id < currentStep && setCurrentStep(step.id)}
                      disabled={step.id > currentStep}
                      className={cn(
                        "relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors",
                        step.id < currentStep
                          ? "bg-primary border-primary text-white cursor-pointer hover:bg-primary/90"
                          : step.id === currentStep
                          ? "border-primary bg-white text-primary"
                          : "border-gray-300 bg-white text-gray-500"
                      )}
                      aria-current={step.id === currentStep ? "step" : undefined}
                    >
                      {step.id < currentStep ? (
                        <Check className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <span className="text-sm font-semibold">{step.id}</span>
                      )}
                    </button>
                    {stepIdx !== STEPS.length - 1 && (
                      <div
                        className={cn(
                          "hidden sm:block h-0.5 flex-1 mx-4",
                          step.id < currentStep ? "bg-primary" : "bg-gray-200"
                        )}
                      />
                    )}
                  </div>
                  <div className="mt-2 hidden sm:block">
                    <span className={cn(
                      "text-sm font-medium",
                      step.id <= currentStep ? "text-primary" : "text-gray-500"
                    )}>
                      {step.name}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-4 text-sm text-muted-foreground sm:hidden">
            Step {currentStep} of 3: {STEPS[currentStep - 1].name}
          </p>
        </div>

        {/* Step 1: Insured Information */}
        {currentStep === 1 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary">Insured Information</CardTitle>
              <p className="text-sm text-muted-foreground">Enter your business and contact details</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="insuredName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Name" data-testid="input-insured-name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dba"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DBA (if applicable)</FormLabel>
                      <FormControl>
                        <Input placeholder="Doing Business As" data-testid="input-dba" {...field} />
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
                      <FormLabel>Contact Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" data-testid="input-contact-name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" type="email" data-testid="input-contact-email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Phone *</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 123-4567" data-testid="input-contact-phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessWebsite"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourcompany.com" data-testid="input-business-website" {...field} />
                      </FormControl>
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
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-years-business">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-2">1-2 years</SelectItem>
                          <SelectItem value="3-5">3-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-business-type">
                            <SelectValue placeholder="Select Business Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="mailingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mailing Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main Street" data-testid="input-mailing-address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="col-span-2 md:col-span-2">
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input placeholder="Los Angeles" data-testid="input-city" {...field} />
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
                        <FormLabel>State *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-state">
                              <SelectValue placeholder="State" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {US_STATES.map((state) => (
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
                    name="zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ZIP Code *</FormLabel>
                        <FormControl>
                          <Input placeholder="90015" data-testid="input-zip-code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cpucNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CPUC Number (if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="CA CPUC Number" data-testid="input-cpuc" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tcpNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TCP Number (if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="TCP License Number" data-testid="input-tcp" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Coverage Information */}
        {currentStep === 2 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary">Coverage Information</CardTitle>
              <p className="text-sm text-muted-foreground">Specify your coverage requirements and current policy details</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="effectiveDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requested Effective Date</FormLabel>
                      <FormControl>
                        <Input type="date" data-testid="input-effective-date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="liabilityLimit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requested Liability Limit</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-liability-limit">
                            <SelectValue placeholder="Select Liability Limit" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="300000">$300,000</SelectItem>
                          <SelectItem value="500000">$500,000</SelectItem>
                          <SelectItem value="750000">$750,000</SelectItem>
                          <SelectItem value="1000000">$1,000,000</SelectItem>
                          <SelectItem value="1500000">$1,500,000</SelectItem>
                          <SelectItem value="2000000">$2,000,000</SelectItem>
                          <SelectItem value="5000000">$5,000,000</SelectItem>
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
                        <Input placeholder="Current carrier name" data-testid="input-current-carrier" {...field} />
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
                      <FormLabel>Current Annual Premium</FormLabel>
                      <FormControl>
                        <Input placeholder="$" data-testid="input-current-premium" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Policy Expiration</FormLabel>
                      <FormControl>
                        <Input type="date" data-testid="input-expiration-date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="operatingRadius"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Operating Radius (miles)</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-operating-radius">
                            <SelectValue placeholder="Select Operating Radius" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="25">0-25 miles</SelectItem>
                          <SelectItem value="50">26-50 miles</SelectItem>
                          <SelectItem value="100">51-100 miles</SelectItem>
                          <SelectItem value="200">101-200 miles</SelectItem>
                          <SelectItem value="500">201-500 miles</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="statesOfOperation"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>States of Operation</FormLabel>
                      <FormControl>
                        <Input placeholder="CA, NV, AZ, etc." data-testid="input-states-operation" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div>
                <label className="text-base font-medium">Filings Needed</label>
                <p className="text-sm text-muted-foreground mb-3">Select all applicable filings</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["CA PUC", "DOT", "TNC", "MCS-90", "BMC-91", "ICC"].map((filing) => (
                    <label
                      key={filing}
                      className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                        value={filing}
                        {...form.register("filingsNeeded")}
                      />
                      <span className="text-sm">{filing}</span>
                    </label>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Vehicles, Drivers & Documents */}
        {currentStep === 3 && (
          <div className="space-y-6">
            {/* Vehicle Information */}
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-lg text-primary">Vehicle Information</CardTitle>
                <p className="text-sm text-muted-foreground">Add details for each vehicle in your fleet</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {vehicleFields.map((field, index) => (
                    <div key={field.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-sm text-primary">Vehicle {index + 1}</span>
                        {vehicleFields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeVehicle(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.year`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Year</FormLabel>
                              <FormControl>
                                <Input placeholder="2024" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.make`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Make</FormLabel>
                              <FormControl>
                                <Input placeholder="Lincoln" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.model`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Model</FormLabel>
                              <FormControl>
                                <Input placeholder="Navigator" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.vin`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">VIN</FormLabel>
                              <FormControl>
                                <Input placeholder="Vehicle Identification Number" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.seatingCapacity`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Seating Capacity</FormLabel>
                              <FormControl>
                                <Input placeholder="8" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`vehicles.${index}.value`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Value ($)</FormLabel>
                              <FormControl>
                                <Input placeholder="75000" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendVehicle({ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "" })}
                    className="w-full border-dashed border-primary/50 text-primary hover:bg-primary/5"
                  >
                    <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                    Add Another Vehicle
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Driver Information */}
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-lg text-primary">Driver Information</CardTitle>
                <p className="text-sm text-muted-foreground">Add details for each driver</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {driverFields.map((field, index) => (
                    <div key={field.id} className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-medium text-sm text-primary">Driver {index + 1}</span>
                        {driverFields.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeDriver(index)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.fullName`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.dateOfBirth`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Date of Birth</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.licenseNumber`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">License Number</FormLabel>
                              <FormControl>
                                <Input placeholder="DL12345678" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.licenseState`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">License State</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="State" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {US_STATES.map((state) => (
                                    <SelectItem key={state} value={state}>{state}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.yearsExperience`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Years Experience</FormLabel>
                              <FormControl>
                                <Input placeholder="5" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`drivers.${index}.dateOfHire`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs">Date of Hire</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendDriver({ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", yearsExperience: "", dateOfHire: "" })}
                    className="w-full border-dashed border-primary/50 text-primary hover:bg-primary/5"
                  >
                    <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                    Add Another Driver
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Loss History & Documents */}
            <Card className="border-primary/20">
              <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-lg text-primary">Loss History & Documents</CardTitle>
                <p className="text-sm text-muted-foreground">Provide claim history and upload supporting documents</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <FormField
                  control={form.control}
                  name="lossHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Loss History (Last 3 Years)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details of any claims or losses in the past 3 years..."
                          className="min-h-[100px]"
                          data-testid="textarea-loss-history"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information that may help us provide an accurate quote..."
                          className="min-h-[80px]"
                          data-testid="textarea-additional-info"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <label className="text-base font-medium">Upload Documents</label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Upload loss runs, vehicle schedules, driver lists, or other supporting documents
                  </p>
                  
                  {uploadedFiles.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-green-600" aria-hidden="true" />
                            <span className="text-sm text-green-800 truncate max-w-[200px]">{file.split('/').pop()}</span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" aria-hidden="true" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <ObjectUploader
                    onGetUploadParameters={handleGetUploadParameters}
                    onComplete={handleUploadComplete}
                    allowedFileTypes={[".pdf", ".doc", ".docx", ".xls", ".xlsx", ".jpg", ".jpeg", ".png"]}
                    maxFileSize={10 * 1024 * 1024}
                    maxNumberOfFiles={10}
                  >
                    <Button type="button" variant="outline" className="border-dashed">
                      <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
                      Upload Documents
                    </Button>
                  </ObjectUploader>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4 border-t">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={cn(currentStep === 1 && "invisible")}
          >
            <ChevronLeft className="h-4 w-4 mr-2" aria-hidden="true" />
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of 3
          </div>

          {currentStep < 3 ? (
            <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
              Next Step
              <ChevronRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </Button>
          ) : (
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-accent hover:bg-accent/90 text-white min-w-[140px]"
              data-testid="button-submit-quote"
            >
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
