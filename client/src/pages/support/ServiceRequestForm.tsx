import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  requestType: z.string(),
  policyNumber: z.string().min(1, "Policy number is required"),
  insuredName: z.string().min(2, "Insured name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  effectiveDate: z.string().optional(),
  details: z.string().min(10, "Please provide more details"),
  additionalInfo: z.string().optional(),
});

interface ServiceRequestFormProps {
  requestType: string;
  title: string;
  description: string;
  detailsLabel?: string;
  detailsPlaceholder?: string;
  additionalFields?: React.ReactNode;
}

export function ServiceRequestForm({ 
  requestType, 
  title, 
  description, 
  detailsLabel = "Request Details",
  detailsPlaceholder = "Please provide details about your request...",
  additionalFields
}: ServiceRequestFormProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requestType,
      policyNumber: "",
      insuredName: "",
      contactName: "",
      email: "",
      phone: "",
      effectiveDate: "",
      details: "",
      additionalInfo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit request');
      }

      setIsSubmitted(true);
      toast({
        title: "Request Submitted",
        description: "We've received your request and will respond shortly.",
      });
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Seo title={`${title} - InsureLimos`} description={description} />
        <Header />
        <main className="flex-1 py-16" id="main-content">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Request Submitted Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your submission. Our team will review your request and contact you within 1-2 business days.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link href="/client-support">
                    <Button variant="outline">Back to Client Support</Button>
                  </Link>
                  <Link href="/">
                    <Button>Return Home</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo title={`${title} - InsureLimos`} description={description} />
      <Header />
      
      <main className="flex-1 py-12" id="main-content">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Link href="/client-support" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Client Support
            </Link>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="policyNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Policy Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your policy number" {...field} data-testid="input-policyNumber" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="insuredName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Named Insured</FormLabel>
                            <FormControl>
                              <Input placeholder="Business or individual name on policy" {...field} data-testid="input-insuredName" />
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
                              <Input placeholder="Your full name" {...field} data-testid="input-contactName" />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
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
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
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
                    </div>

                    {additionalFields}

                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{detailsLabel}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={detailsPlaceholder}
                              className="min-h-[120px]"
                              {...field} 
                              data-testid="textarea-details"
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
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Any other details we should know..."
                              className="min-h-[80px]"
                              {...field} 
                              data-testid="textarea-additionalInfo"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-6 text-lg" data-testid="button-submit">
                      Submit Request
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
