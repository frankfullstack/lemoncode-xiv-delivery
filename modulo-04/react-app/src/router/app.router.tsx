import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { DetailScene, ListScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layout";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path={switchRoutes.root} element={<LoginScene />} /> 
          // TODO: Review because was causing the avoid login because we moved 
          // to the render interception in the profile.provider.tsx */}
          <Route
            path="*"
            element={
              <AppLayout>
                <Routes>
                  <Route path={switchRoutes.list} element={<ListScene />} />
                  <Route path={switchRoutes.detail} element={<DetailScene />} />
                  <Route
                    path="*"
                    element={<Navigate to={switchRoutes.list} />}
                  />
                </Routes>
              </AppLayout>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
