import "./App.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import { Suspense } from "react";
import routes from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          {Object.entries(routes).map(([key, route]) => {
            return route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <Route key={route.path} {...route} />
            );
          })}
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
