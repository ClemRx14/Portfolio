import React, {useState} from 'react';
import './Modale.css';

const Modale = ({ project, closeModale }) => {
  const [currentImage, setCurrentImage] = useState(0);
  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((image) => (image + 1) % project.images.length);
  };
  const imageBefore = () => {
    setCurrentImage((image) => (image - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modale-overlay" onClick={closeModale}>
      <div className="modale-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <div className="carrousel">
          <button className="image-precedente" onClick={imageBefore}>❮</button>
          <img src={project.images[currentImage]} alt={project.title} />
          <button className="image-suivante" onClick={nextImage}>❯</button>
        </div>
        <p>{project.deuxiemeDescription}</p>
        <a href={project.repoLink} target="_blank">Voir le projet sur Github</a>
        <button className="close-modale" onClick={closeModale}>Fermer</button>
      </div>
    </div>
  );
};

export default Modale;
