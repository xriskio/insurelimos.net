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
  allFields?: Record<string, any>;
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
  allFields?: Record<string, any>;
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
  bus: 'Bus & Motorcoach Insurance',
  sprinter: 'Sprinter & Van Insurance',
  tcp: 'TCP Charter Insurance',
  'medical-daycare': 'Medical Daycare Insurance',
  ambulance: 'Ambulance/EMS Insurance',
  captive: 'Captive Program',
  'workers-comp': 'Workers Compensation',
  'Workers Compensation': 'Workers Compensation',
  'excess-liability': 'Excess Liability',
  'Excess Liability': 'Excess Liability',
  'cyber-liability': 'Cyber Liability',
  'Cyber Liability': 'Cyber Liability',
  'Ambulance': 'Ambulance/EMS Insurance',
  'Captive Program': 'Captive Program',
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

const fieldLabels: Record<string, string> = {
  businessName: 'Business Name',
  insuredName: 'Insured Name',
  contactName: 'Contact Name',
  contactEmail: 'Email',
  contactPhone: 'Phone',
  email: 'Email',
  phone: 'Phone',
  address: 'Address',
  city: 'City',
  state: 'State',
  zipCode: 'ZIP Code',
  yearsInBusiness: 'Years in Business',
  numberOfVehicles: 'Number of Vehicles',
  fleetSize: 'Fleet Size',
  numberOfDrivers: 'Number of Drivers',
  annualMileage: 'Annual Mileage',
  operatingRadius: 'Operating Radius',
  statesOfOperation: 'States of Operation',
  garageZipCode: 'Garage ZIP Code',
  garagingAddress: 'Garaging Address',
  dotNumber: 'DOT Number',
  mcNumber: 'MC Number',
  tcpNumber: 'TCP Number',
  businessType: 'Business Type',
  serviceType: 'Service Type',
  serviceArea: 'Service Area',
  effectiveDate: 'Effective Date',
  expirationDate: 'Expiration Date',
  currentCarrier: 'Current Carrier',
  currentPremium: 'Current Premium',
  liabilityLimit: 'Liability Limit',
  desiredLiabilityLimit: 'Desired Liability Limit',
  physicalDamageLimit: 'Physical Damage Limit',
  hasAutoLiability: 'Auto Liability Coverage',
  hasPhysicalDamage: 'Physical Damage Coverage',
  hasWorkersComp: 'Workers Comp Coverage',
  hasInlandMarine: 'Inland Marine Coverage',
  hasGeneralLiability: 'General Liability Coverage',
  hasProfessionalLiability: 'Professional Liability Coverage',
  hasProperty: 'Property Coverage',
  hasUmbrella: 'Umbrella Coverage',
  hasEbl: 'EBL Coverage',
  hasMedPay: 'Med Pay Coverage',
  hasUninsuredMotorist: 'Uninsured Motorist Coverage',
  filingsNeeded: 'Filings Needed',
  vehicles: 'Vehicles',
  drivers: 'Drivers',
  lossHistory: 'Loss History',
  notes: 'Additional Notes',
  uploadedDocuments: 'Uploaded Documents',
  numberOfEmployees: 'Number of Employees',
  annualPayroll: 'Annual Payroll',
  hasCurrentCoverage: 'Has Current Coverage',
  experienceModifier: 'Experience Modifier',
  currentLiabilityLimit: 'Current Liability Limit',
  desiredExcessLimit: 'Desired Excess Limit',
  underlyingCarrier: 'Underlying Carrier',
  annualRevenue: 'Annual Revenue',
  numberOfRecords: 'Number of Records',
  acceptsCreditCards: 'Accepts Credit Cards',
  storesCustomerData: 'Stores Customer Data',
  desiredLimit: 'Desired Limit',
  numberOfAmbulances: 'Number of Ambulances',
  annualCalls: 'Annual Calls',
  annualPremium: 'Annual Premium',
  captiveType: 'Captive Type',
  lossRatio: 'Loss Ratio',
  safetyProgram: 'Safety Program',
  riskManagement: 'Risk Management',
  policyNumber: 'Policy Number',
  requestType: 'Request Type',
  details: 'Request Details',
};

function formatFieldValue(key: string, value: any): string {
  if (value === null || value === undefined || value === '') {
    return '<span style="color: #999;">Not provided</span>';
  }
  
  if (typeof value === 'boolean') {
    return value ? '<span style="color: #28a745;">Yes</span>' : '<span style="color: #dc3545;">No</span>';
  }
  
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return '<span style="color: #999;">None</span>';
    }
    
    if (key === 'vehicles' && typeof value[0] === 'object') {
      return formatVehiclesTable(value);
    }
    
    if (key === 'drivers' && typeof value[0] === 'object') {
      return formatDriversTable(value);
    }
    
    if (key === 'lossHistory' && typeof value[0] === 'object') {
      return formatLossHistoryTable(value);
    }
    
    return value.join(', ');
  }
  
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 2);
  }
  
  return String(value);
}

