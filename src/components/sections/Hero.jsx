import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";
import {
  HeroRoot,
  HeroBackground,
  HeroCard,
  HeroText,
  HeroTag,
  HeroAccentDot,
  HeroActions,
  HeroSocials,
  HeroAvatarCard,
  HeroAvatar,
} from "../../styles/heroStyles";

const Hero = ({ personalInfo }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <HeroRoot id="hero">
      <HeroBackground />
      <Container maxWidth="lg">
        <HeroCard>
          <HeroText>
            <HeroTag>
              <HeroAccentDot />
              Available for freelance & full-time roles
            </HeroTag>

            <Typography variant="h3" component="h1" gutterBottom>
              Hi, I&apos;m {personalInfo.name}
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              gutterBottom
            >
              {personalInfo.role}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {personalInfo.about}
            </Typography>

            <HeroActions direction={isSmall ? "column" : "row"} spacing={2}>
              <Button
                href="#projects"
                variant="contained"
                size="large"
                disableElevation
                fullWidth={isSmall}
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                size="large"
                variant="outlined"
                fullWidth={isSmall}
              >
                Contact Me
              </Button>
            </HeroActions>

            <HeroSocials direction="row" spacing={1} alignItems="center">
              <IconButton
                component="a"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href={`mailto:${personalInfo.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <Email />
              </IconButton>
            </HeroSocials>
          </HeroText>

          <HeroAvatarCard>
            <HeroAvatar src={personalInfo.photoUrl} alt={personalInfo.name} />
            <Typography variant="h6">{personalInfo.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {personalInfo.location}
            </Typography>
          </HeroAvatarCard>
        </HeroCard>
      </Container>
    </HeroRoot>
  );
};

export default Hero;
