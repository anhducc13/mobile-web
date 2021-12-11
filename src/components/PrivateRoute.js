import { Component } from "react";
import { Route } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(routeProps) => <Component {...routeProps} />} />
    );
  }
}

export default PrivateRoute;
