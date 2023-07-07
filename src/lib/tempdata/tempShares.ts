import { Share } from "@prisma/client";
import { ShareBuilder } from "../builders/investments/shares";
import { arrayFromNumber } from "../utils/arrayFromNumber";

export const tempShareData: Share[] = arrayFromNumber(100).map((i) =>
  new ShareBuilder(`share ${i}`).build()
);
