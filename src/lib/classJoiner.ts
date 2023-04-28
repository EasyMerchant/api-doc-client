export const classJoiner = (...classes: Array<string | boolean>) => {
  return classes.filter(Boolean).join(' ');
};
