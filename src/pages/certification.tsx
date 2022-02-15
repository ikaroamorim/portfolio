import { NextPage } from "next";
import Head from 'next/head'
import Image from 'next/image';


import styles from '../styles/Certification.module.scss'


const Certification: NextPage = () => {
   return (
      <div className={styles.certificatesPageContainer}>
         <Head>
            <title>Ikaro - Certificações</title>
            <meta property='og:title' content='Certificações e Cursos' />
            <meta name='twitter:title' content='Certificações e Cursos' />
            <meta property='og:site_name' content='Ikaro - Portfolio' />

            <meta name='description' content='Certificações e Cursos' />
            <meta name='og:description' content='Certificações e Cursos' />
            <meta name='twitter:description' content='Certificações e Cursos' />

            <meta property='og:url' content='https://portifolio-mu.vercel.app/'/>
            <meta property='og:type' content='website'/>

         </Head>

         <h2>Certificações e Exames</h2>

         <div className={styles.certifcatesContainer}>
            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/MS100.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>MS-100 Microsoft 365 Identity and Services</h3>
                  <h4>Exame</h4>
                  <p>24/05/2021</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/MCSE.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>MCSE: Productivity — Certified 2019</h3>
                  <h4>Certificação</h4>
                  <p>12/11/2019</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/70339.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>Exam 339: Managing Microsoft SharePoint Server 2016</h3>
                  <h4>Exame</h4>
                  <p>12/11/2019</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/70347.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>Exam 347: Enabling Office 365 Services</h3>
                  <h4>Exame</h4>
                  <p>22/10/2018</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/MCSA.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>MCSE: Productivity — Certified 2019</h3>
                  <h4>Certificação</h4>
                  <p>22/10/2018</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/70346.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>Exam 346: Managing Office 365 Identities and Requirements</h3>
                  <h4>Exame</h4>
                  <p>13/08/2018</p>
               </div>
            </div>




         </div>

         <h2>Cursos</h2>
         <div className={styles.coursesContainer}>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/courses-alura.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>Formação Trilha .Net</h3>
                  <h4>Curso</h4>
                  <p>Carga Horária: 130h</p>
               </div>
            </div>

            <div className={styles.certificateItem}>
               <div className={styles.imgContainer}>
                  <Image
                     src="/images/certifications/courses-danki.png"
                     alt='imagem da certificação'
                     layout='fill'
                     objectFit='contain'>
                  </Image>
               </div>
               <div className={styles.textContainer}>
                  <h3>Curso WebMaster Front-End Completo</h3>
                  <h4>Curso</h4>
                  <p>Carga Horária: 130h</p>
               </div>
            </div>

         </div>


      </div>
   )
}

export default Certification