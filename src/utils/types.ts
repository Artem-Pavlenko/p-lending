import { RefObject } from "react";

export interface IAnimation<T extends HTMLElement> {
  isShowAnimation: boolean;
  animationRef: RefObject<T>;
}

export interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export interface IPartner {
  partnerName: string;
  positionAtVenue: string;
  address: string;
  restaurantName: string;
  websiteUrl: string;
  venueType: string;
  posType: string;
}

export interface IResponse<Tres = {}> {
  error: {
    message: string;
    code: number;
  };
  response: boolean;
}

export interface IPartnerResponse {
  partnerStatus: string;
  _id: string;
  partnerName: string;
  positionAtVenue: string;
  address: string;
  restaurantName: string;
  websiteUrl: string;
  venueType: string;
  posType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
