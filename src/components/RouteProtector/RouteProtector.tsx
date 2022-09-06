import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface RouteProtectorProps {
  children: JSX.Element | JSX.Element[];
}

const RouteProtector = ({ children }: RouteProtectorProps): JSX.Element => {
  const hasToken = useAppSelector((state) => state.user.token);

  return hasToken ? <>{children}</> : <Navigate to="/login" />;
};

export default RouteProtector;
