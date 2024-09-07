import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Przewiń do góry strony
  }, []); // Pusty array oznacza, że efekt będzie wywołany tylko raz, po pierwszym renderze

  return null;
};

export default ScrollToTop;