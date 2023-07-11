import { generateString } from "@/lib/utils/randomstringgenerator";
import { Share } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class ShareBuilder {
  share: Share;
  constructor(name: string) {
    this.share = new ShareInstance(name);
  }
  setId(id: string) {
    this.share.id = id;
    return this;
  }
  setasxCode(code: string) {
    this.share.asxCode = code;
    return this;
  }
  setCategory(category: string) {
    this.share.category = category;
    return this;
  }

  build() {
    return this.share;
  }
}

class ShareInstance {
  name: string;
  id: string;
  asxCode: string;
  category: string;
  constructor(
    name: string = "theShare",
    asxCode: string = generateString(3).toLocaleUpperCase(),
    id: string = uuidv4(),
    category: string = `${generateString(5)} ASX`
  ) {
    this.id = id;
    this.asxCode = asxCode;
    this.name = name;
    this.category = category;
  }
}
