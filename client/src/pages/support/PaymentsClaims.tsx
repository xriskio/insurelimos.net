import { ServiceRequestForm } from "./ServiceRequestForm";

export default function PaymentsClaims() {
  return (
    <ServiceRequestForm
      requestType="payments_claims"
      title="Payments & Claims"
      description="Make a payment on your policy or inquire about a claim."
      detailsLabel="Payment or Claim Details"
      detailsPlaceholder="Please describe your payment or claim inquiry. Include any relevant claim numbers, payment amounts, or dates..."
    />
  );
}
