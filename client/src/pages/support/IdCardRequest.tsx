import { ServiceRequestForm } from "./ServiceRequestForm";

export default function IdCardRequest() {
  return (
    <ServiceRequestForm
      requestType="id_card_request"
      title="Auto ID Card Request"
      description="Request new or replacement insurance ID cards for your vehicles."
      detailsLabel="ID Card Request Details"
      detailsPlaceholder="Please specify:&#10;- Which vehicles need ID cards?&#10;- How many copies do you need?&#10;- Should we mail them or email them?&#10;- Any specific delivery instructions?"
    />
  );
}
