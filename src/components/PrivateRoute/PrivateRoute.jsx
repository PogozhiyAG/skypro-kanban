/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const PrivateRoute = () => {
  const {auth} = useContext(AuthContext);
  return auth?.user?.token ? <Outlet /> : <Navigate to={AppRoutes.Login} />;
}

