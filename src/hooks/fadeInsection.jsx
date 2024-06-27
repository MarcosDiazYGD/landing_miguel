import { useRef, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';
import PropTypes from 'prop-types';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);

  const onIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const { observe } = useIntersectionObserver(onIntersection, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (ref.current) {
      observe(ref.current);
    }
  }, [observe]);

  return (
    <div ref={ref} className='fade-right'>
      {children}
    </div>
  );
};

export default FadeInSection;

FadeInSection.propTypes = {
  children: PropTypes.node,
};
