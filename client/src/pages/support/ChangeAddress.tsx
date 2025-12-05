import { ServiceRequestForm } from "./ServiceRequestForm";

export default function ChangeAddress() {
  return (
    <ServiceRequestForm
      requestType="change_address"
      title="Change of Address Form"
      description="Update your mailing address or vehicle garaging location on your policy."
      detailsLabel="New Address Information"
      detailsPlaceholder="Please provide your new address including:&#10;- Street Address&#10;- City, State, ZIP&#10;- Is this a mailing address change, garaging address change, or both?"
    />
  );
}
