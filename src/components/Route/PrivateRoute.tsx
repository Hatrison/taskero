import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectIsLoggedIn, selectIsRefreshing } from "@/redux/auth/selectors";
import { RouteProps } from "./Route.types";

export const PrivateRoute = ({
  component: Component,
  redirectTo,
}: RouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
