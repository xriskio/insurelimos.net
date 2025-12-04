import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">InsureLimos</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              A Casurance Company. We are an Independent Insurance Agency dedicated to finding the best rates for transportation companies in California and beyond.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/coverage" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Insurance Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/limo" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Limousine Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/taxi" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Taxi Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/tnc" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  TNC & Mobility
                </Link>
              </li>
              <li>
                <Link href="/services/nemt" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  NEMT Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/bus" className="text-primary-foreground/70 hover:text-white transition-colors cursor-pointer">
                  Bus & Motorcoach
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-1 text-accent" />
                <span className="text-primary-foreground/80">
                  714 W Olympic Blvd, Ste 906<br />
                  Los Angeles, CA 90015
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:323-546-3030" className="text-primary-foreground/80 hover:text-white">
                  323-546-3030
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold text-accent text-sm w-5 text-center">TF</span>
                <a href="tel:888-254-0089" className="text-primary-foreground/80 hover:text-white">
                  888-254-0089
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:info@insurelimos.com" className="text-primary-foreground/80 hover:text-white">
                  info@insurelimos.com
                </a>
              </li>
            </ul>
            <Button className="mt-6 w-full bg-accent hover:bg-accent/90 text-white">
              Request a Quote
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Casurance Agency Insurance Services, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
