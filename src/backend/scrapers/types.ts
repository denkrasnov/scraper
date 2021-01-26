export enum ProductName {
  MD = "MD"
}

export enum Channels {
  TV8 = "TV8",
  NTV = "NTV",
  JurnalTV = "JurnalTV"
}
export interface NewsCollection {
  news: Article[];
}
export interface Article {
  date?: string;
  header?: string;
  imageURL?: string;
  newsURL?: string;
  channel: Channels;
}
