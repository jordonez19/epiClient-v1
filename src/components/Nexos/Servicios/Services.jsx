// import React from 'react'
import axios from 'axios';

//Funcion envio de parametros de logueo
export async function PostLogin (data) {
    let acceso
    await axios({
         method: 'post',
         url: 'http://24.199.101.106/management/api/user/login',
        data: data
       }).then(response=>{
        if(response.data.success){
            localStorage.setItem('nombre',JSON.parse(response.data.user).name)
            localStorage.setItem('token',response.data.token)
            
            acceso = response.data
        }else{  
            acceso = response.data
        }
       }).catch(e=>{
        console.log(e)
       })
       return acceso
}