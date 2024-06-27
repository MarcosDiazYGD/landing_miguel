import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(callback, options);

    const { current: currentObserver } = observer;

    return () => currentObserver.disconnect();
  }, [callback, options]);

  const observe = (element) => {
    if (observer.current && element) observer.current.observe(element);
  };

  const unobserve = (element) => {
    if (observer.current && element) observer.current.unobserve(element);
  };

  return { observe, unobserve };
};

export default useIntersectionObserver;
