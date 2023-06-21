// import React from 'react'
import axios from 'axios';
import { Config } from './config';

//Funcion envio de parametros de logueo
export async function PostLogin (data) {
    let acceso
    await axios({
        method: 'post',
        url: Config().endpoint1+'api/user/login',
        data: data
       }).then(response=>{
        if(response.data.success){
            sessionStorage.setItem('nombre',JSON.parse(response.data.user).name)
            sessionStorage.setItem('token',response.data.token)
            acceso = response.data
        }else{  
            acceso = response.data
        }
       }).catch(e=>{
        console.log(e)
       })
       return acceso
}

export async function activeTypeServices () {
    let acceso
    await axios({
        method: 'get',
        url: Config().endpoint1+'api/services/activeTypes',
        headers: {'Authorization': sessionStorage.getItem('token')}
       }).then(response=>{
        if(response.data.success){
            acceso = response.data
        }else{  
            acceso = response.data
        }
       }).catch(e=>{
        console.log(e)
       })
       return acceso
}

export async function PostCreateServices (data) {
    let acceso
    await axios({
        method: 'post',
        url: Config().endpoint1+'api/services/types/storeRecord',
        headers: {'Authorization': sessionStorage.getItem('token')},
        data:data
       }).then(response=>{
        if(response.data.success){
            acceso = response.data
        }else{  
            acceso = response.data
        }
       }).catch(e=>{
        console.log(e)
       })
       return acceso
}