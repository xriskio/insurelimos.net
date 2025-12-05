import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Building2, 
  Users, 
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Settings,
  BarChart3,
  Target,
  Briefcase,
  Scale,
  Award,
  FileCheck,
  HandshakeIcon,
  LineChart,
  Layers
} from "lucide-react";
import captiveHeroImage from "@assets/stock_images/corporate_business_m_6805a9ca.jpg";

export default function CaptiveCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Captive Insurance Programs - Alternative Risk Solutions for Transportation"
        description="Specialized captive insurance solutions for larger transportation fleets. Greater control, cost savings, and customized coverage through group captives and self-insurance programs."
        canonical="https://insurelimos.net/coverage/captive"
      />
      <Header />
      
      <main className="flex-1" id="main-content">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={captiveHeroImage} 
            alt="Executive meeting discussing captive insurance strategies" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Alternative Risk Solutions</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Captive Insurance Programs</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized captive solutions for larger transportation risks seeking greater control and retention.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Request a Feasibility Analysis
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">Alternative Risk Solutions for Transportation Businesses</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For larger transportation operations seeking greater control over their insurance program and the ability to retain more risk, captive insurance programs offer a sophisticated alternative to traditional insurance. At InsureLimos, we provide access to a range of captive solutions designed specifically for the transportation industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlike traditional insurance where premiums are paid to a third-party insurer, captive participants retain ownership of premium dollars not used for claims and expenses, creating the potential for investment income and return of underwriting profit.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Captive Programs Are Ideal For</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Larger fleet operations",
                  "Transportation businesses with strong risk management practices",
                  "Companies seeking greater control over claims handling",
                  "Operations looking to stabilize insurance costs over time",
                  "Businesses wanting to capture underwriting profit",
                  "Organizations seeking to customize coverage terms",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What is Captive Insurance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">What is a Captive Insurance Program?</h2>
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  A captive insurance program is a formalized self-insurance arrangement where the insured owns or participates in their own insurance company. This structure allows for greater risk retention, potential cost savings, and customized coverage solutions not available in the traditional insurance market.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unlike traditional insurance where premiums are paid to a third-party insurer, captive participants retain ownership of premium dollars not used for claims and expenses, creating the potential for investment income and return of underwriting profit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Captive Program Options */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Captive Program Options</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                We offer a range of captive solutions to meet the needs of different transportation operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="h-6 w-6 text-primary" />
                      Deductible Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For transportation businesses ready to take their first step into risk retention.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Large deductible programs",
                        "Deductible reimbursement policies",
                        "Aggregate deductible caps",
                        "Collateral options (LOC, trusts, bonds)",
                        "Claims handling flexibility",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-primary" />
                      Group Captives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Multiple transportation companies form a shared insurance company.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Shared ownership structure",
                        "Lower capital requirements",
                        "Risk diversification",
                        "Peer risk management collaboration",
                        "Potential for dividends",
                        "Access to reinsurance markets",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building2 className="h-6 w-6 text-primary" />
                      Large Account Customization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fully customized captive solutions for the largest operations.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "Single-parent captive formation",
                        "Custom domicile selection",
                        "Integrated risk financing",
                        "Multi-national capabilities",
                        "Enterprise risk integration",
                        "Captive management services",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Captive Insurance Programs</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-white/10 border-white/20">
                  <CardHeader>
                    <DollarSign className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="text-white text-lg">Financial Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>Reduced insurance costs</li>
                      <li>Cash flow advantages</li>
                      <li>Investment income potential</li>
                      <li>Capture underwriting profit</li>
                      <li>Tax efficiency</li>
                      <li>Cost stabilization</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardHeader>
                    <Settings className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="text-white text-lg">Operational Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>Direct claims control</li>
                      <li>Coverage customization</li>
                      <li>Risk management focus</li>
                      <li>Comprehensive data access</li>
                      <li>Service provider selection</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardHeader>
                    <Target className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="text-white text-lg">Strategic Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>Market independence</li>
                      <li>Coverage availability</li>
                      <li>Retention flexibility</li>
                      <li>Direct reinsurance access</li>
                      <li>Enterprise risk integration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20">
                  <CardHeader>
                    <Shield className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="text-white text-lg">Risk Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li>Loss prevention incentives</li>
                      <li>Peer collaboration</li>
                      <li>Claims data analysis</li>
                      <li>Specialized resources</li>
                      <li>Long-term strategy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Ideal Candidate Profile */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Is a Captive Program Right for Your Business?</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Captive insurance programs are sophisticated risk management tools that require careful consideration. They're typically best suited for transportation operations that meet certain criteria.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Ideal Candidate Profile
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Premium Volume", value: "Annual premiums of $250,000 or more" },
                      { label: "Strong Financials", value: "Healthy balance sheet and cash flow" },
                      { label: "Loss History", value: "Favorable and stable loss experience" },
                      { label: "Risk Management", value: "Robust safety and risk control programs" },
                      { label: "Management Commitment", value: "Long-term risk management philosophy" },
                      { label: "Risk Appetite", value: "Willingness to assume appropriate risk" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">{item.label}:</span>
                          <span className="text-muted-foreground ml-1">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-accent" />
                    Key Considerations
                  </h3>
                  <div className="space-y-3">
                    {[
                      { label: "Capital Commitment", value: "Ability to provide required capital" },
                      { label: "Time Horizon", value: "Captives are typically long-term strategies" },
                      { label: "Governance", value: "Willingness to participate in oversight" },
                      { label: "Regulatory Compliance", value: "Understanding of captive regulations" },
                      { label: "Exit Strategy", value: "Plan for potential future changes" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <Briefcase className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">{item.label}:</span>
                          <span className="text-muted-foreground ml-1">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feasibility Process */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-4 text-center">Our Feasibility Process</h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                We offer a comprehensive captive feasibility analysis to help you determine if a captive program is right for your transportation business.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: BarChart3, title: "Loss Analysis", desc: "Detailed review of historical claims" },
                  { icon: LineChart, title: "Financial Modeling", desc: "Projected captive performance scenarios" },
                  { icon: Target, title: "Risk Assessment", desc: "Evaluation of risk retention capacity" },
                  { icon: Layers, title: "Program Design", desc: "Customized captive structure recommendations" },
                  { icon: FileCheck, title: "Implementation Roadmap", desc: "Step-by-step formation plan" },
                  { icon: TrendingUp, title: "Cost-Benefit Analysis", desc: "Comprehensive financial projections" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 shadow-sm text-center">
                    <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expert Guidance */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Expert Guidance Throughout Your Journey</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: "Captive Formation", desc: "Assistance with all aspects of setup" },
                  { icon: Target, label: "Domicile Selection", desc: "Guidance on optimal jurisdiction" },
                  { icon: Scale, label: "Regulatory Compliance", desc: "Ensuring all requirements are met" },
                  { icon: Settings, label: "Ongoing Management", desc: "Day-to-day captive operations support" },
                  { icon: BarChart3, label: "Performance Monitoring", desc: "Regular program reviews" },
                  { icon: TrendingUp, label: "Strategic Planning", desc: "Long-term captive optimization" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                    <item.icon className="h-8 w-8 text-accent shrink-0" />
                    <div>
                      <h3 className="font-bold text-primary">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <HandshakeIcon className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-bold mb-4">Take Control of Your Insurance Program</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Discover if a captive insurance program is the right solution for your transportation business. Our team of alternative risk specialists is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold">
                  Request a Feasibility Analysis
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
