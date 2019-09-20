import { ReactNode } from "react";

export type FontWeight = "fw200" | "fw400" | "fw700";

export type FontSize =
  | "fs100" // 10px, step: 2
  | "fs200"
  | "fs300"
  | "fs400"
  | "fs500"
  | "fs600"
  | "fs700"
  | "fs800"
  | "fs1000";

export type Sizes = { [key in FontSize]: string };
export type Weights = { [key in FontWeight]: number };

type Tag = "p" | "span";

type TextAlign = "center";

export interface TextProps {
  children: ReactNode;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  tag?: Tag;
  textAlign?: TextAlign;
}
