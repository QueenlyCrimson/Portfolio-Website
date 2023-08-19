import ChattingApp from "./ChattingApp"
import Libratica from "./Libratica"
import ProjectMemory from "./ProjectMemory"
import ProjectTransformers from "./ProjectTransformers"

const Projects = () => {

  return(
    <div className="projects">
      <div className="duocontainer"><ProjectMemory /> <ProjectTransformers /></div>
      <div className="duocontainer"><ChattingApp /> <Libratica /></div>
    </div>
  )
}

export default Projects