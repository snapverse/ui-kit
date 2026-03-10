import { HTMLElementType } from "react";

export type ElementTagNames = HTMLElementType;

export type StyleProps = HTMLElement["style"];

export interface StylishProps extends React.ReactElement<StylishProps> {
  color?: string;
  // ...
}
