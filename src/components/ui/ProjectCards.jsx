import { LuArrowUpRight } from "react-icons/lu";
import PrimaryBtn from "./PrimaryBtn";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div id="card" className="card flex-center flex-column">
      <div id="deck" className="flex-center justify-center flex-column">
        <div className="flex-center justify-center flex-column">
          <h2>{project.title}</h2>
          <p className="text-white">{project.description}</p>
        </div>
        <div className="flex-center pady-5 gap-sm">
          <PrimaryBtn value="Code" url={project.codeUrl} />
          <br />
          <LuArrowUpRight
            className="app--btn pointer"
            onClick={() => open(project.liveUrl)}
          />
        </div>
      </div>
    </div>
  );
};


ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    codeUrl: PropTypes.string,
    liveUrl: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
