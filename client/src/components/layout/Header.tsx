import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Coverage", href: "/coverage" },
    { label: "Locations", href: "/locations" },
    { label: "Client Support", href: "/client-support" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60" role="banner">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">
        Skip to main content
      </a>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer" aria-label="InsureLimos Home - A Casurance Company">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">InsureLimos</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">A Casurance Company</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              aria-current={location === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]" aria-label="Mobile navigation menu">
              <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary py-2 border-b border-border/50 cursor-pointer"
                    aria-current={location === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
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
