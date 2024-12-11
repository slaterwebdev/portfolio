import { NavLink, Route } from "react-router-dom";
import { scrollToTop } from "./utilities";
import { lazy } from "react";

type RouteConfig = {
  route: string;
  path: string;
  Component: React.LazyExoticComponent<React.ComponentType>;
};

const routeConfig: RouteConfig[] = [
  { route: "Home", path: "/", Component: lazy(() => import("@/pages/Home")) },
  {
    route: "About",
    path: "/about",
    Component: lazy(() => import("@/pages/About")),
  },
  {
    route: "Portfolio",
    path: "/portfolio",
    Component: lazy(() => import("@/pages/Portfolio")),
  },
  {
    route: "Contact",
    path: "/contact",
    Component: lazy(() => import("@/pages/Contact")),
  },
];

export const routes = routeConfig.map(({ path, Component }, index) => (
  <Route key={index} path={path} element={<Component />} />
));

export const navLinks = routeConfig.map(({ route, path }) => (
  <NavLink
    key={path}
    to={path}
    onClick={() => scrollToTop()}
    className={({ isActive }) =>
      `hover:text-primary px-2 h-[300px] ${
        isActive ? "text-secondary font-bold" : ""
      }`
    }
  >
    {route}
  </NavLink>
));
