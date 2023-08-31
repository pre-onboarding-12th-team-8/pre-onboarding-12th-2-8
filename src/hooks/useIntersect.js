import { useRef, useCallback, useEffect } from "react";
export const useIntersect = (onIntersectCallback) => {
  const ref = useRef(null);
  const onIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          onIntersectCallback(entry, observer);
        }
      });
    },
    [onIntersectCallback]
  );
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.5,
    });
    observer.observe(ref.current);

    return () => observer && observer.disconnect();
  }, [ref, onIntersect]);
  return ref;
};
