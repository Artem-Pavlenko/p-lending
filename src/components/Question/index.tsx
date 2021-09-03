import { FC } from "react";

import IQuestionProps from "./props";
import "./styles.scss";

export const Question: FC<IQuestionProps> = ({ number, header, text, big }) => (
  <div className="question">
    <div className="question_number">{number}.</div>
    <div className="question_description">
      <h2>{header}</h2>
      <span className={`answer ${big && "big"}`}>{text}</span>
    </div>
  </div>
);
