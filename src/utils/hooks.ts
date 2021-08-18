import { RefObject, useEffect, useState } from "react";

export const useShowAnimation = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isShowAnimation, setIsShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    const playAnimation = (ref: RefObject<T>) => {
      if (ref.current && window.pageYOffset >= ref.current.offsetTop) {
        setIsShowAnimation(true);
      }
    };

    window.addEventListener("scroll", () => playAnimation(ref));

    return () => {
      window.removeEventListener("scroll", () => playAnimation(ref));
    };
  }, [ref]);

  return { isShowAnimation };
};
