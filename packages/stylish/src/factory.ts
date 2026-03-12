import { createElement } from "./elementary";
import type { ElementProps, ElementTagNames, StylishElement } from "./index.d";

const cache = new Map<string, StylishElement>();

type StylishFactory = {
  [K in ElementTagNames]: (props: ElementProps) => React.ReactElement;
};

export const stylish = new Proxy({} as StylishFactory, {
  get(_target, prop: ElementTagNames) {
    if (!cache.has(prop)) {
      const element = createElement.bind(
        null,
        prop,
      ) as unknown as StylishElement;
      cache.set(prop, element);
    }
    return cache.get(prop)!;
  },
});
