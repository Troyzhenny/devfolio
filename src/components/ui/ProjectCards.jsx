import SecondaryButton from "./SecondaryButton";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const { image, title, description } = project;

  return (
    // TODO: When card is hovered, top right corner an icon pops up to view live site
    <div id="card" className="card flex-center flex-column">
      <div id="imageWrapper">
        <img src={image} alt={title} />
      </div>

      <div id="cardContent" className="flex-center justify-center flex-column">
        <h2>{title}</h2>

        <div id="deck" className="flex-center justify-center flex-column">
          <p className="text-white">
           {description}
          </p>
          <SecondaryButton value="Code" />
        </div>
      </div>
    </div>
  );
};

// prop-types validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
};

export default ProjectCard;
