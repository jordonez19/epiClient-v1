import React from "react";
import { Navigate } from "react-router-dom";
import ClearLocalStorageHOC from "../hoc/ClearLocalStorageHOC";

export const PrivateRoutes = ({ isAuth, children, navigate }: any) => {
  return (
    <ClearLocalStorageHOC navigate={navigate}>
      {/* Muestra el dashboard solo si el usuario está autenticado */}
      {isAuth ? children : <Navigate to={`${process.env.PUBLIC_URL}/authentication`} />}
    </ClearLocalStorageHOC>
  );
};

export const PublicRoutes = ({ isAuth, children, navigate }: any) => {
  return (
    <ClearLocalStorageHOC navigate={navigate}>
      {/* Muestra el componente solo si el usuario no está autenticado */}
      {!isAuth ? children : <Navigate to="/" replace />}
    </ClearLocalStorageHOC>
  );
};
