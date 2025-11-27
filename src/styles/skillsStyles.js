import { styled } from "@mui/material/styles";
import { Card, Chip, Box, Typography } from "@mui/material";

export const SkillCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 24,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[6],
  transition:
    "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
  display: "flex",
  flexDirection: "column",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[12],
    borderColor: theme.palette.primary.main,
  },
}));

export const CategoryHeader = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const CategoryLabel = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: 1,
  color: theme.palette.text.secondary,
}));

export const SkillChip = styled(Chip)(({ theme }) => ({
  borderRadius: 999,
  borderColor:
    theme.palette.mode === "dark"
      ? "rgba(148,163,184,0.7)"
      : "rgba(156,163,175,0.7)",
  fontSize: 12,
}));
