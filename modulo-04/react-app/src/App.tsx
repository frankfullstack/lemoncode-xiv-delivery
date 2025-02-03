import { AppRouter } from "@/router";
import { ProfileProvider } from "./core";
import { MembersProvider } from "./core/providers";
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import lime from "@mui/material/colors/lime";
import { LoginScene } from "./scenes";

const theme = createTheme({
  palette: {
    primary: lime,
    // secondary: {
    //   main: "#0000d9"
    // }
  }
})

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProfileProvider components={ { Login: <LoginScene /> }}>
          <MembersProvider>
            <AppRouter />
          </MembersProvider>
        </ProfileProvider>
      </ThemeProvider>
    </>
  );
};
