import { RefCallback, useCallback, useMemo, useState } from 'react';

const useIntersection = (
  options: IntersectionObserverInit = {
    root: null,
    threshold: 1,
    rootMargin: '0px',
  }
) => {
  const [node, setNode] = useState<HTMLElement>();
  const [intersectionObserverEntry, setIntersectionObserverEntry] = useState<IntersectionObserverEntry | null>(null);
  const observer = useMemo(() => {
    if (typeof IntersectionObserver === 'function') {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };
      const observer = new IntersectionObserver(handler, options);
      return observer;
    } else {
      return null;
    }
  }, [options]);

  const refCallback: RefCallback<HTMLElement> = useCallback((el) => {
    if (observer && el) {
      if (el) {
        observer.observe(el);
        setNode(el);
      } else {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { intersection: intersectionObserverEntry, refCallback, node };
};

export default useIntersection;
