import { styled } from "@mui/material/styles";
import { Box, Avatar, Stack } from "@mui/material";

export const HeroRoot = styled("section")(({ theme }) => ({
  minHeight: "75vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(8),
}));

export const HeroBackground = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(79,70,229,0.35), transparent 55%), radial-gradient(circle at bottom, rgba(249,115,22,0.25), transparent 55%)",
  opacity: 0.8,
}));

export const HeroCard = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.1fr)",
  gap: theme.spacing(6),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

export const HeroText = styled(Box)(({ theme }) => ({
  maxWidth: 600,
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
    textAlign: "center",
  },
}));

export const HeroTag = styled("span")(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 10px",
  borderRadius: 999,
  border: "1px solid rgba(148,163,184,0.4)",
  fontSize: 12,
  marginBottom: theme.spacing(2),
  gap: 6,
}));

export const HeroAccentDot = styled("span")(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));

export const HeroActions = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const HeroSocials = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

export const HeroAvatarCard = styled(Box)(({ theme }) => {
  const isDark = theme.palette.mode === "dark";

  return {
    justifySelf: "center",
    borderRadius: 24,
    padding: theme.spacing(3),
    textAlign: "center",
    maxWidth: 320,
    background: isDark
      ? "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))"
      : "linear-gradient(135deg, #ffffff, #f3f4f6)",
    border: isDark
      ? "1px solid rgba(148,163,184,0.4)"
      : "1px solid rgba(209,213,219,0.7)",
    boxShadow: isDark
      ? "0 25px 80px rgba(15,23,42,0.9)"
      : "0 20px 60px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(3),
    },
  };
});

export const HeroAvatar = styled(Avatar)(({ theme }) => ({
  width: 132,
  height: 132,
  margin: "0 auto",
  marginBottom: theme.spacing(2),
  border: "3px solid rgba(148,163,184,0.4)",
}));
