import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id"
}

interface Routes extends Omit<SwitchRoutes, 'detail'> {
  detail: (login: string) => string;
}

// Extending basic routes with new custom ones
export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath("/detail/:id", {
    id: login,
  })
}