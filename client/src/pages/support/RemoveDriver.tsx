import { ServiceRequestForm } from "./ServiceRequestForm";

export default function RemoveDriver() {
  return (
    <ServiceRequestForm
      requestType="remove_driver"
      title="Remove Driver Form"
      description="Request to remove a driver from your policy."
      detailsLabel="Driver Removal Details"
      detailsPlaceholder="Please provide:&#10;- Full name of driver to be removed&#10;- Reason for removal (e.g., no longer employed, transferred to another location)&#10;- Effective date for removal&#10;- Any other relevant information"
    />
  );
}
