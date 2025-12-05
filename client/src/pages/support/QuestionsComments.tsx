import { ServiceRequestForm } from "./ServiceRequestForm";

export default function QuestionsComments() {
  return (
    <ServiceRequestForm
      requestType="questions_comments"
      title="Questions & Comments"
      description="Send us your questions, comments, or feedback about your policy or our services."
      detailsLabel="Your Question or Comment"
      detailsPlaceholder="Please share your question, comment, or feedback..."
    />
  );
}
