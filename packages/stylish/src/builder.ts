import { createElement as createReactElement, HTMLAttributes } from "react";
import { type ElementTagNames, type StylishProps } from "./index";

export const createElement = <
  T extends ElementTagNames,
  P extends React.HTMLAttributes<T> = StylishProps,
>(
  tag: T,
  _props: P,
  children?: React.ReactNode,
) => {
  const props = new Proxy(_props, {
    set(target, prop, value) {
      if (prop === "style" && typeof value === "object") {
        // Here you would implement the logic to transform the style object into a CSS class
        // and inject the corresponding styles into the document.
        // For simplicity, we will just log the styles here.
        console.log("Transforming style:", value);
        // You would replace this with the actual class name generated from the styles.
        target["className"] = "generated-class";
        return true;
      }
      return true;
    },
  });

  return createReactElement<HTMLAttributes<typeof tag> & P>(
    tag,
    props,
    children,
  );
};
