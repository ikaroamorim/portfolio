import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image'

import styles from './Card.module.scss';

import { useRouter } from 'next/router';
import { Url } from 'url';

import { BsGlobe, BsGithub } from 'react-icons/bs';
import IcardProps from './IcardProps';


export default function Card(cardProps: IcardProps) {

   const localizedObject = cardProps.cardInfo[cardProps.language];

   const textEnshorter = (text: string, limit: number) => text.length > limit ? text.substring(0, limit).concat("...") : text

   return (
      <div className={styles.main}>
         <div className={styles.imageContainer}>
            <Image
               src={cardProps.cardInfo.image?.url ?? "/images/projects/placeholder.png"}
               alt={cardProps.cardInfo.image?.alt ?? "descricao Imagem"}
               layout='fill'
               objectFit='fill'
            ></Image>
         </div>
         <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
               <h3> {textEnshorter(localizedObject?.title ?? '', 40)}</h3>
               <div>
                  {cardProps.cardInfo.site ?
                     <a href={cardProps.cardInfo.site} > <BsGlobe /></a>
                     : ''}
                  <a href={cardProps.cardInfo.code}> <BsGithub /> </a>
               </div>


            </div>
            <p>{textEnshorter(localizedObject?.description ?? '', 180)}</p>

         </div>
      </div>
   )
}