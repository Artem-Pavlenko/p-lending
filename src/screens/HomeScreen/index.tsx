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

export const HomeScreen: FC<IHomeScreenProps> = ({ showModalHandler }) => {
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
