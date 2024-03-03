// import React from 'react'
import axios from "axios";
import Config from "./config";

export async function PostLogin(data: any) {
    const config = Config()
    const { endpoint } = config;

    const payload = {
        email: data.email,
        password: data.password,
    }

    try {
        const response = await axios.post(`${endpoint}/api/auth/signin`, payload);

        if (!!response) {
            console.log('response login', response)
            /* sessionStorage.setItem("nombre", userObject.user_name);
            sessionStorage.setItem("token", userObject.token); */
        }
        return response.data;
    } catch (error) {
        console.log(error);
        return { status: false, message: "Error en la petición" };
    }
}

