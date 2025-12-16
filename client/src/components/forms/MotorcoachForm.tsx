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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ObjectUploader } from "@/components/ObjectUploader";
import { FileText, X, Plus, Trash2, ChevronRight, ChevronLeft, Check, Bus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const vehicleSchema = z.object({
  year: z.string().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  vin: z.string().optional(),
  seatingCapacity: z.string().optional(),
  value: z.string().optional(),
  vehicleClass: z.string().optional(),
});

const driverSchema = z.object({
  fullName: z.string().optional(),
  dateOfBirth: z.string().optional(),
  licenseNumber: z.string().optional(),
  licenseState: z.string().optional(),
  cdlClass: z.string().optional(),
  yearsExperience: z.string().optional(),
  dateOfHire: z.string().optional(),
});

const formSchema = z.object({
  insuredName: z.string().min(2, "Business name is required"),
  dba: z.string().optional(),
  mailingAddress: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "ZIP code is required"),
  garagingAddress: z.string().optional(),
  garagingCity: z.string().optional(),
  garagingState: z.string().optional(),
  garagingZip: z.string().optional(),
  phone: z.string().min(10, "Phone number is required"),
  fax: z.string().optional(),
  website: z.string().optional(),
  email: z.string().email("Invalid email address"),
  safetySurveyContact: z.string().optional(),
  billingContact: z.string().optional(),
  claimsContact: z.string().optional(),
  generalContact: z.string().optional(),
  entityType: z.string().optional(),
  federalEmployeeId: z.string().optional(),
  yearEstablished: z.string().optional(),
  operationType: z.string().min(1, "Please select an operation type"),
  operationDescription: z.string().optional(),
  fleetBreakdown: z.string().optional(),
  totalVehicles: z.string().optional(),
  annualMileage: z.string().optional(),
  annualRevenue: z.string().optional(),
  frequentDestinations: z.string().optional(),
  disabledRidershipPercent: z.string().optional(),
  usesTNC: z.boolean().optional(),
  hasOwnerOperators: z.boolean().optional(),
  ownerOperatorCount: z.string().optional(),
  driver1099Count: z.string().optional(),
  usesNonOwnedVehicles: z.boolean().optional(),
  leasesVehiclesToOthers: z.boolean().optional(),
  currentCarrier: z.string().optional(),
  priorCarriers: z.string().optional(),
  policyEffectiveDate: z.string().optional(),
  liabilityLimits: z.string().optional(),
  deductibleOrSIR: z.string().optional(),
  annualPremium: z.string().optional(),
  hasBeenCancelled: z.boolean().optional(),
  cancelExplanation: z.string().optional(),
  safetyPersonName: z.string().optional(),
  safetyPersonTitle: z.string().optional(),
  safetyPersonExperience: z.string().optional(),
  safetyPercentage: z.string().optional(),
  newDriverOrientation: z.string().optional(),
  hasCameras: z.boolean().optional(),
  cameraCount: z.string().optional(),
  cameraSystem: z.string().optional(),
  hasTelematics: z.boolean().optional(),
  telematicsCount: z.string().optional(),
  telematicsSystem: z.string().optional(),
  hasGPS: z.boolean().optional(),
  gpsSystem: z.string().optional(),
  driversReplaced: z.string().optional(),
  driversAdded: z.string().optional(),
  driversUnionStatus: z.string().optional(),
  driverPayType: z.string().optional(),
  overnightDrivingPercent: z.string().optional(),
  providesWorkersComp: z.boolean().optional(),
  hasMaintenanceProgram: z.boolean().optional(),
  vehicleServiceProvider: z.string().optional(),
  mechanicCount: z.string().optional(),
  servicesOtherVehicles: z.boolean().optional(),
  vehicles: z.array(vehicleSchema).optional(),
  drivers: z.array(driverSchema).optional(),
  desiredAutoLiabilityLimit: z.string().optional(),
  desiredPhysicalDamageDeductible: z.string().optional(),
  desiredGeneralLiabilityLimit: z.string().optional(),
  desiredHiredAutoLimit: z.string().optional(),
  desiredNonOwnedAutoLimit: z.string().optional(),
  desiredUmLimit: z.string().optional(),
  desiredUimLimit: z.string().optional(),
  desiredMedPayLimit: z.string().optional(),
  desiredPipLimit: z.string().optional(),
  desiredGarageLiabilityLimit: z.string().optional(),
  desiredGaragekeepersLimit: z.string().optional(),
  usdotNumber: z.string().optional(),
  mcNumber: z.string().optional(),
  filingsNeeded: z.array(z.string()).optional(),
  statesVehiclesGaraged: z.array(z.string()).optional(),
  lossHistory: z.string().optional(),
  uploadedDocuments: z.array(z.string()).optional(),
  additionalInfo: z.string().optional(),
});

