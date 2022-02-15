// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel='icon' href='/favicon.ico' />
               <meta name='description' content='Site de portifólio do Desenvolvedor Ikaro Amorim e Silva, além dos seus aprendizados também busco compartilhar as experiências que tive na minha jornada.' />
               <link rel='canonical' href='https://portfolio-ikaroamorim.vercel.app/' />
               <meta name='robots' content='index, follow' />
               <meta property='og:image' content='https://portfolio-ikaroamorim.vercel.app/ikaroamorim.png' />
               <meta property='og:image:type' content='image/png' />
               <meta property='og:image:width' content='460' />
               <meta property='og:image:height' content='460' />
               <meta name='twitter:image' content='https://portfolio-ikaroamorim.vercel.app/ikaroamorim.png' />
               <meta name='twitter:image:type' content='image/png' />
               <meta name='twitter:image:width' content='460' />
               <meta name='twitter:image:height' content='460' />
               <meta name='twitter:site' content='@ikaroamorim' />
               <meta name='twitter:creator' content='@ikaroamorim' />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument