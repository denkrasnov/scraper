export type ObjectFit = "contain" | "cover" | "fill" | "scale-down";

export interface ImageProps {
  alt: string;
  src: string;
  objectFit?: ObjectFit;
}
