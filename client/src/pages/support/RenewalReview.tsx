import { ServiceRequestForm } from "./ServiceRequestForm";

export default function RenewalReview() {
  return (
    <ServiceRequestForm
      requestType="renewal_review"
      title="Commercial Renewal Review"
      description="Request a review of your commercial policy renewal terms and pricing."
      detailsLabel="Renewal Review Details"
      detailsPlaceholder="Please provide:&#10;- Current policy expiration date&#10;- Any changes to your operations since last renewal?&#10;- Fleet size changes?&#10;- New drivers or vehicles to add?&#10;- Claims or incidents to report?&#10;- Specific concerns about renewal pricing?&#10;- Coverage changes you'd like to discuss?"
    />
  );
}
