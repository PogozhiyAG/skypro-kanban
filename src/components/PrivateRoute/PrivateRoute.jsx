/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../AppRoutes";

export const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.Login} />;
}

