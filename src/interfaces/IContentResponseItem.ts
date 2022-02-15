export default interface IContentResponseItem {
   id: number,
   url: string,
   stack: string,
   imageUrl: string | null,
   imageAlt: string | null,
   videoId: string | null,
   site: string | null,
   ptTitle: string,
   ptDescription: string,
   enTitle: string | null,
   enDescription: string | null,
   createdAt: string,
   updatedAt: string
}