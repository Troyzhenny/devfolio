import { projectList } from "../constants/index";
import ProjectCard from "../components/ui/ProjectCards";


const Work = () => {
    return(
        <div className="projects flex-center flex-column">
            {/* make sure to change heading from h1 for symatic code and seo */}
            <h1>Selected Work</h1>
            
            <div className="flex gap wrap justify-center">
                {projectList.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>

    )
}

export default Work;