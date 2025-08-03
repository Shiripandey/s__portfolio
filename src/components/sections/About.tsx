import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import artist from "../../assets/3d-artist.png";

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
