import { ReactNode } from "react";

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

type FlexWrap = "wrap";

export interface BoxProps {
  alignItems?: AlignItems;
  children: ReactNode;
  display?: Display;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  justifyContent?: JustifyContent;
  grow?: number;
  width?: string;
  height?: string;
}
