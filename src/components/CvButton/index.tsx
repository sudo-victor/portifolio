
import styles from './cv.module.scss';

export default function CvButton() {
  return (
    <section className={styles.cvComponent} id="cv">
        <a href="curriculo.pdf" download className={styles.cv}>
          baixar cv
        </a>
    </section>
  )
}