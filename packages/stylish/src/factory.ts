import { createElement } from "./builder";

export const gui = {
  div: createElement.bind(null, "div"),
  span: createElement.bind(null, "span"),
  // ...
};
