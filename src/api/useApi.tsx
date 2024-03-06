import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "../hooks/useAlert";
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

  const fetchData = async (method: any, path: any, data?: any) => {
    const api_method = method === "get" ? axios.get : method === "post" ? axios.post : method === "put" ? axios.put : axios.delete;
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await api_method(endpoint + `api/${path}`, {
        headers: { 'Authorization': token },
        data
      });
      handleResponseError(response);
      setIsLoading(false);
      return response?.data?.content || [];
    } catch (error) {
      handleError(error);
      setIsLoading(false);
      return [];
    }
  };

  const get = async (path: string, params = {}) => {
    return fetchData("get", path);
  };

  const post = async (path: string, data: any) => {
    return fetchData("post", path, data);
  };

  const put = async (path: string, data: any) => {
    return fetchData("put", path, data);
  };

  const del = async (path: string) => {
    return fetchData("delete", path);
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
