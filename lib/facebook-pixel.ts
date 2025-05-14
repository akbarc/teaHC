// Facebook Pixel Event implementation
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export type StandardEvent = 
  | 'PageView'
  | 'AddToCart'
  | 'InitiateCheckout'
  | 'Purchase'
  | 'Lead'
  | 'ViewContent'
  | 'CompleteRegistration'
  | 'Contact';

export type CustomEvent = 
  | 'ViewProduct'
  | 'ViewCategory'
  | 'InteractWithContent';

export interface PixelEventOptions {
  value?: number;
  currency?: string;
  contentName?: string;
  contentCategory?: string;
  contentIds?: string[];
  contents?: Array<{id: string, quantity: number}>;
  numItems?: number;
  searchString?: string;
  status?: string;
  source?: string;
  [key: string]: any; // Allow custom parameters
}

// Initialize the pixel (already done in _app.tsx)
// This is a no-op if the pixel is already initialized
export const initPixel = (pixelId: string) => {
  if (typeof window === 'undefined') return;
  
  if (window.fbq) {
    window.fbq('init', pixelId);
  } else {
    console.warn('Facebook Pixel not loaded');
  }
};

// Track standard Facebook events
export const trackEvent = (
  eventName: StandardEvent | CustomEvent,
  options?: PixelEventOptions
) => {
  if (typeof window === 'undefined') return;
  
  if (window.fbq) {
    if (options) {
      // Use track for standard events
      if (
        eventName === 'PageView' ||
        eventName === 'AddToCart' ||
        eventName === 'InitiateCheckout' ||
        eventName === 'Purchase' ||
        eventName === 'Lead' ||
        eventName === 'ViewContent' ||
        eventName === 'CompleteRegistration' ||
        eventName === 'Contact'
      ) {
        window.fbq('track', eventName, options);
      } else {
        // Use trackCustom for custom events
        window.fbq('trackCustom', eventName, options);
      }
    } else {
      if (
        eventName === 'PageView' ||
        eventName === 'AddToCart' ||
        eventName === 'InitiateCheckout' ||
        eventName === 'Purchase' ||
        eventName === 'Lead' ||
        eventName === 'ViewContent' ||
        eventName === 'CompleteRegistration' ||
        eventName === 'Contact'
      ) {
        window.fbq('track', eventName);
      } else {
        window.fbq('trackCustom', eventName);
      }
    }
    
    console.log(`[FB Pixel] Tracked event: ${eventName}`, options || '');
  } else {
    console.warn('Facebook Pixel not loaded - could not track event:', eventName);
  }
};

// Helper functions for common events
export const trackPageView = (url?: string) => {
  trackEvent('PageView', url ? { page: url } : undefined);
};

export const trackProductView = (product: {
  id: string;
  name: string;
  price?: number;
  category?: string;
}) => {
  trackEvent('ViewContent', {
    content_type: 'product',
    content_ids: [product.id],
    content_name: product.name,
    content_category: product.category,
    value: product.price,
    currency: 'USD'
  });
};

export const trackAddToCart = (product: {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  category?: string;
}) => {
  trackEvent('AddToCart', {
    content_type: 'product',
    content_ids: [product.id],
    content_name: product.name,
    content_category: product.category,
    value: product.price * (product.quantity || 1),
    currency: 'USD',
    contents: [{ id: product.id, quantity: product.quantity || 1 }],
    num_items: product.quantity || 1
  });
};

export const trackInitiateCheckout = (products: Array<{
  id: string;
  name?: string;
  price: number;
  quantity: number;
}>) => {
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
  
  trackEvent('InitiateCheckout', {
    content_type: 'product',
    content_ids: products.map(p => p.id),
    contents: products.map(p => ({ id: p.id, quantity: p.quantity })),
    value: totalValue,
    currency: 'USD',
    num_items: totalItems
  });
};

export const trackPurchase = (order: {
  id: string;
  value: number;
  products: Array<{
    id: string;
    name?: string;
    price: number;
    quantity: number;
  }>;
}) => {
  trackEvent('Purchase', {
    content_type: 'product',
    content_ids: order.products.map(p => p.id),
    contents: order.products.map(p => ({ id: p.id, quantity: p.quantity })),
    value: order.value,
    currency: 'USD',
    num_items: order.products.reduce((sum, product) => sum + product.quantity, 0),
    transaction_id: order.id
  });
};

export const trackLead = (options?: {
  value?: number;
  category?: string;
  description?: string;
}) => {
  trackEvent('Lead', {
    ...options,
    currency: options?.value ? 'USD' : undefined
  });
}; 