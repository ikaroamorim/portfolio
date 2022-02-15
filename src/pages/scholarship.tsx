import { NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Scholarship.module.scss';

import univespLogo from '../../public/images/scholarship/univesp-logo.png';
import unespLogo from '../../public/images/scholarship/unesp-logo.png';


const Scholarship: NextPage = () => {
   return (
      <div className={styles.cardContainer}>
         <Head>
            <title>Ikaro - Educação</title>
            <meta property='og:title' content='Educação Formal' />
            <meta property='og:site_name' content='Ikaro - Portfolio' />
            <meta name='twitter:title' content='Educação Formal' />


            <meta name='description' content='Educação formal do Autor' />
            <meta name='og:description' content='Educação formal do Autor' />
            <meta name='twitter:description' content='Educação Formal' />

            <meta property='og:url' content='https://portifolio-mu.vercel.app/'/>
            <meta property='og:type' content='website'/>

         </Head>

         <div className={styles.card}>
            <div className={styles.imgContainer}>
               <Image
                  src={unespLogo}
                  alt='logo unesp'
                  layout='fill'
                  objectFit='contain'>
               </Image>
            </div>
            <div className={styles.textContainer}>
               <h4>Curso:</h4>
               <p>Engenharia Mecânica</p>
               <h4>Duração:</h4>
               <p>5 anos</p>
               <h4>Conclusão:</h4>
               <p>Dezembro/2015</p>
               <h4>Site:</h4>
               <p><a href="https://www2.unesp.br/">https://www2.unesp.br/</a></p>
            </div>
         </div>

         <div className={styles.card}>
            <div className={styles.imgContainer}>
               <Image
                  src={univespLogo}
                  alt='logo univesp'
                  layout='fill'
                  objectFit='contain'>
               </Image>
            </div>
            <div className={styles.textContainer}>
               <h4>Curso:</h4>
               <p>Engenharia da Computação</p>
               <h4>Duração:</h4>
               <p>5 anos</p>
               <h4>Conclusão Prevista:</h4>
               <p>Julho/2022</p>
               <h4>Site:</h4>
               <p><a href="https://univesp.br/">https://univesp.br/</a></p>
            </div>
         </div>


      </div>
   )
}

export default Scholarship