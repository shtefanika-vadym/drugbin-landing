import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export const useScrollTo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const scrollTo = useCallback(
    (id: string, offset = -80) => {
      !isHomePage && navigate("/");

      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          offset: offset,
        });
      }, 100);
    },
    [isHomePage, navigate]
  );

  return { scrollTo, isHomePage };
};