const OPERATION_TYPES = [
  { value: "large_charter", label: "Large Charter & Tour Operations (more than 5 units)" },
  { value: "small_charter", label: "Small Charter & Tour Operations (5 units and fewer)" },
  { value: "municipal_transit", label: "Municipal Transit Authorities (5 unit minimum)" },
  { value: "school_district", label: "School Districts (10 unit minimum)" },
  { value: "school_bus_contractor", label: "School Bus Contractors (10 unit minimum)" },
  { value: "intercity", label: "Intercity Bus Service" },
  { value: "casino_shuttle", label: "Casino Shuttle Operations" },
  { value: "other", label: "Other Motorcoach Operations" },
];

const ENTITY_TYPES = [
  { value: "corporation", label: "Corporation" },
  { value: "llc", label: "LLC" },
  { value: "partnership", label: "Partnership" },
  { value: "sole_proprietor", label: "Sole Proprietor" },
  { value: "municipality", label: "Municipality" },
  { value: "school_district", label: "School District" },
];

const VEHICLE_CLASSES = [
  { value: "class_a", label: "Class A (Over-the-Road Coach)" },
  { value: "class_b", label: "Class B (Smaller Transit)" },
  { value: "class_c", label: "Class C (Cutaway/Van)" },
  { value: "school_bus", label: "School Bus" },
  { value: "mini_bus", label: "Mini Bus (15-25 passengers)" },
  { value: "shuttle", label: "Shuttle Van" },
];

const LIABILITY_LIMITS = [
  { value: "1000000", label: "$1,000,000" },
  { value: "1500000", label: "$1,500,000" },
  { value: "2000000", label: "$2,000,000" },
  { value: "3000000", label: "$3,000,000" },
  { value: "5000000", label: "$5,000,000" },
  { value: "10000000", label: "$10,000,000" },
];

const PHYSICAL_DAMAGE_DEDUCTIBLES = [
  { value: "1000", label: "$1,000" },
  { value: "2500", label: "$2,500" },
  { value: "5000", label: "$5,000" },
  { value: "10000", label: "$10,000" },
  { value: "25000", label: "$25,000" },
];

const FILINGS_OPTIONS = [
  { value: "mcs90", label: "MCS-90 (Interstate)" },
  { value: "form_e", label: "Form E (Federal)" },
  { value: "form_h", label: "Form H (Hazmat)" },
  { value: "state_filing", label: "State Filing" },
  { value: "bmc91x", label: "BMC-91X" },
];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const STEPS = [
  { id: 1, name: "Business Information", description: "Company & contact details" },
  { id: 2, name: "Operations & Fleet", description: "Business operations & vehicles" },
  { id: 3, name: "Safety & Compliance", description: "Safety programs & filings" },
  { id: 4, name: "Coverage & Documents", description: "Desired coverage & uploads" },
];

