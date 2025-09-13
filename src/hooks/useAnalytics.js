
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../utils/analytics';

export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route changes
    analytics.trackPageView(location.pathname);
  }, [location]);

  return {
    trackEvent: analytics.trackEvent.bind(analytics),
    trackAddressCheck: analytics.trackAddressCheck.bind(analytics),
    updateConsent: analytics.updateConsent.bind(analytics)
  };
}
