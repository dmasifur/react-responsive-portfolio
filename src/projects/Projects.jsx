import styles from "./ProjectStyles.module.css";
import Viberr from "../../src/assets/viberr.png";
import FreshBurger from "../../src/assets/fresh-burger.png";
import Hipsster from "../../src/assets/hipsster.png";
import Fitlift from "../../src/assets/fitlift.png";
import ProjectCard from "../common/ProjectCard";

export const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={Viberr} h3="Viberr" p="Streamming App" />
        <ProjectCard src={FreshBurger} h3="Fresh Burger" p="Fresh Burger App" />
        <ProjectCard src={Hipsster} h3="Hipsster" p="Glasses Shop" />
        <ProjectCard src={Fitlift} h3="Fitlift" p="Fitness App" />
      </div>
    </section>
  );
};
