// import React from 'react'
import axios from 'axios';


//Funcion envio de parametros de logueo
export async function PostLogin (data) {
    await axios({
         method: 'post',
         url: 'va aqui la url ',
        data: data
       }).then(response=>{
        console.log(response)
       }).catch(e=>{
        console.log(e)
       })
}