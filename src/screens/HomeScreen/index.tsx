import { FC } from "react";

import IHomeScreenProps from "./props";
import {
  AdminPanel,
  Category,
  FAQ,
  FilterBlock,
  Header,
  Management,
  PaymentOptions,
} from "../../components";
import { useScrollToStart } from "../../utils/hooks";

export const HomeScreen: FC<IHomeScreenProps> = ({ showModalHandler }) => {
  useScrollToStart();

  return (
    <>
      <Header showModalHandler={showModalHandler} />
      <Category />
      <FilterBlock />
      <Management />
      <PaymentOptions />
      <AdminPanel />
      <FAQ />
    </>
  );
};
