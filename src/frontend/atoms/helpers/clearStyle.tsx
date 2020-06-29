import { StyleType } from "../types";

export const clearStyle = (styleObj: StyleType) => {
  return Object.entries(styleObj).reduce((acc, current) => {
    const style = current[1] != null && { [current[0]]: current[1] };
    return { ...acc, ...style };
  }, {});
};
