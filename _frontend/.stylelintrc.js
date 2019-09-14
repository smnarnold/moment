/**
 * .stylelintrc.js
 * ===============
 */

let word = `[a-z0-9]+(?:-[a-z0-9]+)*`;
let block = word;
let element = `(?:__${word})*`;
let modifier = `(?:--${word})?`;

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    // @if/@else override
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],
    'block-closing-brace-newline-after': ['always', { ignoreAtRules: ['if', 'else'] }],
    // other overrides
    'color-named': ['never', { ignore: ['inside-function'] }], // sass-guidelines override
    'function-parentheses-space-inside': 'never-single-line', // revert to standard
    'max-nesting-depth': [4, { ignore: ['blockless-at-rules', 'pseudo-classes'] }], // sass-guidelines override
    'selector-class-pattern': `^${block}${element}${modifier}$`, // BEM syntax - sass-guidelines override
  },
};