function formatVehiclesTable(vehicles: any[]): string {
  if (!vehicles || vehicles.length === 0) return '<span style="color: #999;">No vehicles listed</span>';
  
  let html = `<table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px;">
    <thead>
      <tr style="background-color: #1e3a5f; color: white;">
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">#</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Year</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Make</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Model</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">VIN</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Value</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Seating</th>
      </tr>
    </thead>
    <tbody>`;
  
  vehicles.forEach((v, i) => {
    html += `
      <tr style="background-color: ${i % 2 === 0 ? '#f9f9f9' : '#fff'};">
        <td style="padding: 8px; border: 1px solid #ddd;">${i + 1}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.year || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.make || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.model || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.vin || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.value ? '$' + v.value : '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${v.seatingCapacity || v.passengers || '-'}</td>
      </tr>`;
  });
  
  html += '</tbody></table>';
  return html;
}

function formatDriversTable(drivers: any[]): string {
  if (!drivers || drivers.length === 0) return '<span style="color: #999;">No drivers listed</span>';
  
  let html = `<table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px;">
    <thead>
      <tr style="background-color: #1e3a5f; color: white;">
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">#</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Name</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">DOB</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">License #</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">State</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Experience</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Violations</th>
      </tr>
    </thead>
    <tbody>`;
  
  drivers.forEach((d, i) => {
    html += `
      <tr style="background-color: ${i % 2 === 0 ? '#f9f9f9' : '#fff'};">
        <td style="padding: 8px; border: 1px solid #ddd;">${i + 1}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.name || d.firstName + ' ' + (d.lastName || '') || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.dateOfBirth || d.dob || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.licenseNumber || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.licenseState || d.state || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.yearsExperience || d.experience || '-'} yrs</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${d.violations || d.accidents || '0'}</td>
      </tr>`;
  });
  
  html += '</tbody></table>';
  return html;
}

function formatLossHistoryTable(losses: any[]): string {
  if (!losses || losses.length === 0) return '<span style="color: #999;">No loss history</span>';
  
  let html = `<table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px;">
    <thead>
      <tr style="background-color: #c41e3a; color: white;">
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Date</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Type</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Description</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Amount</th>
        <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Status</th>
      </tr>
    </thead>
    <tbody>`;
  
  losses.forEach((l, i) => {
    html += `
      <tr style="background-color: ${i % 2 === 0 ? '#fff5f5' : '#fff'};">
        <td style="padding: 8px; border: 1px solid #ddd;">${l.date || l.lossDate || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${l.type || l.lossType || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${l.description || '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${l.amount ? '$' + l.amount : '-'}</td>
        <td style="padding: 8px; border: 1px solid #ddd;">${l.status || 'Closed'}</td>
      </tr>`;
  });
  
  html += '</tbody></table>';
  return html;
}

