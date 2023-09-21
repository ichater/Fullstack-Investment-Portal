import { adviserDataParser } from "../utils/adviserDataParsers";

export async function fetchAdviserData(jwt: string) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/meadviser", {
      method: "GET",
      headers: {
        authorization: `bearer ${jwt}`,
      },
    }).then((res) => res.json());

    return adviserDataParser(res.adviser);
  } catch (error) {
    console.log(error);
    return;
  }
}
