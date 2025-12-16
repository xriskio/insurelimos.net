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
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ObjectUploader } from "@/components/ObjectUploader";
import { Plus, Trash2, FileText, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  streetAddress: z.string().min(3, "Street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  serviceType: z.string().min(1, "Service type is required"),
  numberOfAmbulances: z.string().min(1, "Number of ambulances is required"),
  serviceArea: z.string().optional(),
  annualCalls: z.string().optional(),
  effectiveDate: z.string().optional(),
  liabilityLimit: z.string().optional(),
  currentCarrier: z.string().optional(),
  currentPremium: z.string().optional(),
  expirationDate: z.string().optional(),
  operatingRadius: z.string().optional(),
  statesOfOperation: z.string().optional(),
  filingsNeeded: z.array(z.string()).optional(),
  hasAutoLiability: z.boolean().default(false),
  hasPhysicalDamage: z.boolean().default(false),
  hasWorkersComp: z.boolean().default(false),
  hasInlandMarine: z.boolean().default(false),
  hasGeneralLiability: z.boolean().default(false),
  hasProfessionalLiability: z.boolean().default(false),
  hasProperty: z.boolean().default(false),
  hasUmbrella: z.boolean().default(false),
  hasEbl: z.boolean().default(false),
  vehicles: z.array(vehicleSchema).optional(),
  drivers: z.array(driverSchema).optional(),
  lossHistory: z.string().optional(),
  notes: z.string().optional(),
  uploadedDocuments: z.array(z.string()).optional(),
});

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

