import React from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import {
  SectionRoot,
  SectionBackground,
  SectionContent,
  TitleRow,
  TitleAccent,
} from "../../styles/sectionStyles";

const SectionWrapper = ({ id, title, subtitle, children }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <SectionRoot id={id}>
      <SectionBackground />
      <SectionContent
        maxWidth="lg"
        sx={{ textAlign: isSmall ? "center" : "left" }}
      >
        {title && (
          <TitleRow
            sx={{
              justifyContent: isSmall ? "center" : "flex-start",
            }}
          >
            <TitleAccent />
            <Box>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              {subtitle && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: 0.5 }}
                >
                  {subtitle}
                </Typography>
              )}
            </Box>
          </TitleRow>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isSmall ? "center" : "flex-start",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </SectionContent>
    </SectionRoot>
  );
};

export default SectionWrapper;
