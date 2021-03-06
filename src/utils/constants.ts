export enum TextStyles {
  Header = "main-text",
  AdaptiveHeader = "adaptive-main-text",
  Description = "description",
  ArticleHeader = "article-header",
  ArticleText = "article",
  ModalHeader = "modal-header",
}

export enum Routes {
  Home = "/",
  PrivacyPolicy = "/privacy-policy",
  TermsConditions = "/terms-conditions",
}

export enum DimensionTypes {
  Heading = "HEADING",
  Button = "BUTTON",
  Tablet = "TABLET",
  Phone = "PHONE",
  Category = "CATEGORY",
  Filter = "FILTER",
  Management = "MANAGEMENT",
  Payment = "PAYMENT",
  Order = "ORDER",
}

export const DIMENSIONS: Record<DimensionTypes, number> = {
  HEADING: 1026,
  BUTTON: 1250,
  TABLET: 770,
  PHONE: 420,
  CATEGORY: 1542,
  FILTER: 1315,
  MANAGEMENT: 1015,
  PAYMENT: 1156,
  ORDER: 1330,
};

export const BASE_URL = "http://18.133.37.156:4444/";
