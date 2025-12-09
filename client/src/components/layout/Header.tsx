import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownColumn {
  title: string;
  items: DropdownItem[];
}

interface NavItemWithDropdown {
  label: string;
  href: string;
  hasDropdown?: boolean;
  columns?: DropdownColumn[];
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const coverageColumns: DropdownColumn[] = [
    {
      title: "Commercial Auto",
      items: [
        { label: "Uber Black Insurance", href: "/services/commercial-auto/uber-black-california" },
        { label: "TNC & Rideshare", href: "/coverage/tnc" },
        { label: "Limousine & Chauffeured", href: "/coverage/limo" },
        { label: "Taxi Insurance", href: "/coverage/taxi" },
        { label: "NEMT Insurance", href: "/coverage/nemt" },
      ]
    },
    {
      title: "Specialty Lines",
      items: [
        { label: "School Bus Insurance", href: "/coverage/school-bus" },
        { label: "Paratransit Insurance", href: "/coverage/paratransit" },
        { label: "Ambulance & EMS", href: "/coverage/ambulance" },
        { label: "Captive Programs", href: "/coverage/captive" },
      ]
    },
    {
      title: "Additional Coverage",
      items: [
        { label: "Workers' Compensation", href: "/quote/workers-comp" },
        { label: "Excess Liability", href: "/quote/excess-liability" },
        { label: "Cyber Liability", href: "/quote/cyber" },
        { label: "View All Coverage", href: "/coverage" },
      ]
    }
  ];

  const servicesColumns: DropdownColumn[] = [
    {
      title: "Insurance Services",
      items: [
        { label: "Commercial Auto", href: "/services" },
        { label: "Fleet Insurance", href: "/services" },
        { label: "Risk Management", href: "/services" },
      ]
    },
    {
      title: "Get a Quote",
      items: [
        { label: "Uber Black Quote", href: "/quote/tnc" },
        { label: "Limousine Quote", href: "/quote/limo" },
        { label: "NEMT Quote", href: "/quote/nemt" },
        { label: "All Quote Types", href: "/quote" },
      ]
    }
  ];

  const supportColumns: DropdownColumn[] = [
    {
      title: "Policy Services",
      items: [
        { label: "Add Vehicle", href: "/client-support/add-vehicle" },
        { label: "Add Driver", href: "/client-support/add-driver" },
        { label: "Remove Vehicle", href: "/client-support/remove-vehicle" },
        { label: "Remove Driver", href: "/client-support/remove-driver" },
      ]
    },
    {
      title: "Requests",
      items: [
        { label: "ID Card Request", href: "/client-support/id-card" },
        { label: "Certificate Request", href: "/client-support/certificate" },
        { label: "Policy Change", href: "/client-support/policy-change" },
        { label: "Renewal Review", href: "/client-support/renewal-review" },
      ]
    },
    {
      title: "Claims & Payments",
      items: [
        { label: "File a Claim", href: "/client-support/claim" },
        { label: "Payments & Claims", href: "/client-support/payments-claims" },
        { label: "Questions & Comments", href: "/client-support/questions-comments" },
        { label: "All Support Options", href: "/client-support" },
      ]
    }
  ];

  const navItems: NavItemWithDropdown[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasDropdown: true, columns: servicesColumns },
    { label: "Coverage", href: "/coverage", hasDropdown: true, columns: coverageColumns },
    { label: "Client Support", href: "/client-support", hasDropdown: true, columns: supportColumns },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
        Skip to main content
      </a>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 cursor-pointer" aria-label="InsureLimos Home - A Casurance Company">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">InsureLimos</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">A Casurance Company</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href={item.href} 
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md ${
                  location === item.href || location.startsWith(item.href + '/') 
                    ? 'text-primary bg-primary/5' 
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
                aria-current={location === item.href ? "page" : undefined}
                aria-haspopup={item.hasDropdown ? "true" : undefined}
                aria-expanded={item.hasDropdown ? activeDropdown === item.label : undefined}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
              </Link>

              {item.hasDropdown && item.columns && activeDropdown === item.label && (
                <div 
                  className="absolute top-full left-0 mt-1 bg-white border border-border/50 rounded-lg shadow-xl py-6 px-6 min-w-[500px] z-50"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex gap-8">
                    {item.columns.map((column, colIdx) => (
                      <div key={colIdx} className="min-w-[140px]">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
                          {column.title}
                        </h3>
                        <ul className="space-y-2">
                          {column.items.map((subItem, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={subItem.href}
                                className="block text-sm text-foreground/80 hover:text-primary transition-colors py-1"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs text-muted-foreground" id="phone-label">Call Us Today</span>
            <a href="tel:888-254-0089" className="text-sm font-bold text-primary hover:underline flex items-center gap-1" aria-labelledby="phone-label">
              <Phone className="h-3 w-3" aria-hidden="true" /> 888-254-0089
            </a>
          </div>
          <Link href="/quote" className="cursor-pointer">
            <Button 
              className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md cursor-pointer" 
              aria-label="Get a free insurance quote"
              data-testid="button-header-get-quote"
            >
              Get a Quote
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto" aria-label="Mobile navigation menu">
              <nav className="flex flex-col gap-2 mt-8" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link 
                      href={item.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary py-2 cursor-pointer block"
                      aria-current={location === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.columns && (
                      <div className="pl-4 pb-3 space-y-3">
                        {item.columns.map((column, colIdx) => (
                          <div key={colIdx}>
                            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                              {column.title}
                            </h4>
                            <ul className="space-y-1">
                              {column.items.map((subItem, itemIdx) => (
                                <li key={itemIdx}>
                                  <Link
                                    href={subItem.href}
                                    className="block text-sm text-foreground/70 hover:text-primary py-1"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <Link href="/quote" onClick={() => setIsOpen(false)} className="cursor-pointer block">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-white mb-4 cursor-pointer" 
                      aria-label="Get a free insurance quote"
                      data-testid="button-mobile-get-quote"
                    >
                      Get a Quote
                    </Button>
                  </Link>
                  <a href="tel:888-254-0089" className="flex items-center justify-center gap-2 text-primary font-bold" aria-label="Call us at 888-254-0089">
                    <Phone className="h-4 w-4" aria-hidden="true" /> 888-254-0089
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
