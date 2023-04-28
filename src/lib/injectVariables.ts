export const injectVariables = (
  template: string,
  variables: { [key: string]: any },
) => {
  return template.replace(
    new RegExp('{([^{]+)}', 'g'),
    function (_unused, varName) {
      return variables[varName];
    },
  );
};
