import { useEffect, useState } from "react";

/** Preload an image URL and report when it is ready (or failed). */
export function usePreloadedImage(src) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) {
      setReady(true);
      return undefined;
    }

    setReady(false);
    let active = true;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);

    const img = new Image();
    const done = () => {
      if (active) setReady(true);
    };
    img.onload = done;
    img.onerror = done;
    img.src = src;

    return () => {
      active = false;
      link.remove();
    };
  }, [src]);

  return ready;
}
