import { AdviserSignUpState } from "@/types";
import axios from "axios";
import { AdviserAuthContext } from "@/context/AdviserAuthContext";
import { useContext } from "react";
import { deleteCookie } from "cookies-next";

export const useAdviserAuth = () => {
  const { setAuthState, setTriggerFetchAuth } = useContext(AdviserAuthContext);
  const handleAdviserSignUp = async (
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
    }: AdviserSignUpState,
    handleClose: () => void = () => {}
  ) => {
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

      setAuthState({
        data: res.data.adviser,
        loading: false,
        error: null,
      });

      handleClose();

      setTriggerFetchAuth(true);
      return res;
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage as string,
      });
      return error.response.data.errorMessage;
    }
  };

  const handleAdviserSignIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void = () => {}
  ) => {
    setAuthState({
      data: null,
      loading: true,
      error: null,
    });
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/advisorsignin",
        {
          email,
          password,
        }
      );
      setAuthState({
        data: res.data.advisor,
        loading: false,
        error: null,
      });

      setTriggerFetchAuth(true);
      handleClose();
      return res;
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage as string,
      });
    }
  };

  const handleAdviserSignOut = async () => {
    deleteCookie("jwt");
    setTriggerFetchAuth(true);
  };

  return { handleAdviserSignUp, handleAdviserSignIn, handleAdviserSignOut };
};