export function AmbulanceForm() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
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
      serviceType: "",
      numberOfAmbulances: "",
      serviceArea: "",
      annualCalls: "",
      effectiveDate: "",
      liabilityLimit: "",
      currentCarrier: "",
      currentPremium: "",
      expirationDate: "",
      operatingRadius: "",
      statesOfOperation: "",
      filingsNeeded: [],
      hasAutoLiability: false,
      hasPhysicalDamage: false,
      hasWorkersComp: false,
      hasInlandMarine: false,
      hasGeneralLiability: false,
      hasProfessionalLiability: false,
      hasProperty: false,
      hasUmbrella: false,
      hasEbl: false,
      vehicles: [{ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "" }],
      drivers: [{ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", yearsExperience: "", dateOfHire: "" }],
      lossHistory: "",
      notes: "",
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { streetAddress, city, state, zipCode, ...rest } = values;
      const submitData = {
        ...rest,
        address: `${streetAddress}, ${city}, ${state} ${zipCode}`,
        vehicles: JSON.stringify(values.vehicles),
        drivers: JSON.stringify(values.drivers),
        uploadedDocuments: uploadedFiles.length > 0 ? uploadedFiles : null,
      };

      const response = await fetch('/api/quotes/ambulance', {
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
      setUploadedFiles([]);
      
      setLocation(`/quote-confirmation?ref=${encodeURIComponent(referenceNumber)}&business=${encodeURIComponent(values.businessName)}&email=${encodeURIComponent(values.email)}&type=ambulance`);
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

          {/* Coverage Information */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Coverage Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="effectiveDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requested Effective Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} data-testid="input-effectiveDate" />
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-liabilityLimit">
                          <SelectValue placeholder="Select Liability Limit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
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
                      <Input placeholder="Current carrier name" {...field} data-testid="input-currentCarrier" />
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
                      <Input placeholder="$" {...field} data-testid="input-currentPremium" />
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
                      <Input type="date" {...field} data-testid="input-expirationDate" />
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-operatingRadius">
                          <SelectValue placeholder="Select Operating Radius" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="25">Up to 25 miles</SelectItem>
                        <SelectItem value="50">Up to 50 miles</SelectItem>
                        <SelectItem value="100">Up to 100 miles</SelectItem>
                        <SelectItem value="150">Up to 150 miles</SelectItem>
                        <SelectItem value="200">Up to 200 miles</SelectItem>
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
                  <FormItem>
                    <FormLabel>States of Operation</FormLabel>
                    <FormControl>
                      <Input placeholder="CA, NV, AZ, etc." {...field} data-testid="input-statesOfOperation" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="filingsNeeded"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Filings Needed</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        const current = field.value || [];
                        if (!current.includes(value)) {
                          field.onChange([...current, value]);
                        }
                      }} 
                      value=""
                    >
                      <FormControl>
                        <SelectTrigger data-testid="select-filingsNeeded">
                          <SelectValue placeholder="Select filings" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DOT">DOT Filing</SelectItem>
                        <SelectItem value="CPUC">CPUC Filing</SelectItem>
                        <SelectItem value="State">State Filing</SelectItem>
                        <SelectItem value="Medicare">Medicare/Medicaid</SelectItem>
                        <SelectItem value="None">None Required</SelectItem>
                      </SelectContent>
                    </Select>
                    {field.value && field.value.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {field.value.map((filing, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {filing}
                          </span>
                        ))}
                      </div>
                    )}
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

          {/* Vehicle Information */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Vehicle Information</h3>
            {vehicleFields.map((field, index) => (
              <Card key={field.id} className="bg-muted/30">
                <CardHeader className="py-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-primary">Vehicle {index + 1}</CardTitle>
                    {vehicleFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeVehicle(index)}
                        className="text-destructive hover:text-destructive"
                        data-testid={`button-removeVehicle-${index}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.year`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year</FormLabel>
                          <FormControl>
                            <Input placeholder="2024" {...field} data-testid={`input-vehicle-year-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.make`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Make</FormLabel>
                          <FormControl>
                            <Input placeholder="Ford" {...field} data-testid={`input-vehicle-make-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.model`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Model</FormLabel>
                          <FormControl>
                            <Input placeholder="E-450" {...field} data-testid={`input-vehicle-model-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.vin`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>VIN</FormLabel>
                          <FormControl>
                            <Input placeholder="Vehicle Identification Number" {...field} data-testid={`input-vehicle-vin-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.seatingCapacity`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Seating Capacity</FormLabel>
                          <FormControl>
                            <Input placeholder="4" {...field} data-testid={`input-vehicle-seating-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`vehicles.${index}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Value ($)</FormLabel>
                          <FormControl>
                            <Input placeholder="175000" {...field} data-testid={`input-vehicle-value-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              className="w-full border-dashed"
              onClick={() => appendVehicle({ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "" })}
              data-testid="button-addVehicle"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Vehicle
            </Button>
          </div>

          {/* Driver Information */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Driver Information</h3>
            {driverFields.map((field, index) => (
              <Card key={field.id} className="bg-muted/30">
                <CardHeader className="py-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium text-primary">Driver {index + 1}</CardTitle>
                    {driverFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeDriver(index)}
                        className="text-destructive hover:text-destructive"
                        data-testid={`button-removeDriver-${index}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name={`drivers.${index}.fullName`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} data-testid={`input-driver-name-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`drivers.${index}.dateOfBirth`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid={`input-driver-dob-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`drivers.${index}.licenseNumber`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>License Number</FormLabel>
                          <FormControl>
                            <Input placeholder="DL01234576" {...field} data-testid={`input-driver-license-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`drivers.${index}.licenseState`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>License State</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid={`select-driver-licenseState-${index}`}>
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
                          <FormLabel>Years Experience</FormLabel>
                          <FormControl>
                            <Input placeholder="5" {...field} data-testid={`input-driver-experience-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`drivers.${index}.dateOfHire`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Hire</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} data-testid={`input-driver-hire-${index}`} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button
              type="button"
              variant="outline"
              className="w-full border-dashed"
              onClick={() => appendDriver({ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", yearsExperience: "", dateOfHire: "" })}
              data-testid="button-addDriver"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Another Driver
            </Button>
          </div>

          {/* Loss History & Documents */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2 text-primary">Loss History & Documents</h3>
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
                      {...field} 
                      data-testid="textarea-lossHistory"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-3">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Upload Documents (Loss Runs, MVRs, Dec Pages, etc.)
              </label>
              <ObjectUploader
                onGetUploadParameters={handleGetUploadParameters}
                onComplete={handleUploadComplete}
                allowedFileTypes={['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png']}
                maxFileSize={10 * 1024 * 1024}
                maxNumberOfFiles={10}
                buttonClassName="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                Upload Documents
              </ObjectUploader>
              
              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-muted-foreground">Uploaded documents:</p>
                  <div className="flex flex-wrap gap-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-sm">
                        <FileText className="h-3 w-3" />
                        <span className="truncate max-w-[150px]">{file.split('/').pop()}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="ml-1 text-muted-foreground hover:text-destructive"
                          data-testid={`button-removeFile-${index}`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
                      placeholder="Any additional information about your operation or specific coverage needs..." 
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
