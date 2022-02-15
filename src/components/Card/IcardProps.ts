
export default interface IcardProps {
   language: "pt" | "en",
   cardInfo: {
      id: string,
      image: {
         url: string | null,
         alt: string | null
      },
      site: string | null,
      code: string,
      pt: {
         title: string,
         description: string,
      },
      en: {
         title: string | null,
         description: string | null,
      } 
   }
}