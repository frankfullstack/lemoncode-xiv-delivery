import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { DetailScene, ListScene, LoginScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { AppLayout } from "@/layout";
import { MembersProvider, ProfileProvider } from "@/core";
import { Backdrop, CircularProgress, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { GithubProvider } from "@/core/providers/github/github.provider";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={loading}>
        <CircularProgress
          size={100}
          sx={{ color: theme.palette.primary.dark }}
        />
      </Backdrop>
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.1s ease-in-out",
        }}
      >
        {!loading && children}
      </div>
    </>
  );
};

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <ProfileProvider components={{ Login: <LoginScene /> }}>
          <GithubProvider>
            <MembersProvider>
              <PageTransition>
                <Routes>
                  {/* <Route path={switchRoutes.root} element={<LoginScene />} /> 
          // TODO: Review because was causing the avoid login because we moved 
          // to the render interception in the profile.provider.tsx */}
                  <Route
                    path="*"
                    element={
                      <AppLayout>
                        <Routes>
                          <Route
                            path={switchRoutes.list}
                            element={<ListScene />}
                          />
                          <Route
                            path={switchRoutes.detail}
                            element={<DetailScene />}
                          />
                          <Route
                            path="*"
                            element={<Navigate to={switchRoutes.list} />}
                          />
                        </Routes>
                      </AppLayout>
                    }
                  ></Route>
                </Routes>
              </PageTransition>
            </MembersProvider>
          </GithubProvider>
        </ProfileProvider>
      </BrowserRouter>
    </>
  );
};
