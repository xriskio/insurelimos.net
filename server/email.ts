import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'InsureLimos <noreply@insurelimos.net>';
const ADMIN_EMAIL = 'info@insurelimos.net';

interface QuoteNotificationData {
  referenceNumber: string;
  quoteType: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  state: string;
}

interface ServiceRequestNotificationData {
  requestId: string;
  requestType: string;
  policyNumber: string;
  insuredName: string;
  contactName: string;
  email: string;
  phone: string;
  details: string;
}

interface ContactNotificationData {
  messageId: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const quoteTypeLabels: Record<string, string> = {
  limousine: 'Limousine Insurance',
  rideshare: 'Rideshare Insurance',
  tnc: 'TNC Insurance',
  nemt: 'NEMT Insurance',
  paratransit: 'Paratransit Insurance',
  'public-auto': 'Public Auto Insurance',
  taxi: 'Taxi Insurance',
  'school-bus': 'School Bus Insurance',
  ambulance: 'Ambulance/EMS Insurance',
  captive: 'Captive Program',
  'workers-comp': 'Workers Compensation',
  'excess-liability': 'Excess Liability',
  'cyber-liability': 'Cyber Liability',
};

const serviceRequestTypeLabels: Record<string, string> = {
  payments_claims: 'Payments & Claims',
  questions_comments: 'Questions & Comments',
  change_address: 'Change of Address',
  add_vehicle: 'Add Vehicle',
  add_driver: 'Add Driver',
  id_card_request: 'Auto ID Card Request',
  certificate_request: 'Certificate of Insurance',
  claim_form: 'Online Claim Form',
  remove_driver: 'Remove Driver',
  remove_vehicle: 'Remove Vehicle',
  policy_change: 'Policy Change Request',
  renewal_review: 'Commercial Renewal Review',
};

export async function sendQuoteNotificationToAdmin(data: QuoteNotificationData) {
  const quoteTypeLabel = quoteTypeLabels[data.quoteType] || data.quoteType;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Quote Request - ${data.referenceNumber} - ${quoteTypeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Quote Request</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Reference: ${data.referenceNumber}</h2>
              <p style="font-size: 18px; color: #c41e3a;"><strong>Quote Type:</strong> ${quoteTypeLabel}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Business Name:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.businessName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Contact Name:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.contactEmail}">${data.contactEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="tel:${data.contactPhone}">${data.contactPhone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>State:</strong></td>
                  <td style="padding: 8px 0;">${data.state}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <p style="color: #666;">View full details in the Admin Portal</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
          </div>
        </div>
      `,
    });
    console.log(`Admin notification sent for quote ${data.referenceNumber}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return false;
  }
}

