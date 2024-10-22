import { useEffect, useRef } from "react";

export function useClickOutside(ref, handler, listenCapturing = true) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [ref, handler, listenCapturing]
  );
}
