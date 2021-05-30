import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import styles from './mockup.module.scss';

type Project = {
  name: string;
  demos: string[];
  widthDemos: string;
}

type MockupProps = {
  project: Project;
}

export default function Mockup({ project }: MockupProps) {
  const [indexDemo, setIndexDemo] = useState(0);

  function handlePreviousDemo() {
    if(indexDemo === 0) {
      const index = project.demos.length - 1;
      setIndexDemo(() => index);
      console.log("entrou aqui", indexDemo, index)
      return;
    }
    setIndexDemo(indexDemo - 1);
  }

  function handleNextDemo() {
    if(indexDemo === project.demos.length - 1) {
      setIndexDemo(0);
      return;
    }
    setIndexDemo(indexDemo + 1);
  }

  return (
    <section className={styles.mockupComponent}>

    {
      project.demos.length > 1 && (
        <button 
          className={styles.controlDemo}
          onClick={handlePreviousDemo}
        >
              <BsArrowLeft size={32} color="#333" />
        </button>
      )
    }
    
    <div className={styles.mockup} style={{width: project?.widthDemos}}>
      <img key={project.demos[indexDemo]} src={project.demos[indexDemo]} alt={`Demonstração ${project.name}`} />
    </div>

{
  project.demos.length > 1 && (
    <button 
      className={styles.controlDemo}
      onClick={handleNextDemo}
    >
          <BsArrowRight size={32} color="#333" />
    </button>
  )
}
  
  </section>
  )
}
