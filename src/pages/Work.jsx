import { projectList } from "../constants/index";
import ProjectCard from "../components/ui/ProjectCards";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section id="--work" className="projects flex-center flex-column page-pad">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", delay: 0.2, duration: 0.4 }}
      >
        <h2>Selected Work</h2>
      </motion.div>

      <motion.div
        className="flex gap wrap justify-center"
        initial={{ opacity: 0, translateY: 500 }}
        animate={{ opacity: 1, translateY: 1 }}
        transition={{ ease: "linear", delay: 0.3, duration: 0.6 }}
      >
        {projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
