import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const ProjectCard = styled(Card)(({ theme }) => {
  const isDark = theme.palette.mode === "dark";

  return {
    height: "100%",
    borderRadius: 24,
    transition: "all 0.25s ease",
    display: "flex",
    flexDirection: "column",
    background: isDark
      ? "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.82))"
      : "linear-gradient(135deg, #ffffff, #f3f4f6)",
    border: isDark
      ? "1px solid rgba(148,163,184,0.4)"
      : "1px solid rgba(209,213,219,0.7)",
    boxShadow: isDark
      ? "0 20px 60px rgba(15,23,42,0.85)"
      : "0 20px 40px rgba(0,0,0,0.08)",
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: theme.palette.primary.main,
      boxShadow: isDark
        ? "0 28px 80px rgba(15,23,42,0.95)"
        : "0 26px 60px rgba(0,0,0,0.12)",
    },
  };
});
