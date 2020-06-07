import { ReactNode } from "react";

import { Color } from "../Colors/types";
import { Space } from "../types";

type Display = "block" | "inlineBlock" | "inline" | "flex" | "inlineFlex";

type FlexDirection = "column";

type JustifyContent =
  | "flexEnd"
  | "center"
  | "spaceBetween"
  | "spaceAround"
  | "spaceEvenly";

export type AlignItems =
  | "flexStart"
  | "flexEnd"
  | "center"
  | "baseline"
  | "stretch";

type AlignSelf = "center";

type FlexWrap = "wrap" | "nowrap";

type Cursor = "pointer";

type FlexGrow = "gr1";

type Position = "relative";

export interface BoxProps {
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  background?: Color;
  children?: ReactNode;
  display?: Display;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  justifyContent?: JustifyContent;
  position?: Position;
  bottom?: string;
  padding?: Space;
  margin?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginRight?: Space;
  width?: string;
  height?: string;
  minHeight?: string;
  maxWidth?: string;
  cursor?: Cursor;
  onClick?: () => void;
}
