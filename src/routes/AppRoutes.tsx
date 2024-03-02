import React from "react";
import { Navigate, HashRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { PublicRoutes, PrivateRoutes } from "./";
import { DashboardPrivateRoutes, DashboardPublicRoutes } from "./dashboards";
import Loader from "../shade/Loaders/Loaders";
import "../index.scss";

export const AppRoutes = () => {
  const { user } = useSelector((store: any) => store.user);

  window.onhashchange = function () { window.location.hash = process.env.PUBLIC_URL; }

  return (
    <HashRouter basename="/">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path={`${process.env.PUBLIC_URL}/*`}
            element={
              <PublicRoutes isAuth={user?.token}>
                <DashboardPublicRoutes />
              </PublicRoutes>
            }
          />

          <Route
            path={`${process.env.PUBLIC_URL}/dashboard/*`}
            element={
              <PrivateRoutes isAuth={user?.token}>
                <DashboardPrivateRoutes />
              </PrivateRoutes>
            }
          />

          <Route
            path="*"
            element={<Navigate to={`${process.env.PUBLIC_URL}`} />}
          />
        </Routes>
      </React.Suspense>
    </HashRouter>
  );
};