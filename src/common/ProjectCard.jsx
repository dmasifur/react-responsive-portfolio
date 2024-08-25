const ProjectCard = ({ src, h3, p }) => {
  return (
    <div>
      <a href="#">
        <img className="hover" src={src} alt={`${h3} logo`} />
        <h3>{h3}</h3>
        <p>{p}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
