import React, {useState, useEffect} from "react";
import projetsData from '../../assets/data/projets.json';
import './Projets.css';
import Modale from "../../components/Modale/Modale";

const Projets = () => {

    const [projects, setProjects] = useState([]);
    const [isModaleOpen, setIsModaleOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        setProjects(projetsData);
    }, []);

    const openModale = (project) => {
        setSelectedProject(project);
        setIsModaleOpen(true);
    };

    const closeModale = () => {
        setIsModaleOpen(false);
        setSelectedProject(null);
    };

    return (
        <div className="liste-projects">
            <div>
              <h2 className="titre-projects" id="mesprojets">Mes derniers Projets</h2>
            </div>
            {projects.map(project => (
                <div key={project.id} className="project-card" onClick={() => openModale(project)}>
                    <img src={project.imagePreview} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.tech.map((tech,index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Voir le projet sur GitHub</a>
                </div>
            ))};
            {isModaleOpen && <Modale project={selectedProject} closeModale={closeModale} />}
        </div>
    );
};

export default Projets;