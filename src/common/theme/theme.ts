import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5a5a",
    },
    success: {
      main: "#2ecc71",
      "700": "#48b6a3",
    },
    text: {
      primary: "#4a4a4a",
      secondary: "#3f3f3f",
      disabled: "#9b9b9b",
    },
  },
  typography: {
    fontFamily: "Prompt",
    body1: {
      fontSize: "16px",
    },
    body2: {
      fontSize: "12px",
    },
    h1: {
      fontSize: "42px",
    },
    h3: {
      fontSize: "24px",
    },
    h4: {
      fontSize: "20px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
  spacing: 4,
});

export default theme;
