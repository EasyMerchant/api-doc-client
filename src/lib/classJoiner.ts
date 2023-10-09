export const classJoiner = (...classes: any) => {
  return classes.filter(Boolean).join(' ');
};
