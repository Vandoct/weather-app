import { useCallback, useEffect, useRef } from 'react';

export const useDebouncedEffect = (effect, delay, deps) => {
  const isInitialMount = useRef(true);
  const callback = useCallback(effect, deps);

  useEffect(() => {
    let handler;

    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      handler = setTimeout(() => {
        callback();
      }, delay);
    }

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};
