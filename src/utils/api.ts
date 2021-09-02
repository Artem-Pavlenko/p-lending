import { BASE_URL } from "./constants";
import { IPartner, IPartnerResponse } from "./types";

export const addPartner = async (data: IPartner) => {
  try {
    const res = await fetch(`${BASE_URL}partners`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (json?.error?.message) {
      return Promise.resolve(json);
    } else {
      return Promise.resolve<IPartnerResponse>(json.data);
    }
  } catch (err) {
    console.log("err ->", err.message);
  }
};
