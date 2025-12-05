import { ServiceRequestForm } from "./ServiceRequestForm";

export default function PolicyChange() {
  return (
    <ServiceRequestForm
      requestType="policy_change"
      title="Policy Change Request"
      description="Request changes to your existing policy coverage or information."
      detailsLabel="Requested Changes"
      detailsPlaceholder="Please describe the changes you'd like to make:&#10;- Coverage limit changes&#10;- Deductible changes&#10;- Adding/removing coverage types&#10;- Business name changes&#10;- Any other policy modifications"
    />
  );
}
