export type ObjectFit = "cover" | "fill" | "scale-down";

export interface ImageProps {
  alt: string;
  src: string;
  objectFit?: ObjectFit;
  borderRadiusLeft?: boolean;
  width?: string;
  height?: string;
}
