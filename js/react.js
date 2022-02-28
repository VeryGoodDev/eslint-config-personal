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
  },
  // TODO: Settings e.g. pragma and fragment https://github.com/yannickcr/eslint-plugin-react#configuration
}
