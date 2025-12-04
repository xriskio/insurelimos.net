import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'InsureLimos <noreply@insurelimos.com>';
const ADMIN_EMAIL = 'info@insurelimos.com';

interface QuoteNotificationData {
  referenceNumber: string;
  quoteType: string;
  businessName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  state: string;
}

export async function sendQuoteNotificationToAdmin(data: QuoteNotificationData) {
  const quoteTypeLabels: Record<string, string> = {
    limousine: 'Limousine Insurance',
    rideshare: 'Rideshare Insurance',
    tnc: 'TNC Insurance',
    nemt: 'NEMT Insurance',
    'public-auto': 'Public Auto Insurance',
    taxi: 'Taxi Insurance',
    'school-bus': 'School Bus Insurance',
  };

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
  const quoteTypeLabels: Record<string, string> = {
    limousine: 'Limousine Insurance',
    rideshare: 'Rideshare Insurance',
    tnc: 'TNC Insurance',
    nemt: 'NEMT Insurance',
    'public-auto': 'Public Auto Insurance',
    taxi: 'Taxi Insurance',
    'school-bus': 'School Bus Insurance',
  };

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
                <strong>Email:</strong> <a href="mailto:info@insurelimos.com">info@insurelimos.com</a><br>
                <strong>Phone:</strong> <a href="tel:+1-800-555-0199">(800) 555-0199</a>
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
