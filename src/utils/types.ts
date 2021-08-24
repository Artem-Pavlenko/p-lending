import { RefObject } from "react";

export interface IAnimation<T extends HTMLElement> {
  isShowAnimation: boolean;
  animationRef: RefObject<T>;
}

export interface ISize {
  width: number | undefined;
  height: number | undefined;
}
