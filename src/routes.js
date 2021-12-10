import React from "react";

const ReactLazyPreload = (importStatement) => {
  const Component = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const HomePage = ReactLazyPreload(() => import("./pages/Home"));
const LoginPage = ReactLazyPreload(() => import("./pages/Login"));

const publicRoutes = {
  login: { exact: true, path: "/login", component: LoginPage },
};

const privateRoutes = {
  home: { exact: true, path: "/", component: HomePage },
};

const reaprivateRoutes = {};
Object.entries(privateRoutes).forEach(([key, val]) => {
  reaprivateRoutes[key] = { ...val, private: true };
});

export default {
  ...reaprivateRoutes,
  ...publicRoutes,
};
