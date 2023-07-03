import { Share } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class ShareBuilder {
  share: Share;
  constructor(name: string) {
    this.share = new ShareInstance(name);
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
    asxCode: string = "abc123",
    id: string = uuidv4(),
    name: string = "theShare",
    category: string = "ASX"
  ) {
    this.id = id;
    this.asxCode = asxCode;
    this.name = name;
    this.category = category;
  }
}
