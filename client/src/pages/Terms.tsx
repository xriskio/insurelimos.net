import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <div className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Terms of Service</h1>
            <p className="text-white/80 text-center mt-2">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <Card>
            <CardContent className="prose prose-slate max-w-none p-8">
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the InsureLimos website (insurelimos.com and insurelimos.net), 
                you agree to be bound by these Terms of Service and all applicable laws and regulations. 
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h2>2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on InsureLimos's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on the website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2>3. Insurance Services</h2>
              <h3>Quote Requests</h3>
              <p>
                When you submit a quote request through our website, you represent that all information 
                provided is accurate and complete. Inaccurate information may result in incorrect quotes 
                or denial of coverage.
              </p>
              
              <h3>No Guarantee of Coverage</h3>
              <p>
                Quote requests submitted through this website do not guarantee coverage. All insurance 
                policies are subject to underwriting approval by the insurance carrier. InsureLimos acts 
                as an insurance agency and does not directly provide insurance coverage.
              </p>

              <h3>Policy Terms</h3>
              <p>
                Actual policy terms, conditions, exclusions, and coverage limits are determined by the 
                insurance carrier and will be specified in your insurance policy documents. Please review 
                all policy documents carefully.
              </p>

              <h2>4. Disclaimer</h2>
              <p>
                The materials on InsureLimos's website are provided on an 'as is' basis. InsureLimos makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation:
              </p>
              <ul>
                <li>Implied warranties or conditions of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property or other violation of rights</li>
              </ul>
              <p>
                Further, InsureLimos does not warrant or make any representations concerning the accuracy, 
                likely results, or reliability of the use of the materials on its website or otherwise 
                relating to such materials.
              </p>

              <h2>5. Limitations</h2>
              <p>
                In no event shall InsureLimos or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on InsureLimos's website, even if InsureLimos 
                or an authorized representative has been notified orally or in writing of the possibility of 
                such damage.
              </p>

              <h2>6. Accuracy of Materials</h2>
              <p>
                The materials appearing on InsureLimos's website could include technical, typographical, or 
                photographic errors. InsureLimos does not warrant that any of the materials on its website 
                are accurate, complete, or current. InsureLimos may make changes to the materials contained 
                on its website at any time without notice.
              </p>

              <h2>7. Links</h2>
              <p>
                InsureLimos has not reviewed all of the sites linked to its website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply endorsement 
                by InsureLimos of the site. Use of any such linked website is at the user's own risk.
              </p>

              <h2>8. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the website for any unlawful purpose</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Use any robot, spider, or other automatic device to access the website</li>
                <li>Transmit any viruses or malicious code</li>
              </ul>

              <h2>9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless InsureLimos, its officers, directors, employees, 
                and agents from any claims, damages, losses, or expenses arising from your use of the 
                website or violation of these Terms of Service.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of 
                the State of California, and you irrevocably submit to the exclusive jurisdiction of the 
                courts in that State.
              </p>

              <h2>11. Modifications</h2>
              <p>
                InsureLimos may revise these Terms of Service at any time without notice. By using this 
                website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>

              <h2>12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
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
