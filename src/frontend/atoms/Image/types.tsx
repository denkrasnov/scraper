export type ObjectFit = "cover" | "fill" | "scale-down";

export interface ImageProps {
  alt: string;
  src: string;
  objectFit?: ObjectFit;
  width?: string;
  height?: string;
}
