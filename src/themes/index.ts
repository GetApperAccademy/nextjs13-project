import { createTheme, responsiveFontSizes } from "@mui/material";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#6e0000",
      },
      secondary: {
        main: "#2e3940",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
    },
  }),
);
