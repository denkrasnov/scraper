import { ReactNode } from "react";

import { Color } from "../Colors/types";

type Display =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "none";

type FlexDirection = "column" | "row";

type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type AlignItems =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch";

type FlexWrap = "wrap" | "nowrap";

export interface BoxProps {
  alignItems?: AlignItems;
  backgroundColor?: Color;
  children: ReactNode;
  display?: Display;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  grow?: number;
  justifyContent?: JustifyContent;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
}
