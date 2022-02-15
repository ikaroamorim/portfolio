export default interface IcardInfo {
   id: string,
   stack: string,
   url: string, 
   image: {
      url: string | null,
      alt: string | null
   },
   videoId: string | null,
   site: string | null,
   pt: {
      title: string,
      description: string,
   },
   en: {
      title: string | null,
      description: string | null,
   },
   updatedAt:string
}
