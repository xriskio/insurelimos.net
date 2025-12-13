import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo, BreadcrumbSchema } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  TrendingUp,
  Award,
  BookOpen,
  FileText,
  ExternalLink,
  ChevronRight,
  ClipboardCheck,
  BarChart3,
  Radio,
  Wrench,
  Package
} from "lucide-react";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { useState } from "react";

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


const riskSolutions = [
  {
    title: "Vehicle Telematics Program",
    description: "A proven GPS solution that provides real-time insights to help organizations correct dangerous driving behaviors, provided at no-cost to InsureLimos auto insureds.",
    icon: Radio
  },
  {
    title: "Employee Screening & Records",
    description: "With comprehensive background checks, you get validated screening services to help minimize risk and determine the quality of your new hires.",
    icon: Users
  },
  {
    title: "Learning Management System",
    description: "This service is designed to complement our policyholders' existing risk management efforts and further protect their organizations. Assign trainings to staff and run usage reports.",
    icon: GraduationCap
  }
];

const howWeHelp = [
  {
    id: "field-reps",
    title: "Loss Control Field Representatives",
    description: "Gain access to Loss Control Representatives who collaborate with you to identify safety needs and develop tailored solutions. You can expect your representative to spend time getting to know your organization, performing on-site safety visits and analyzing losses. This lays the foundation for us to help you find root causes, identify exposures and develop customized solutions that fit your operation."
  },
  {
    id: "dashboard",
    title: "Loss Control Dashboard",
    description: "Access real-time data and analytics to monitor your fleet's safety performance. Track incidents, identify trends, and make data-driven decisions to improve your risk profile."
  },
  {
    id: "summits",
    title: "Safety Summits",
    description: "Attend industry-leading safety conferences and workshops. Learn best practices from experts and network with other transportation professionals committed to safety excellence."
  },
  {
    id: "telematics",
    title: "Leveraging Telematics",
    description: "Integrate telematics data with your risk management strategy. Use GPS tracking, driver behavior monitoring, and vehicle diagnostics to reduce accidents and improve operations."
  },
  {
    id: "solutions",
    title: "Product & Service Solutions",
    description: "Access a comprehensive suite of risk management tools, from driver training programs to vehicle inspection checklists and safety certification processes."
  },
  {
    id: "meetings",
    title: "Pre-packaged Safety Meetings",
    description: "Ready-to-use safety meeting materials designed specifically for transportation companies. Cover topics from defensive driving to passenger assistance and regulatory compliance."
  }
];

const safetyManagementCycles = [
  {
    title: "Safety Management Cycle (SMC) Overview",
    description: "The Safety Management Cycle (SMC) tool can help identify and correct motor carrier compliance and safety before they occur."
  },
  {
    title: "Crash Indicator BASIC Process",
    description: "Recommended process, management and controls to help reduce or eliminate Crash Indicator violations."
  },
  {
    title: "Unsafe Driver BASIC Process",
    description: "Recommended process, management and controls to help reduce or eliminate Unsafe Driver violations."
  },
  {
    title: "Driver Fitness BASIC Process",
    description: "Recommended process, management and controls to help improve Driver Fitness."
  },
  {
    title: "Drugs and Alcohol BASIC Process",
    description: "Recommended process, management and controls to help complete Controlled Substances/Alcohol Behavior Analysis."
  },
  {
    title: "Hours of Service BASIC Process",
    description: "Recommended process, management and controls to help create and enforce a strong Hours of Services process."
  },
  {
    title: "Vehicle Maintenance BASIC Process",
    description: "Recommended process, management and controls to help maintain compliant, safe and efficient fleet operations."
  }
];

const otherResources = [
  {
    title: "Loss Control Checklist",
    description: "Use this checklist to help you and your team gather and/or stage essential items, complete necessary tasks and mitigate the risk to your business."
  },
  {
    title: "DOT Education and Technical Assistance Guide",
    description: "Training guide from the FMCSA's Education and Technical Assistance Program to help motor carriers improve highway safety."
  },
  {
    title: "FMCSA Portal Login",
    description: "Direct link to access the FMCSA safety management system."
  },
  {
    title: "Motor Carrier Safety Planner",
    description: "This online guide provides simple explanations and templates to help companies that operate CMVs understand and comply with Federal safety regulations."
  },
  {
    title: "FMCSA Safety Management System",
    description: "Link directly to details about FMCSA safety management system."
  }
];

const dashcamPartners = [
  { name: "Samsara", description: "Fleet management and AI-powered safety" },
  { name: "Lytx", description: "Video telematics and driver safety" },
  { name: "Motive", description: "GPS tracking and compliance solutions" },
  { name: "Netradyne", description: "AI dashcams and driver recognition" }
];

const articles = [
  {
    title: "Wheelchair & Passenger Handling Best Practices for Drivers",
    description: "This white paper was co-authored by the experts at Driverge Vehicle Innovations, National Interstate, and Vanliner Insurance."
  },
  {
    title: "Seatbelt Safety Tips for NEMT & Paratransit Operators",
    description: "Through our partnership with industry leaders, we've compiled essential seatbelt safety guidelines for specialized transport."
  },
  {
    title: "Tips to Improve Workers' Compensation Outcomes",
    description: "You rely on your employees to perform challenging and often strenuous jobs. Your employees are the backbone of the industry."
  }
];

