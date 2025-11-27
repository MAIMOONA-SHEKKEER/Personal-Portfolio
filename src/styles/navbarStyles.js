import { styled } from "@mui/material/styles";
import { AppBar, Button } from "@mui/material";

export const BlurAppBar = styled(AppBar)(({ theme }) => {
  const isDark = theme.palette.mode === "dark";

  return {
    backgroundColor: isDark
      ? "rgba(15, 23, 42, 0.85)"
      : "rgba(255, 255, 255, 0.9)",

    color: isDark ? theme.palette.common.white : theme.palette.text.primary,

    backdropFilter: "blur(16px)",
    boxShadow: isDark
      ? "0 8px 32px rgba(15, 23, 42, 0.65)"
      : "0 8px 32px rgba(0,0,0,0.08)",
    borderBottom: isDark
      ? "1px solid rgba(255,255,255,0.06)"
      : "1px solid rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    zIndex: theme.zIndex.drawer + 1,
  };
});

export const NavButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 500,
  fontSize: 14,
  transition: "color 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(15,23,42,0.8)"
        : "rgba(229,231,235,0.8)",
  },
}));
