import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Seo } from "@/components/seo/Seo";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="Privacy Policy"
        description="InsureLimos Privacy Policy. Learn how we collect, use, and protect your personal information when you use our transportation insurance services."
      />
      <Header />
      <main id="main-content" className="flex-1">
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Privacy Policy</h1>
            <p className="text-white/80 text-center mt-2">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Card>
            <CardContent className="prose prose-slate max-w-none p-8">
              <h2>1. Introduction</h2>
              <p>
                InsureLimos ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                insurelimos.com and insurelimos.net (collectively, the "Site") or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
                policy, please do not access the site.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul>
                <li>Request an insurance quote</li>
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Fill out any forms on our Site</li>
              </ul>
              <p>This information may include:</p>
              <ul>
                <li>Name and contact information (email, phone number, address)</li>
                <li>Business information (company name, business type, years in operation)</li>
                <li>Vehicle and driver information for insurance quotes</li>
                <li>Insurance history and claims information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>When you access our Site, we may automatically collect certain information, including:</p>
              <ul>
                <li>IP address and browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and respond to your insurance quote requests</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or illegal activity</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li><strong>Insurance Carriers:</strong> To obtain quotes and bind policies on your behalf</li>
                <li><strong>Service Providers:</strong> Third parties who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>6. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3>California Privacy Rights (CCPA)</h3>
              <p>
                California residents have additional rights under the California Consumer Privacy Act (CCPA), 
                including the right to know what personal information is collected, request deletion, and 
                opt-out of the sale of personal information. We do not sell personal information.
              </p>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing 
                activities. You can control cookies through your browser settings. Disabling cookies may 
                affect the functionality of our Site.
              </p>

              <h2>8. Third-Party Links</h2>
              <p>
                Our Site may contain links to third-party websites. We are not responsible for the privacy 
                practices of these websites. We encourage you to review the privacy policies of any 
                third-party sites you visit.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our Site is not intended for children under 18 years of age. We do not knowingly collect 
                personal information from children under 18.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated 
                by an updated "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2>11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p>
                <strong>InsureLimos</strong><br />
                Email: <a href="mailto:info@insurelimos.com">info@insurelimos.com</a><br />
                Website: insurelimos.com
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
