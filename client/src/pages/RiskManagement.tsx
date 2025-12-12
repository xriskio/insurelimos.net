import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  CheckCircle2,
  Car,
  Users,
  GraduationCap,
  Target,
  Handshake,
  Eye,
  Lock,
  Camera,
  Wrench,
  TrendingUp,
  Award,
  BookOpen
} from "lucide-react";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Risk Management", url: "/services/risk-management" },
];

const priorities = [
  {
    title: "Risk Management",
    description: "Industry's first standardized program.",
    icon: Target
  },
  {
    title: "Vehicle Safety",
    description: "Cameras, inspections, & maintenance.",
    icon: Camera
  },
  {
    title: "Driver Standards",
    description: "Training, monitoring, zero tolerance.",
    icon: Users
  },
  {
    title: "Insurance Benefits",
    description: "Data-driven insurability & incentives.",
    icon: TrendingUp
  },
  {
    title: "Different",
    description: "Be different from the rest of the industry.",
    icon: Award
  },
  {
    title: "Safety Guarantee",
    description: "Secure protocols.",
    icon: Lock
  }
];

const pillars = [
  {
    title: "Accountability",
    description: "Transparent standards, verified compliance, and consistent enforcement.",
    icon: Eye
  },
  {
    title: "Education",
    description: "Continuous training in defensive driving, customer care, and security.",
    icon: BookOpen
  },
  {
    title: "Community",
    description: "Partnering with associations, insurers, and regulators to raise the bar.",
    icon: Handshake
  }
];

export default function RiskManagement() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Risk Management Program - Transportation Safety & Insurance"
        description="Comprehensive risk management program for transportation companies. Driver training, vehicle safety, compliance monitoring, and insurance benefits. Industry-leading standards."
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-white">
              <p className="text-white/80 mb-2 font-medium">Safety First</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Risk Management Program</h1>
              <p className="text-xl text-white/90 mb-6">
                The industry's first standardized risk management program. Protect your drivers, passengers, and business with comprehensive safety protocols.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Learn About Our Program
                  </Button>
                </Link>
                <a href="tel:888-254-0089">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                    Call 888-254-0089
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6">Why Risk Management Matters</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  In the transportation industry, safety isn't just a priority—it's a business imperative. Our comprehensive risk management program helps you reduce accidents, lower insurance costs, and protect your most valuable assets: your drivers and passengers.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We've developed the industry's first standardized risk management framework, bringing best practices from the most safety-conscious operators and making them accessible to fleets of all sizes.
                </p>
              </section>

              {/* Prioritizing Section */}
              <section className="mb-12 bg-slate-900 text-white rounded-xl p-8">
                <p className="text-white/60 mb-6 text-sm font-medium uppercase tracking-wider">Prioritizing:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  {priorities.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Three Pillars */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Three Pillars</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {pillars.map((pillar, index) => (
                    <Card key={index} className="border-t-4 border-t-accent">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                          <pillar.icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="font-bold text-primary text-lg mb-2">{pillar.title}</h3>
                        <p className="text-muted-foreground text-sm">{pillar.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Program Benefits */}
              <section className="mb-12 bg-secondary/20 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-primary mb-8 text-center">Program Benefits</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Free online defensive driver training courses",
                    "Discounted background and MVR checks",
                    "Vehicle inspection checklists and protocols",
                    "Dash camera recommendations and best practices",
                    "Insurance premium discounts for compliant fleets",
                    "Monthly safety newsletters and updates",
                    "Access to risk management consultants",
                    "Certificate of completion for drivers"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Driver Training */}
              <section className="mb-12 bg-white rounded-xl p-8 border">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-primary">Driver Training Program</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Our comprehensive driver training program includes interactive online courses covering:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Defensive driving techniques",
                    "Passenger safety and comfort",
                    "Accident prevention strategies",
                    "Emergency response procedures",
                    "Customer service excellence",
                    "Regulatory compliance",
                    "Vehicle inspection protocols",
                    "Fatigue management"
                  ].map((topic, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Vehicle Safety */}
              <section className="mb-12 bg-white rounded-xl p-8 border">
                <div className="flex items-center gap-4 mb-6">
                  <Car className="h-10 w-10 text-primary" />
                  <h2 className="text-3xl font-bold text-primary">Vehicle Safety Standards</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Maintain your fleet to the highest standards with our vehicle safety protocols:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Pre-trip and post-trip inspection checklists",
                    "Preventive maintenance schedules",
                    "Dash camera installation guidelines",
                    "Tire and brake safety standards",
                    "Interior cleanliness protocols",
                    "Safety equipment requirements",
                    "Vehicle age and mileage guidelines",
                    "Annual safety certification"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Wrench className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Insurance Benefits */}
              <section className="mb-12 bg-primary text-white rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-10 w-10 text-accent" />
                  <h2 className="text-3xl font-bold">Insurance Benefits</h2>
                </div>
                <p className="text-lg text-white/90 mb-6">
                  Fleets enrolled in our risk management program may qualify for:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Premium discounts up to 15%",
                    "Lower deductibles",
                    "Favorable claims history recognition",
                    "Priority underwriting",
                    "Multi-year rate locks",
                    "Loss control support"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar with QuickQuoteForm */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-4">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Target className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Join Our Risk Management Program</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Take the first step toward a safer, more profitable transportation business. Our risk management specialists are ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Get Started
                </Button>
              </Link>
              <a href="tel:888-254-0089">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Call 888-254-0089
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
