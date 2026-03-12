import { createElement as createReactElement } from "react";
import {
  appendStyleSheet,
  StylishElement,
  transformStyleProps,
  type ElementProps,
  type ElementTagNames,
  type StyleProps,
} from ".";

const styleKeys = new Set<keyof StyleProps>(
  Object.keys({} as StyleProps) as (keyof StyleProps)[],
);

export const createElement = <
  T extends ElementTagNames,
  P extends ElementProps,
>(
  tag: T,
  _props: P,
): StylishElement => {
  const { children, ..._restProps } = _props || {};

  const props = new Proxy(_restProps as P, {
    set(target, prop, value) {
      if (styleKeys.has(prop as keyof StyleProps)) {
        const stylesheet = transformStyleProps(prop as string, value);
        appendStyleSheet(stylesheet);
        target.className += ` ${stylesheet}`;
      }

      return Reflect.set(target, prop, value);
    },
  });

  return createReactElement<P>(tag, props, children);
};
