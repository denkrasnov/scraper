export enum ProductName {
  MD = "MD"
}

export enum Channel {
  TV8 = "TV8",
  NTV = "NTV",
  JurnalTV = "JurnalTV"
}
export interface NewsCollection {
  news: Article[];
}
export interface Article {
  id?: string;
  postDate?: string;
  title?: string;
  imageURL?: string;
  text?: string;
  channel: Channel;
}
