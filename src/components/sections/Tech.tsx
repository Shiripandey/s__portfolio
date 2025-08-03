import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { motion } from "framer-motion"; // ✅ Added
import { fadeIn } from "../../utils/motion"; // ✅ Added
import { Header } from "../atoms/Header";
import trophyGif from "../../assets/troph2.png"; // adjust path based on your file structure


const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

{/* Technical Skills */}
<div className="w-full">
  <h2 className="text-white text-[32px] font-bold mb-6">
    Technical Skills
  </h2>
  <p className="text-secondary text-[17px] leading-[30px]">
    <strong>• Programming Languages:</strong> C++, Python, JavaScript (ES6+), SQL, HTML5, CSS3, Bash, Java<br />
    <strong>• Frameworks & Libraries:</strong> React.js, Node.js, Express.js, Flask, Next.js, Tailwind CSS, Bootstrap, jQuery<br />
    <strong>• Databases & Backend:</strong> MongoDB, MySQL, REST APIs, JWT, Bcrypt, Redis<br />
    <strong>• Tools & Platforms:</strong> Git, GitHub, VS Code, Jenkins, Jira, Postman, Tableau, Figma, Docker, Kubernetes, Aws (Basics), Firebase, GPT-4 (ChatGPT), Claude (Opus, Sonnet), Gemini<br />
    <strong>• Monitoring & DevOps:</strong> Prometheus, Grafana, CI/CD, Azure Monitor, Linux Commands<br />
    <strong>• Concepts & Fundamentals:</strong>  DSA, OOP, System Design, Distributed Systems, Multithreading, OS, DBMS, Networking, Incident Response, Agile
  </p>
</div>

{/* Trophy GIF between Skills and Achievements */}
<div className="w-full flex justify-center ">
  <img
    src={trophyGif}
    alt="Trophy"
    className="w-[500px] h-[500px] object-contain"
  />
</div>


{/* Achievements */}
<div className="w-full">
  <h2 className="text-white text-[32px] font-bold mb-6">
    Achievements
  </h2>
 <p className="text-secondary text-[17px] leading-[30px]">
  Among the top-performing all-female teams at 
  <a
    href="https://github.com/Shiripandey/woodpecker_hackathon"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 underline ml-1"
  >
    Woodpecker's Hackathon
  </a>; developed a disaster prediction algorithm and website.
  <br /><br />
  Achieved fifth position in the intra-college SIH Hackathon (2022).
  <br /><br />
  Participated in several hackathons including HackerRamp by Myntra and Sparkathon, showcasing strong collaboration and technical innovation.
  <br /><br />
  Secretary of the National Service Scheme (NSS) Club; organized and managed events such as blood donation drives and volunteering in Paralympic events.
</p>
</div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
