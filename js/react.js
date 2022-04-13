/* eslint-disable sort-keys */
module.exports = {
  extends: [`./base.js`],
  plugins: [`react`],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: `module`,
    requireConfigFile: false,
  },
  rules: {
    'react/boolean-prop-naming': `off`,
    'react/button-has-type': [
      `error`,
      {
        button: true,
        reset: true,
        submit: true,
      },
    ],
    'react/default-props-match-prop-types': [
      `warn`,
      {
        allowRequiredDefaults: false,
      },
    ],
    // If this ever allows granularity between props and state/context, then it can maybe be useful
    'react/destructuring-assignment': `off`,
    'react/display-name': `off`,
    'react/forbid-component-props': [
      `error`,
      {
        forbid: [
          {
            propName: `className`,
            allowedFor: [],
            message: `Use styled-components for any styling needs`,
          },
          {
            propName: `style`,
            allowedFor: [],
            message: `Use styled-components for any styling needs`,
          },
        ],
      },
    ],
    'react/forbid-dom-props': `off`,
    'react/forbid-elements': `off`,
    'react/forbid-foreign-prop-types': [
      `warn`,
      {
        allowInPropTypes: false,
      },
    ],
    'react/forbid-prop-types': [
      `error`,
      {
        forbid: [`any`, `array`, `object`],
        checkContextTypes: false,
        checkChildContextTypes: false,
      },
    ],
    'react/function-component-definition': [
      `warn`,
      {
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      },
    ],
    'react/hook-use-state': `error`,
    'react/iframe-missing-sandbox': `error`,
    // Pretty sure this only applies to class components but ig it's useful if I ever have a legit need to use one
    'react/no-access-state-in-setstate': `error`,
    'react/no-adjacent-inline-elements': `error`,
    'react/no-array-index-key': `error`,
    'react/no-arrow-function-lifecycle': `error`,
    'react/no-children-prop': [`error`, { allowFunctions: false }],
    // Can be disabled via comment on a case-by-case basis if absolutely needed
    'react/no-danger': `error`,
    'react/no-danger-with-children': `error`,
    'react/no-deprecated': `error`,
    'react/no-did-mount-set-state': `error`,
    'react/no-did-update-set-state': `error`,
    'react/no-direct-mutation-state': `error`,
    'react/no-find-dom-node': `error`,
    // Pretty much just makes sure the rel attribute always has a valid value
    'react/no-invalid-html-attribute': `error`,
    'react/no-is-mounted': `error`,
    'react/no-multi-comp': [`error`, { ignoreStateless: true }],
    'react/no-namespace': `error`,
    'react/no-redundant-should-component-update': `error`,
    'react/no-render-return-value': `error`,
    'react/no-set-state': `off`,
    'react/no-string-refs': [`error`, { noTemplateLiterals: true }],
    'react/no-this-in-sfc': `error`,
    'react/no-typos': `error`,
    'react/no-unescaped-entities': [
      `error`,
      {
        forbid: [
          { char: `>`, alternatives: [`&gt;`] },
          { char: `"`, alternatives: [`&quot;`, `&ldquo;`, `&rdquo;`] },
          { char: `'`, alternatives: [`&apos;`, `&lsquo;`, `&rsquo;`] },
          { char: `}`, alternatives: [`&#125;`] },
        ],
      },
    ],
    'react/no-unknown-property': [
      `error`,
      {
        // For Preact or other usages that allow class, for, etc. as attrs, this can be overridden in a config for that library/framework
        ignore: [],
      },
    ],
    // Override with a comment on a case-by-case basis
    'react/no-unsafe': [`error`, { checkAliases: true }],
    'react/no-unstable-nested-components': [`error`, { allowAsProps: true }],
    'react/no-unused-class-component-methods': `error`,
    'react/no-unused-prop-types': [
      `error`,
      {
        ignore: [],
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': `error`,
    'react/no-will-update-set-state': `error`,
    'react/prefer-es6-class': [`error`, `always`],
    'react/prefer-exact-props': `off`,
    'react/prefer-read-only-props': `off`,
    'react/prefer-stateless-function': [`error`, { ignorePureComponents: false }],
    'react/prop-types': [
      `error`,
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      },
    ],
    // Should be able to use auto-import and pragma definitions in esbuild
    'react/react-in-jsx-scope': `off`,
    'react/require-default-props': [
      `error`,
      {
        forbidDefaultForRequired: false,
        ignoreFunctionalComponents: false,
      },
    ],
    'react/require-optimization': `off`,
    'react/require-render-return': `error`,
    'react/self-closing-comp': [
      `error`,
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': `error`,
    'react/sort-prop-types': [
      `error`,
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    'react/state-in-constructor': [`error`, `never`],
    'react/static-property-placement': [`error`, `static public field`],
    'react/style-prop-object': [`error`, { allow: [] }],
    'react/void-dom-elements-no-children': `error`,
  },
  // TODO: Settings e.g. pragma and fragment https://github.com/yannickcr/eslint-plugin-react#configuration
}
