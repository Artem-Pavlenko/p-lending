import { RefObject, useEffect, useRef, useState } from "react";

import { IAnimation } from "./types";

export const useShowAnimation = <T extends HTMLElement>(
  distance: number = 250
): IAnimation<T> => {
  const [isShowAnimation, setIsShowAnimation] = useState<boolean>(false);
  const animationRef = useRef<T>(null);

  useEffect(() => {
    const playAnimation = (ref: RefObject<T>) => {
      if (
        ref.current &&
        window.pageYOffset + distance >= ref.current.offsetTop
      ) {
        setIsShowAnimation(true);
      }
    };

    window.addEventListener("scroll", () => playAnimation(animationRef));

    return () => {
      window.removeEventListener("scroll", () => playAnimation(animationRef));
    };
  }, [distance]);

  return { isShowAnimation, animationRef };
};

export const useScrollToStart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
};
