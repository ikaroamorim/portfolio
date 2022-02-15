import IcardInfo from "./IcardInfo";

export default interface ICardConten {
   language: "pt" | "en",
   isHighlight?: boolean,
   cardInfo: IcardInfo
}
