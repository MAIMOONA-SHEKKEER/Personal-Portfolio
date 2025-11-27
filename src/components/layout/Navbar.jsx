import React, { useEffect, useState } from "react";
import {
  Toolbar,
  Typography,
  Stack,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DarkMode, LightMode, Menu, Close } from "@mui/icons-material";
import { BlurAppBar, NavButton } from "../../styles/navbarStyles";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NAV_HEIGHT = 72;

const Navbar = ({ name, mode, onToggleColorMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["hero", ...sections.map((s) => s.id)];
      const offset = NAV_HEIGHT + 10;
      let currentActive = "hero";

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rectTop = el.getBoundingClientRect().top;
        if (rectTop - offset <= 0) {
          currentActive = id;
        }
      });

      setActiveSection(currentActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (id) => (event) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y =
        el.getBoundingClientRect().top + window.scrollY - (NAV_HEIGHT + 8);
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <BlurAppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              minHeight: NAV_HEIGHT,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, cursor: "pointer" }}
              onClick={handleNavClick("hero")}
            >
              {name}
            </Typography>

            {!isMobile && (
              <Stack direction="row" spacing={1.5} alignItems="center">
                <IconButton
                  onClick={onToggleColorMode}
                  color="inherit"
                  size="small"
                  aria-label="toggle light/dark mode"
                >
                  {mode === "dark" ? (
                    <LightMode fontSize="small" />
                  ) : (
                    <DarkMode fontSize="small" />
                  )}
                </IconButton>

                {sections.map((section) => (
                  <NavButton
                    key={section.id}
                    onClick={handleNavClick(section.id)}
                    color={activeSection === section.id ? "primary" : "inherit"}
                    variant={activeSection === section.id ? "outlined" : "text"}
                    size="small"
                  >
                    {section.label}
                  </NavButton>
                ))}
              </Stack>
            )}

            {isMobile && (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <IconButton
                  onClick={onToggleColorMode}
                  color="inherit"
                  size="small"
                  aria-label="toggle light/dark mode"
                >
                  {mode === "dark" ? (
                    <LightMode fontSize="small" />
                  ) : (
                    <DarkMode fontSize="small" />
                  )}
                </IconButton>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="open navigation menu"
                  onClick={handleToggleDrawer}
                >
                  {mobileOpen ? <Close /> : <Menu />}
                </IconButton>
              </Stack>
            )}
          </Toolbar>
        </Container>
      </BlurAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleToggleDrawer}
        PaperProps={{
          sx: {
            width: "70%",
            maxWidth: 280,
            backgroundColor:
              theme.palette.mode === "dark" ? "rgba(15,23,42,0.98)" : "#ffffff",
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.text.primary,
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 2, py: 1.5 }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleToggleDrawer} size="small">
            <Close />
          </IconButton>
        </Stack>
        <Divider />
        <List sx={{ py: 1 }}>
          {sections.map((section) => (
            <ListItemButton
              key={section.id}
              onClick={handleNavClick(section.id)}
              selected={activeSection === section.id}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Toolbar sx={{ minHeight: NAV_HEIGHT }} />
    </>
  );
};

export default Navbar;
