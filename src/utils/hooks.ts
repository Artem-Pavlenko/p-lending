import { RefObject, useEffect, useRef, useState } from "react";
import { DIMENSIONS, DimensionTypes } from "./constants";

import { IAnimation, ISize } from "./types";

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

export function useOutsideListener<T extends HTMLElement>(
  callback: () => void
): RefObject<T> {
  const refWrapper = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (refWrapper?.current && !refWrapper?.current?.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refWrapper, callback]);

  return refWrapper;
}

export const useIsSmallerDimension = (mediaValue: DimensionTypes) => {
  const { width }: ISize = useWindowSize();
  return !!width && width < DIMENSIONS[mediaValue];
};

export const useWindowSize = (): ISize => {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
