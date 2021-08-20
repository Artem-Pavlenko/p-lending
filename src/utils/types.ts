import { RefObject } from "react";

export interface IAnimation<T extends HTMLElement> {
  isShowAnimation: boolean;
  animationRef: RefObject<T>;
}
