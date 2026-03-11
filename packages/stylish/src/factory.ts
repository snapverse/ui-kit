import { createElement } from "./elementary";
import type { ElementTagNames, StylishProps } from "./index.d";

const cache = new Map<string, unknown>();

type StylishFactory = {
  [K in ElementTagNames]: (
    props: StylishProps & React.HTMLAttributes<K>,
  ) => React.ReactElement;
};

const stylish = new Proxy({} as StylishFactory, {
  get(_target, prop: ElementTagNames) {
    if (!cache.has(prop)) {
      const element = createElement.bind(null, prop);
      cache.set(prop, element);
    }
    return cache.get(prop);
  },
});

export default stylish;
