import SnapUI from "#types";
import { createElement, forwardRef } from "react";

export interface BoxProps extends SnapUI.ComponentProps {}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return createElement("section", { ...props, ref }, children);
  }
);

Box.displayName = "@snapverse/Box";

export default Box;
