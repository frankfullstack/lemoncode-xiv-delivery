import { AppRouter } from "@/router";
import { MembersProvider } from "./core/providers";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import lime from "@mui/material/colors/lime";

const theme = createTheme({
  palette: {
    primary: lime,
    // secondary: {
    //   main: "#0000d9"
    // }
  },
});

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MembersProvider>
          <AppRouter />
        </MembersProvider>
      </ThemeProvider>
    </>
  );
};
