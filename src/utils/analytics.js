/**
 * Google Analytics 4 Event Tracker Helper
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export function trackContactFormSubmit(projectType, budget) {
  trackEvent('generate_lead', {
    event_category: 'Contact',
    event_label: 'Contact Form Submission',
    project_type: projectType,
    budget_range: budget,
  })
  trackEvent('contact_form_submit', {
    project_type: projectType,
    budget_range: budget,
  })
}

export function trackWhatsAppClick(source = 'general') {
  trackEvent('whatsapp_click', {
    event_category: 'Engagement',
    event_label: `WhatsApp - ${source}`,
  })
}

export function trackPhoneClick(phoneNumber) {
  trackEvent('phone_click', {
    event_category: 'Engagement',
    phone_number: phoneNumber,
  })
}

export function trackEmailClick(emailAddress) {
  trackEvent('email_click', {
    event_category: 'Engagement',
    email_address: emailAddress,
  })
}

export function trackStartProjectClick(location = 'header') {
  trackEvent('start_project_click', {
    event_category: 'CTA',
    cta_location: location,
  })
}

export function trackViewProjectClick(projectName) {
  trackEvent('view_project_click', {
    event_category: 'Portfolio',
    project_name: projectName,
  })
}
