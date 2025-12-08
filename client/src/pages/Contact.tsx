import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Seo, BreadcrumbSchema } from "@/components/seo/Seo";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you shortly.",
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
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Contact InsureLimos - Get a Free Transportation Insurance Quote"
        description="Contact InsureLimos for commercial auto insurance quotes. Call 888-254-0089 or fill out our form. Our Los Angeles-based team serves limousine, taxi, TNC, NEMT, and bus operators in 18 states. Open Monday-Friday 8AM-6PM PST."
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero */}
        <section className="bg-primary text-white py-16" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 text-center">
            <h1 id="contact-heading" className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80">
              We're here to help with all your transportation insurance needs.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-primary mb-4">Get In Touch</h3>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Office Location</h4>
                      <p className="text-muted-foreground">
                        Casurance Agency Insurance Services, LLC<br />
                        714 W Olympic Blvd, Ste 906<br />
                        Los Angeles, CA 90015
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Phone Numbers</h4>
                      <p className="text-muted-foreground">
                        Local: <a href="tel:323-546-3030" className="hover:text-primary">323-546-3030</a><br />
                        Toll Free: <a href="tel:888-254-0089" className="hover:text-primary">888-254-0089</a><br />
                        Fax: 310-464-0633
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@insurelimos.com" className="hover:text-primary">info@insurelimos.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-accent shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
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
                              <FormLabel>Email Address</FormLabel>
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
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="md:col-span-2">
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How can we help?</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="I have a question about..." className="min-h-[150px]" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8">
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="h-[400px] bg-muted w-full relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.746736844244!2d-118.26573202346326!3d34.04483521786368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b8c1c0e78f%3A0x1c0c0c0c0c0c0c0c!2s714%20W%20Olympic%20Blvd%20%23906%2C%20Los%20Angeles%2C%20CA%2090015!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy"
             className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
           ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
}
