import { createElement, forwardRef } from "react";

import SnapUI from "#types";

export interface Props extends SnapUI.ComponentProps {
  children: React.ReactNode;
}

export const AccordionRoot = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return createElement("section", { ...props, ref }, children);
  }
);

export const AccordionItem = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => {
    return createElement("div", { ...props, ref }, children);
  }
);

AccordionRoot.displayName = "@snapverse/AccordionRoot";

AccordionItem.displayName = "@snapverse/AccordionItem";
