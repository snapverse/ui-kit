import type { CSSStyleSheet } from ".";
import "./lib/prototypes/String";

const classCache = new Map<string, CSSStyleSheet>();

/**
 * Transforms a style prop attribute into an isolated CSS class name, adding vendor compatibility prefixes if needed.
 *
 * @param attr - The CSS property name (e.g., "backgroundColor", "transform", etc.)
 * @param value - The CSS property value (e.g., "red", "rotate(45deg)", etc.)
 *
 * @example
 * // Example usage:
 * const className = transformStyleAttribute("backgroundColor", "red");
 * // This would generate a CSS class with the appropriate styles and return its name.
 */
export const transformStyleProps = (
  attr: string,
  value: unknown,
): CSSStyleSheet => {
  const attributeName = attr.toKebabCase();

  const cacheKey = `${attributeName}:${value}`;
  if (classCache.has(cacheKey)) {
    return classCache.get(cacheKey)!;
  }

  const className = String.random(10);

  return `.${className} {
    ${attributeName}: ${value};
  }`;
};

export const appendStyleSheet = (css: string): void => {
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    // Client-side: append to DOM
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.appendChild(document.createTextNode(css));
    document.head.appendChild(styleElement);
  }
};
