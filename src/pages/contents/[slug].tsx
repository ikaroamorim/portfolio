
import { GetStaticProps, GetStaticPaths } from 'next';
import { format } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
const locales = { ptBR, enUS }

import parseISO from 'date-fns/parseISO'; 'date-fns/parseISO'


import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

import IcardInfo from "../../components/CardContent/IcardInfo";

import styles from '../../styles/ContentDetail.module.scss';
import { Params } from 'next/dist/server/router';
import IContentResponse from '../../interfaces/IContentResponse';






export default function Content(props: IContentResponse) {


   return (
      <div className={styles.mainContent}>
         <Head>
            <title>Ikaro - {props.contents[0].ptTitle}</title>
            <meta property='og:title' content={`Ikaro - ${props.contents[0].ptTitle}`} />
            <meta property='og:site_name' content='Ikaro - Portfolio' />
            <meta name='twitter:title' content={`Ikaro - ${props.contents[0].ptTitle}`} />

            <meta name='description' content={props.contents[0].ptTitle} />
            <meta property='og:description'content={props.contents[0].ptTitle}/>
            <meta name='twitter:description'content={props.contents[0].ptTitle}/>

            <meta property='og:url' content={`https://portifolio-mu.vercel.app/${props.contents[0].url}`}/>
            <meta property='og:type' content='article'/>
         </Head>


         <h1>{props.contents[0].ptTitle}</h1>
         <h3> {format(parseISO(props.contents[0].updatedAt), 'PPP', { locale: ptBR })}</h3>

         <div className={styles.textContainer} dangerouslySetInnerHTML={{ __html: props.contents[0].ptDescription }}>
         </div>



         {
            props.contents[0].videoId ?
               (
                  <div className={styles.videoContainer}>
                     <iframe id="ytplayer" width="640" height="360"
                        src={`https://www.youtube.com/embed/${props.contents[0].videoId}`}
                        frameBorder="0" />
                  </div>
               ) : (
                  <div className={styles.imageContainer}>
                     <Image
                        src={props.contents[0].imageUrl || '/images/projects/placeholder.png'}
                        alt={props.contents[0].imageUrl || 'Placeholder da Imagem'}
                        layout='fill'
                        objectFit='contain'>
                     </Image>
                  </div>
               )}



      </div >
   )
}


export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: 'blocking'
   };
}

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
   const { slug } = params;

   let apiUrl :RequestInfo = process.env.NEXT_PUBLIC_API_URL ?? ""
   try {
      const res = await fetch(`${apiUrl}/contents/${slug}`);

      const post = await res.json()

      return {
         props: {
            contents: post,
         },
      }
   } catch (error) {
      console.error(error)

      return {
         props: {}
      }
   }
}