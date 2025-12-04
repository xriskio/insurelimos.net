import heroImage from "@assets/generated_images/luxury_limousine_city_street_dusk.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Limousine Fleet" 
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm border border-accent/30">
            The Public Auto Specialists
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-lg">
            Specialized Insurance for <span className="text-accent-foreground/90">Transportation</span> Companies
          </h1>
          <p className="mb-8 text-lg text-gray-100 sm:text-xl max-w-xl leading-relaxed drop-shadow-md">
            Comprehensive coverage solutions tailored for limousines, taxis, TNC fleets, buses, and NEMT providers. Drive with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg h-14 px-8 shadow-lg shadow-black/20">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/40 font-semibold text-lg h-14 px-8 backdrop-blur-sm">
                Explore Services <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom decorative strip */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
