import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Tindog',
    image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1719463248/Screenshot_2024-06-27_100143_kcesy2.png',
    link: 'https://github.com/Ajayajju016/Tindog',
    code: 'https://github.com/Ajayajju016/Tindog',
    description: 'I built a captivating static website called Tindog for dog lovers to connect and explore popular travel spots.',
    technologies: 'HTML, CSS'
  },
  {
    name: 'Calculator',
    image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1719463248/Screenshot_2024-06-27_100625_ydzj08.png',
    link: 'https://github.com/Ajayajju016/Calculator',
    code: 'https://github.com/Ajayajju016/Calculator',
    description: 'I built a user-friendly website featuring a versatile calculator for quick and accurate computations.',
    technologies: 'HTML , CSS, JavaScript'
  },
  {
    name: 'Todos Application',
    image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1719463247/Screenshot_2024-06-27_100738_hiw4tf.png',
    link: 'https://ajayapptodo.ccbp.tech/',
    code: 'https://github.com/Ajayajju016/Todos-Application',
    description: 'A task management solution, designed to make life easier.',
    technologies: ' HTML, CSS, JS, Bootstrap'
  },
  {
    name: 'NxtWatch',
    image: 'https://res.cloudinary.com/dufukqgv0/image/upload/v1719463247/Screenshot_2024-06-27_100819_wjth8x.png',
    link: 'https://ajaynxtwatch.ccbp.tech/login',
    code: 'https://github.com/Ajayajju016/nxtwatch',
    description: 'Developed the Nxt Watch platform, a YouTube-inspired application where users can access various video categories, such as Trending, Gaming, and Saved videos, and search for specific content while customising the visual theme.',
    technologies: 'HTML, CSS, JavaScript, React JS, Bootstrap, React Rating Stars, React Select, Figma, client storage.'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="heading d-flex flex-row justify-content-center pt-4 pb-3">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <div className="project-buttons">
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
