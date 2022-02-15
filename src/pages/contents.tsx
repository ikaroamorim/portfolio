import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import CardContent from "../components/CardContent";
import IcardInfo from "../components/CardContent/IcardInfo";

import styles from '../styles/Contents.module.scss';

import IContentResponse from '../interfaces/IContentResponse'
import IContentResponseItem from "../interfaces/IContentResponseItem";



const Contents = (props: IContentResponse) => {

   const highLightedCards = props.contents.slice(0, 2)
   const listedCards = props.contents.slice(2)

   return (
      <div className={styles.contentPageMain}>
         <Head>
            <title>Ikaro - Conteúdos e Mídia</title>
            <meta property='og:title' content='Conteúdo e mídia' />
            <meta property='og:site_name' content='Ikaro - Portfolio' />
            <meta name='twitter:title' content='Conteúdo e mídia' />

            
            <meta name='description' content='Conteúdos e Mídia' />
            <meta name='og:description' content='Conteúdos e Mídia' />
            <meta name='twitter:description' content='Conteúdo e mídia' />

            <meta property='og:url' content='https://portifolio-mu.vercel.app/'/>
            <meta property='og:type' content='website'/>

         </Head>

         <h3>Nesta seção irei postar sobre conteúdos que tenho consumido e que acredito que são relevantes.  <br/>Dessa forma talvez possa até ajudar alguém que tenha as mesmas dúvidas.</h3>

         <div className={styles.highlightedContent}>
            {highLightedCards.map((item) => {
               return <CardContent cardInfo={{
                  id: item.id.toString(),
                  stack: item.stack,
                  url: item.url,
                  image: {
                     url: item.imageUrl,
                     alt: item.imageAlt
                  },
                  videoId: item.videoId,
                  site: item.site,
                  pt: {
                     title: item.ptTitle,
                     description: item.ptDescription
                  },
                  en: {
                     title: item.enTitle,
                     description: item.enDescription
                  },
                  updatedAt: item.updatedAt
               }}
                  language={'pt'}
                  key={item.id}
                  isHighlight />
            })}

         </div>

         <div className={styles.regularContent}>
            {
               listedCards
                  .map((item) => {
                     return <CardContent cardInfo={{
                        id: item.id.toString(),
                        stack: item.stack,
                        url: item.url,
                        image: {
                           url: item.imageUrl,
                           alt: item.imageAlt
                        },
                        videoId: item.videoId,
                        site: item.site,
                        pt: {
                           title: item.ptTitle,
                           description: item.ptDescription
                        },
                        en: {
                           title: item.enTitle,
                           description: item.enDescription
                        },
                        updatedAt: item.updatedAt
                     }}
                        language={'pt'}
                        key={item.id}
                     />
                  })}
         </div>


      </div>)
}
export default Contents;

export const getStaticProps: GetStaticProps = async () => {

   let apiUrl :RequestInfo = process.env.NEXT_PUBLIC_API_URL ?? ""
   
   try {
      const request = await fetch(`${apiUrl}/contents`)
      const contents: IContentResponseItem[] = await request.json();

      const orderedContents = contents.sort((a, b) => { return b.id - a.id })

      return {
         props: {
            contents: contents
         },
         revalidate: 60 * 60 * 24 * 1 //Um dia
      }
   } catch (e) {

      console.error(e)

      return {
         props: {
            contens: []
         },
         revalidate: 60 * 60 * 1 //Uma hora
      }
   }
}
