import { projectList } from "../constants/index";
import ProjectCard from "../components/ui/ProjectCards";


const Work = () => {
    return(
        <div className="projects flex-center flex-column page-pad">
            <h2>Selected Work</h2>
            
            <div className="flex gap wrap justify-center">
                {projectList.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

    )
}

export default Work;