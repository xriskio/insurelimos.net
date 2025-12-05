import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SkipLink } from "@/components/accessibility/SkipLink";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import QuotePage from "@/pages/Quote";
import Services from "@/pages/Services";
import Coverage from "@/pages/Coverage";
import TncCoverage from "@/pages/TncCoverage";
import NemtCoverage from "@/pages/NemtCoverage";
import TaxiCoverage from "@/pages/TaxiCoverage";
import SchoolBusCoverage from "@/pages/SchoolBusCoverage";
import LimoCoverage from "@/pages/LimoCoverage";
import CaptiveCoverage from "@/pages/CaptiveCoverage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import News from "@/pages/News";
import NewsPost from "@/pages/NewsPost";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quote" component={QuotePage} />
      <Route path="/quote/:type" component={QuotePage} />
      
      <Route path="/services" component={Services} />
      <Route path="/coverage" component={Coverage} />
      <Route path="/coverage/tnc" component={TncCoverage} />
      <Route path="/coverage/nemt" component={NemtCoverage} />
      <Route path="/coverage/taxi" component={TaxiCoverage} />
      <Route path="/coverage/school-bus" component={SchoolBusCoverage} />
      <Route path="/coverage/limo" component={LimoCoverage} />
      <Route path="/coverage/captive" component={CaptiveCoverage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsPost} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SkipLink />
        <ScrollToTop />
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
