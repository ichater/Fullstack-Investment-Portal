import { Share } from "@prisma/client";
import { ShareBuilder } from "../builders/investments/shares";
import { arrayFromNumber } from "../utils/arrayFromNumber";

export const tempShareData: Share[] = arrayFromNumber(100).map((i, index) =>
  new ShareBuilder(`share ${i}`).setId((index * index).toString()).build()
);
