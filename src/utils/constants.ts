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
  Heading = "TABLET",
  Button = "BUTTON",
}

export const DIMENSIONS: Record<DimensionTypes, number> = {
  TABLET: 1026,
  BUTTON: 1250,
};
