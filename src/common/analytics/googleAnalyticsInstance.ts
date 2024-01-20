
interface AnalyticsHook {
    trackPageView: (path: string, pageType: string) => void;
    trackEvent: (category: string, action: string, label: string, value?: number) => void;
    trackButtonClick: (buttonName: string) => void;
  }

export const useGoogleAnalytics = (): AnalyticsHook => {
    const trackPageView = (path: string, pageType: string) => {
        window.gtag('config', "G-7GVH9HBMWJ", {
          page_path: path,
          page_type: pageType
        });
      };
    
      const trackEvent = (category: string, action: string, label: string, value?: number) => {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      };
    
      const trackButtonClick = (buttonName: string) => {
        trackEvent('Button Click', 'click', buttonName);
      };

      return {
        trackPageView,
        trackEvent,
        trackButtonClick,
      };
  };