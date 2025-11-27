import React from "react";
import { Typography } from "@mui/material";
import SectionWrapper from "../layout/SectionWrapper";

const About = ({ about }) => {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="A quick snapshot of who I am"
    >
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800 }}>
        {about}
      </Typography>
    </SectionWrapper>
  );
};

export default About;
