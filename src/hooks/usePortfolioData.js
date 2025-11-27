import personalInfo from "../data/personalInfo";
import skills from "../data/skills";
import experiences from "../data/experiences";
import projects from "../data/projects";

const usePortfolioData = () => {
  return {
    personalInfo,
    skills,
    experiences,
    projects,
  };
};

export default usePortfolioData;
