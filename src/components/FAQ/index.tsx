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
        big
        number={1}
        header="Where can I download Panda from?"
        text="Panda is available on both App Store and Google play."
      />
      <Question
        number={2}
        header="Is Panda free to download?"
        text="Yes, absolutely."
      />
      <Question
        big
        number={3}
        header="Which country are you operating in?"
        text="We are currently working on a launch in the UK, but we hope to be all over Europe and America."
      />
      <Question
        number={4}
        header="Where is Panda located?"
        text="We are located in London, with plans to open up additional sites with Europe over the next 5 years."
      />
      <img className="footer_bamboo" src={IMAGES.BAMBOO} alt="" />
    </div>
  </div>
);
