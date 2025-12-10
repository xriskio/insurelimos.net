import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Seo } from "@/components/seo/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, 
  FileText, 
  Search, 
  Shield, 
  Building,
  Car,
  Bus
} from "lucide-react";

const cpucLinks = [
  {
    title: "Apply for a New TCP",
    description: "TCP application forms for new charter-party carrier permits in California",
    url: "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/charter-party-carriers/tcp-forms",
    icon: FileText,
    category: "Applications"
  },
  {
    title: "Search TCP & TNC Permits",
    description: "Search the CPUC portal for active TCP and TNC permits",
    url: "https://tcportal.cpuc.ca.gov/TCP/s/",
    icon: Search,
    category: "Search & Verify"
  },
  {
    title: "Passenger Carriers Insurance Requirements",
    description: "CPUC insurance requirements for passenger carriers in California",
    url: "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/passenger-carriers-insurance-requirements",
    icon: Shield,
    category: "Insurance"
  },
  {
    title: "Apply for a TNC Permit",
    description: "Transportation Network Company application form for California",
    url: "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/transportation-network-companies/transportation-network-company-tnc-application-form",
    icon: Car,
    category: "Applications"
  },
  {
    title: "Charter-Party Carriers Overview",
    description: "Complete information about TCP requirements and regulations",
    url: "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/charter-party-carriers",
    icon: Bus,
    category: "Regulations"
  },
  {
    title: "TNC Insurance Requirements",
    description: "Insurance requirements specific to Transportation Network Companies",
    url: "https://www.cpuc.ca.gov/regulatory-services/licensing/transportation-licensing-and-analysis-branch/transportation-network-companies/tnc-insurance-requirements",
    icon: Shield,
    category: "Insurance"
  },
];

const federalLinks = [
  {
    title: "FMCSA - Federal Motor Carrier Safety Administration",
    description: "Federal regulations for interstate commercial motor carriers",
    url: "https://www.fmcsa.dot.gov/",
    icon: Building,
    category: "Federal"
  },
  {
    title: "USDOT Registration",
    description: "Register for a USDOT number for interstate operations",
    url: "https://www.fmcsa.dot.gov/registration",
    icon: FileText,
    category: "Federal"
  },
];

export default function IndustryLinks() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Industry Links - CPUC, TNC & TCP Resources"
        description="Essential links for California transportation operators including CPUC TCP applications, TNC permits, insurance requirements, and federal regulations."
        canonical="https://insurelimos.net/industry-links"
      />
      <Header />
      
      <main className="flex-1" id="main-content" role="main">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Links</h1>
              <p className="text-xl text-white/90">
                Essential resources for California transportation operators - CPUC applications, permit searches, and regulatory information
              </p>
            </div>
          </div>
        </section>

        {/* CPUC Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">California Public Utilities Commission (CPUC)</h2>
                <p className="text-lg text-muted-foreground">
                  Official resources for TCP and TNC operators in California
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cpucLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    data-testid={`link-cpuc-${i}`}
                  >
                    <Card className="h-full border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                            <link.icon className="h-6 w-6 text-primary" />
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {link.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-3">{link.description}</p>
                        <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                          {link.category}
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Federal Links */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Federal Resources</h2>
                <p className="text-lg text-muted-foreground">
                  FMCSA and USDOT resources for interstate carriers
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {federalLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    data-testid={`link-federal-${i}`}
                  >
                    <Card className="h-full border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                            <link.icon className="h-6 w-6 text-primary" />
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {link.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm mb-3">{link.description}</p>
                        <span className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                          {link.category}
                        </span>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Help with TCP or TNC Insurance?</h2>
              <p className="text-xl text-white/90 mb-8">
                We specialize in CPUC-compliant insurance for charter-party carriers and transportation network companies. Get a quote today.
              </p>
              <a href="/lp/uber-black">
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
