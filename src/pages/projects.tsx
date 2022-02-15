import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card";
import IcardProps from "../components/Card/IcardProps";

import styles from "../styles/Projects.module.scss"

interface IprojectProps {
   "projects": IResponseProjectProps[]
}

interface IResponseProjectProps {
   id: number,
   imageUrl: string | null,
   imageAlt: string | null,
   site: string | null,
   code: string,
   ptTitle: string,
   ptDescription: string,
   enTitle: string | null,
   enDescription: string | null,
   createdAt: string,
   updatedAt: string
}


const Projects = (props: IprojectProps) => {

   return (
      <div className={styles.ProjectMain}>
         <Head>
            <title>Ikaro - Projetos</title>
            <meta property='og:title' content='Projetos' />
            <meta property='og:site_name' content='Ikaro - Portfolio' />
            <meta name='twitter:title' content='Projetos' />


            <meta name='description' content='Projetos desenvolvidos pelo autor' />
            <meta name='og:description' content='Projetos desenvolvidos pelo autor' />
            <meta name='twitter:description' content='Projetos desenvolvidos pelo autor' />

            <meta property='og:url' content='https://portifolio-mu.vercel.app/'/>
            <meta property='og:type' content='website'/>

         </Head>

         <h2> Projetos:</h2>

         <div className={styles.ProjectsContainer}>
            {props.projects
               .sort((a, b) => { return b.id - a.id })
               .map((item) => {
                  return (
                     <Card
                        cardInfo={{
                           id: item.id.toString(),
                           image: {
                              url: item.imageUrl,
                              alt: item.imageAlt
                           },
                           site: item.site,
                           code: item.code,
                           pt: {
                              title: item.ptTitle,
                              description: item.ptDescription
                           },
                           en: {
                              title: item.enTitle,
                              description: item.enDescription
                           }
                        }}
                        key={item.id}
                        language="pt"
                     />
                  )
               })}
         </div>
      </div>)
}
export default Projects;

export const getStaticProps: GetStaticProps = async () => {

   let apiUrl :RequestInfo = process.env.NEXT_PUBLIC_API_URL ?? ""

   try {
      const request = await fetch(`${apiUrl}/projects`)
      const projects = await request.json();

      return {
         props: {
            projects: projects
         },
         revalidate: 60 * 60 * 24 * 7 //Uma semana
      }
   } catch (e) {

      console.error(e)

      return {
         props: {
            projects: []
         },
         revalidate: 60 * 60 * 1 //Uma hora
      }
   }
}
