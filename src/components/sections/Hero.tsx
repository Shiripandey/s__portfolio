import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";
import github from "../../assets/github.png";
import leet from "../../assets/leet.png";
import linkd from "../../assets/linkd.png";
import resume from "../../assets/resume.png";


const Hero = () => {
  return (
 <section className={`relative mx-auto h-screen w-full`}>
  {/* Content Layer - Bring to front with z-index */}
  <div
    className={`absolute inset-0 top-[120px] z-10 mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
  >
    {/* Left vertical line */}
    <div className="mt-5 flex flex-col items-center justify-center">
      <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
      <div className="violet-gradient h-40 w-1 sm:h-80" />
    </div>

    {/* Right side text */}
    <div>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
      </h1>
      <p className={`${styles.heroSubText} text-white-100 mt-2`}>
        {config.hero.p[0]} <br className="hidden sm:block" />
        {config.hero.p[1]}
      </p>

      {/* ✅ Social Icons Below Paragraph */}
     <div className="mt-4 flex gap-5 items-center">
  {/* GitHub */}
  <a
    href="https://github.com/Shiripandey"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
  >
    <img
      src={github}
      alt="GitHub"
      className="w-8 h-8 object-contain hover:scale-110 transition-transform"
    />
  </a>

  {/* LeetCode */}
  <a
    href="https://leetcode.com/u/shreeya_1/"
    target="_blank"
    rel="noopener noreferrer"
    title="LeetCode"
  >
    <img
      src={leet}
      alt="LeetCode"
      className="w-6 h-6 object-contain hover:scale-110 transition-transform"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/shreeya-pandey-70a485225/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <img
      src={linkd}
      alt="LinkedIn"
      className="w-8 h-8 object-contain hover:scale-110 transition-transform"
    />
  </a>

  {/* Resume */}
  <a
    href="https://drive.google.com/drive/folders/1aRhc0CMn-U86CyBVym4vxdheuaGX0iJe"
    target="_blank"
    rel="noopener noreferrer"
    title="Resume"
  >
    <img
      src={resume}
      alt="Resume"
       className="w-10  h-10 object-contain hover:scale-110 transition-transform"
    />
  </a>
</div>

    </div>
  </div>

  {/* This canvas stays behind */}
  <ComputersCanvas />

  {/* Scroll animation */}
  <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center z-10">
    <a href="#about">
      <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
        <motion.div
          animate={{ y: [0, 24, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="bg-secondary mb-1 h-3 w-3 rounded-full"
        />
      </div>
    </a>
  </div>
</section>
  );
};

export default Hero;