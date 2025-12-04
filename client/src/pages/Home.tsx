import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CoverageList } from "@/components/sections/CoverageList";
import { Link } from "wouter";
import { Seo } from "@/components/seo/Seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Seo 
        title="Specialized Insurance for Transportation Companies"
        description="Comprehensive coverage solutions for limousines, taxis, TNC, buses, and more. Serving CA, AZ, CO, ID, IL, KS, KY, MN, MO, NV, OH, OK, PA, TN, TX, UT, VA, WI."
        canonical="https://insurelimos.net/"
      />
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <ServicesGrid />
        <CoverageList />
        
        {/* Trust/CTA Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Commercial Auto Insurance?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Get a customized quote today. Our independent agents are ready to find the perfect coverage for your fleet at the best price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg transition-transform hover:scale-105">
                  Get Your Free Quote
                </button>
              </Link>
              <a href="tel:888-254-0089">
                <button className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:bg-gray-100 transition-transform hover:scale-105">
                  Call 888-254-0089
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
