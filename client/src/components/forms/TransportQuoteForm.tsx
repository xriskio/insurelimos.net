import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
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
import { Upload, FileText, X, Plus, Trash2 } from "lucide-react";
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

export function TransportQuoteForm({ quoteType, title, description }: TransportQuoteFormProps) {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
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

      toast({
        title: "Quote Request Received!",
        description: "Our team will review your information and contact you within 24 hours.",
      });
      
      form.reset();
      setUploadedFiles([]);
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  }

  const businessTypes = BUSINESS_TYPES[quoteType] || BUSINESS_TYPES.limousine;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <input type="hidden" {...form.register("quoteType")} value={quoteType} />

        {/* Insured Information */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg text-primary">Insured Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
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
                      <Input placeholder="https://yourcompany.com" data-testid="input-website" {...field} />
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-years-business">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="new">New Venture</SelectItem>
                        <SelectItem value="1">1 Year</SelectItem>
                        <SelectItem value="2">2 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="5-10">5-10 Years</SelectItem>
                        <SelectItem value="10+">10+ Years</SelectItem>
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-business-type">
                          <SelectValue placeholder="Select Business Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {businessTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mailingAddress"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Mailing Address *</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main Street" data-testid="input-address" {...field} />
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
                    <FormLabel>City *</FormLabel>
                    <FormControl>
                      <Input placeholder="Los Angeles" data-testid="input-city" {...field} />
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
                      <FormControl>
                        <Input placeholder="CA" maxLength={2} data-testid="input-state" {...field} />
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
                      <FormLabel>ZIP Code *</FormLabel>
                      <FormControl>
                        <Input placeholder="90015" data-testid="input-zip" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
          </CardContent>
        </Card>

        {/* Coverage Information */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg text-primary">Coverage Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
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
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-liability">
                          <SelectValue placeholder="Select Liability Limit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="750k">$750,000</SelectItem>
                        <SelectItem value="1m">$1,000,000</SelectItem>
                        <SelectItem value="1.5m">$1,500,000</SelectItem>
                        <SelectItem value="2m">$2,000,000</SelectItem>
                        <SelectItem value="5m">$5,000,000</SelectItem>
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
                      <Input placeholder="Current carrier name" data-testid="input-carrier" {...field} />
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
                      <Input placeholder="$" data-testid="input-premium" {...field} />
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
                      <Input type="date" data-testid="input-expiration" {...field} />
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
                        <SelectTrigger data-testid="select-radius">
                          <SelectValue placeholder="Select Operating Radius" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="0-50">0-50 miles (Local)</SelectItem>
                        <SelectItem value="50-100">50-100 miles</SelectItem>
                        <SelectItem value="100-200">100-200 miles</SelectItem>
                        <SelectItem value="200+">200+ miles (Long Distance)</SelectItem>
                        <SelectItem value="interstate">Interstate</SelectItem>
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
                      <Input placeholder="CA, NV, AZ, etc." data-testid="input-states" {...field} />
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
                    <Select onValueChange={(val) => field.onChange([val])} defaultValue={field.value?.[0]}>
                      <FormControl>
                        <SelectTrigger data-testid="select-filings">
                          <SelectValue placeholder="Select filings" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="mcs90">MCS-90 (Interstate)</SelectItem>
                        <SelectItem value="forme">Form E (Intrastate)</SelectItem>
                        <SelectItem value="formh">Form H</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Vehicle Information */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg text-primary">Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {vehicleFields.map((field, index) => (
              <div key={field.id} className="p-4 border rounded-lg relative">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Vehicle {index + 1}</h4>
                  {vehicleFields.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeVehicle(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name={`vehicles.${index}.year`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year</FormLabel>
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
                        <FormLabel>Make</FormLabel>
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
                        <FormLabel>Model</FormLabel>
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
                        <FormLabel>VIN</FormLabel>
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
                        <FormLabel>Seating Capacity</FormLabel>
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
                        <FormLabel>Value ($)</FormLabel>
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
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Another Vehicle
            </Button>
          </CardContent>
        </Card>

        {/* Driver Information */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg text-primary">Driver Information</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            {driverFields.map((field, index) => (
              <div key={field.id} className="p-4 border rounded-lg relative">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Driver {index + 1}</h4>
                  {driverFields.length > 1 && (
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeDriver(index)}>
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name={`drivers.${index}.fullName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
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
                        <FormLabel>Date of Birth</FormLabel>
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
                        <FormLabel>License Number</FormLabel>
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
                        <FormLabel>License State</FormLabel>
                        <FormControl>
                          <Input placeholder="CA" maxLength={2} {...field} />
                        </FormControl>
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
                        <FormLabel>Date of Hire</FormLabel>
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
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" /> Add Another Driver
            </Button>
          </CardContent>
        </Card>

        {/* Loss History & Documents */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="text-lg text-primary">Loss History & Documents</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="space-y-3">
              <p className="text-sm font-medium">Upload Documents (Loss Runs, MVRs, Dec Pages, etc.)</p>
              <ObjectUploader
                maxNumberOfFiles={10}
                maxFileSize={20971520}
                allowedFileTypes={[".pdf", ".jpg", ".jpeg", ".png", ".doc", ".docx", ".xls", ".xlsx"]}
                onGetUploadParameters={handleGetUploadParameters}
                onComplete={handleUploadComplete}
                buttonClassName="flex items-center gap-2"
              >
                <Upload className="h-4 w-4" />
                Upload Documents
              </ObjectUploader>
              
              {uploadedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      <span>Document {index + 1}</span>
                      <button type="button" onClick={() => removeFile(index)} className="text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg" data-testid="button-submit">
          Submit Quote Request
        </Button>
      </form>
    </Form>
  );
}
