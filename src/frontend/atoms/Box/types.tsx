import { ReactNode } from "react";

import { DataAttr } from "~app/common/types";
import { Color } from "../Colors/types";
import { Space } from "../types";

type Display = "block" | "inlineBlock" | "inline" | "flex" | "inlineFlex";

type FlexDirection = "column";

type JustifyContent =
  | "flexStart"
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

type Position = "relative" | "sticky";

type GreadArea = "main" | "filter" | "result" | "header" | "body";

export interface BoxProps {
  alignItems?: AlignItems;
  alignSelf?: AlignSelf;
  background?: Color;
  children?: ReactNode;
  display?: Display;
  dataAttr?: DataAttr;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  flexGrow?: FlexGrow;
  gridArea?: GreadArea;
  justifyContent?: JustifyContent;
  position?: Position;
  bottom?: string;
  top?: string;
  padding?: Space;
  margin?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginRight?: Space;
  marginLeft?: Space;
  width?: string;
  height?: string;
  minHeight?: string;
  maxWidth?: string;
  cursor?: Cursor;
  onClick?: () => void;
}
