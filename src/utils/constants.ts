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
}

export const DIMENSIONS: Record<DimensionTypes, number> = {
  HEADING: 914,
};
