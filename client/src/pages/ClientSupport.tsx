import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  CreditCard, 
  MessageSquare, 
  MapPin, 
  Car, 
  UserPlus, 
  CreditCard as IdCard,
  FileText,
  ClipboardList,
  UserMinus,
  CarFront,
  Settings,
  RefreshCw,
  ChevronRight,
  Headphones
} from "lucide-react";

const supportOptions = [
  {
    title: "Payments & Claims",
    description: "Make a payment or file a claim",
    icon: CreditCard,
    href: "/client-support/payments-claims",
    color: "bg-blue-500",
  },
  {
    title: "Questions & Comments",
    description: "Send us your questions or feedback",
    icon: MessageSquare,
    href: "/client-support/questions",
    color: "bg-green-500",
  },
  {
    title: "Change of Address Form",
    description: "Update your mailing or garaging address",
    icon: MapPin,
    href: "/client-support/change-address",
    color: "bg-purple-500",
  },
  {
    title: "Add a Vehicle Form",
    description: "Add a new vehicle to your policy",
    icon: Car,
    href: "/client-support/add-vehicle",
    color: "bg-orange-500",
  },
  {
    title: "Add Driver Request Form",
    description: "Add a new driver to your policy",
    icon: UserPlus,
    href: "/client-support/add-driver",
    color: "bg-teal-500",
  },
  {
    title: "Auto ID Card Request",
    description: "Request new insurance ID cards",
    icon: IdCard,
    href: "/client-support/id-card-request",
    color: "bg-indigo-500",
  },
  {
    title: "Certificate of Insurance",
    description: "Request a certificate of insurance",
    icon: FileText,
    href: "/client-support/certificate-request",
    color: "bg-cyan-500",
  },
  {
    title: "Online Claim Form",
    description: "File a new insurance claim",
    icon: ClipboardList,
    href: "/client-support/claim-form",
    color: "bg-red-500",
  },
  {
    title: "Remove Driver Form",
    description: "Remove a driver from your policy",
    icon: UserMinus,
    href: "/client-support/remove-driver",
    color: "bg-amber-500",
  },
  {
    title: "Remove Vehicle Form",
    description: "Remove a vehicle from your policy",
    icon: CarFront,
    href: "/client-support/remove-vehicle",
    color: "bg-rose-500",
  },
  {
    title: "Policy Change Request",
    description: "Request changes to your policy",
    icon: Settings,
    href: "/client-support/policy-change",
    color: "bg-slate-500",
  },
  {
    title: "Commercial Renewal Review",
    description: "Request a renewal review for your commercial policy",
    icon: RefreshCw,
    href: "/client-support/renewal-review",
    color: "bg-emerald-500",
  },
];

export default function ClientSupport() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Client Support - InsureLimos"
        description="Access client support services including payments, claims, policy changes, and more."
        canonical="https://insurelimos.net/client-support"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
                <Headphones className="h-8 w-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Support</h1>
              <p className="text-xl text-white/90">
                We're here to help. Select a service below to get started.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportOptions.map((option) => (
                <Link key={option.href} href={option.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-lg ${option.color} text-white`}>
                          <option.icon className="h-6 w-6" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <CardTitle className="text-lg mt-4 group-hover:text-primary transition-colors">
                        {option.title}
                      </CardTitle>
                      <CardDescription>{option.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is available to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:888-254-0089" 
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <CreditCard className="h-5 w-5" />
                  Call: 888-254-0089
                </a>
                <a 
                  href="mailto:support@insurelimos.com" 
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  <MessageSquare className="h-5 w-5" />
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
