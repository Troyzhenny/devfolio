import Profile from "/images/profile.jpg";
import { biography } from "../constants/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="projects flex-center flex-column page-pad">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'linear', delay: .2, duration: .4 }}
      >
        <h2>About me</h2>
      </motion.h2>

      <div className="flex gap wrap justify-center">
        <div className="container">
          <div className="bio-wrapper flex-center wrap full-width">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src={Profile} alt="Tevin" className="profile" />
            </motion.div>

            <div className="para-wrapper">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <p className="text-white flex wrap">{biography.bio}</p>
              </motion.p>
            </div>
          </div>

          <div className="skills">
            <h3>Tech Stack</h3>
          </div>

          <div className="cv">
            <h3>Resume</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
