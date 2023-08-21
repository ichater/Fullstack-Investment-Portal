import { AdviserSignUpState } from "@/types";
import axios from "axios";

export const adviserAuth = () => {
  const handleAdviserSignUp = async ({
    firstName,
    lastName,
    email,
    bio,
    city,
    company,
    phone,
    password,
    confirmPassword,
  }: AdviserSignUpState) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/advisorsignup",
        {
          firstName,
          lastName,
          email,
          bio,
          city,
          company,
          phone,
          password,
          confirmPassword,
        }
      );
      console.log(res.data);
      return res;
    } catch (error) {
      return error;
    }
  };

  return { handleAdviserSignUp };
};
