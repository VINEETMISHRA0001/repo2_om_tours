import { useState, useEffect } from "react";

const useLoadGoogleMaps = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkIfLoaded = () => {
      if (window.google && window.google.maps) {
        setLoaded(true);
      } else {
        setTimeout(checkIfLoaded, 100);
      }
    };

    checkIfLoaded();
  }, []);

  return loaded;
};

export default useLoadGoogleMaps;
