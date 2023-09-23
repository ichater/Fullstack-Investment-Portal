import { clientDataParser } from "@/lib/utils/adviserDataParsers";
import { ClientDataParsed } from "@/types";
import { ACCESS } from "@prisma/client";
import axios from "axios";

export const useClientUpdates = () => {
  const updateClientDetails = async ({
    id,
    email,
    bio,
    access,
  }: {
    id: string;
    email: string;
    bio: string;
    access: ACCESS;
  }): Promise<ClientDataParsed | string> => {
    try {
      const res = await axios
        .put("http://localhost:3000/api/client/editclient", {
          id,
          email,
          bio,
          access,
        })
        .then((res) => res.data);

      if (!res) {
        return "data not gotten!";
      }

      return clientDataParser(res);
    } catch (error: any) {
      return error.response.data.errorMessage;
    }
  };

  return { updateClientDetails };
};
