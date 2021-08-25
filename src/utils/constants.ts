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
  Category = "CATEGORY",
  Filter = "FILTER",
  Management = "MANAGEMENT",
  Payment = "PAYMENT",
}

export const DIMENSIONS: Record<DimensionTypes, number> = {
  HEADING: 1026,
  BUTTON: 1250,
  TABLET: 770,
  CATEGORY: 1542,
  FILTER: 1315,
  MANAGEMENT: 1015,
  PAYMENT: 1156,
};
