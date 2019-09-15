import { ReactNode } from "react";

type FontWeight = 200 | 400 | 700;

type FontSize =
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

type Tag = "p" | "span";

type TextAlign = "center";

export interface TextProps {
  children: ReactNode;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  tag?: Tag;
  textAlign?: TextAlign;
}
