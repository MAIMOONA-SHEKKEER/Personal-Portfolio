import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

export const ExperienceCard = styled(Card)(({ theme }) => {
  const isDark = theme.palette.mode === "dark";

  return {
    background: isDark
      ? "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))"
      : "linear-gradient(135deg, #ffffff, #f5f5f7)",
    border: isDark
      ? "1px solid rgba(148,163,184,0.4)"
      : "1px solid rgba(209,213,219,0.7)",
    boxShadow: isDark
      ? "0 20px 60px rgba(15,23,42,0.85)"
      : "0 20px 40px rgba(0,0,0,0.08)",
    borderRadius: 20,
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      boxShadow: isDark
        ? "0 28px 80px rgba(15,23,42,0.95)"
        : "0 26px 60px rgba(0,0,0,0.15)",
      borderColor: theme.palette.primary.main,
    },
  };
});
