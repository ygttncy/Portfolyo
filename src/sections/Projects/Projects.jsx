import styles from './ProjectsStyles.module.css';

import freshBurger from '../../assets/fresh-burger.png';
import todoList from '../../assets/todolist.jpg';
import  Weatherapp from '../../assets/waetherappp.jpg';
import  myblog from '../../assets/myblog.webp';
import  Furniro from '../../assets/furniro.webp';
import  Quizapp from '../../assets/quizapp.webp';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://github.com/ygttncy/FoodApp"
          h3="Food App"
          p="Food App"
        />
        <ProjectCard
          src={Quizapp}
          link="https://github.com/ygttncy/quiz-app"
          h3="Quiz App"
          p="Quiz app"
        />
        <ProjectCard
          src={todoList}
          link="https://github.com/ygttncy/todo-list"
          h3="Todo List"
          p="Todo List"
        />
          <ProjectCard
          src={Weatherapp}
          link="https://github.com/ygttncy/weater-app"
          h3="Weather App"
          p="Weather App"
        />
          <ProjectCard
          src={myblog}
          link="https://github.com/ygttncy/myblog"
          h3="My Blog"
          p="My Blog"
        />
            <ProjectCard
          src={Furniro}
          link="https://github.com/ygttncy/Furniro"
          h3="Furniro"
          p="Furniro"
        />
      </div>
    </section>
  );
}

export default Projects;
