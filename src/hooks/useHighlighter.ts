import * as Prism from 'prismjs';

/**
 * Must import the clike component as prism is using it to extend the javascript
 * grammer. Prism breaks if the import statements are not in correct order.
 */
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-swift';
import 'prismjs/components/prism-java';

export const useHighlighter = (code: string, grammer: any) => {
  return Prism.highlight(code, Prism.languages[grammer], grammer);
};
