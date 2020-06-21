export type Color =
  | "BACKGROUND"
  | "SHADOW_COLOR"
  | "BUTTON"
  | "BUTTON_TRANSPARENT"
  | "BUTTON_SECONDARY"
  | "BUTTON_HOVER"
  | "BORDER"
  | "BORDER_DARK"
  | "BORDER_GRAY"
  | "SUCCESS"
  | "ERROR"
  | "BODY_TEXT"
  | "MAIN"
  | "MAIN_DARK"
  | "MAIN_RED"
  | "WHITE";

export type Colors = { [key in Color]: string };
