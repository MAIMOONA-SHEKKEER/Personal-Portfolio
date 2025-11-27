import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Link as MuiLink,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SectionWrapper from "../layout/SectionWrapper";
import { ProjectCard } from "../../styles/projectStyles";

const Projects = ({ projects }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Some things I've built recently"
    >
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 4 }} key={project.name}>
            <ProjectCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {project.name}
                </Typography>
                <Stack
                  direction="row"
                  justifyContent={isSmall ? "center" : "flex-start"}
                  gap={1}
                  sx={{ flexWrap: "wrap", marginBottom: 1.5 }}
                >
                  {project.techStack.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  {project.description}
                </Typography>
                {project.link && (
                  <MuiLink
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                  >
                    View project →
                  </MuiLink>
                )}
              </CardContent>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Projects;
