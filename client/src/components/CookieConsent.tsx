import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg md:p-6"
      data-testid="cookie-consent-banner"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 id="cookie-consent-title" className="font-semibold text-lg mb-1">
              Cookie Notice
            </h3>
            <p id="cookie-consent-description" className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <a href="/privacy" className="text-primary underline hover:no-underline">
                Privacy Policy
              </a>{" "}
              for more information.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={declineCookies}
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              data-testid="button-accept-cookies"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
