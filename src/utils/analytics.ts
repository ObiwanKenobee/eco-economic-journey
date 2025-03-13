
/**
 * Utility to collect user analytics data
 */

interface UserEvent {
  eventType: string;
  userId?: string;
  timestamp: number;
  page: string;
  data?: Record<string, any>;
}

/**
 * Track user events and interactions
 */
export const trackEvent = async (eventType: string, data?: Record<string, any>): Promise<boolean> => {
  try {
    // Get user ID if available from localStorage
    const userId = localStorage.getItem('userId') || 'anonymous';
    
    const event: UserEvent = {
      eventType,
      userId,
      timestamp: Date.now(),
      page: window.location.pathname,
      data
    };
    
    // Send data to our API endpoint
    const response = await fetch('/api/collect-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });
    
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Failed to track event:', error);
    return false;
  }
};

/**
 * Track page views
 */
export const trackPageView = () => {
  return trackEvent('pageview');
};

/**
 * Initialize analytics
 */
export const initAnalytics = () => {
  // Generate a random user ID if none exists
  if (!localStorage.getItem('userId')) {
    localStorage.setItem('userId', `user_${Math.random().toString(36).substring(2, 15)}`);
  }
  
  // Track initial page view
  trackPageView();
};
