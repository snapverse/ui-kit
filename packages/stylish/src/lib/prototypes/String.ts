import crypto from "node:crypto";

declare global {
  interface String {
    toKebabCase(): string;
  }

  interface StringConstructor {
    random(size?: number): string;
  }
}

String.random = function (size = 10): string {
  return crypto
    .randomBytes(Math.ceil(size / 2))
    .toString("hex")
    .slice(0, size);
};

String.prototype.toKebabCase = function (): string {
  return this
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
};
