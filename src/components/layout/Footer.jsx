import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

const FooterRoot = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  borderTop: "1px solid rgba(148, 163, 184, 0.3)",
  marginTop: theme.spacing(4),
}));

const Footer = ({ name }) => {
  return (
    <FooterRoot>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </Typography>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
