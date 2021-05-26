import { useState } from 'react';
import { useModalSkill } from '../../contexts/ModalSkillContext';

import database from '../../data/database.json';
import IconSkill from '../IconSkill/index.';
import styles from './skills.module.scss';

type Skill = {
  name: "Javascript" | "Typescript" | "Node.js" | "ReactJS" | "HTML5" | "CSS3" | "Sass" | "Expo" | "Next.JS";
  about: string;
  color: string;
}


export default function Skills() {
  const [skills] = useState<Skill[]>(database.skills as any);
  const { setContent, toggleModal } = useModalSkill();

  function handleActivateModal(skill: Skill) {
    setContent(skill);
    toggleModal();
  }

  return (
    <section className={styles.skillsComponent} id="skills">
      <h2>Minhas Skills</h2>

      <div>

        {
          skills.map((skill) => (
            <article key={skill.name}>
              <button style={{background: skill.color}} onClick={() => handleActivateModal(skill)}>
                <IconSkill name={skill.name} size={64} />
              </button>
              <span>{skill.name}</span>
            </article>
           )
          )
        }

      </div>

    </section>

  )
}