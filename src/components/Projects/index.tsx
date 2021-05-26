
import styles from './projects.module.scss';

export default function Projects() {
  return (
    <section className={styles.projectsComponent} id="projects">
      <h2>Projetos</h2>
      <div className={styles.tags}>
        <button className={styles.activated}>HTML5/CSS3</button>
        <button>ReactJS</button>
        <button>Expo</button>
        <button>Node.JS</button>
      </div>

      <div className={styles.items}>
        <article>em breve</article>
        <article>em breve</article>
      </div>
    </section>

  )
}