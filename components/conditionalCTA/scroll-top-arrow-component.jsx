import { useState, useCallback, useEffect } from 'react';

export default function ScrollTopArrow() {
  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  const isMobile = useMediaQuery(480);

  return (
    <a href="#top" className="top" aria-label="Click to scroll to top">
      {isMobile ? (
        <img src="/images/white-arrow.svg" alt="" className="arrow" />
      ) : (
        <img src="/images/navy-arrow.svg" alt="" className="arrow" />
      )}
      <p>Back to top</p>
    </a>
  );
}
