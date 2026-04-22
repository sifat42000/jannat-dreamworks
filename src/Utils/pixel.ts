// Page View
export const trackPageView = () => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

// Lead (Contact page, form intent)
export const trackLead = () => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};

// Contact (WhatsApp / direct contact)
export const trackContact = () => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'Contact');
  }
};

// View Content (Service / page details)
export const trackViewContent = (contentName: string) => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'ViewContent', {
      content_name: contentName,
    });
  }
};

// Button Click (generic)
export const trackButtonClick = (buttonName: string) => {
  if ((window as any).fbq) {
    (window as any).fbq('trackCustom', 'ButtonClick', {
      button_name: buttonName,
    });
  }
};

// CTA Click (important call-to-action)
export const trackCTA = (ctaName: string) => {
  if ((window as any).fbq) {
    (window as any).fbq('trackCustom', 'CTA_Click', {
      name: ctaName,
    });
  }
};

// Form Submit
export const trackFormSubmit = (formName: string) => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'SubmitApplication', {
      form_name: formName,
    });
  }
};

// Purchase (future use)
export const trackPurchase = (value: number) => {
  if ((window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: value,
      currency: 'BDT',
    });
  }
};

// Scroll Depth (optional advanced)
export const trackScroll = (percent: number) => {
  if ((window as any).fbq) {
    (window as any).fbq('trackCustom', 'ScrollDepth', {
      percent: percent,
    });
  }
};