export function MotorcoachForm() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      insuredName: "",
      dba: "",
      mailingAddress: "",
      city: "",
      state: "",
      zipCode: "",
      garagingAddress: "",
      garagingCity: "",
      garagingState: "",
      garagingZip: "",
      phone: "",
      fax: "",
      website: "",
      email: "",
      safetySurveyContact: "",
      billingContact: "",
      claimsContact: "",
      generalContact: "",
      entityType: "",
      federalEmployeeId: "",
      yearEstablished: "",
      operationType: "",
      operationDescription: "",
      fleetBreakdown: "",
      totalVehicles: "",
      annualMileage: "",
      annualRevenue: "",
      frequentDestinations: "",
      disabledRidershipPercent: "",
      usesTNC: false,
      hasOwnerOperators: false,
      ownerOperatorCount: "",
      driver1099Count: "",
      usesNonOwnedVehicles: false,
      leasesVehiclesToOthers: false,
      currentCarrier: "",
      priorCarriers: "",
      policyEffectiveDate: "",
      liabilityLimits: "",
      deductibleOrSIR: "",
      annualPremium: "",
      hasBeenCancelled: false,
      cancelExplanation: "",
      safetyPersonName: "",
      safetyPersonTitle: "",
      safetyPersonExperience: "",
      safetyPercentage: "",
      newDriverOrientation: "",
      hasCameras: false,
      cameraCount: "",
      cameraSystem: "",
      hasTelematics: false,
      telematicsCount: "",
      telematicsSystem: "",
      hasGPS: false,
      gpsSystem: "",
      driversReplaced: "",
      driversAdded: "",
      driversUnionStatus: "",
      driverPayType: "",
      overnightDrivingPercent: "",
      providesWorkersComp: false,
      hasMaintenanceProgram: false,
      vehicleServiceProvider: "",
      mechanicCount: "",
      servicesOtherVehicles: false,
      vehicles: [{ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "", vehicleClass: "" }],
      drivers: [{ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", cdlClass: "", yearsExperience: "", dateOfHire: "" }],
      desiredAutoLiabilityLimit: "",
      desiredPhysicalDamageDeductible: "",
      desiredGeneralLiabilityLimit: "",
      desiredHiredAutoLimit: "",
      desiredNonOwnedAutoLimit: "",
      desiredUmLimit: "",
      desiredUimLimit: "",
      desiredMedPayLimit: "",
      desiredPipLimit: "",
      desiredGarageLiabilityLimit: "",
      desiredGaragekeepersLimit: "",
      usdotNumber: "",
      mcNumber: "",
      filingsNeeded: [],
      statesVehiclesGaraged: [],
      lossHistory: "",
      uploadedDocuments: [],
      additionalInfo: "",
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
        fieldsToValidate = ['insuredName', 'mailingAddress', 'city', 'state', 'zipCode', 'phone', 'email'];
        break;
      case 2:
        fieldsToValidate = ['operationType'];
        break;
      case 3:
      case 4:
        fieldsToValidate = [];
        break;
    }

    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async () => {
    try {
      const isValid = await validateStep(currentStep);
      if (isValid && currentStep < 4) {
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
        fleetBreakdown: values.fleetBreakdown || null,
        uploadedDocuments: uploadedFiles.length > 0 ? uploadedFiles : null,
      };

      const response = await fetch('/api/quotes/motorcoach', {
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
      
      setLocation(`/quote-confirmation?ref=${encodeURIComponent(referenceNumber)}&business=${encodeURIComponent(values.insuredName)}&email=${encodeURIComponent(values.email)}&type=motorcoach`);
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            Step {currentStep} of 4: {STEPS[currentStep - 1].name}
          </p>
        </div>

        {currentStep === 1 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Business Information
              </CardTitle>
              <p className="text-sm text-muted-foreground">Enter your company and contact details</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="insuredName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Legal Business Name *</FormLabel>
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
                  name="entityType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Entity Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-entity-type">
                            <SelectValue placeholder="Select entity type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ENTITY_TYPES.map((type) => (
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
                  name="yearEstablished"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year Established</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 2010" data-testid="input-year-established" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="federalEmployeeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Federal Employer ID (FEIN)</FormLabel>
                      <FormControl>
                        <Input placeholder="XX-XXXXXXX" data-testid="input-fein" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourcompany.com" data-testid="input-website" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Mailing Address</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="mailingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address *</FormLabel>
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
                        <FormItem className="col-span-2">
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
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Garaging Address (if different)</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="garagingAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Street Address</FormLabel>
                        <FormControl>
                          <Input placeholder="456 Fleet Yard Lane" data-testid="input-garaging-address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <FormField
                      control={form.control}
                      name="garagingCity"
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="City" data-testid="input-garaging-city" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="garagingState"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>State</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-garaging-state">
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
                      name="garagingZip"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="90015" data-testid="input-garaging-zip" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" data-testid="input-phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fax"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fax Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4568" data-testid="input-fax" {...field} />
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
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="contact@yourcompany.com" type="email" data-testid="input-email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="generalContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>General Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" data-testid="input-general-contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="safetySurveyContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Safety Survey Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Safety Director Name" data-testid="input-safety-contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="billingContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Billing Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Accounts Payable Contact" data-testid="input-billing-contact" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="claimsContact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Claims Contact</FormLabel>
                        <FormControl>
                          <Input placeholder="Claims Manager Name" data-testid="input-claims-contact" {...field} />
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

        {currentStep === 2 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Operations & Fleet Information
              </CardTitle>
              <p className="text-sm text-muted-foreground">Describe your business operations and fleet</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="operationType"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Type of Operation *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-operation-type">
                            <SelectValue placeholder="Select your operation type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {OPERATION_TYPES.map((type) => (
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
                  name="operationDescription"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Describe Your Operations</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your typical operations, routes, and services..."
                          className="min-h-[100px]"
                          data-testid="input-operation-description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="totalVehicles"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Number of Vehicles</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 15" data-testid="input-total-vehicles" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="annualMileage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Annual Mileage (all vehicles)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 500,000" data-testid="input-annual-mileage" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="annualRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Annual Revenue</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $2,000,000" data-testid="input-annual-revenue" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="frequentDestinations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Frequent Destinations</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Las Vegas, San Diego, Phoenix" data-testid="input-destinations" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Additional Operations Questions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="disabledRidershipPercent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>% Disabled Ridership</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 5%" data-testid="input-disabled-percent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="driver1099Count"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel># of 1099 Drivers</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 0" data-testid="input-1099-drivers" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <FormField
                    control={form.control}
                    name="usesTNC"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-uses-tnc"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Uses TNC/Rideshare platforms?</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hasOwnerOperators"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-owner-operators"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Has Owner-Operators?</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="usesNonOwnedVehicles"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-non-owned"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Uses Non-Owned Vehicles?</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leasesVehiclesToOthers"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-leases"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Leases Vehicles to Others?</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Current Insurance Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="currentCarrier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Insurance Carrier</FormLabel>
                        <FormControl>
                          <Input placeholder="Carrier name" data-testid="input-current-carrier" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="policyEffectiveDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desired Effective Date</FormLabel>
                        <FormControl>
                          <Input type="date" data-testid="input-effective-date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liabilityLimits"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Liability Limits</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., $5,000,000" data-testid="input-current-limits" {...field} />
                        </FormControl>
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
                        <FormControl>
                          <Input placeholder="e.g., $150,000" data-testid="input-current-premium" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="hasBeenCancelled"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-cancelled"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Has any carrier cancelled or non-renewed your policy in the past 3 years?</FormLabel>
                      </FormItem>
                    )}
                  />
                  {form.watch("hasBeenCancelled") && (
                    <FormField
                      control={form.control}
                      name="cancelExplanation"
                      render={({ field }) => (
                        <FormItem className="mt-4">
                          <FormLabel>Please explain</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Explain the circumstances..."
                              data-testid="input-cancel-explanation"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Vehicle Schedule</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendVehicle({ year: "", make: "", model: "", vin: "", seatingCapacity: "", value: "", vehicleClass: "" })}
                    data-testid="button-add-vehicle"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Vehicle
                  </Button>
                </div>
                {vehicleFields.map((field, index) => (
                  <div key={field.id} className="p-4 border rounded-lg mb-4 bg-secondary/5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-sm">Vehicle {index + 1}</span>
                      {vehicleFields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeVehicle(index)}
                          className="text-destructive hover:text-destructive"
                          data-testid={`button-remove-vehicle-${index}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <FormField
                        control={form.control}
                        name={`vehicles.${index}.vehicleClass`}
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel className="text-xs">Vehicle Class</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid={`select-vehicle-class-${index}`}>
                                  <SelectValue placeholder="Select class" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {VEHICLE_CLASSES.map((vc) => (
                                  <SelectItem key={vc.value} value={vc.value}>{vc.label}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`vehicles.${index}.year`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">Year</FormLabel>
                            <FormControl>
                              <Input placeholder="2023" {...field} data-testid={`input-vehicle-year-${index}`} />
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
                              <Input placeholder="Prevost" {...field} data-testid={`input-vehicle-make-${index}`} />
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
                              <Input placeholder="H3-45" {...field} data-testid={`input-vehicle-model-${index}`} />
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
                              <Input placeholder="VIN Number" {...field} data-testid={`input-vehicle-vin-${index}`} />
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
                              <Input placeholder="56" {...field} data-testid={`input-vehicle-seats-${index}`} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`vehicles.${index}.value`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">Stated Value</FormLabel>
                            <FormControl>
                              <Input placeholder="$500,000" {...field} data-testid={`input-vehicle-value-${index}`} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Safety & Compliance
              </CardTitle>
              <p className="text-sm text-muted-foreground">Safety programs, driver information, and regulatory filings</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Safety Program</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="safetyPersonName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Safety Director Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Safety Director" data-testid="input-safety-name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="safetyPersonTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Director of Safety" data-testid="input-safety-title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="safetyPersonExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 15 years" data-testid="input-safety-experience" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="safetyPercentage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>% of Time on Safety</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 100%" data-testid="input-safety-percent" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newDriverOrientation"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>New Driver Orientation Program</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your new driver training and orientation program..."
                            data-testid="input-orientation"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="hasCameras"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-cameras"
                            />
                          </FormControl>
                          <FormLabel className="!mt-0">Has In-Vehicle Cameras?</FormLabel>
                        </FormItem>
                      )}
                    />
                    {form.watch("hasCameras") && (
                      <>
                        <FormField
                          control={form.control}
                          name="cameraCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="# of vehicles with cameras" {...field} data-testid="input-camera-count" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="cameraSystem"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Camera system name" {...field} data-testid="input-camera-system" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="hasTelematics"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-telematics"
                            />
                          </FormControl>
                          <FormLabel className="!mt-0">Has Telematics?</FormLabel>
                        </FormItem>
                      )}
                    />
                    {form.watch("hasTelematics") && (
                      <>
                        <FormField
                          control={form.control}
                          name="telematicsCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="# of vehicles" {...field} data-testid="input-telematics-count" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="telematicsSystem"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="System name" {...field} data-testid="input-telematics-system" />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="hasGPS"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              data-testid="checkbox-gps"
                            />
                          </FormControl>
                          <FormLabel className="!mt-0">Has GPS Tracking?</FormLabel>
                        </FormItem>
                      )}
                    />
                    {form.watch("hasGPS") && (
                      <FormField
                        control={form.control}
                        name="gpsSystem"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="GPS system name" {...field} data-testid="input-gps-system" />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Driver Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <FormField
                    control={form.control}
                    name="driversReplaced"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Drivers Replaced (Last 12 Mo)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2" {...field} data-testid="input-drivers-replaced" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="driversAdded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Drivers Added (Last 12 Mo)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 3" {...field} data-testid="input-drivers-added" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="overnightDrivingPercent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>% Overnight Driving</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 10%" {...field} data-testid="input-overnight-percent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="driversUnionStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Union Status</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-union-status">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="union">Union</SelectItem>
                            <SelectItem value="non_union">Non-Union</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="driverPayType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Driver Pay Type</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-pay-type">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="salary">Salary</SelectItem>
                            <SelectItem value="per_trip">Per Trip</SelectItem>
                            <SelectItem value="mileage">Mileage</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="providesWorkersComp"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2 pt-6">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-workers-comp"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Provides Workers' Comp?</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Driver Schedule</h4>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => appendDriver({ fullName: "", dateOfBirth: "", licenseNumber: "", licenseState: "", cdlClass: "", yearsExperience: "", dateOfHire: "" })}
                    data-testid="button-add-driver"
                  >
                    <Plus className="h-4 w-4 mr-1" /> Add Driver
                  </Button>
                </div>
                {driverFields.map((field, index) => (
                  <div key={field.id} className="p-4 border rounded-lg mb-4 bg-secondary/5">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-sm">Driver {index + 1}</span>
                      {driverFields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeDriver(index)}
                          className="text-destructive hover:text-destructive"
                          data-testid={`button-remove-driver-${index}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <FormField
                        control={form.control}
                        name={`drivers.${index}.fullName`}
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel className="text-xs">Full Name</FormLabel>
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
                            <FormLabel className="text-xs">Date of Birth</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} data-testid={`input-driver-dob-${index}`} />
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
                              <Input type="date" {...field} data-testid={`input-driver-hire-${index}`} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`drivers.${index}.licenseNumber`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">CDL Number</FormLabel>
                            <FormControl>
                              <Input placeholder="License #" {...field} data-testid={`input-driver-license-${index}`} />
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
                                <SelectTrigger data-testid={`select-driver-state-${index}`}>
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
                        name={`drivers.${index}.cdlClass`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">CDL Class</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid={`select-driver-cdl-${index}`}>
                                  <SelectValue placeholder="Class" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="A">Class A</SelectItem>
                                <SelectItem value="B">Class B</SelectItem>
                                <SelectItem value="C">Class C</SelectItem>
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
                              <Input placeholder="e.g., 10" {...field} data-testid={`input-driver-exp-${index}`} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Maintenance Program</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="hasMaintenanceProgram"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-maintenance"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Has Preventive Maintenance Program?</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="vehicleServiceProvider"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Who Services Vehicles?</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-service-provider">
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="in_house">In-House</SelectItem>
                            <SelectItem value="dealer">Dealer</SelectItem>
                            <SelectItem value="third_party">Third Party Shop</SelectItem>
                            <SelectItem value="mixed">Mixed</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mechanicCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel># of Mechanics</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 3" {...field} data-testid="input-mechanic-count" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="servicesOtherVehicles"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange}
                            data-testid="checkbox-services-others"
                          />
                        </FormControl>
                        <FormLabel className="!mt-0">Services Other Companies' Vehicles?</FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Regulatory Filings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="usdotNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>USDOT Number</FormLabel>
                        <FormControl>
                          <Input placeholder="USDOT #" data-testid="input-usdot" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mcNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>MC Number</FormLabel>
                        <FormControl>
                          <Input placeholder="MC #" data-testid="input-mc" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="filingsNeeded"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Filings Required</FormLabel>
                        <div className="flex flex-wrap gap-4 mt-2">
                          {FILINGS_OPTIONS.map((filing) => (
                            <div key={filing.value} className="flex items-center space-x-2">
                              <Checkbox
                                checked={field.value?.includes(filing.value)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  if (checked) {
                                    field.onChange([...current, filing.value]);
                                  } else {
                                    field.onChange(current.filter((v) => v !== filing.value));
                                  }
                                }}
                                data-testid={`checkbox-filing-${filing.value}`}
                              />
                              <label className="text-sm">{filing.label}</label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-4">
                  <FormField
                    control={form.control}
                    name="statesVehiclesGaraged"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>States Where Vehicles Are Garaged</FormLabel>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {US_STATES.map((state) => (
                            <div key={state} className="flex items-center space-x-1">
                              <Checkbox
                                checked={field.value?.includes(state)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  if (checked) {
                                    field.onChange([...current, state]);
                                  } else {
                                    field.onChange(current.filter((v) => v !== state));
                                  }
                                }}
                                data-testid={`checkbox-state-${state}`}
                              />
                              <label className="text-xs">{state}</label>
                            </div>
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg text-primary flex items-center gap-2">
                <Bus className="h-5 w-5" />
                Coverage & Documents
              </CardTitle>
              <p className="text-sm text-muted-foreground">Select desired coverage and upload supporting documents</p>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Desired Coverage Limits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="desiredAutoLiabilityLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Auto Liability Limit</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-auto-liability">
                              <SelectValue placeholder="Select limit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LIABILITY_LIMITS.map((limit) => (
                              <SelectItem key={limit.value} value={limit.value}>{limit.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredPhysicalDamageDeductible"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Physical Damage Deductible</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-pd-deductible">
                              <SelectValue placeholder="Select deductible" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {PHYSICAL_DAMAGE_DEDUCTIBLES.map((ded) => (
                              <SelectItem key={ded.value} value={ded.value}>{ded.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredGeneralLiabilityLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>General Liability Limit</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-gl-limit">
                              <SelectValue placeholder="Select limit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LIABILITY_LIMITS.map((limit) => (
                              <SelectItem key={limit.value} value={limit.value}>{limit.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredHiredAutoLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hired Auto Limit</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-hired-limit">
                              <SelectValue placeholder="Select limit" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {LIABILITY_LIMITS.map((limit) => (
                              <SelectItem key={limit.value} value={limit.value}>{limit.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredUmLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Uninsured Motorist (UM)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., $1,000,000" data-testid="input-um-limit" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredUimLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Underinsured Motorist (UIM)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., $1,000,000" data-testid="input-uim-limit" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredMedPayLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Medical Payments</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., $5,000 per person" data-testid="input-medpay-limit" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredPipLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personal Injury Protection (PIP)</FormLabel>
                        <FormControl>
                          <Input placeholder="If applicable" data-testid="input-pip-limit" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredGarageLiabilityLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Garage Liability</FormLabel>
                        <FormControl>
                          <Input placeholder="If applicable" data-testid="input-garage-liability" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredGaragekeepersLimit"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Garagekeepers Legal Liability</FormLabel>
                        <FormControl>
                          <Input placeholder="If applicable" data-testid="input-garagekeepers" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Loss History</h3>
                <FormField
                  control={form.control}
                  name="lossHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please describe your loss history for the past 5 years</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Include number of claims, dates, types, amounts paid/reserved..."
                          className="min-h-[120px]"
                          data-testid="input-loss-history"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Please include loss runs if available (upload below)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="border-b pb-6">
                <h3 className="font-semibold mb-4">Upload Documents</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Please upload: Loss runs, vehicle schedule, driver list, safety program, maintenance records, operating authority
                </p>
                <ObjectUploader
                  onGetUploadParameters={handleGetUploadParameters}
                  onComplete={handleUploadComplete}
                  maxNumberOfFiles={10}
                  allowedFileTypes={[".pdf", ".doc", ".docx", ".xls", ".xlsx", ".jpg", ".jpeg", ".png"]}
                >
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Upload Documents
                  </span>
                </ObjectUploader>
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium">Uploaded Documents:</p>
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-secondary/10 rounded">
                        <FileText className="h-4 w-4 text-primary" />
                        <span className="text-sm flex-1 truncate">{file.split('/').pop()}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0"
                          data-testid={`button-remove-file-${index}`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-4">Additional Information</h3>
                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Any other information you'd like us to know</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Additional notes, special circumstances, questions..."
                          className="min-h-[100px]"
                          data-testid="input-additional-info"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between pt-6">
          {currentStep > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev-step">
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
          ) : (
            <div />
          )}
          {currentStep < 4 ? (
            <Button type="button" onClick={nextStep} data-testid="button-next-step">
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="bg-accent hover:bg-accent/90" data-testid="button-submit">
              {isSubmitting ? "Submitting..." : "Submit Quote Request"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
