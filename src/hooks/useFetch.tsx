// import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAlert } from "./useAlert";
import Config from "../services/config";
import { actionLogout } from "../redux/actions/authActions";


export const useFetch = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const { handleSuccessAlert, handleAcceptConfirmation, handleErrorAlert } = useAlert();
  const config = Config()
  const { endpoint } = config;


  const logoutHandler = async () => {
    const result = await handleAcceptConfirmation("Su sesión ha expirado. Por favor ingrese de nuevo a la aplicación")
    if (result.isConfirmed || result.isDismissed) {
      dispatch(actionLogout());
      localStorage.clear();
      sessionStorage.clear();
    }
  }

  const getAllData = async (path: string, params = {}): Promise<any> => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        endpoint + `${path}`,
        {
          headers: { Authorization: token },
          params
        }
      );
      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }

      if (response?.data?.success === false && response?.data?.message) {
        setError({ success: false, message: response?.data?.message });
        setIsLoading(false);
        return [];
      }

      if (response?.data?.content && response?.data?.meeting_types || response?.data?.content && response?.data?.units || response?.data?.url) {
        setError(null);
        setIsLoading(false);
        return response.data;
      }

      setError(null);
      setIsLoading(false);
      return response?.data?.content;
    } catch (error) {
      console.log("Error Get Data:", error);
      setIsLoading(false);
      setError({ success: false, message: "Error al obtener la data." });
      return [];
    }
  }

  const getById = async (path: string, params = {}): Promise<any> => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.get(
        endpoint + `${path}`,
        {
          headers: { Authorization: token },
          params
        }
      );

      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      setError(null);
      setIsLoading(false);
      return response?.data?.content;
    } catch (error) {
      console.log("Error Get Data:", error);
      setIsLoading(false);
      setError({ success: false, message: "Error al obtener la data." });
      return [];
    }
  }

  const getDataById = async (id: any, path: string) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      /*
      if (!token) {
        throw new Error(
          "No hay token en el sessionStorage. Inicie sesión primero."
        );
      }
      */
      const response = await axios.get(
        endpoint + `${path}` + id,
        {
          headers: { Authorization: token },
        }
      );
      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      setIsLoading(false);
      return response?.data?.content;
    } catch (error) {
      console.log("Error Get Data:", error);
      setIsLoading(false);
      setError({ success: false, message: "Error al obtener la data." })
      return [];
    }
  }

  const postData = async (jsonData: any, path: string, stringify?: boolean, redirects?: string) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(endpoint + `api/${path}`, jsonData, {
        headers: {
          'Authorization': token
        }
      });
      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      if (response?.data?.success === false && response?.data?.message !== "") {
        await handleErrorAlert(response.data.message);
      }

      if (response?.data?.success === true && response?.data?.message !== "") {
        await handleSuccessAlert(response.data.message, redirects);
      }
      const data = response?.data?.content;
      setIsLoading(false);
      if (!data) {
        return [];
      }

      if (stringify) {
        return data.map((dataString: any) => JSON.parse(dataString));
      } else {
        return data;
      }

    } catch (error: any) {
      setIsLoading(false);
      setError({ success: false, message: "Error al crear." });
      handleErrorAlert(error?.message);
      return [];
    }
  }
  const postDataLoading = async (jsonData: any, path: string, stringify?: boolean, redirects?: string) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.post(endpoint + `api/${path}`, jsonData, {
        headers: {
          'Authorization': token
        }
      });
      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      if (response?.data?.success === false && response?.data?.message !== "") {
        await handleErrorAlert(response.data.message);
      }

      const data = response?.data?.content;
      setIsLoading(false);
      if (!data) {
        return [];
      }

      if (stringify) {
        return data.map((dataString: any) => JSON.parse(dataString));
      } else {
        return data;
      }

    } catch (error: any) {
      setIsLoading(false);
      setError({ success: false, message: "Error al crear." });
      handleErrorAlert(error?.message);
      return [];
    }
  }

  const putData = async (jsonData: any, path: string, redirects?: string, showAlert = true) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");

      const response = await axios.put(endpoint + `api/${path}`, jsonData, {
        headers: {
          'Authorization': token
        }
      });

      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      if (response?.data?.success === false && response?.data?.message !== "") {
        await handleErrorAlert(response.data.message);
      }
      if (response?.data?.success === true && response?.data?.message !== "" && showAlert) {
        await handleSuccessAlert(response.data.message, redirects);
      }
      setIsLoading(false);
      return response.data;
    } catch (error: any) {
      await handleErrorAlert('Error al actualizar');
      setIsLoading(false);
      setError({ success: false, message: "Error al actualizar la data." });
      return [];
    }
  }

  const getAllDataStringify = async (
    path: string,
    stringify = true,
    params = {}
  ) => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      /*
      if (!token) {
        throw new Error(
          "No hay token en el sessionStorage. Inicie sesión primero."
        );
      }
      */
      const response = await axios.get(endpoint + `${path}`, {
        headers: { Authorization: token },
        params,
      });

      let data = response.data.content;

      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }

      setIsLoading(false);

      if (stringify) {
        return data.map((dataString: any) => JSON.parse(dataString));
      } else {
        return JSON.parse(data);
      }

    } catch (error) {
      setIsLoading(false);
      setError({ success: false, message: "Error al obtener la data." });
      return [];
    }
  }

  const get_data = async (path: string, params = {}): Promise<any> => {
    try {
      setIsLoading(true);
      const token = sessionStorage.getItem("token");
      const response = await axios.get(endpoint + `${path}`, { headers: { Authorization: token }, params });
      if (response?.data?.signout === true) {
        logoutHandler();
        return [];
      }
      return response.data;
    } catch (error) {
      console.log("Error Get Data:", error);
      setIsLoading(false);
      setError({ success: false, message: "Error al obtener la data." });
      return [];
    }
  }

  return {
    // Methods
    getAllData,
    getById,
    getDataById,
    postData,
    putData,
    getAllDataStringify,
    get_data,
    postDataLoading,
    //Properties
    isLoading,
    error,
  }
}

