import React, { HTMLElementType } from "react";

export type ElementTagNames = HTMLElementType;

export type StyleProps = HTMLElement["style"];

export type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "style"> &
  StyleProps;

export type StylishElement = React.ReactElement<ElementProps>;

export type CSSStyleSheet = string;

export interface StylishProps extends ElementProps {
  children?: React.ReactNode;
}
