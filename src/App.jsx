import { ThemeProvider, CssBaseline } from "@mui/material";
import usePortfolioData from "./hooks/usePortfolioData";
import useColorMode from "./hooks/useColorMode";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

const App = () => {
  const { mode, theme, toggleColorMode } = useColorMode("dark");
  const { personalInfo, skills, experiences, projects } = usePortfolioData();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        name={personalInfo.name}
        mode={mode}
        onToggleColorMode={toggleColorMode}
      />
      <Hero personalInfo={personalInfo} />
      <About about={personalInfo.about} />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact personalInfo={personalInfo} />
      <Footer name={personalInfo.name} />
    </ThemeProvider>
  );
};

export default App;
