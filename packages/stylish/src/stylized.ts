import type { CSSStyleSheet } from ".";

import "./lib/prototypes/String";

const classCache = new Map<string, CSSStyleSheet>();

type CSSTagFunction = (
  strings: TemplateStringsArray,
  ...values: unknown[]
) => CSSStyleSheet;

export function css(
  strings: TemplateStringsArray,
  ...values: unknown[]
): CSSStyleSheet;
export function css(className?: string): CSSTagFunction;
export function css(
  classNameOrStrings?: string | TemplateStringsArray,
  ...values: unknown[]
): CSSStyleSheet | CSSTagFunction {
  if (
    typeof classNameOrStrings === "string" ||
    classNameOrStrings === undefined
  ) {
    const className = classNameOrStrings || `.${String.random()}`;
    classCache.set(className, `${className}{}`);
    return (
      strings: TemplateStringsArray,
      ...vals: unknown[]
    ): CSSStyleSheet => {
      const styleBody = strings.reduce((acc, str, i) => {
        const value = vals[i] !== undefined ? String(vals[i]) : "";
        return acc + str + value;
      }, "");
      return `${className}{${styleBody}}`;
    };
  }

  // Called directly as a template tag
  const className = `.${String.random()}`;
  const styleBody = classNameOrStrings.reduce((acc, str, i) => {
    const value = values[i] !== undefined ? String(values[i]) : "";
    return acc + str + value;
  }, "");
  return `${className}{${styleBody}}`;
}

/**
 * Transforms a style prop attribute into an isolated CSS class name, adding vendor compatibility prefixes if needed.
 *
 * @param attribute - The CSS property name (e.g., "backgroundColor", "transform", etc.)
 * @param value - The CSS property value (e.g., "red", "rotate(45deg)", etc.)
 *
 * @example
 * // Example usage:
 * const className = transformStyleAttribute("backgroundColor", "red");
 * // This would generate a CSS class with the appropriate styles and return its name.
 */
export const transform = (attribute: string, value: unknown): CSSStyleSheet => {
  const attributeName = attribute.toKebabCase();

  const cacheKey = `${attributeName}:${value}`;
  if (classCache.has(cacheKey)) {
    return classCache.get(cacheKey)!;
  }

  const className = `.${String.random(10)}`;

  return css(className)`
    ${attributeName}: ${value};
  `;
};

export const appendStyleSheet = (css: CSSStyleSheet) => {
  if (typeof document === "undefined") {
    // If we're in a non-browser environment, we can't inject styles.
    return;
  }

  const styleElement = document.createElement("style");
  styleElement.type = "text/css";
  styleElement.appendChild(document.createTextNode(css));
  document.head.appendChild(styleElement);
};