function generateAllFieldsHtml(allFields: Record<string, any>, excludeKeys: string[] = []): string {
  const excludeSet = new Set([...excludeKeys, 'id', 'createdAt', 'updatedAt', 'referenceNumber']);
  
  const businessFields: string[] = [];
  const contactFields: string[] = [];
  const operationalFields: string[] = [];
  const coverageFields: string[] = [];
  const arrayFields: string[] = [];
  const otherFields: string[] = [];
  
  const businessKeys = ['businessName', 'insuredName', 'businessType', 'yearsInBusiness', 'address', 'city', 'state', 'zipCode', 'garagingAddress', 'garageZipCode', 'dotNumber', 'mcNumber', 'tcpNumber'];
  const contactKeys = ['contactName', 'contactEmail', 'email', 'contactPhone', 'phone'];
  const operationalKeys = ['numberOfVehicles', 'fleetSize', 'numberOfDrivers', 'numberOfAmbulances', 'annualMileage', 'operatingRadius', 'statesOfOperation', 'serviceType', 'serviceArea', 'annualCalls', 'effectiveDate', 'expirationDate', 'currentCarrier', 'currentPremium', 'numberOfEmployees', 'annualPayroll', 'annualRevenue', 'numberOfRecords', 'annualPremium', 'captiveType'];
  const coverageKeys = ['liabilityLimit', 'desiredLiabilityLimit', 'physicalDamageLimit', 'currentLiabilityLimit', 'desiredExcessLimit', 'desiredLimit', 'hasAutoLiability', 'hasPhysicalDamage', 'hasWorkersComp', 'hasInlandMarine', 'hasGeneralLiability', 'hasProfessionalLiability', 'hasProperty', 'hasUmbrella', 'hasEbl', 'hasMedPay', 'hasUninsuredMotorist', 'hasCurrentCoverage', 'acceptsCreditCards', 'storesCustomerData', 'filingsNeeded', 'experienceModifier', 'underlyingCarrier', 'lossRatio', 'safetyProgram', 'riskManagement'];
  const arrayKeys = ['vehicles', 'drivers', 'lossHistory', 'uploadedDocuments'];
  
  Object.entries(allFields).forEach(([key, value]) => {
    if (excludeSet.has(key)) return;
    if (value === null || value === undefined || value === '') return;
    
    const label = fieldLabels[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
    const formattedValue = formatFieldValue(key, value);
    const row = `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%; vertical-align: top;">${label}:</td>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">${formattedValue}</td>
      </tr>`;
    
    if (arrayKeys.includes(key)) {
      arrayFields.push(`
        <div style="margin-top: 20px;">
          <h4 style="color: #1e3a5f; margin-bottom: 10px;">${label}</h4>
          ${formattedValue}
        </div>`);
    } else if (businessKeys.includes(key)) {
      businessFields.push(row);
    } else if (contactKeys.includes(key)) {
      contactFields.push(row);
    } else if (operationalKeys.includes(key)) {
      operationalFields.push(row);
    } else if (coverageKeys.includes(key)) {
      coverageFields.push(row);
    } else {
      otherFields.push(row);
    }
  });
  
  let html = '';
  
  if (businessFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Business Information</h3>
        <table style="width: 100%; border-collapse: collapse;">${businessFields.join('')}</table>
      </div>`;
  }
  
  if (contactFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">${contactFields.join('')}</table>
      </div>`;
  }
  
  if (operationalFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Operational Details</h3>
        <table style="width: 100%; border-collapse: collapse;">${operationalFields.join('')}</table>
      </div>`;
  }
  
  if (coverageFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Coverage Requirements</h3>
        <table style="width: 100%; border-collapse: collapse;">${coverageFields.join('')}</table>
      </div>`;
  }
  
  if (otherFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Additional Information</h3>
        <table style="width: 100%; border-collapse: collapse;">${otherFields.join('')}</table>
      </div>`;
  }
  
  if (arrayFields.length > 0) {
    html += `
      <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Fleet & Personnel Details</h3>
        ${arrayFields.join('')}
      </div>`;
  }
  
  return html;
}

export async function sendQuoteNotificationToAdmin(data: QuoteNotificationData) {
  const quoteTypeLabel = quoteTypeLabels[data.quoteType] || data.quoteType;
  
  const allFieldsHtml = data.allFields ? generateAllFieldsHtml(data.allFields) : '';

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Quote Request - ${data.referenceNumber} - ${quoteTypeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Quote Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Complete Submission Details</p>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <p style="margin: 0; font-size: 14px;">REFERENCE NUMBER</p>
              <h2 style="margin: 10px 0; font-size: 32px; letter-spacing: 2px;">${data.referenceNumber}</h2>
              <p style="margin: 0; font-size: 18px;">${quoteTypeLabel}</p>
            </div>
            
            ${allFieldsHtml || `
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
            `}
            
            <div style="margin-top: 20px; text-align: center; padding: 20px; background-color: white; border-radius: 8px;">
              <p style="color: #666; margin: 0;">Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'full', timeStyle: 'short' })} PST</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">888-254-0089 | info@insurelimos.net</p>
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
  
  const allFieldsHtml = data.allFields ? generateAllFieldsHtml(data.allFields, ['requestType', 'policyNumber', 'insuredName', 'contactName', 'email', 'phone', 'details']) : '';

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Service Request - ${data.requestId} - ${requestTypeLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Service Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Complete Request Details</p>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <p style="margin: 0; font-size: 14px;">REQUEST ID</p>
              <h2 style="margin: 10px 0; font-size: 28px; letter-spacing: 2px;">${data.requestId}</h2>
              <p style="margin: 0; font-size: 18px;">${requestTypeLabel}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Policy Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">Policy Number:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.policyNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Named Insured:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.insuredName}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">Contact Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Request Details</h3>
              <p style="color: #333; white-space: pre-line; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a5f;">${data.details}</p>
            </div>
            
            ${allFieldsHtml}
            
            <div style="margin-top: 20px; text-align: center; padding: 20px; background-color: white; border-radius: 8px;">
              <p style="color: #666; margin: 0;">Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'full', timeStyle: 'short' })} PST</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">888-254-0089 | info@insurelimos.net</p>
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
        <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
          <div style="background-color: #1e3a5f; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0;">New Contact Message</h1>
          </div>
          <div style="padding: 20px; background-color: #f5f5f5;">
            <div style="background-color: #c41e3a; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <p style="margin: 0; font-size: 14px;">MESSAGE ID</p>
              <h2 style="margin: 10px 0; font-size: 24px; letter-spacing: 2px;">${data.messageId}</h2>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Contact Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 35%;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px; font-weight: bold;">Subject:</td>
                  <td style="padding: 10px;">${data.subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e3a5f; margin-top: 0; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">Message</h3>
              <p style="color: #333; white-space: pre-line; background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #1e3a5f;">${data.message}</p>
            </div>
            
            <div style="margin-top: 20px; text-align: center; padding: 20px; background-color: white; border-radius: 8px;">
              <p style="color: #666; margin: 0;">Received on ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles', dateStyle: 'full', timeStyle: 'short' })} PST</p>
            </div>
          </div>
          <div style="background-color: #1e3a5f; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">InsureLimos - Transportation Insurance Specialists</p>
            <p style="margin: 5px 0 0 0; opacity: 0.8;">888-254-0089 | info@insurelimos.net</p>
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
