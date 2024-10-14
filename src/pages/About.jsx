import Profile from "/images/profile.jpg";
import { motion } from "framer-motion";
import Stack from "../components/Stack";
import Resume from "../components/Resume";
import Bio from "../components/Bio";

const About = () => {
  return (
    <section className="projects flex-center flex-column page-pad gap">
      <div className="bio-wrapper flex-center wrap justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={Profile} alt="Tevin" className="profile" />
        </motion.div>

        <div className="para-wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", delay: 0.2, duration: 0.4 }}
          >
            <h2>About me</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Bio />
          </motion.div>
        </div>
      </div>

      <div className="skills flex-center justify-center flex-column gap">
        <h3>My Stack</h3>
        <Stack />
      </div>

      <div className="cv debug flex-center justify-center flex-column gap">
        <h3>Resume</h3>
        <Resume />
      </div>
    </section>
  );
};

export default About;
