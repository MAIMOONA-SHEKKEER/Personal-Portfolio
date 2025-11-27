import { createTheme } from "@mui/material/styles";

export const getDesignTokens = (mode = "dark") => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: { main: "#4f46e5" },
          secondary: { main: "#f97316" },
          background: {
            default: "#020617",
            paper: "#020617",
          },
          text: {
            primary: "#e5e7eb",
            secondary: "#9ca3af",
          },
        }
      : {
          primary: { main: "#4f46e5" },
          secondary: { main: "#f97316" },
          background: {
            default: "#f3f4f6",
            paper: "#ffffff",
          },
          text: {
            primary: "#111827",
            secondary: "#4b5563",
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 16,
  },
});

export const createAppTheme = (mode = "dark") =>
  createTheme(getDesignTokens(mode));
