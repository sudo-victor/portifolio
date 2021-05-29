import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';

import styles from './description.module.scss';

type Project = {
  id: string;
  name: string;
  theme: string;
  colorBackground: string;
  tags: string[];
  description: string;
  demos: string[];
  widthDemos: string;
  thumbnail: string;
  github: string;
  hasSite: boolean;
  site: string;
}


type DescriptionProjectProps = {
  project: Project;
}

export default function DescriptionProject({ project }: DescriptionProjectProps) {
  return (
    <section className={styles.descriptionComponent}>

      <div className={styles.headerDescription}>
        <div className={styles.logo} style={{ background: project?.colorBackground}}>
          <img src={project?.thumbnail} alt={project?.name} />
        </div>
        
        <div className={styles.info}>
          <h3>{project?.name}</h3>
          <div className={styles.linksToProject}>
            <Link href={String(project?.github)}>
              <a target="_blank">
                ver no github
                <AiFillGithub size={18} color="#efefef" style={{marginLeft: "5px"}}/>
              </a>
            </Link>
            {
              project?.hasSite && (
                <Link href={project?.site}>
                  <a target="_blank">
                    ver projeto
                    <BiWorld size={18} color="#efefef" style={{marginLeft: "5px"}}/>
                  </a>
                </Link>
              )
            }
          </div>
        </div>
      </div>
      
      <div className={styles.skills}>
          <h2>Tecnologias</h2>

          <div className={styles.tags}>
            {
              project?.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))
            }
          </div>
      </div>
    
      <div className={styles.description}>
        <h2>Descrição</h2>

        <p>
        {project?.description}
        </p>
      </div>
  
  </section>
  )
}