import { useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Mail, ArrowLeft, Calendar, FileText } from "lucide-react";
import { Seo } from "@/components/seo/Seo";
import { motion } from "framer-motion";

const COVERAGE_LABELS: Record<string, string> = {
  limousine: "Limousine",
  rideshare: "Rideshare",
  tnc: "TNC",
  nemt: "NEMT",
  "public-auto": "Public Auto",
  "workers-comp": "Workers Compensation",
  "excess-liability": "Excess Liability",
  "cyber-liability": "Cyber Liability",
  ambulance: "Ambulance",
  captive: "Captive Programs",
};

export default function QuoteConfirmation() {
  const [, setLocation] = useLocation();
  
  const params = new URLSearchParams(window.location.search);
  const referenceNumber = params.get("ref") || "N/A";
  const businessName = params.get("business") || "Your Business";
  const email = params.get("email") || "your email";
  const insuranceType = params.get("type") || "transportation";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Quote Submitted Successfully - InsureLimos" 
        description="Your quote request has been submitted successfully. Our team will contact you within 24 hours."
      />
      <Header />
      
      <main className="flex-1 py-12 bg-secondary/20" id="main-content" role="main" aria-label="Quote confirmation">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-12 h-12" aria-hidden="true" />
                </div>
                <h1 className="text-3xl font-bold mb-2">Quote Request Submitted!</h1>
                <p className="text-green-100">A confirmation email has been sent to {email}</p>
              </div>

              <CardContent className="p-8">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        Reference Number
                      </p>
                      <p className="text-2xl font-bold text-primary font-mono">{referenceNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Business Name</p>
                      <p className="text-lg font-semibold text-gray-800">{businessName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Coverage Type</p>
                      <p className="text-lg font-semibold text-gray-800">{COVERAGE_LABELS[insuranceType] || insuranceType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        Submitted
                      </p>
                      <p className="text-lg font-semibold text-gray-800">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-lg text-foreground">What happens next?</h3>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">1</span>
                      <span>Our team will review your information within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">2</span>
                      <span>We'll contact you to gather any additional details needed for your quote</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">3</span>
                      <span>Receive competitive quotes from multiple A-rated insurance carriers</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-blue-800">Check Your Email</p>
                      <p className="text-sm text-blue-700">
                        We've sent a confirmation to <strong>{email}</strong> with your reference number 
                        and details about next steps. Please check your spam folder if you don't see it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-yellow-600" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-yellow-800">Need Immediate Assistance?</p>
                      <p className="text-sm text-yellow-700">
                        Call us now: <a href="tel:+18882540089" className="font-bold hover:underline" aria-label="Call 1-888-254-0089">1-888-254-0089</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => setLocation("/")}
                    className="flex-1 bg-primary hover:bg-primary/90"
                    data-testid="button-return-home"
                  >
                    Return to Homepage
                  </Button>
                  <Button
                    onClick={() => setLocation("/quote")}
                    variant="outline"
                    className="flex-1"
                    data-testid="button-another-quote"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                    Submit Another Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-8 text-muted-foreground">
              <p className="text-sm">
                Please save your reference number <strong className="text-primary">{referenceNumber}</strong> for your records.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
