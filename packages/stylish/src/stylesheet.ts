export type CSSClass = string;

export const css = (
  strings: TemplateStringsArray,
  ...values: unknown[]
): CSSClass => {
  // This function would contain the logic to generate a unique class name based on the provided styles,
  // and inject the corresponding CSS into the document.
  // For simplicity, we will return a placeholder class name here.
  return `generated-class-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 *
 * Transforms a style prop attribute into an isolated CSS class name, adding vendor compatibility prefixes if needed.
 *
 * @param key - The CSS property name (e.g., "backgroundColor", "transform", etc.)
 * @param value - The CSS property value (e.g., "red", "rotate(45deg)", etc.)
 *
 * @example
 * // Example usage:
 * const className = transformStyleAttribute("backgroundColor", "red");
 * // This would generate a CSS class with the appropriate styles and return its name.
 */
export const transformxStyleAttribute = (
  key: string,
  value: unknown,
): CSSClass => {
  return css`
    ${key}: ${value}
  `;
};
