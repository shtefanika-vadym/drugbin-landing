import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useGoogleAnalytics } from "src/analytics/googleAnalyticsInstance";

interface UsePageLoadDetailsAnalyticsProps {
    pageType: string
}

export const usePageLoadDetailsAnalytics = ({ pageType }: UsePageLoadDetailsAnalyticsProps) => {
    const location = useLocation()
    const { trackPageView } = useGoogleAnalytics();
    
    useEffect(() => {
        trackPageView(location.pathname, pageType);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageType, location.pathname]);
  };
  