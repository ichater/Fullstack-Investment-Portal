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

export async function fetchClientByAdvisor(jwt: string, slug: string) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/meadviser", {
      method: "GET",
      headers: {
        authorization: `bearer ${jwt}`,
      },
    }).then((res) => res.json());

    const adviser = adviserDataParser(res.adviser);

    const client = adviser.clients.find((client) => client.slug === slug);

    if (!client) {
      return;
    }

    return { adviser, client };
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function fetchAccountByClient(
  jwt: string,
  clientSlug: string,
  accountSlug: string
) {
  try {
    const res = await fetch("http://localhost:3000/api/auth/meadviser", {
      method: "GET",
      headers: {
        authorization: `bearer ${jwt}`,
      },
    }).then((res) => res.json());

    const adviser = adviserDataParser(res.adviser);

    const client = adviser.clients.find((client) => client.slug === clientSlug);

    if (!client) {
      return;
    }

    const account = client.accounts.find(
      (account) => account.slug === accountSlug
    );
    if (!account) {
      return;
    }

    return { adviser, client, account };
  } catch (error) {
    console.log(error);
    return;
  }
}
