import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Router from "./components/router/router";

function App() {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 680,
        lg: 960,
        xl: 1200,
      },
    },
    typography: {
      fontFamily: ["'Prompt'", " sans-serif"].join(","),
      h1: {
        color: "white",
        fontWeight: "bold",
        "@media (max-width:500px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:500px)": {
          fontSize: "1.8rem",
        },
        "@media (min-width:900px)": {
          fontSize: "3rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "4rem",
        },
      },
      h2: {
        color: "black",
        fontWeight: "bold",
        "@media (max-width:500px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:500px)": {
          fontSize: "1.3rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "2rem",
        },
      },
      h3: {
        color: "white",
        "@media (max-width:500px)": {
          fontSize: ".8rem",
          padding: "1rem 0",
        },
        "@media (min-width:500px)": {
          fontSize: ".8rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        margin: "1rem 0",
        fontWeight: "bold",
        "@media (max-width:500px)": {
          fontSize: ".9rem",
        },
        "@media (min-width:500px)": {
          fontSize: "1rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.1rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.2rem",
        },
      },
      h5: {
        margin: "1rem",
        color: "#888888",
        fontWeight: "bold",
        "@media (max-width:500px)": {
          fontSize: "1rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.5rem",
        },
      },
      body1: {
        color: "#888888",
        padding: "1rem 0",
        textAlign: "center",
        "@media (max-width:500px)": {
          fontSize: ".8rem",
          width: "100%",
        },
        "@media (min-width:500px)": {
          maxWidth: "34rem",
        },
      },
      body2: {
        padding: ".5rem",
        "@media (max-width:500px)": {
          fontSize: ".8rem",
          marginLeft: "1rem ",
        },
        "@media (min-width:500px)": {
          fontSize: ".8rem",
          margin: " 0 1rem ",
        },
        "@media (min-width:900px)": {
          fontSize: "1rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1rem",
        },
      },
    },
    palette: {
      primary: { main: "rgb(0, 30, 60)" },
      secondary: { main: "#ffff" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
