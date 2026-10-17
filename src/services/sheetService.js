import { CONFIG } from '../config';

/**
 * Submits franchise enquiry data to SheetDB or Google Sheets endpoint
 * 
 * Target Google Sheet Headers (matching Row 1):
 * - Full_Name
 * - Phone_Number
 * - Email_id
 * - State
 * - City
 * - Pin_code
 * - Franchise_type
 * - Message
 *
 * @param {Object} formData
 * @returns {Promise<{success: boolean, isDemo?: boolean, error?: string, message?: string, data?: any}>}
 */
export async function submitEnquiryToSheet(formData) {
  const payload = {
    Full_Name: formData.fullName ? formData.fullName.trim() : '',
    Phone_Number: formData.phone ? formData.phone.trim() : '',
    Email_id: formData.email ? formData.email.trim() : '',
    State: formData.state ? formData.state.trim() : '',
    City: formData.city ? formData.city.trim() : '',
    Pin_code: formData.pincode ? formData.pincode.trim() : '',
    Franchise_type: formData.franchiseType ? formData.franchiseType.trim() : '',
    Message: formData.message ? formData.message.trim() : '',
  };

  const endpoint = CONFIG.SHEETDB_API_URL ? CONFIG.SHEETDB_API_URL.trim() : '';

  // Demo / Dev Mode Fallback:
  // If no live SheetDB endpoint has been added yet, simulate network roundtrip
  // so the user can test the UI experience without crashing.
  if (!endpoint) {
    console.info(
      'ℹ️ [SheetDB Service] Running in Preview/Demo Mode. Add your API URL in src/config.js to write rows directly to Google Sheets.',
      payload
    );
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      isDemo: true,
      message: 'Demo submission recorded. Connect your SheetDB API in src/config.js to push live rows.',
      data: payload,
    };
  }

  try {
    const isSheetDB = endpoint.includes('sheetdb.io');
    const bodyContent = isSheetDB
      ? JSON.stringify({ data: [payload] })
      : JSON.stringify(payload);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to save row: HTTP ${response.status} - ${errorText}`);
    }

    const responseData = await response.json().catch(() => ({ status: 'ok' }));

    return {
      success: true,
      isDemo: false,
      message: 'Your franchise enquiry has been securely saved to our database sheet.',
      data: responseData,
    };
  } catch (error) {
    console.error('❌ [SheetDB Service] Submission failed:', error);
    return {
      success: false,
      error: error.message || 'Network error while connecting to SheetDB.',
      data: payload,
    };
  }
}
