import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Car, 
  Users, 
  Building,
  Layers,
  CheckCircle2,
  Bus,
  GraduationCap,
  Wrench,
  FileText,
  AlertTriangle,
  Camera
} from "lucide-react";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { schoolBusFaqs } from "@/data/faqs";
import schoolBusHeroImage from "@assets/stock_images/yellow_school_bus_st_e3009504.jpg";
import { QuickQuoteForm } from "@/components/forms/QuickQuoteForm";
import { CoverageOptionsSection } from "@/components/sections/CoverageOptionsSection";

export default function SchoolBusCoverage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="School Bus Insurance - Coverage for School Bus Operators"
        description="Specialized insurance solutions for school bus operators and contractors. Comprehensive coverage for school district fleets, independent contractors, and private school transportation."
        canonical="https://insurelimos.net/coverage/school-bus"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section with Image */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={schoolBusHeroImage} 
            alt="Yellow school bus transportation" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-500/70" />
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl text-white">
              <p className="text-white/80 mb-2 font-medium">Specialized Coverage</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">School Bus Insurance</h1>
              <p className="text-xl text-white/90 mb-6">
                Specialized insurance solutions for school bus operators and contractors. Protect your business and the students you serve.
              </p>
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold">
                  Get a School Bus Insurance Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Introduction */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="hidden md:block shrink-0">
                      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-10 w-10 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Coverage for School Bus Operations</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        At InsureLimos.net, we understand the unique challenges and responsibilities faced by school bus operators. Our specialized school bus insurance programs are designed to provide comprehensive protection for your business, whether you're an independent contractor or a large fleet operator serving multiple school districts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mt-10">
                    {[
                      "School district-owned bus fleets",
                      "Independent school bus contractors",
                      "Private school transportation",
                      "Charter school transportation",
                      "Special needs student transportation",
                      "Activity and field trip transportation",
                      "Summer program transportation",
                      "Head Start programs",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why Choose Us */}
              <section className="py-8 bg-primary text-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our School Bus Insurance?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Specialized underwriting specifically for school bus risks",
                      "Competitive rates tailored to your operation",
                      "Flexible payment options aligned with school year budgeting",
                      "Experienced claims handling with 24/7 support",
                      "Risk management services focused on student safety",
                      "Assistance with regulatory compliance",
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                        <p className="text-white/90">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Coverage Options */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Coverage Options</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      We offer a wide range of coverage options to protect your school bus operation.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-2 hover:border-amber-300 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Shield className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Auto Liability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Coverage meets or exceeds federal and state requirements for school bus operators, providing protection against bodily injury and property damage claims. Limits up to $10 million available.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-amber-300 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Car className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Physical Damage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Comprehensive protection including collision, theft, vandalism, and weather damage. Coverage for permanently attached equipment like wheelchair lifts and cameras.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-amber-300 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Building className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">General Liability</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Protection from third-party claims for bodily injury, property damage, and personal injury that may occur on your premises or as a result of your operations.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-amber-300 transition-colors">
                      <CardHeader>
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                          <Users className="h-7 w-7 text-primary" />
                        </div>
                        <CardTitle className="text-xl">Workers' Compensation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Protect your employees and comply with state regulations with coverage that provides benefits for work-related injuries and illnesses.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Additional & Specialized Coverage */}
              <section className="py-8 bg-white rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Additional & Specialized Coverage</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Layers className="h-5 w-5" />
                        Additional Coverage Options
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Hired & Non-Owned Auto Liability",
                          "Uninsured/Underinsured Motorist",
                          "Personal Injury Protection (PIP)",
                          "Excess Liability/Umbrella",
                          "Employment Practices Liability",
                          "Cyber Liability",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-md">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        <Bus className="h-5 w-5" />
                        School Bus Specific Coverage
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Student Accident Coverage - Enhanced protection for student injuries",
                          "Sexual Abuse and Molestation Coverage",
                          "On-Board Equipment (cameras, GPS systems)",
                          "Garage Liability for maintenance facilities",
                          "Business Interruption Coverage",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-amber-50 rounded-md">
                            <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risk Management */}
              <section className="py-8 bg-secondary/20 rounded-lg mb-8">
                <div className="px-6">
                  <h2 className="text-3xl font-bold text-primary mb-4 text-center">Risk Management for School Bus Operators</h2>
                  <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                    We provide comprehensive risk management services to help you reduce claims and enhance student safety.
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="h-7 w-7 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-primary mb-2">Driver Safety Programs</h3>
                        <p className="text-sm text-muted-foreground">
                          Driver qualification, defensive driving training, student management, and emergency response.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6 text-center">
                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Wrench className="h-7 w-7 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-primary mb-2">Vehicle Maintenance</h3>
                        <p className="text-sm text-muted-foreground">
                          Preventive maintenance schedules, inspection procedures, and compliance with state requirements.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6 text-center">
                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="h-7 w-7 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-primary mb-2">Regulatory Compliance</h3>
                        <p className="text-sm text-muted-foreground">
                          FMCSA regulations, state requirements, driver licensing, and hours of service compliance.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6 text-center">
                        <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <AlertTriangle className="h-7 w-7 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-primary mb-2">Claims Management</h3>
                        <p className="text-sm text-muted-foreground">
                          24/7 claims reporting, dedicated adjusters, and post-accident investigation assistance.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Coverage Options Section */}
              <CoverageOptionsSection />

              {/* FAQ Section */}
              <FaqSchema faqs={schoolBusFaqs} title="School Bus Insurance FAQs" />
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
        <section className="py-20 bg-amber-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <Bus className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">Protect Your School Bus Operation Today</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Get specialized coverage designed for the unique needs of school bus operators and contractors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote/public-auto">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 font-bold">
                  Get a School Bus Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                  Speak with a Specialist
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
