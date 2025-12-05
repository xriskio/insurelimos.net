import { ServiceRequestForm } from "./ServiceRequestForm";

export default function AddDriver() {
  return (
    <ServiceRequestForm
      requestType="add_driver"
      title="Add Driver Request Form"
      description="Request to add a new driver to your policy."
      detailsLabel="Driver Information"
      detailsPlaceholder="Please provide the following driver details:&#10;- Full Legal Name&#10;- Date of Birth&#10;- Driver's License Number & State&#10;- Years of Commercial Driving Experience&#10;- Date of Hire&#10;- Any accidents or violations in the past 5 years?"
    />
  );
}
