
import Image from 'next/image'

import styles from './CardContent.module.scss';

import ICardContent from './ICardContent';

export default function CardContent(cardProps: ICardContent) {

   const localizedObject = cardProps.cardInfo[cardProps.language];

   const textEnshorter = (text: string, limit: number) => text.length > limit ? text.substring(0, limit).concat("...") : text

   return (
      <a href={`/contents/${cardProps.cardInfo.url}`} className={`${styles.mainCard} ${ cardProps.isHighlight ? styles.highlighted: ''}`}>

         <div className={styles.stackContainer}>{cardProps.cardInfo.stack}</div>

         <div className={styles.imageContainer}>
            <Image
               src={cardProps.cardInfo.image?.url ?? "/images/projects/placeholder.png"}
               alt={cardProps.cardInfo.image?.alt ?? "Descricao Imagem"}
               layout='fill'
               objectFit='fill'
            ></Image>
         </div>

         <div className={`${styles.titleContainer} ${ cardProps.isHighlight ? styles.highlighted: ''}`}>
            <h3> {textEnshorter(localizedObject?.title ?? '', 60)}</h3>
         </div>
         
      </a>
   )
}