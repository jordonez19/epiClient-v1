import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


//Funcion de el lanzamiento del Modal forma global
export function modalGlobal(title,message,icon){
  
    const MySwal = withReactContent(Swal)
  
    
  
    MySwal.fire({
      title: <b>{title}</b>,
      text:message,
      icon:icon,
      // showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      // confirmButtonText: 'Cerrar!',
    //   didOpen: () => {
    //     // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    //   },
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     MySwal.fire(
    //       'Lo has cerrado Fine',
    //       'blablabla',
    //       'success'
    //     )
    //   }else{
    //     MySwal.fire(
    //       'Se preciona cancelar',
    //       'ñañañañañña',
    //       'warning'
    //     )
    //   }
    })
}

//Datos de exportacion para tablas 
export function DatosTablaConfirmacion(){
  const data = [
    {
       "id":"1",
       "nombre":"Carla",
       "apellido":"Cifuentes",
       "email":"gowtham@outlook.com",
       "path":"outlook010"
    },
    {
       "id":"2",
       "nombre":"Mario",
       "apellido":"Duarte",
       "email":"ss@ss.com",
       "path":"ss"
    },
    {
       "id":"3",
       "nombre":"Luisa",
       "apellido":"Fernandes",
       "email":"gow@gow.com",
       "path":"gow"
    }
  ]

  return data

}

//Datos de exportacion para tablas 
export function DatosTablaCotizaciones(){
  const data = [
    {
       "id":"1",
       "conjunto":"Bosques123",
       "nit":"123456",
       "consecutivo":"123456NP",
       "estado":"No-Contratado"
    },
    {
      "id":"2",
      "conjunto":"Bosques234",
      "nit":"234567",
      "consecutivo":"234567P",
      "estado":"No-Contratado"
    },
    {
      "id":"3",
      "conjunto":"Bosques234",
      "nit":"345678",
      "consecutivo":"345678NP",
      "estado":"Contratado"
    },
    {
      "id":"4",
      "conjunto":"Bosques000",
      "nit":"000000",
      "consecutivo":"000000NP",
      "estado":"No-Contratado"
    },
    {
      "id":"5",
      "conjunto":"Bosques456",
      "nit":"456789",
      "consecutivo":"456789NP",
      "estado":"Contratado"
    },
    {
      "id":"6",
      "conjunto":"Bosques567",
      "nit":"567890",
      "consecutivo":"567890NP",
      "estado":"Contratado"
    }
  ]

  return data

}

export function ciudadesColombia(){

  const ciudades= [
    {
    id:"1",
    value:"Bogota-1",  
    label:"Bogota",
    name:'ciudad'
    },
    {
      id:"2",
      value:"Inirida-2",  
      label:"Inirida",
      name:'ciudad'
    },
    {
      id:"3",
      value:"Tunja-3",  
      label:"Tunja",
      name:'ciudad'  
    },
    {
      id:"4",
      value:"Florencia-4",  
      label:"Florencia",
      name:'ciudad'   
    },
    {
      id:"5",
      value:"Neiva-5",  
      label:"Neiva",
      name:'ciudad' 
    },

  ]

  return ciudades

}

export function formularioResumenServicios(){

  const data= [
    {
      id: "1",
      SNO: 1,
      item: "Mixta",
      cantidad: "6",
      precio: "$798,654",
    },
    {
      id: "2",
      SNO: 2,
      item: "Presencial",
      cantidad: "3",
      precio: "$743,654",
    },
    {
      id: "3",
      SNO: 3,
      item: "Vitual",
      cantidad: "9",
      precio: "$1.443,654", 
    },
    {
      id: "4",
      SNO: 4,
      item: "Presencial",
      cantidad: "5",
      precio: "$843,654", 
    },
    {
      id: "5",
      SNO: 5,
      item: "Electrovotes",
      cantidad: "1",
      precio: "$1043,654",
    },

  ]

  return data

}