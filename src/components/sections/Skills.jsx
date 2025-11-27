import React from "react";
import {
  Grid,
  CardContent,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SectionWrapper from "../layout/SectionWrapper";
import {
  SkillCard,
  CategoryHeader,
  CategoryLabel,
  SkillChip,
} from "../../styles/skillsStyles";

const Skills = ({ skills }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="A snapshot of the tools and technologies I work with"
    >
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} alignItems="stretch">
        {skills.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category.title}>
            <SkillCard elevation={0}>
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textAlign: isSmall ? "center" : "left",
                }}
              >
                <CategoryHeader>
                  <CategoryLabel variant="overline">
                    {category.title}
                  </CategoryLabel>
                  {category.subtitle && (
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      sx={{ marginTop: 0.5 }}
                    >
                      {category.subtitle}
                    </Typography>
                  )}
                </CategoryHeader>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: isSmall ? "center" : "flex-start",
                    gap: 1,
                  }}
                >
                  {category.skills.map((skill) => (
                    <SkillChip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size={isSmall || isMedium ? "small" : "medium"}
                    />
                  ))}
                </Box>
              </CardContent>
            </SkillCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Skills;
