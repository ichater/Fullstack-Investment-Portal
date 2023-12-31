import { AdviserBuilder, ClientBuilder } from "../builders";
import { tempClientSallie } from "./tempClient";
import { AdviserDataParsed, ClientDataParsed } from "@/types";

export const tempAdviser: AdviserDataParsed = new AdviserBuilder("Claire")
  .setId("tempAdviserId")
  .setLastName("Ruming")
  .setEmail("crum@gmail.com")
  .setSlug("claire-ruming")
  .setBio(
    "Not really sure what I am doing here since I am a nurse by trade, I will be very honest about what I do and do not know with you. Look you honestly shouldn't come to me for financial advice since its not my area of expertise. But if you want to have a cuppa and a chat then I am 100% your gal."
  )
  .build();

export const tempAdvisersClients: ClientDataParsed[] = [
  tempClientSallie,
  new ClientBuilder("John").build(),
  new ClientBuilder("Brian").build(),
];
