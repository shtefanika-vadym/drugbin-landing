import { useEffect } from "react";

export const useOnRouterEvent = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener("popstate", callback);

    return () => {
      window.removeEventListener("popstate", callback);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
