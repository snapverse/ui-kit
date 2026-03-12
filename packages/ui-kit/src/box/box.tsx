import { createElement, forwardRef } from "react";
import UIKit from "@types";

export interface BoxProps extends UIKit.ComponentProps {
  children?: React.ReactNode;
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...props }, ref) => {
    return createElement("section", { ...props, ref }, children);
  },
);

Box.displayName = "@snapverse/Box";

export default Box;
