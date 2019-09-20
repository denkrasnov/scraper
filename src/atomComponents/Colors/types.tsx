export type Color =
  | "BACKGROUND"
  | "SHADOW_COLOR"
  | "BUTTON_PRIMARY"
  | "BUTTON_SECONDARY"
  | "BUTTON_HOVER"
  | "BORDER"
  | "BORDER_DARK"
  | "BORDER_GRAY"
  | "SUCCESS"
  | "ERROR"
  | "BODY_TEXT"
  | "MAIN"
  | "MAIN_DARK";

export type Colors = { [key in Color]: string };
