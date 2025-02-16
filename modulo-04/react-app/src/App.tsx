import { AppRouter } from "@/router";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import lime from "@mui/material/colors/lime";

const theme = createTheme({
  palette: {
    primary: lime,
  },
});

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
          <AppRouter />
      </ThemeProvider>
    </>
  );
};
