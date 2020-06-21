import { ReactNode } from "react";

import { Color } from "../Colors/types";

export type FontWeight = "fw200" | "fw400" | "fw700";

export type FontSize =
  | "fs10"
  | "fs12"
  | "fs14"
  | "fs16"
  | "fs18"
  | "fs20"
  | "fs22"
  | "fs24"
  | "fs26";

type Tag = "p" | "span";

type TextAlign = "center";

export interface TextProps {
  children: ReactNode;
  color?: Color;
  fontWeight?: FontWeight;
  fontSize?: FontSize;
  tag?: Tag;
  textAlign?: TextAlign;
}
