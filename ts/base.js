/* eslint-disable sort-keys */
module.exports = {
  extends: [`../js/base.js`],
  parser: `@typescript-eslint/parser`,
  plugins: [`@typescript-eslint`],
  rules: {
    // TS-specific rules
    '@typescript-eslint/adjacent-overload-signatures': `error`,
    '@typescript-eslint/array-type': [
      `error`,
      {
        default: `array-simple`,
        readonly: `array-simple`,
      },
    ],
    '@typescript-eslint/await-thenable': `error`,
    '@typescript-eslint/ban-ts-comment': [
      `error`,
      {
        'ts-check': false,
        'ts-expect-error': `allow-with-description`,
        'ts-ignore': true,
        'ts-nocheck': true,
        minimumDescriptionLength: 4,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': `error`,
    '@typescript-eslint/ban-types': [
      `error`,
      // Stole the defaults so I can easily extend as needed without having to worry about losing all these helpful bits
      // Defaults found here https://typescript-eslint.io/rules/ban-types/#default-options
      {
        // Primitives
        String: {
          message: `Use string instead`,
          fixWith: `string`,
        },
        Boolean: {
          message: `Use boolean instead`,
          fixWith: `boolean`,
        },
        Number: {
          message: `Use number instead`,
          fixWith: `number`,
        },
        Symbol: {
          message: `Use symbol instead`,
          fixWith: `symbol`,
        },

        Function: {
          message: [
            `The \`Function\` type accepts any function-like value.`,
            `It provides no type safety when calling the function, which can be a common source of bugs.`,
            `It also accepts things like class declarations, which will throw at runtime as they will not be called with \`new\`.`,
            `If you are expecting the function to accept certain arguments, you should explicitly define the function shape.`,
          ].join(`\n`),
        },

        // Object typing
        Object: {
          message: [
            `The \`Object\` type actually means "any non-nullish value", so it is marginally better than \`unknown\`.`,
            `- If you want a type meaning "any object", you probably want \`Record<string, unknown>\` instead.`,
            `- If you want a type meaning "any value", you probably want \`unknown\` instead.`,
          ].join(`\n`),
        },
        '{}': {
          message: [
            `\`{}\` actually means "any non-nullish value".`,
            `- If you want a type meaning "any object", you probably want \`Record<string, unknown>\` instead.`,
            `- If you want a type meaning "any value", you probably want \`unknown\` instead.`,
          ].join(`\n`),
        },
      },
    ],
    '@typescript-eslint/class-literal-property-style': [`error`, `getters`],
    '@typescript-eslint/consistent-indexed-object-style': [`error`, `record`],
    '@typescript-eslint/consistent-type-assertions': [
      `error`,
      {
        assertionStyle: `as`,
        objectLiteralTypeAssertions: `allow-as-parameter`,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [`error`, `interface`],
    '@typescript-eslint/consistent-type-exports': [
      `error`,
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      `error`,
      {
        prefer: `type-imports`,
        disallowTypeAnnotations: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      `error`,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowedNames: [],
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      `error`,
      {
        accessibility: `no-public`,
      },
    ],

    // Disable regular ESLint rules that TS has extensions for
    'brace-style': `off`,
    'comma-dangle': `off`,
    'comma-spacing': `off`,
    'default-param-last': `off`,
    'dot-notation': `off`,
    'func-call-spacing': `off`,
    indent: `off`,
    'init-declarations': `off`,
    'keyword-spacing': `off`,
    'lines-between-class-members': `off`,
    'no-array-constructor': `off`,
    'no-dupe-class-members': `off`,
    'no-duplicate-imports': `off`,
    'no-empty-function': `off`,
    'no-extra-parens': `off`,
    'no-extra-semi': `off`,
    'no-implied-eval': `off`,
    'no-invalid-this': `off`,
    'no-loop-func': `off`,
    'no-loss-of-precision': `off`,
    'no-magic-numbers': `off`,
    'no-redeclare': `off`,
    'no-restricted-imports': `off`,
    'no-shadow': `off`,
    'no-throw-literal': `off`,
    'no-unused-expressions': `off`,
    'no-unused-vars': `off`,
    'no-use-before-define': `off`,
    'no-useless-constructor': `off`,
    'object-curly-spacing': `off`,
    'padding-line-between-statements': `off`,
    quotes: `off`,
    'require-await': `off`,
    'no-return-await': `off`,
    semi: `off`,
    'space-before-function-paren': `off`,
    'space-infix-ops': `off`,

    // TS extensions of regular ESLint rules
    '@typescript-eslint/brace-style': [
      `warn`,
      `1tbs`,
      {
        allowSingleLine: true,
      },
    ],
    '@typescript-eslint/comma-dangle': [
      `error`,
      {
        arrays: `always-multiline`,
        objects: `always-multiline`,
        imports: `always-multiline`,
        exports: `always-multiline`,
        functions: `never`,
        // Following are TS-specific
        enums: `always-multiline`,
        generics: `never`,
        tuples: `always-multiline`,
      },
    ],
    '@typescript-eslint/comma-spacing': [
      `warn`,
      {
        after: true,
        before: false,
      },
    ],
    '@typescript-eslint/default-param-last': [`error`],
    '@typescript-eslint/dot-notation': [
      `error`,
      {
        allowIndexSignaturePropertyAccess: false,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
      },
    ],
    '@typescript-eslint/func-call-spacing': [`error`, `never`],
    // Indentation should be handled by prettier generally, and also apparently the TS plugin indent rule is broken, so just making sure it's all off
    '@typescript-eslint/indent': `off`,
    '@typescript-eslint/init-declarations': [`error`, `always`],
    '@typescript-eslint/keyword-spacing': [
      `warn`,
      {
        after: true,
        before: true,
      },
    ],
    '@typescript-eslint/lines-between-class-members': [
      `warn`,
      `always`,
      {
        exceptAfterOverload: true,
        exceptAfterSingleLine: true,
      },
    ],
    '@typescript-eslint/no-array-constructor': `error`,
    '@typescript-eslint/no-dupe-class-members': `error`,
    '@typescript-eslint/no-duplicate-imports': [
      `error`,
      {
        includeExports: false,
      },
    ],
    // There are a few TS-specific function types that could potentially be needed, use the allow option as needed to let those through
    '@typescript-eslint/no-empty-function': [`error`, { allow: [] }],
    '@typescript-eslint/no-extra-parens': [`warn`, `all`],
    '@typescript-eslint/no-extra-semi': `error`,
    '@typescript-eslint/no-implied-eval': `error`,
    '@typescript-eslint/no-invalid-this': [
      `error`,
      {
        capIsConstructor: false,
      },
    ],
    '@typescript-eslint/no-loop-func': `error`,
    '@typescript-eslint/no-loss-of-precision': `error`,
    '@typescript-eslint/no-magic-numbers': [
      `error`,
      {
        detectObjects: false,
        enforceConst: false,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        // TypeScript specific
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
      },
    ],
    '@typescript-eslint/no-redeclare': [
      `error`,
      {
        builtinGlobals: true,
        // TypeScript specific
        ignoreDeclarationMerge: true,
      },
    ],
    '@typescript-eslint/no-restricted-imports': `off`,
    '@typescript-eslint/no-shadow': [
      `error`,
      {
        builtinGlobals: true,
        hoist: `functions`,
        // TypeScript specific
        // Don't allow variables and types to share names
        ignoreTypeValueShadow: false,
        // Don't allow function params to use names already used in the same or higher scope
        ignoreFunctionTypeParameterNameValueShadow: false,
      },
    ],
    '@typescript-eslint/no-throw-literal': [
      `error`,
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    '@typescript-eslint/no-unused-expressions': `error`,
    '@typescript-eslint/no-unused-vars': [
      `error`,
      {
        args: `after-used`,
        caughtErrors: `none`,
        ignoreRestSiblings: true,
        vars: `all`,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      `error`,
      {
        classes: true,
        functions: true,
        variables: true,
        // TypeScript specific
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],
    '@typescript-eslint/no-useless-constructor': `error`,
    '@typescript-eslint/object-curly-spacing': [`warn`, `always`],
    '@typescript-eslint/padding-line-between-statements': `off`,
    '@typescript-eslint/quotes': [
      `warn`,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    '@typescript-eslint/require-await': `error`,
    '@typescript-eslint/return-await': [`error`, `in-try-catch`],
    '@typescript-eslint/semi': `off`,
    '@typescript-eslint/space-before-function-paren': [
      `warn`,
      {
        anonymous: `never`,
        asyncArrow: `always`,
        named: `never`,
      },
    ],
    '@typescript-eslint/space-infix-ops': `warn`,
  },
}
