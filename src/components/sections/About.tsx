import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import artist from "../../assets/3d-artist.png"; 

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <Header useMotion={true} {...config.sections.about} />

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-8 flex flex-col lg:flex-row items-start justify-between gap-10"
      >
        {/* Left - Text Content */}
        <div className="lg:w-2/3 w-full">
          <p className="text-secondary text-[17px] leading-[30px]">
            {config.sections.about.content}
          </p>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/3 w-full flex justify-center">
          <img
            src={artist}
            alt="3D Artist"
            className="w-full max-w-[300px] object-contain rounded-xl shadow-lg"
          />
        </div>
      </motion.div>
 

     
    </>
  );
};

export default SectionWrapper(About, "about");
