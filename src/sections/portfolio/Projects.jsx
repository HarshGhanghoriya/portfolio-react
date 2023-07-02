import Project from './Project';

const Projects = (props) => {
  const {projects}=props;  
  return (
    <div className='portfolio-projects'>
        {projects.map((project)=>(
            <Project key={project.id} project={project}/>
        ))}
    </div>
  )
}

export default Projects
