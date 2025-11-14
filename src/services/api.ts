const API_BASE_URL = 'https://api.mayberryminitrucks.com';

interface AppointmentFormData {
  name: string;
  email: string;
  phoneNumber: string;
  serviceType: string;
  preferredDate: string;
  time: string;
  address: string;
  details: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  description: string;
}

export const submitAppointmentForm = async (formData: AppointmentFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/email/schedule/service/davis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // API doesn't return a payload, so we just return success
    return { success: true };
  } catch (error) {
    console.error('Error submitting appointment form:', error);
    throw error;
  }
};

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/email/contactus/davis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // API doesn't return a payload, so we just return success
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

