import { useEffect, useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'

import Header from '../../components/Header';
import styles from './project.module.scss';
import Link from 'next/link';

import database from '../../data/database.json';
import { useRouter } from 'next/dist/client/router';

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

export default function Project() {
  const router = useRouter();
  const {slug} = router.query;
  const [project, setProject] = useState<Project>();

  useEffect(() => {

    function setProjectBySlug() {
      const projectById = database.projects.find((project) => project.id === slug);
      setProject(projectById);
    }

    setProjectBySlug()
  }, [])

  return (
    <div className={styles.projectPage}>
      <section className={styles.containerSection}>
        <Header isWhite/>
        <Link href="/">
          <button className={styles.goBack}>
                  <BsArrowLeft color="#333" size={24}/>
          </button>
        </Link>
        <section className={styles.mockupContainer}>

          <div className={styles.mockup} style={{width: project?.widthDemos}}>
                {
                  project?.demos.map(demo => (
                    <img key={demo} src={demo} alt="" />
                  ))
                }
          </div>

        </section>
      </section>

      <section className={styles.containerSection}>
        <Header />
        <section className={styles.descriptionContainer}>
          <div className={styles.headerDescription}>
            <div className={styles.logo} style={{ background: project?.colorBackground}}>
              <img src={project?.thumbnail} alt={project?.name} />
            </div>
            <div className={styles.info}>
              <h3>{project?.name}</h3>
              <div className={styles.linksToProject}>
                <Link href={String(project?.github)}>
                  <a target="_blank">ver no github</a>
                </Link>
                {
                  project?.hasSite && (
                    <Link href={project.site}>
                      <a target="_blank">ver projeto</a>
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
        
      </section>
      
    </div>
  )
}