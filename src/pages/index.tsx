import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import profilepic from '../../public/images/home/photo.png'

import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail, AiFillMediumCircle } from "react-icons/ai";


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ikaro</title>
        <meta property='og:title' content='Portfolio - Home' />
        <meta property='og:site_name' content='Ikaro - Portfolio' />
        <meta name='twitter:title' content='Portfolio - Home'  />


        <meta name='description' content='Breve descrição do autor.' />
        <meta name='og:description' content='Breve descrição do autor.'/>
        <meta name='twitter:description' content='Portfolio - Home' />

        <meta property='og:url' content='https://portifolio-mu.vercel.app/' />
        <meta property='og:type' content='website' />

      </Head>

      <main className={styles.main}>
        <div className={styles.authorImage}>
          <Image
            src={profilepic}
            alt='foto do autor'
            className={styles.homeImage}
            layout='fill'
            objectFit='contain'>
          </Image>
        </div>
        <div className={styles.cardBio}>
          <div className={styles.mobileauthorImage}>
            <Image
              src={profilepic}
              alt='foto do autor'
              className={styles.homeImage}
              layout='fill'
              objectFit='cover'>
            </Image>
          </div>
          <h1>Íkaro Amorim e Silva</h1>
          <h2>Analista desenvolvedor</h2>
          <p>Apaixonado por tecnologia desde criança, sempre fui curioso pelo funcionamento das coisas. Comprometido, analítico, bem humorado espero sempre aprender com as situações que surgem.</p>
          <p>Tive bastante contato com desenvolvimento Sharepoint e estudo temas ligados à Front-End e Back-end. Tenho desenvolvido projetos pessoais em React, APIs em Node e também desenvolvimento .Net.</p>
          <p>Nascido em <a href='https://pt.wikipedia.org/wiki/S%C3%A3o_Jo%C3%A3o_da_Boa_Vista'>São João da Boa Vista</a>, cidade pequena do interior de São Paulo, me formei em Engenharia Mecânica pela <a href='https://www2.unesp.br/'>UNESP</a> em Guaratinguetá - SP, tendo ao final do curso morado em Jundiaí trabalhando na Siemens no departamento de qualidade da unidade de turbinas a vapor. </p>
          <p>Foi em 2017 um marco de virada na carreira para o ramo da tecnologia, inicialmente lecionando e posteriormente atuando em empresa do ramo, também foi iniciado nesse ano o curso de Engenharia da Computação na <a href='https://univesp.br/'>UNIVESP</a>.</p>
          <div className={styles.bioSocialNetwork}>
            <a href="https://github.com/ikaroamorim"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/ikaroamorimesilva/"><AiFillLinkedin /></a>
            <a href="https://medium.com/@ikaro.amorim"><AiFillMediumCircle /></a>            
            <a href="https://twitter.com/ikaroamorim"><AiFillTwitterCircle /></a>
            <a href="mailto:ikaro.amorim@gmail.com"><AiFillMail /></a>            
          </div>
        </div>
      </main >

    </div >
  )
}

export default Home
