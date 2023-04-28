import Prism from 'prismjs';
import 'prismjs/components/prism-json';

// import 'prismjs/plugins/line-numbers/prism-line-numbers';

export const useJsonHighlighter = (code: string) => {
  return Prism.highlight(code, Prism.languages.json, 'json');
};