export async function sendQuoteConfirmationToCustomer(data: QuoteNotificationData) {
  const quoteTypeLabel = quoteTypeLabels[data.quoteType] || data.quoteType;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.contactEmail,
      subject: `Quote Request Received - ${data.referenceNumber} | InsureLimos`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Your Quote Request</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="font-size: 16px;">Dear ${data.contactName},</p>
              <p>Thank you for requesting a ${quoteTypeLabel} quote from InsureLimos. We have received your submission and our team is reviewing your information.</p>
            </div>
            
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0; font-size: 14px;">YOUR REFERENCE NUMBER</p>
              <h2 style="margin: 10px 0; font-size: 28px; letter-spacing: 2px;">${data.referenceNumber}</h2>
              <p style="margin: 0; font-size: 12px;">Please save this number for your records</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">What Happens Next?</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>Our underwriting team will review your submission within 24 hours</li>
                <li>We may reach out if we need any additional information</li>
                <li>You will receive your customized quote via email</li>
              </ul>
              <p style="margin-top: 20px;">If you have any questions, please contact us:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@insurelimos.net">info@insurelimos.net</a><br>
                <strong>Phone:</strong> <a href="tel:888-254-0089">888-254-0089</a>
              </p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Protecting Your Fleet, Your Business, Your Future</p>
          </div>
        </div>
      `,
    });
    console.log(`Confirmation email sent to ${data.contactEmail} for quote ${data.referenceNumber}`);
    return true;
  } catch (error) {
    console.error('Failed to send customer confirmation:', error);
    return false;
  }
}

export async function sendServiceRequestNotificationToAdmin(data: ServiceRequestNotificationData) {
  const requestTypeLabel = serviceRequestTypeLabels[data.requestType] || data.requestType;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Service Request - ${data.requestId} - ${requestTypeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Service Request</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Request ID: ${data.requestId}</h2>
              <p style="font-size: 18px; color: #c41e3a;"><strong>Request Type:</strong> ${requestTypeLabel}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Policy Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Policy Number:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.policyNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Named Insured:</strong></td>
                  <td style="padding: 8px 0;">${data.insuredName}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Contact Name:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Request Details</h3>
              <p style="color: #333; white-space: pre-line;">${data.details}</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
          </div>
        </div>
      `,
    });
    console.log(`Admin notification sent for service request ${data.requestId}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin service request notification:', error);
    return false;
  }
}

export async function sendServiceRequestConfirmationToCustomer(data: ServiceRequestNotificationData) {
  const requestTypeLabel = serviceRequestTypeLabels[data.requestType] || data.requestType;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `Service Request Received - ${data.requestId} | InsureLimos`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Service Request Received</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="font-size: 16px;">Dear ${data.contactName},</p>
              <p>Thank you for submitting your ${requestTypeLabel} request. We have received your submission and our team will process it promptly.</p>
            </div>
            
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0; font-size: 14px;">YOUR REQUEST NUMBER</p>
              <h2 style="margin: 10px 0; font-size: 28px; letter-spacing: 2px;">${data.requestId}</h2>
              <p style="margin: 0; font-size: 12px;">Please save this number for your records</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Request Summary</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Request Type:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${requestTypeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;"><strong>Policy Number:</strong></td>
                  <td style="padding: 8px 0;">${data.policyNumber}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">What Happens Next?</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li>Our team will review your request within 1-2 business days</li>
                <li>We may reach out if we need any additional information</li>
                <li>You will receive confirmation once your request is processed</li>
              </ul>
              <p style="margin-top: 20px;">If you have any questions, please contact us:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@insurelimos.net">info@insurelimos.net</a><br>
                <strong>Phone:</strong> <a href="tel:888-254-0089">888-254-0089</a>
              </p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Protecting Your Fleet, Your Business, Your Future</p>
          </div>
        </div>
      `,
    });
    console.log(`Confirmation email sent to ${data.email} for service request ${data.requestId}`);
    return true;
  } catch (error) {
    console.error('Failed to send customer service request confirmation:', error);
    return false;
  }
}

export async function sendContactNotificationToAdmin(data: ContactNotificationData) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Message - ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Contact Message</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e3a5f; margin-top: 0;">Message ID: ${data.messageId}</h2>
              <p style="font-size: 18px; color: #c41e3a;"><strong>Subject:</strong> ${data.subject}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0;"><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Message</h3>
              <p style="color: #333; white-space: pre-line;">${data.message}</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
          </div>
        </div>
      `,
    });
    console.log(`Admin notification sent for contact message ${data.messageId}`);
    return true;
  } catch (error) {
    console.error('Failed to send admin contact notification:', error);
    return false;
  }
}

export async function sendContactConfirmationToCustomer(data: ContactNotificationData) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `Message Received - ${data.messageId} | InsureLimos`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">Thank You for Contacting Us</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="font-size: 16px;">Dear ${data.name},</p>
              <p>Thank you for reaching out to InsureLimos. We have received your message and our team will respond as soon as possible.</p>
            </div>
            
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
              <p style="margin: 0; font-size: 14px;">YOUR MESSAGE REFERENCE</p>
              <h2 style="margin: 10px 0; font-size: 24px; letter-spacing: 2px;">${data.messageId}</h2>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e3a5f; margin-top: 0;">Your Message</h3>
              <p style="color: #666; font-style: italic;">Subject: ${data.subject}</p>
              <p style="color: #333; white-space: pre-line;">${data.message}</p>
              
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
              
              <p>If you need immediate assistance, please contact us:</p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@insurelimos.net">info@insurelimos.net</a><br>
                <strong>Phone:</strong> <a href="tel:888-254-0089">888-254-0089</a>
              </p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">Protecting Your Fleet, Your Business, Your Future</p>
          </div>
        </div>
      `,
    });
    console.log(`Confirmation email sent to ${data.email} for contact message ${data.messageId}`);
    return true;
  } catch (error) {
    console.error('Failed to send customer contact confirmation:', error);
    return false;
  }
}
