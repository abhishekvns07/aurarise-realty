import { propertiesData } from '../data/propertiesData';

const API_BASE_URL = 'http://localhost:8080/api';

export async function fetchProperties() {
  try {
    const response = await fetch(`${API_BASE_URL}/properties`);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (error) {
    console.warn('Backend API unavailable, using local mock data:', error);
  }
  return propertiesData;
}

export async function fetchPropertyBySlug(slug) {
  try {
    const response = await fetch(`${API_BASE_URL}/properties/slug/${slug}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Backend API unavailable, searching local mock data:', error);
  }
  return propertiesData.find(p => p.slug === slug) || null;
}

export async function submitInquiry(inquiryData) {
  try {
    const response = await fetch(`${API_BASE_URL}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inquiryData)
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Backend API unavailable for inquiry submission:', error);
  }
  return { success: true, offlineFallback: true };
}

export async function submitContactMessage(contactData) {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.warn('Backend API unavailable for contact submission:', error);
  }
  return { success: true, offlineFallback: true };
}
