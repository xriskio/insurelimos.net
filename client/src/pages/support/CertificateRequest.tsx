import { ServiceRequestForm } from "./ServiceRequestForm";

export default function CertificateRequest() {
  return (
    <ServiceRequestForm
      requestType="certificate_request"
      title="Certificate of Insurance Request"
      description="Request a certificate of insurance (COI) for a third party."
      detailsLabel="Certificate Details"
      detailsPlaceholder="Please provide:&#10;- Certificate Holder Name&#10;- Certificate Holder Address&#10;- Description of Operations&#10;- Any special wording requirements?&#10;- Additional Insured status needed?&#10;- Waiver of Subrogation needed?&#10;- Email address to send certificate to"
    />
  );
}
