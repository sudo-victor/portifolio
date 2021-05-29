import { useState, useEffect } from 'react';

import styles from './projects.module.scss';
import database from '../../data/database.json';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  theme: string;
  colorBackground: string;
  tags: string[];
}

export default function Projects() {
  const [projects] = useState(database.projects);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("todos");
  const [currentProjects, setCurrentProjects] = useState<Project[]>(projects);

  useEffect(() => {
    function getAllTags() {
      let getTagsInProjectsList = projects.map(project => project.tags).flat();
      const filterTags = ["todos", ...new Set(getTagsInProjectsList)];

      setTags(filterTags);
    }
    getAllTags()
  }, [])

  useEffect(() => {

    function loadCurrentProjects() {
      if(currentTag === "todos") {
        const allProjects = [...projects];
        setCurrentProjects(allProjects);

        return;
      }

      const currentProjectsFiltered = projects.filter(project => project.tags.includes(currentTag));
      setCurrentProjects(currentProjectsFiltered);
    }

    loadCurrentProjects()

  }, [currentTag])

  function handleChooseTag(text: string) {
    setCurrentTag(text);
  }

  return (
    <section className={styles.projectsComponent} id="projects">
      <h2>Projetos</h2>
      <div className={styles.tags}>
        {
          tags.map(tag => (
            <button 
              key={tag} 
              className={tag === currentTag ? styles.activated : ""}
              onClick={() => handleChooseTag(tag)}
            >{tag}</button>
          ))
        }
      </div>

      <div className={styles.items}>
        {
          currentProjects.map(project => (
            <Link href={`/projects/${project.id}`}>
            <button 
              key={project.id} 
              style={{ background: project.colorBackground}}
              >
                <div>
                  {project.name}
                </div>

              <img src={project.theme} alt={project.name}/>
            </button>
                </Link>
          ))
        }
        
      </div>
    </section>

  )
}