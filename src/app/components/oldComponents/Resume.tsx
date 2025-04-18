import { experience } from "@/app/data/sliderImages";
import { textDescripionResume } from "@/app/data/general";

import Slider from "./commons/Slider";
import TitleSection from "./commons/TitleSection";

const Resume = () => {
  return <div className="sectionSite">
    <TitleSection title="Resume" description={textDescripionResume} />
    <Slider items={experience} />
  </div>;
};

export default Resume;