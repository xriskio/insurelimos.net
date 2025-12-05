import { ServiceRequestForm } from "./ServiceRequestForm";

export default function ClaimForm() {
  return (
    <ServiceRequestForm
      requestType="claim_form"
      title="Online Claim Form"
      description="Report a new insurance claim for review and processing."
      detailsLabel="Claim Details"
      detailsPlaceholder="Please provide as much detail as possible:&#10;- Date and time of incident&#10;- Location of incident&#10;- Description of what happened&#10;- Vehicles involved (Year/Make/Model)&#10;- Driver name at time of incident&#10;- Were there any injuries?&#10;- Were police called? (Report number if available)&#10;- Other party information (if applicable)&#10;- Witness information (if available)"
    />
  );
}
