import React from 'react';
import _ from 'underscore';
const events = new Set();
const onResize = () => events.forEach((fn: any) => fn());

interface Options {
  throttleMs?: number;
}

const useWindowSize = (options: Options = {}) => {
  const { throttleMs = 100 } = options;
  const [size, setSize] = React.useState({
    width: process.browser && window.innerWidth,
    height: process.browser && window.innerHeight,
    isMobile: window.innerWidth <= 600,
  });

  const handle = _.throttle(() => {
    setSize({
      width: process.browser && window.innerWidth,
      height: process.browser && window.innerHeight,
      isMobile: window.innerWidth <= 600,
    });
  }, throttleMs);

  React.useEffect(() => {
    if (events.size === 0) {
      window.addEventListener('resize', onResize, true);
    }

    events.add(handle);

    return () => {
      events.delete(handle);

      if (events.size === 0) {
        window.removeEventListener('resize', onResize, true);
      }
    };
    //Do not try to fix the warning in this particular hook, if you write 'handle' in the array the hook will trigger every throttleMs
    //TODO: find a way to fix this warning without forcing re-render every moment
  }, []);

  return size;
};

export default useWindowSize;