import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import check from './sweetAlert.module.scss';

export const useAlert = () => {
  const navigate = useNavigate();
  // Success alert
  const handleSuccessAlert = (message: string, path: string = "") => {
    Swal.fire({
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 1500,
      customClass: {
        icon: check.customClass,
        container: 'swal2-container',
      },
      iconColor: '#fd7e14',
      confirmButtonColor: '#fd7e14',
    }
    ).then(() => {
      if (path) {
        navigate(`${process.env.PUBLIC_URL}/${path}`);
      }
    });
  };

  // Error alert
  const handleErrorAlert = (message: string, path: string = "") => {
    Swal.fire({
      icon: "error",
      title: message,
      customClass: {
        container: 'swal2-container',
      },
      confirmButtonText: "OK",
      iconColor: '#fd7e14',
      confirmButtonColor: '#fd7e14',
    });
    if (path) {
      navigate(`${process.env.PUBLIC_URL}/${path}`);
    }
  };

  const handleInfoAlert = (message: string, path: string = "") => {
    Swal.fire({
      icon: "info",
      title: message,
      customClass: {
        container: 'swal2-container',
      },
      confirmButtonText: "OK",
      iconColor: '#fd7e14',
      confirmButtonColor: '#fd7e14',
    });
    if (path) {
      navigate(`${process.env.PUBLIC_URL}/${path}`);
    }
  }

  const handleEditConfirmation = async (message: string) => {
    const result = await Swal.fire({
      icon: "question",
      title: message,
      customClass: {
        container: 'swal2-container',
      },
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      iconColor: '#fd7e14',
      confirmButtonColor: '#fd7e14',
    });

    return result;
  }

  const handleAcceptConfirmation = async (message: string) => {
    const result = await Swal.fire({
      icon: "info",
      title: message,
      customClass: {
        container: 'swal2-container',
      },
      showCancelButton: false,
      confirmButtonText: "Ok",
      iconColor: '#fd7e14',
      confirmButtonColor: '#fd7e14',
    });

    return result;
  }

  return {
    // Methods
    handleSuccessAlert,
    handleErrorAlert,
    handleEditConfirmation,
    handleAcceptConfirmation,
    handleInfoAlert
  }

}