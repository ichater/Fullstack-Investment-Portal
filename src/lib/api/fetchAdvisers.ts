import { AdviserIncomingDataShallow } from "@/types";

export async function fetchAdvisers(): Promise<
  AdviserIncomingDataShallow[] | string
> {
  try {
    const data: { advisers: AdviserIncomingDataShallow[] } = await fetch(
      "http://localhost:3000/api/advisor/getadvisers"
    ).then((res) => res.json());

    return data.advisers;
  } catch (error: any) {
    return error.response.data.errorMessage as string;
  }
}
