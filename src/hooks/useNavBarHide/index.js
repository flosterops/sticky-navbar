import { useCallback, useEffect, useState } from "react";

const useNavBarHide = (ref, height, start) => {
  const [prevScroll, setPrevScroll] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;

    if (window.pageYOffset < start) {
      return;
    }

    if (prevScroll > currentScroll) {
      ref.current.style.top = "0";
    } else {
      ref.current.style.top = height;
    }
    setPrevScroll(currentScroll);
  };

  const handleScrollCallback = useCallback(handleScroll, [
    prevScroll,
    ref,
    height,
    start,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCallback);

    return () => {
      window.removeEventListener("scroll", handleScrollCallback);
    };
  }, [ref, handleScrollCallback]);

  return ref;
};

export { useNavBarHide };
