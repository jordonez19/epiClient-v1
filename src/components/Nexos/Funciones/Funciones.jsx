import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


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