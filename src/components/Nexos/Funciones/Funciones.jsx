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
export function DatosTabla(){
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