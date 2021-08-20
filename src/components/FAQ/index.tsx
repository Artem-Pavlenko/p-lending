import { FC } from "react";

import IFAQProps from "./props";
import "./styles.scss";
import { Question } from "..";
import { IMAGES } from "../../assets";

export const FAQ: FC<IFAQProps> = () => (
  <div className="faq">
    <p>FAQ</p>
    <div className="questions">
      <Question
        number={1}
        header="How I can join Panda?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing "
      />
      <Question
        number={2}
        header="How I can join Panda?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing "
      />
      <Question
        number={3}
        header="How I can join Panda?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing "
      />
      <Question
        number={4}
        header="How I can join Panda?"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing "
      />
      <img className="footer_bamboo" src={IMAGES.BAMBOO} alt="" />
    </div>
  </div>
);
