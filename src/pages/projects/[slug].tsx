import { GetStaticProps, GetStaticPaths } from "next";
import { BsArrowLeft } from 'react-icons/bs';
import { NextSeo } from 'next-seo';

import Header from '../../components/Header';
import styles from './project.module.scss';
import Link from 'next/link';

import database from '../../data/database.json';
import Mockup from "../../components/Mockup";
import DescriptionProject from "../../components/DescriptionProject";
import { Head } from "next/document";

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

type ProjectProps = {
  project: Project;
}

export default function Project({ project }: ProjectProps) {

  return (
    <>
    <NextSeo
      title={`Victor Souto | ${project.name}`}
      description={project.description}
    />
    <div className={styles.projectPage}>

      <section className={styles.containerSection}>

        <Header isWhite/>

        <Link href="/">
          <button className={styles.goBack}>
            <BsArrowLeft color="#333" size={24}/> Voltar
          </button>
        </Link>
      
        <Mockup project={project}/>
      </section>

      <section className={styles.containerSection}>
        <Header />

        <DescriptionProject project={project}/>
      </section>
      
    </div>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const projects = database.projects

  const paths = projects.map(project => {
    return {params: {
      slug: project.id
    }}
  })

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps =  async (ctx) => {
  const slug = ctx.params?.slug
  const projectById = database.projects.find((project) => project.id === slug);

  const project = {
    id: projectById?.id || null,
    name: projectById?.name || null,
    theme: projectById?.theme || null,
    colorBackground: projectById?.colorBackground || null,
    tags: projectById?.tags,
    description: projectById?.description || null,
    demos: projectById?.demos,
    widthDemos: projectById?.widthDemos || null,
    thumbnail: projectById?.thumbnail,
    github: projectById?.github,
    hasSite: projectById?.hasSite || null,
    site: projectById?.site || null
    }

  return {
    props: {
      project
    },
    revalidate: 60 * 60 * 24 * 2, // 2 days
  }
}
