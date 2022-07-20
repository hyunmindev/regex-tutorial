export const camelToKebab = (str: string) =>
  str.replace(/[A-Z]/g, (substr) => `-${substr.toLowerCase()}`);

export const kebabToCamel = (str: string) =>
  str.replace(/-./g, (substr) => `${substr[1].toUpperCase()}`);

export const decamelize = (str: string, separator = ' ') =>
  str
    .replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
    .toLowerCase();
