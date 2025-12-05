import { ServiceRequestForm } from "./ServiceRequestForm";

export default function RemoveVehicle() {
  return (
    <ServiceRequestForm
      requestType="remove_vehicle"
      title="Remove Vehicle Form"
      description="Request to remove a vehicle from your policy."
      detailsLabel="Vehicle Removal Details"
      detailsPlaceholder="Please provide:&#10;- Year, Make, Model of vehicle to remove&#10;- VIN (if known)&#10;- Reason for removal (e.g., sold, totaled, no longer in service)&#10;- Effective date for removal&#10;- If sold, provide buyer information if known"
    />
  );
}
