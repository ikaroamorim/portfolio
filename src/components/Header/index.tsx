import { useState } from 'react';

import Link from 'next/link';

import styles from './Header.module.scss';

import { MdSchool, MdBusinessCenter, MdStars, MdPermMedia, MdHouse } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { useRouter } from 'next/router';


export default function Header() {

   const router = useRouter();
   const [currentPage, setCurrentPage] = useState(router.pathname.split('/')[1]);


   return (
      <header className={styles.main}>
         <h1>
            <Link href="/">
               <a onClick={() => setCurrentPage('')}> Ikaro</a>
            </Link>
         </h1>

         <ul className={styles.desktopHeaderMenu}>
            <li>
               <Link href="/scholarship">
                  <a
                     onClick={() => setCurrentPage("scholarship")}
                     className={currentPage == "scholarship" ? styles.active : ""}>
                     Escolaridade
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/certification">
                  <a onClick={() => setCurrentPage("certification")}
                     className={currentPage == "certification" ? styles.active : ""}>
                     Certificações
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/experience">
                  <a onClick={() => setCurrentPage("experience")}
                     className={currentPage == "experience" ? styles.active : ""}
                  >Experiência Profissional
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/projects">
                  <a onClick={() => setCurrentPage("projects")}
                     className={currentPage == "projects" ? styles.active : ""}
                  >Projetos
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/contents">
                  <a onClick={() => setCurrentPage("contents")}
                     className={currentPage == "contents" ? styles.active : ""}
                  >Conteúdos
                  </a>
               </Link>
            </li>
         </ul>

         <ul className={styles.mobileHeaderMenu}>
            <li>
               <Link href="/">
                  <a
                     onClick={() => setCurrentPage('')}
                     className={currentPage == '' ? styles.active : ""}>
                     <MdHouse />
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/scholarship">
                  <a
                     onClick={() => setCurrentPage("scholarship")}
                     className={currentPage == "scholarship" ? styles.active : ""}>
                     <MdSchool />
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/certification">
                  <a onClick={() => setCurrentPage("certification")}
                     className={currentPage == "certification" ? styles.active : ""}>
                     <MdStars />
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/experience">
                  <a onClick={() => setCurrentPage("experience")}
                     className={currentPage == "experience" ? styles.active : ""}>
                     <MdBusinessCenter />
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/projects">
                  <a onClick={() => setCurrentPage("projects")}
                     className={currentPage == "projects" ? styles.active : ""}>
                     <AiFillProject />
                  </a>
               </Link>
            </li>
            <li>
               <Link href="/contents">
                  <a onClick={() => setCurrentPage("contents")}
                     className={currentPage == "contents" ? styles.active : ""}>
                     <MdPermMedia />
                  </a>
               </Link>
            </li>
         </ul>

      </header>
   )
}

