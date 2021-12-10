import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // handle logic check user and login
  return (
    <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
  );
};

export default PrivateRoute;
