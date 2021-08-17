import { FC } from "react";

import IQuestionProps from "./props";
import "./styles.scss";

export const Question: FC<IQuestionProps> = ({ number, header, text }) => (
  <div className="question">
    <div className="question_number">{number}.</div>
    <div className="question_description">
      <h2>{header}</h2>
      <span>{text}</span>
    </div>
  </div>
);
