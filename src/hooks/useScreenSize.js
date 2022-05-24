import { useLayoutEffect, useState } from "react";

export const useScreenSize = () => {
  const [currentScreenConfig, setCurrentScreenConfig] = useState({
    width: 0,
  });

  useLayoutEffect(() => {
    const getCurrentScreenConfig = () => {
      const tempCurrentWidth = window.innerWidth;
      setCurrentScreenConfig({ width: tempCurrentWidth });
    };

    getCurrentScreenConfig();

    window.addEventListener("resize", getCurrentScreenConfig);

    return () => window.removeEventListener("resize", getCurrentScreenConfig);
  }, []);

  return {currentScreenConfig};
};
