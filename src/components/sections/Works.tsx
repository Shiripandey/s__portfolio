import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";
import shree from "../../assets/shree.png";
import githubr from "../../assets/githubo.png";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[300px]">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-[24px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    {/* Achievements Section
<div className="flex flex-col items-start justify-between w-full pb-20">
  <Header useMotion={true} title="Achievements" />

  <motion.div
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-10 flex flex-col items-start justify-between gap-10"
  >
    <div className="w-full">
      <h2 className="text-white text-[32px] font-bold mb-6">Achievements</h2>
      <p className="text-secondary text-[17px] leading-[30px]">
        Among the top-performing all-female teams at Woodpecker's Hackathon; developed a disaster prediction algorithm and website.
        <br /><br />
        Achieved fifth position in the intra-college SIH Hackathon (2022).
        <br /><br />
        Secretary of the National Service Scheme (NSS) Club; organized and managed events such as blood donation drives and volunteering in Paralympic events.
      </p>
    </div>
  </motion.div>
</div> */}
      {/* Header + Image Section */}
      <div className="flex flex-col-reverse md:flex-row items-start justify-between w-full gap-4">
        {/* Left: Header + Text */}
        <div className="flex-1">
          <Header useMotion={true} {...config.sections.works} />
          <div className="w-full">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
            >
              {config.sections.works.content}
            </motion.p>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-auto flex justify-center md:justify-end"
        >
          <img
            src={shree}
            alt="Shree"
            className="w-[250px] h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Projects Section */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {/* GitHub Link */}
      <div className="mt-10 flex items-center justify-center gap-2 text-white text-[16px]">
        <span>Want to see more projects?</span>
        <a
          href="https://github.com/Shiripandey?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition"
        >
          <span>Visit GitHub</span>
          <img
            src={githubr}
            alt="GitHub"
            className="w-5 h-5 object-contain"
          />
        </a>
      </div>

      
    </>
  );
};

export default SectionWrapper(Works, "");