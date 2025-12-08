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
import QuoteConfirmation from "@/pages/QuoteConfirmation";
import Services from "@/pages/Services";
import Coverage from "@/pages/Coverage";
import TncCoverage from "@/pages/TncCoverage";
import NemtCoverage from "@/pages/NemtCoverage";
import TaxiCoverage from "@/pages/TaxiCoverage";
import SchoolBusCoverage from "@/pages/SchoolBusCoverage";
import LimoCoverage from "@/pages/LimoCoverage";
import CaptiveCoverage from "@/pages/CaptiveCoverage";
import AmbulanceCoverage from "@/pages/AmbulanceCoverage";
import ParatransitCoverage from "@/pages/ParatransitCoverage";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import News from "@/pages/News";
import NewsPost from "@/pages/NewsPost";
import ClientSupport from "@/pages/ClientSupport";
import PaymentsClaims from "@/pages/support/PaymentsClaims";
import QuestionsComments from "@/pages/support/QuestionsComments";
import ChangeAddress from "@/pages/support/ChangeAddress";
import AddVehicle from "@/pages/support/AddVehicle";
import AddDriver from "@/pages/support/AddDriver";
import IdCardRequest from "@/pages/support/IdCardRequest";
import CertificateRequest from "@/pages/support/CertificateRequest";
import ClaimForm from "@/pages/support/ClaimForm";
import RemoveDriver from "@/pages/support/RemoveDriver";
import RemoveVehicle from "@/pages/support/RemoveVehicle";
import PolicyChange from "@/pages/support/PolicyChange";
import RenewalReview from "@/pages/support/RenewalReview";
import LandingPage from "@/pages/LandingPage";
import Locations from "@/pages/Locations";
import LocationDetail from "@/pages/LocationDetail";

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
      <Route path="/quote-confirmation" component={QuoteConfirmation} />
      
      <Route path="/services" component={Services} />
      <Route path="/coverage" component={Coverage} />
      <Route path="/coverage/tnc" component={TncCoverage} />
      <Route path="/coverage/nemt" component={NemtCoverage} />
      <Route path="/coverage/taxi" component={TaxiCoverage} />
      <Route path="/coverage/school-bus" component={SchoolBusCoverage} />
      <Route path="/coverage/limo" component={LimoCoverage} />
      <Route path="/coverage/captive" component={CaptiveCoverage} />
      <Route path="/coverage/ambulance" component={AmbulanceCoverage} />
      <Route path="/coverage/paratransit" component={ParatransitCoverage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin" component={Admin} />
      <Route path="/get-quote" component={LandingPage} />
      <Route path="/lp" component={LandingPage} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsPost} />
      
      <Route path="/client-support" component={ClientSupport} />
      <Route path="/client-support/payments-claims" component={PaymentsClaims} />
      <Route path="/client-support/questions" component={QuestionsComments} />
      <Route path="/client-support/change-address" component={ChangeAddress} />
      <Route path="/client-support/add-vehicle" component={AddVehicle} />
      <Route path="/client-support/add-driver" component={AddDriver} />
      <Route path="/client-support/id-card-request" component={IdCardRequest} />
      <Route path="/client-support/certificate-request" component={CertificateRequest} />
      <Route path="/client-support/claim-form" component={ClaimForm} />
      <Route path="/client-support/remove-driver" component={RemoveDriver} />
      <Route path="/client-support/remove-vehicle" component={RemoveVehicle} />
      <Route path="/client-support/policy-change" component={PolicyChange} />
      <Route path="/client-support/renewal-review" component={RenewalReview} />
      
      <Route path="/locations" component={Locations} />
      <Route path="/location/:city/:type" component={LocationDetail} />
      
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
