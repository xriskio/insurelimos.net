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
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-primary tracking-tight">InsureLimos</span>
            <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">A Casurance Company</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs text-muted-foreground">Call Us Today</span>
            <a href="tel:888-254-0089" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
              <Phone className="h-3 w-3" /> 888-254-0089
            </a>
          </div>
          <Link href="/quote">
            <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-md">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary py-2 border-b border-border/50 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link href="/quote" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white mb-4">
                      Get a Quote
                    </Button>
                  </Link>
                  <a href="tel:888-254-0089" className="flex items-center justify-center gap-2 text-primary font-bold">
                    <Phone className="h-4 w-4" /> 888-254-0089
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
