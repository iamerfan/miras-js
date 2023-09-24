import { useEffect } from "react";

export default function useInterval(effect, time) {
  useEffect(() => {
    const interval = setInterval(() => {
      effect();
    }, time);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
