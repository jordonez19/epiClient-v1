import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


//Funcion de el lanzamiento del Modal forma global
export function modalGlobal(){

    const MySwal = withReactContent(Swal)
  
    
  
    MySwal.fire({
      title: <b>'Nexos'</b>,
      text:'Subtitulo desde el backend',
      icon:'success',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Cerrar!',
  
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
      },
    }).then((result:any) => {
      if (result.isConfirmed) {
        MySwal.fire(
          'Lo has cerrado Fine',
          'blablabla',
          'success'
        )
      }else{
        MySwal.fire(
          'Se preciona cancelar',
          'ñañañañañña',
          'warning'
        )
      }
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