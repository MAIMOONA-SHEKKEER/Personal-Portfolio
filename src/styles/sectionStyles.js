import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/material";

export const SectionRoot = styled("section")(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  position: "relative",
}));

export const SectionBackground = styled("div")(({ theme }) => {
  const isDark = theme.palette.mode === "dark";

  return {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: isDark ? 0.25 : 0.12,
    background: `radial-gradient(circle at top left, ${theme.palette.primary.main} 0, transparent 55%),
                 radial-gradient(circle at bottom right, ${theme.palette.secondary.main} 0, transparent 55%)`,
  };
});

export const SectionContent = styled(Container)(() => ({
  position: "relative",
  zIndex: 1,
}));

export const TitleRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  gap: theme.spacing(1.5),
}));

export const TitleAccent = styled("span")(({ theme }) => ({
  width: 32,
  height: 5,
  borderRadius: 999,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
}));
