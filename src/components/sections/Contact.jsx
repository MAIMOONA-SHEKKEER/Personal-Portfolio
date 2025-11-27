import React from "react";
import { Stack, Typography, Link as MuiLink, Box, Paper } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import SectionWrapper from "../layout/SectionWrapper";
import { ContactCard } from "../../styles/contactStyles";

const Contact = ({ personalInfo }) => {
  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Reach out for work, collaboration, or just to say hi"
    >
      <Box display="flex" justifyContent="flex-start">
        <ContactCard elevation={0}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </Typography>

          <Stack spacing={1.5} sx={{ mb: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email fontSize="small" />
              <MuiLink href={`mailto:${personalInfo.email}`} underline="hover">
                {personalInfo.email}
              </MuiLink>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LinkedIn fontSize="small" />
              <MuiLink
                href={personalInfo.linkedin}
                target="_blank"
                underline="hover"
              >
                LinkedIn Profile
              </MuiLink>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <GitHub fontSize="small" />
              <MuiLink
                href={personalInfo.github}
                target="_blank"
                underline="hover"
              >
                GitHub Profile
              </MuiLink>
            </Stack>
          </Stack>

          <Typography variant="body2" color="text.secondary">
            Drop me a message and I&apos;ll get back to you as soon as I can.
          </Typography>
        </ContactCard>
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
