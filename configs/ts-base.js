module.exports = {
  extends: [`./eslint-base.js`],
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
        types: {
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
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowedNames: [],
      },
    ],
    // Rule can specify overrides if needed
    '@typescript-eslint/explicit-member-accessibility': [
      `error`,
      {
        accessibility: `no-public`,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      `error`,
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
        allowedNames: [],
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      `error`,
      {
        multiline: {
          delimiter: `none`,
          requireLast: true,
        },
        singleline: {
          delimiter: `comma`,
          requireLast: false,
        },
        multilineDetection: `brackets`,
      },
    ],
    '@typescript-eslint/member-ordering': [
      `warn`,
      {
        default: {
          // Default config, good enough for now and easy enough to tweak if needed https://typescript-eslint.io/rules/member-ordering/#default-configuration
          memberTypes: [
            // Index signature
            `signature`,

            // Fields
            `public-static-field`,
            `protected-static-field`,
            `private-static-field`,

            `public-decorated-field`,
            `protected-decorated-field`,
            `private-decorated-field`,

            `public-instance-field`,
            `protected-instance-field`,
            `private-instance-field`,

            `public-abstract-field`,
            `protected-abstract-field`,
            `private-abstract-field`,

            `public-field`,
            `protected-field`,
            `private-field`,

            `static-field`,
            `instance-field`,
            `abstract-field`,

            `decorated-field`,

            `field`,

            // Constructors
            `public-constructor`,
            `protected-constructor`,
            `private-constructor`,

            `constructor`,

            // Getters
            `public-static-get`,
            `protected-static-get`,
            `private-static-get`,

            `public-decorated-get`,
            `protected-decorated-get`,
            `private-decorated-get`,

            `public-instance-get`,
            `protected-instance-get`,
            `private-instance-get`,

            `public-abstract-get`,
            `protected-abstract-get`,
            `private-abstract-get`,

            `public-get`,
            `protected-get`,
            `private-get`,

            `static-get`,
            `instance-get`,
            `abstract-get`,

            `decorated-get`,

            `get`,

            // Setters
            `public-static-set`,
            `protected-static-set`,
            `private-static-set`,

            `public-decorated-set`,
            `protected-decorated-set`,
            `private-decorated-set`,

            `public-instance-set`,
            `protected-instance-set`,
            `private-instance-set`,

            `public-abstract-set`,
            `protected-abstract-set`,
            `private-abstract-set`,

            `public-set`,
            `protected-set`,
            `private-set`,

            `static-set`,
            `instance-set`,
            `abstract-set`,

            `decorated-set`,

            `set`,

            // Methods
            `public-static-method`,
            `protected-static-method`,
            `private-static-method`,

            `public-decorated-method`,
            `protected-decorated-method`,
            `private-decorated-method`,

            `public-instance-method`,
            `protected-instance-method`,
            `private-instance-method`,

            `public-abstract-method`,
            `protected-abstract-method`,
            `private-abstract-method`,

            `public-method`,
            `protected-method`,
            `private-method`,

            `static-method`,
            `instance-method`,
            `abstract-method`,

            `decorated-method`,

            `method`,
          ],
          order: `alphabetically-case-insensitive`,
        },
        interfaces: {
          memberTypes: [`signature`, `field`, `constructor`, `method`],
          order: `alphabetically-case-insensitive`,
        },
        typeLiterals: {
          memberTypes: [`signature`, `field`, `constructor`, `method`],
          order: `alphabetically-case-insensitive`,
        },
      },
    ],
    '@typescript-eslint/method-signature-style': [`warn`, `property`],
    '@typescript-eslint/naming-convention': [
      `warn`,
      {
        selector: `default`,
        format: [`camelCase`],
        leadingUnderscore: `forbid`,
        trailingUnderscore: `forbid`,
      },
      {
        selector: `variable`,
        format: [`camelCase`, `UPPER_CASE`],
        leadingUnderscore: `forbid`,
        trailingUnderscore: `forbid`,
      },
      {
        selector: `enumMember`,
        format: [`UPPER_CASE`],
        leadingUnderscore: `forbid`,
        trailingUnderscore: `forbid`,
      },
      {
        selector: `typeLike`,
        format: [`PascalCase`],
        leadingUnderscore: `forbid`,
        trailingUnderscore: `forbid`,
      },
    ],
    '@typescript-eslint/no-base-to-string': [
      `error`,
      {
        ignoredTypeNames: [`RegExp`],
      },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': `error`,
    '@typescript-eslint/no-confusing-void-expression': `off`,
    '@typescript-eslint/no-dynamic-delete': `error`,
    '@typescript-eslint/no-empty-interface': `warn`,
    // There are probably some valid use cases of any, any of which should be annotated with a comment disabling this rule and explaining why
    '@typescript-eslint/no-explicit-any': `error`,
    '@typescript-eslint/no-extra-non-null-assertion': `error`,
    '@typescript-eslint/no-extraneous-class': [
      `error`,
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      `error`,
      {
        ignoreVoid: false,
        ignoreIIFE: false,
      },
    ],
    '@typescript-eslint/no-for-in-array': `error`,
    '@typescript-eslint/no-inferrable-types': [
      `error`,
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    '@typescript-eslint/no-invalid-void-type': [
      `error`,
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
    '@typescript-eslint/no-meaningless-void-operator': [
      `error`,
      {
        checkNever: false,
      },
    ],
    '@typescript-eslint/no-misused-new': `error`,
    // Possibly a little too aggressive, enabling for now and will revisit if it feels like causes more headache than it solves
    '@typescript-eslint/no-misused-promises': [
      `error`,
      {
        checksConditionals: true,
        checksVoidReturn: true,
      },
    ],
    '@typescript-eslint/no-namespace': [
      `error`,
      {
        allowDeclarations: false,
        allowDefinitionFiles: true,
      },
    ],
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': `error`,
    '@typescript-eslint/no-non-null-asserted-optional-chain': `error`,
    // Disable with inline comment and explanation if exceptions to the rule come up
    '@typescript-eslint/no-non-null-assertion': `error`,
    '@typescript-eslint/no-parameter-properties': `off`,
    '@typescript-eslint/no-require-imports': `error`,
    '@typescript-eslint/no-this-alias': [
      `error`,
      {
        allowDestructuring: false,
        allowedNames: [],
      },
    ],
    '@typescript-eslint/no-type-alias': [
      `error`,
      {
        allowAliases: `never`,
        allowCallbacks: `never`,
        allowConditionalTypes: `never`,
        allowConstructors: `never`,
        allowLiterals: `never`,
        allowMappedTypes: `never`,
        allowTupleTypes: `never`,
        allowGenerics: `never`,
      },
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
      `error`,
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],
    '@typescript-eslint/no-unnecessary-condition': [
      `error`,
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-qualifier': `warn`,
    '@typescript-eslint/no-unnecessary-type-arguments': `warn`,
    '@typescript-eslint/no-unnecessary-type-assertion': [
      `error`,
      {
        typesToIgnore: [],
      },
    ],
    '@typescript-eslint/no-unnecessary-type-constraint': `warn`,
    '@typescript-eslint/no-unsafe-argument': `error`,
    // For any valid exceptions to this rule, disable inline with explanation
    '@typescript-eslint/no-unsafe-assignment': `error`,
    '@typescript-eslint/no-unsafe-call': `error`,
    '@typescript-eslint/no-unsafe-member-access': `error`,
    '@typescript-eslint/no-unsafe-return': `error`,
    '@typescript-eslint/no-var-requires': `error`,
    '@typescript-eslint/non-nullable-type-assertion-style': `off`,
    '@typescript-eslint/prefer-as-const': `error`,
    '@typescript-eslint/prefer-enum-initializers': `off`,
    '@typescript-eslint/prefer-for-of': `warn`,
    '@typescript-eslint/prefer-function-type': `error`,
    '@typescript-eslint/prefer-includes': `error`,
    '@typescript-eslint/prefer-literal-enum-member': `error`,
    '@typescript-eslint/prefer-namespace-keyword': `off`,
    '@typescript-eslint/prefer-nullish-coalescing': [
      `error`,
      {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
      },
    ],
    '@typescript-eslint/prefer-optional-chain': `error`,
    '@typescript-eslint/prefer-readonly': [
      `warn`,
      {
        onlyInlineLambdas: false,
      },
    ],
    '@typescript-eslint/prefer-readonly-parameter-types': `off`,
    '@typescript-eslint/prefer-reduce-type-parameter': `error`,
    '@typescript-eslint/prefer-regexp-exec': `off`,
    '@typescript-eslint/prefer-return-this-type': `error`,
    '@typescript-eslint/prefer-string-starts-ends-with': `warn`,
    '@typescript-eslint/prefer-ts-expect-error': `error`,
    '@typescript-eslint/promise-function-async': `off`,
    '@typescript-eslint/require-array-sort-compare': [
      `error`,
      {
        ignoreStringArrays: false,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      `warn`,
      {
        checkCompoundAssignments: true,
        allowAny: false,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      `warn`,
      {
        allowNumber: true,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    // Has lots of options if decided that this could be useful https://typescript-eslint.io/rules/sort-type-union-intersection-members/#options
    '@typescript-eslint/sort-type-union-intersection-members': `off`,
    '@typescript-eslint/strict-boolean-expressions': [
      `error`,
      {
        allowString: true,
        allowNumber: true,
        allowNullableObject: true,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': `warn`,
    '@typescript-eslint/triple-slash-reference': [
      `error`,
      {
        path: `never`,
        types: `never`,
        lib: `never`,
      },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      `warn`,
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
    '@typescript-eslint/typedef': `off`,
    '@typescript-eslint/unbound-method': [
      `error`,
      {
        ignoreStatic: true,
      },
    ],
    '@typescript-eslint/unified-signatures': `warn`,

    // Disable regular ESLint rules that TS has extensions or better options for
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
        // From base eslint
        arrays: `always`,
        exports: `always`,
        imports: `always`,
        objects: `always`,
        // TS-specific
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
