
import Cookies from 'js-cookie';

class PrivacyAnalytics {
  constructor() {
    this.hasConsent = false;
    this.checkConsent();
  }

  checkConsent() {
    const preferences = Cookies.get('chainGuard_cookie_preferences');
    if (preferences) {
      const prefs = JSON.parse(preferences);
      this.hasConsent = prefs.analytics || false;
    }
  }

  // Privacy-first page view tracking
  trackPageView(page) {
    if (!this.hasConsent) return;
    
    // Anonymized tracking without personal data
    const data = {
      page: page,
      timestamp: new Date().toISOString(),
      referrer: document.referrer ? 'external' : 'direct', // Anonymized referrer
      screen: `${screen.width}x${screen.height}`, // Device info for responsive analysis
      language: navigator.language.split('-')[0], // Only language, not full locale
      session: this.getSessionId() // Session-based, not user-based
    };

    this.sendAnalytics('pageview', data);
  }

  // Track user interactions (GDPR-compliant)
  trackEvent(category, action, label = null) {
    if (!this.hasConsent) return;

    const data = {
      category,
      action,
      label,
      timestamp: new Date().toISOString(),
      session: this.getSessionId()
    };

    this.sendAnalytics('event', data);
  }

  // Track address checks (anonymized)
  trackAddressCheck(networkCount, hasActivity = false) {
    if (!this.hasConsent) return;

    const data = {
      type: 'address_check',
      networkCount: networkCount,
      hasActivity: hasActivity ? 'yes' : 'no', // Boolean as string for privacy
      timestamp: new Date().toISOString(),
      session: this.getSessionId()
    };

    this.sendAnalytics('address_check', data);
  }

  // Generate session-based ID (not user tracking)
  getSessionId() {
    let sessionId = sessionStorage.getItem('chainGuard_session');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substr(2, 16) + Date.now().toString(36);
      sessionStorage.setItem('chainGuard_session', sessionId);
    }
    return sessionId;
  }

  // Send analytics data (could be to Plausible, Google Analytics, etc.)
  async sendAnalytics(type, data) {
    try {
      // This would send to your analytics service
      // For privacy compliance, use services like Plausible.io
      
      if (window.plausible) {
        // Plausible Analytics (privacy-first)
        window.plausible(type, { props: data });
      } else if (window.gtag && this.hasConsent) {
        // Google Analytics (with consent)
        window.gtag('event', type, data);
      }
      
      // Log for development (remove in production)
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics:', type, data);
      }
    } catch (error) {
      console.warn('Analytics error:', error);
    }
  }

  // Update consent status
  updateConsent() {
    const oldConsent = this.hasConsent;
    this.checkConsent();
    
    if (!oldConsent && this.hasConsent) {
      // User just gave consent, track this session's data
      this.trackPageView(window.location.pathname);
    } else if (oldConsent && !this.hasConsent) {
      // User revoked consent, clear any stored analytics data
      this.clearAnalyticsData();
    }
  }

  // Clear analytics data when consent is revoked
  clearAnalyticsData() {
    // Clear Google Analytics cookies
    document.cookie.split(";").forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (name.includes('_ga') || name.includes('_gid') || name.includes('_gat')) {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
    });

    // Clear session data
    sessionStorage.removeItem('chainGuard_session');
  }
}

// Export singleton instance
export const analytics = new PrivacyAnalytics();

// Export utility functions
export const trackPageView = (page) => analytics.trackPageView(page);
export const trackEvent = (category, action, label) => analytics.trackEvent(category, action, label);
export const trackAddressCheck = (networkCount, hasActivity) => analytics.trackAddressCheck(networkCount, hasActivity);
export const updateAnalyticsConsent = () => analytics.updateConsent();
