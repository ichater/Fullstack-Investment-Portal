import { AdviserSignUpState } from "@/types";
import axios from "axios";
import { AdviserAuthContext } from "@/context/AdviserAuthContext";
import { useContext } from "react";

export const useAdviserAuth = () => {
  const { setAuthState } = useContext(AdviserAuthContext);
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

  const handleAdviserSignIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const res = await axios
        .post("http://localhost:3000/api/auth/advisorsignin", {
          email,
          password,
        })
        .then((res) => res.data.json());

      setAuthState({
        data: res.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      setAuthState({
        data: null,
        loading: false,
        error: "no response",
      });
    }
  };

  const handleAdviserSignOut = async () => {};

  return { handleAdviserSignUp, handleAdviserSignIn };
};
