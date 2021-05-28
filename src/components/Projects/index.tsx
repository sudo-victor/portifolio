import { useState, useEffect } from 'react';
import Image from 'next/image';

import styles from './projects.module.scss';
import database from '../../data/database.json';

export default function Projects() {
  const [projects] = useState(database.projects);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("todos");

  useEffect(() => {
    function getAllTags() {
      let getTagsInProjectsList = projects.map(project => project.tags).flat();
      const filterTags = ["todos", ...new Set(getTagsInProjectsList)]
      setTags(filterTags);
    }
    getAllTags()
  }, [])

  function handleChooseTag(text: string) {
    setCurrentTag(text);
    console.log("teste")
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
          projects.map(project => (
            <article key={project.name} style={{ background: project.colorBackground}}>
              <img src={project.theme} alt={project.name}/>
            </article>
          ))
        }
        
      </div>
    </section>

  )
}