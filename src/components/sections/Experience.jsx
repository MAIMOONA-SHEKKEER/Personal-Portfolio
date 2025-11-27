import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import SectionWrapper from "../layout/SectionWrapper";
import { ExperienceCard } from "../../styles/experienceStyles";

const Experience = ({ experiences }) => {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Where I've been working recently"
    >
      <Grid container spacing={3}>
        {experiences.map((exp) => (
          <Grid size={{ xs: 12, sm: 6 }} key={exp.company + exp.role}>
            <ExperienceCard>
              <CardContent>
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {exp.company}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", marginTop: 0.5, marginBottom: 1.5 }}
                >
                  {exp.period}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.description}
                </Typography>
              </CardContent>
            </ExperienceCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Experience;
