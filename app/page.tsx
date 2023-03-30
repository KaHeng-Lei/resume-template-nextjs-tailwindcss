import { aboutMe, skills, professionalData } from "../data/page-data";
import AboutMe from "./component/about-me";
import Skills from "./component/skills";
import ProfessionalExp from "./component/professional-exp";

const Home: React.FC = () => {
  return (
    <div>
      <AboutMe data={aboutMe} />
      <Skills data={skills} />
      <ProfessionalExp data={professionalData} />
    </div>
  );
};

export default Home;
