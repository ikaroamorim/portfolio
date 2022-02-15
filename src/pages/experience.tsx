import { NextPage } from "next";

import Head from 'next/head';
import Image from 'next/image';

import Link from 'next/link';

import styles from '../styles/Experience.module.scss';

import { useState } from "react";


const Experience: NextPage = () => {

   const [currentSlide, setCurrentSlide] = useState(1)

   const experienceObj = {
      "pt": [
         {
            "image": {
               "logoUrl": "/images/experience/capgemini-logo.png",
               "logoAlt": "Logotipo Capgemini"
            },
            "empresa": "Capgemini",
            "cargo": "Desenvolvedor",
            "periodo": "Setembro/2021 - Atual",
            "descricao": "• Desenvolvimento para Sharepoint On Premise. \<br \/\> • Integração com Add-ins .Net.\<br \/\> • Realização de atividades de deploy e gestão  com Powershell/ Sharepoint Management Shell.\<br \/\> • Migração de versão de versões de Sharepoint.\<br \/\>"
         },
         {
            "image": {
               "logoUrl": "/images/experience/class-logo.png",
               "logoAlt": "Logotipo Class Solution"
            },
            "empresa": "Class Solutions",
            "cargo": "Desenvolvedor Front-End",
            "periodo": "Janeiro/2021 - Setembro/2021",
            "descricao": "• Desenvolvimento de aplicações com Sharepoint Framework (SPFX). \<br \/\> • Manutenção e melhoria de aplicações já desenvolvidas. \<br \/\> • Desenvolvimento com os padrões e melhores práticas React/Microsoft.\<br \/\> • Utilização de Typescript e versionamento Git.\<br \/\>"
         },
         {
            "image": {
               "logoUrl": "/images/experience/class-logo.png",
               "logoAlt": "Logotipo Class Solution"
            },
            "empresa": "Class Solutions",
            "cargo": "Analista de Suporte e Infraestrutura",
            "periodo": "Fevereiro/2018 - Dezembro 2021",
            "descricao": "• Gerenciamento e atendimento de chamados em atendimento B2B, em soluções customizadas ou não, relacionadas a todos Workloads do Office 365.<br /> • Administração de Farm (Windows Server, SQL Server, Sharepoint Server em servidores Locais ou na Nuvem), e administração de Tenant Office 365. <br /> • Elaboração de soluções em Sharepoint, Teams, One Drive e auxílio na adoção.<br /> • Implementação (Deploy) e Migração de Sistemas Sharepoint.<br /> • Construção de relacionamento com cliente."
         },
         {
            "image": {
               "logoUrl": "/images/experience/people-logo.png",
               "logoAlt": "Logotipo People"
            },
            "empresa": "People - Educação Completa",
            "cargo": "Professor",
            "periodo": "Janeiro/2017 - Julho/2017",
            "descricao": "• Elaboração de planos de aula e ementa dos cursos.<br /> • Aulas de SOLIDWORKS, Autodesk AutoCAD, Autodesk Revit, SkecthUP <br /> • Manutenção de computadores e Aulas de Robótica (Arduino e MRT Maker)<br /> • Aulas de Windows, Word, Excel, Powerpoint, Html e CSS"
         },
         {
            "image": {
               "logoUrl": "/images/experience/siemens-logo.png",
               "logoAlt": "Logotipo Siemens"
            },
            "empresa": "Siemens",
            "cargo": "Estágio em Qualidade e Processos",
            "periodo": "Janeiro/2014 a Dezembro/2015",
            "descricao": "• Coordenação o programa de Melhoria Contínua para atendimento de metas de custo e lead time do produto, participando de vários processos de melhoria e reuniões internacionais.<br /> • Automação das rotinas através de planilhas e macros VBA para agilizar processos recorrentes e promover melhor fluxo de dados.<br /> • Realização de reuniões periódicas com representantes de outras áreas para tratativa, priorização e administração dos custos de não conformidades.<br /> • Análise e tomada de ação baseada nos registros dos formulários de ocorrências de EHS, possibilitando a tomada de decisão gerencial por políticas mais seguras.<br /> • Gerenciamento de equipe na área de recebimento de matéria prima, atuando na priorização dos itens a serem inspecionados para atendimento às urgências e na obtenção de informações técnicas para a equipe.<br /> • Atendimento e suporte as visitas técnicas de clientes à fábrica para acompanhamento  e aprovação de ensaios mecânicos e análise da documentação para finalizar o processo e entregar os produtos."
         },
      ],
      "en": {}
   }

   return (
      <div className={styles.experienceMain}>
         <Head>
            <title>Ikaro - Experiência Profissional</title>
            <meta property='og:title' content='Experiência Profissional' />
            <meta property='og:site_name' content='Ikaro - Portfolio' />
            <meta name='twitter:title' content='Experiência Profissional' />


            <meta name="description" content="Trajetória Profissional" />
            <meta name="og:description" content="Trajetória Profissional" />
            <meta name='twitter:description' content='Experiência Profissional' />

            <meta property='og:url' content='https://portfolio-ikaroamorim.vercel.app/'/>
            <meta property='og:type' content='website'/>

         </Head>

         <div className={styles.slider}>
            <div className={styles.slides}>

               {experienceObj.pt.map((item, index) => {
                  return (
                     <div className={styles.sliderItem} id={`slide-${index + 1}`} key={`slide-${index + 1}`}>
                        <div className={styles.imgContainer}>
                           <Image
                              src={item.image.logoUrl}
                              alt={item.image.logoAlt}
                              layout='fill'
                              objectFit='contain'>
                           </Image>
                        </div>
                        <div className={styles.textContainer}>
                           <h2>{item.empresa}</h2>
                           <h3>{item.cargo}</h3>
                           <p>{item.periodo}</p>
                           <h4>Descrição</h4>
                           <p dangerouslySetInnerHTML={{ __html: item.descricao }}>
                           </p>
                        </div>
                     </div>
                  )
               })}
            </div>

            <div className={styles.linkPages}>
               {experienceObj.pt.map((item, index) => {
                  return (
                     <Link href={`#slide-${index + 1}`} key={`linkSlide-${index + 1}`} scroll={false}>
                        <a onClick={() => { setCurrentSlide(index+1) }}
                           className={currentSlide == index+1 ? styles.selectedItem : ''}></a>
                     </Link>
                  )
               })}
            </div>
         </div>
      </div>)



}

export default Experience