import { Review } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

export class ReviewBuilder {
  review: Review;
  constructor(clientId: string, adviserId: string) {
    this.review = new ReviewInstance(clientId, adviserId);
  }

  setText(text: string) {
    this.review.text = text;
    return this;
  }
  setRating(rating: number) {
    this.review.rating = rating;
    return this;
  }

  build() {
    return this.review;
  }
}

class ReviewInstance {
  clientId: string;
  adviserId: string;
  id: string;
  text: string;
  rating: number;
  constructor(
    clientId: string = "",
    adviserId: string = "",
    id: string = uuidv4(),
    text: string = "very good adviser, I would recommend him to anyone!",
    rating: number = 8
  ) {
    this.id = id;
    this.text = text;
    this.rating = rating;
    this.clientId = clientId;
    this.adviserId = adviserId;
  }
}
