import { RefObject, useEffect, useRef, useState } from "react";

export const useShowAnimation = <T extends HTMLElement>() => {
  const [isShowAnimation, setIsShowAnimation] = useState<boolean>(false);
  const animationRef = useRef<T>(null);

  useEffect(() => {
    const playAnimation = (ref: RefObject<T>) => {
      if (ref.current && window.pageYOffset >= ref.current.offsetTop) {
        setIsShowAnimation(true);
      }
    };

    window.addEventListener("scroll", () => playAnimation(animationRef));

    return () => {
      window.removeEventListener("scroll", () => playAnimation(animationRef));
    };
  }, []);

  return { isShowAnimation, animationRef };
};
