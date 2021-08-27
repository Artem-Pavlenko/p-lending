import { BASE_URL } from "./constants";
import { IPartner } from "./types";

export const addPartner = async (data: IPartner) => {
  try {
    const res = await fetch(`${BASE_URL}partners`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.error.message) {
      console.log("error res -->", json.error.message);
    }
  } catch (err) {
    console.log("err ->", err.message);
  }
};
