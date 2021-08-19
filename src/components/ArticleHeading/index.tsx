import { FC } from "react";

import IArticleHeadingProps from "./props";
import "./styles.scss";

export const ArticleHeading: FC<IArticleHeadingProps> = ({ text }) => (
  <p className="article_heading">{text}</p>
);
