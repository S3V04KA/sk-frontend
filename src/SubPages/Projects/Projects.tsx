import Card from "../../Components/Card/Crad";
import './Projects.scss';

function Projects({projects}: {projects: {id: number, title: string, img: string, date: string, phoneNumber: string, email: string, description: string}[]}) {
  return (
    <div className="projects">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          img={project.img}
          date={project.date}
          phoneNumber={project.phoneNumber}
          email={project.email}
          description={project.description}
          onClick={() => {}}
        />
      ))}
    </div>
  )
}

export default Projects;