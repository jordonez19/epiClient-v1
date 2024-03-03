// appRoutes.tsx
import React from "react";
import { Navigate, HashRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../shade/Loaders/Loaders";
import "../index.scss";
import SignIn from "../Authentication/Login";
import MainContainer from "../containers/Main";
import { DashboardPrivateRoutes } from "./DashboardRoutesUtils";
import { PrivateRoutes, PublicRoutes } from "./routesUtils";

export const AppRoutes = () => {
  const { user } = useSelector((store: any) => store.user);

  window.onhashchange = function () {
    window.location.hash = process.env.PUBLIC_URL;
  };

  return (
    <HashRouter basename="/">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          {/* Ruta principal muestra MainContainer */}
          <Route path="/" element={<MainContainer />} />

          {/* Rutas para el dashboard */}
          <Route
            path={`${process.env.PUBLIC_URL}/dashboard/*`}
            element={
              <PrivateRoutes isAuth={user?.token}>
                <DashboardPrivateRoutes />
              </PrivateRoutes>
            }
          />

          {/* Ruta de inicio de sesión */}
          <Route
            path={`${process.env.PUBLIC_URL}/authentication`}
            element={
              <PublicRoutes isAuth={user?.token}>
                <SignIn />
              </PublicRoutes>
            }
          />

          {/* Redirige cualquier otra ruta a la ruta principal */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};
