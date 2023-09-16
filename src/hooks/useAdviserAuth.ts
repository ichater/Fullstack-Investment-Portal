import { AdviserSignUpState } from "@/types";
import axios from "axios";
import { AdviserAuthContext } from "@/context/AdviserAuthContext";
import { useContext } from "react";
import { redirect } from "next/navigation";

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
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
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
    } catch (error: any) {
      console.log(error.response.data.errorMessage);
      setAuthState({
        data: null,
        loading: false,
        error: "error",
      });
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

  return { handleAdviserSignUp, handleAdviserSignIn, handleAdviserSignOut };
};
