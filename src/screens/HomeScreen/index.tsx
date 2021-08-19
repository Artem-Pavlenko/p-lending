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

export const HomeScreen: FC<IHomeScreenProps> = () => (
  <>
    <Header />
    <Category />
    <FilterBlock />
    <Management />
    <PaymentOptions />
    <AdminPanel />
    <FAQ />
  </>
);
