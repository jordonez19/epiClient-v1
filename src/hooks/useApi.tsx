/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "./useAlert";
import Config from "../services/config";
import { actionLogout } from "../redux/actions/authActions";

export const useApi = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { handleSuccessAlert, handleAcceptConfirmation, handleErrorAlert } = useAlert();
  const config = Config();
  const { endpoint } = config;

  const logoutHandler = async () => {
    const result = await handleAcceptConfirmation("Su sesión ha expirado. Por favor ingrese de nuevo a la aplicación");
    if (result.isConfirmed || result.isDismissed) {
      dispatch(actionLogout());
      localStorage.clear();
      sessionStorage.clear();
    }
  };

  const handleResponseError = (response: any) => {
    if (response?.data?.signout === true) {
      logoutHandler();
    } else if (response?.data?.success === false && response?.data?.message) {
      setError({ success: false, message: response?.data?.message });
    }
  };

  const handleError = (error: any) => {
    console.log("Error:", error);
    setError({ success: false, message: "Error al realizar la solicitud." });
  };


  const get = async (path: string, params = {}) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.get(`${endpoint}/api/${path}`, {
        headers: { 'access-token': token }
      });
      handleResponseError(response);
      setIsLoading(false);
      return response?.data || [];
    } catch (error) {
      handleError(error);
      setIsLoading(false);
      return [];
    }
  };

  const post = async (path: string, data: any) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(`${endpoint}/api/${path}`, data, {
        headers: { 'access-token': token }
      });
      handleResponseError(response);
      setIsLoading(false);
      return response?.data || [];
    } catch (error) {
      handleError(error);
      setIsLoading(false);
      return [];
    }
  };

  const put = async (path: string, data: any) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.put(`${endpoint}/api/${path}`, data, {
        headers: { 'access-token': token }
      });
      handleResponseError(response);
      setIsLoading(false);
      return response?.data || [];
    } catch (error) {
      handleError(error);
      setIsLoading(false);
      return [];
    }
  };

  const del = async (path: string) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.delete(`${endpoint}/api/${path}`, {
        headers: { 'access-token': token }
      });
      handleResponseError(response);
      setIsLoading(false);
      return response?.data || [];
    } catch (error) {
      handleError(error);
      setIsLoading(false);
      return [];
    }
  };

  return {
    isLoading,
    error,
    get,
    post,
    put,
    del,
  };
};
