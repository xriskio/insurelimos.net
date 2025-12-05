import { ServiceRequestForm } from "./ServiceRequestForm";

export default function AddVehicle() {
  return (
    <ServiceRequestForm
      requestType="add_vehicle"
      title="Add a Vehicle Form"
      description="Request to add a new vehicle to your existing policy."
      detailsLabel="Vehicle Information"
      detailsPlaceholder="Please provide the following vehicle details:&#10;- Year, Make, Model&#10;- VIN (Vehicle Identification Number)&#10;- Seating Capacity&#10;- Estimated Value&#10;- Purchase Date&#10;- Lienholder (if any)"
    />
  );
}