export default function RiskManagement() {
  const [activeHelpItem, setActiveHelpItem] = useState("field-reps");
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Loss Control & Risk Management - Transportation Safety Solutions"
        description="Comprehensive loss control and risk management for transportation companies. Telematics, driver training, safety summits, and compliance resources. Protect your fleet and reduce claims."
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl text-white">
              <p className="text-accent font-bold mb-2 uppercase tracking-wider">Loss Control</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">A Safe Operation Benefits Everyone</h1>
              <p className="text-xl text-white/90 mb-6">
                Effective risk management is critical to ensuring the success of your business. Our loss control team uses a proactive and collaborative approach, working with you to design a tailored solution to help enhance your safety culture and minimize losses.
              </p>
              <p className="text-lg text-white/80 mb-8">
                At the end of the day, this can improve your bottom line and protect the business you have worked hard to build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                    Talk to Our Team
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

        {/* Expert Team Intro */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <p className="text-lg text-muted-foreground max-w-4xl">
              You can expect more from our industry-leading loss control representatives: top-tier service, clearer communication and the kind of in-depth knowledge only gained from experience. They are conveniently stationed around the country to serve as local experts on requirements from individual states, DOT, FMCSA, OSHA and other organizations. Our team's knowledge and skills are yours to leverage when building upon your safety culture, learning best practices and understanding new regulations or compliance mandates.
            </p>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* How Our Team Can Help */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-8">How Our Team Can Help</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 space-y-2">
                    {howWeHelp.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveHelpItem(item.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-lg text-left transition-all ${
                          activeHelpItem === item.id 
                            ? 'bg-primary text-white' 
                            : 'bg-slate-100 hover:bg-slate-200 text-foreground'
                        }`}
                        data-testid={`button-help-${item.id}`}
                      >
                        <span className="font-medium text-sm uppercase tracking-wide">{item.title}</span>
                        <ChevronRight className={`h-5 w-5 transition-transform ${activeHelpItem === item.id ? 'rotate-90' : ''}`} />
                      </button>
                    ))}
                  </div>
                  <div className="md:w-1/2">
                    {howWeHelp.filter(item => item.id === activeHelpItem).map((item) => (
                      <div key={item.id} className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="font-bold text-primary text-lg mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
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


              {/* Auto Risk Management Solutions */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Auto Risk Management Solutions</h2>
                <p className="text-muted-foreground mb-8">
                  As businesses heavily rely on vehicles for their operations, managing auto risk becomes increasingly imperative. We understand the challenges businesses encounter in ensuring the safety of their drivers and vehicles while maintaining operational efficiency. That's why we are dedicated to providing tailored solutions and expert guidance to proactively manage auto risks.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {riskSolutions.map((solution, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <solution.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm">{solution.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Dashcam Partners */}
              <section className="mb-12 bg-slate-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-primary mb-4">Access to the Industry's Top Dashcam Providers</h2>
                <p className="text-muted-foreground mb-6">
                  Enhancing your fleet safety and driver training program has never been easier. Together with Samsara, Lytx, Motive and Netradyne, InsureLimos now has discounted technology options available to large trucking, public auto, commercial specialty auto, and moving & storage customers. For participating customers, an insurance premium discount and enhanced Loss Control services may also be available.
                </p>
                <div className="flex flex-wrap gap-3">
                  {dashcamPartners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border shadow-sm">
                      <Camera className="h-4 w-4 text-primary" />
                      <span className="font-medium text-sm">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Safety Management Cycles & Resources */}
              <section className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6">Safety Management Cycles</h3>
                    <div className="space-y-4">
                      {safetyManagementCycles.map((cycle, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4">
                          <h4 className="font-semibold text-primary text-sm mb-1">{cycle.title}</h4>
                          <p className="text-muted-foreground text-xs">{cycle.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-6">Other Resources</h3>
                    <div className="space-y-4">
                      {otherResources.map((resource, index) => (
                        <div key={index} className="border-l-2 border-accent pl-4">
                          <h4 className="font-semibold text-primary text-sm mb-1">{resource.title}</h4>
                          <p className="text-muted-foreground text-xs">{resource.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Articles and Resources */}
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-accent font-bold uppercase tracking-wider text-sm">Articles and Resources</p>
                    <p className="text-muted-foreground text-sm">Read more from our team about best practices, industry insights and relevant program information.</p>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {articles.map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-primary mb-2 text-sm">{article.title}</h4>
                        <p className="text-muted-foreground text-xs mb-4">{article.description}</p>
                        <span className="text-accent text-xs font-medium flex items-center gap-1">
                          Read More <ChevronRight className="h-3 w-3" />
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar with QuickQuoteForm */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <QuickQuoteForm />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Partner With Our Loss Control Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Take the first step toward a safer, more profitable transportation business. Our risk management specialists are ready to help design a customized program for your operation.
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
