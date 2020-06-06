import cn from "classnames";

function mapPropsToStyles(
  props: { [key: string]: any },
  styles: { [key: string]: any }
) {
  const mappedClassNames = Object.entries(props).reduce(
    (mappedStyles, [prop, value]) => {
      let className = "";
      switch (typeof value) {
        case "boolean":
          className = value ? prop : "";
          break;
        case "string":
          className = `${prop}-${value}`;
          break;
        default:
          throw new Error(`Unknown typeof value: ${value}`);
      }
      if (className === "" || typeof styles[className] === "undefined")
        return mappedStyles;
      return { ...mappedStyles, [styles[className]]: true };
    },
    {}
  );

  return cn(styles.root, mappedClassNames);
}

export default mapPropsToStyles;
