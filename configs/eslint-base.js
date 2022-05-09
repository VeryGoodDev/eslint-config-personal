module.exports = {
  plugins: [`html`, `prettier`],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: `module`,
    requireConfigFile: false,
  },
  rules: {
    // Potential logic errors
    'array-callback-return': `error`,
    'constructor-super': `error`,
    'for-direction': `error`,
    'getter-return': `error`,
    'no-async-promise-executor': `error`,
    'no-await-in-loop': `error`,
    'no-class-assign': `error`,
    'no-compare-neg-zero': `error`,
    'no-cond-assign': `error`,
    'no-const-assign': `error`,
    'no-constant-condition': [
      `error`,
      {
        checkLoops: false,
      },
    ],
    'no-constructor-return': `error`,
    'no-control-regex': `error`,
    'no-debugger': `error`,
    'no-dupe-args': `error`,
    'no-dupe-class-members': `error`,
    'no-dupe-else-if': `error`,
    'no-dupe-keys': `error`,
    'no-duplicate-case': `error`,
    'no-duplicate-imports': [
      `error`,
      {
        includeExports: false,
      },
    ],
    'no-empty-character-class': `error`,
    'no-empty-pattern': `error`,
    'no-ex-assign': `error`,
    'no-fallthrough': `error`,
    'no-func-assign': `error`,
    'no-import-assign': `error`,
    'no-inner-declarations': [`error`, `both`],
    'no-invalid-regexp': `error`,
    'no-irregular-whitespace': [
      `error`,
      {
        skipComments: true,
        skipRegExps: true,
        skipStrings: true,
        skipTemplates: true,
      },
    ],
    'no-loss-of-precision': `error`,
    'no-misleading-character-class': `error`,
    'no-new-symbol': `error`,
    'no-obj-calls': `error`,
    'no-promise-executor-return': `error`,
    'no-prototype-builtins': `error`,
    'no-self-assign': [
      `error`,
      {
        props: true,
      },
    ],
    'no-self-compare': `error`,
    'no-setter-return': `error`,
    'no-sparse-arrays': `error`,
    'no-template-curly-in-string': `error`,
    'no-this-before-super': `error`,
    'no-undef': [
      `error`,
      {
        typeof: false,
      },
    ],
    'no-unexpected-multiline': `error`,
    // Not enabled by default in eslint:recommended, can be removed if causing trouble
    'no-unmodified-loop-condition': `error`,
    'no-unreachable': `error`,
    // Can disable for different types of loop, maybe use if this rule causes trouble https://eslint.org/docs/rules/no-unreachable-loop#ignore
    'no-unreachable-loop': `error`,
    'no-unsafe-finally': `error`,
    'no-unsafe-negation': [
      `error`,
      {
        enforceForOrderingRelations: true,
      },
    ],
    'no-unsafe-optional-chaining': [
      `error`,
      {
        disallowArithmeticOperators: true,
      },
    ],
    'no-unused-private-class-members': `error`,
    'no-unused-vars': [
      `error`,
      {
        args: `after-used`,
        caughtErrors: `none`,
        ignoreRestSiblings: true,
        vars: `all`,
      },
    ],
    'no-use-before-define': [
      `error`,
      {
        classes: true,
        functions: true,
        variables: true,
      },
    ],
    'no-useless-backreference': `error`,
    'require-atomic-updates': `error`,
    'use-isnan': [
      `error`,
      {
        enforceForIndexOf: true,
        enforceForSwitchCase: true,
      },
    ],
    'valid-typeof': [
      `error`,
      {
        requireStringLiterals: true,
      },
    ],

    // Stylistic syntax suggestions
    'accessor-pairs': [
      `error`,
      {
        enforceForClassMembers: true,
        getWithoutSet: false,
        setWithoutGet: true,
      },
    ],
    'arrow-body-style': [`error`, `as-needed`],
    // Useless af because I never use var, but for the sake of completionism I included it
    'block-scoped-var': `error`,
    camelcase: [
      `error`,
      {
        ignoreDestructuring: false,
        ignoreGlobals: false,
        ignoreImports: false,
        properties: `always`,
      },
    ],
    'capitalized-comments': [
      `error`,
      `always`,
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
        // Use ignorePattern if needed https://eslint.org/docs/rules/capitalized-comments#ignorepattern
      },
    ],
    'class-methods-use-this': [
      `error`,
      {
        enforceForClassFields: true,
      },
    ],
    complexity: `off`,
    'consistent-return': [
      `error`,
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    // Not something I usually have in my code, will revisit enabling and adding explicitly allowed aliases if I find the need
    'consistent-this': `off`,
    curly: [`error`, `all`],
    'default-case': `error`,
    'default-case-last': `error`,
    'default-param-last': `error`,
    'dot-notation': `error`,
    eqeqeq: [`error`, `always`],
    'func-name-matching': `off`,
    'func-names': [
      `error`,
      `as-needed`,
      {
        generators: `as-needed`,
      },
    ],
    'func-style': [`error`, `expression`],
    'grouped-accessor-pairs': [`error`, `getBeforeSet`],
    'guard-for-in': `off`,
    // Could be useful if I find confusing generic var names, not needed for now though https://eslint.org/docs/rules/id-denylist#options
    'id-denylist': `off`,
    'id-length': [
      `error`,
      {
        min: 3,
        properties: `always`,
      },
    ],
    'id-match': `off`,
    // There are a handful of use cases where separating declaration from initialization works, but I'd rather enforce this by default and explicitly opt-out with eslint-disable comments as needed
    'init-declarations': [`error`, `always`],
    'max-classes-per-file': [
      `error`,
      {
        // Allows for internal private classes inside a module as needed with something like const InternalClass = class {...}
        ignoreExpressions: true,
        max: 1,
      },
    ],
    // Disabled for now, but if I find it a problem might be worth enabling (and IMO a more clear complexity helper than the complexity rule) https://eslint.org/docs/rules/max-depth
    'max-depth': `off`,
    // Enabling this as an experiment, usually not something I try to enforce but I feel like over 500 lines with comments and whitespace excluded could be a sign to consider refactoring or breaking out modules. May adjust max or disable for some files depending on what makes the most sense
    'max-lines': [
      `error`,
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    // Too hard to define a reasonable universal max IMO, some functions might have large if/else chains or switch statements
    'max-lines-per-function': `off`,
    // Thankfully not something I run into as often with Promises being widely supported, but just in case...
    'max-nested-callbacks': [`error`, 3],
    // If any more are needed, put them in an object arg or two so that keeping order straight doesn't matter
    'max-params': [`error`, 3],
    // Absolutely not interested in counting statements per function, like ever
    'max-statements': `off`,
    'multiline-comment-style': [`error`, `separate-lines`],
    'new-cap': [
      `error`,
      {
        capIsNew: false,
        newIsCap: true,
        properties: true,
      },
    ],
    'no-alert': `error`,
    'no-array-constructor': `error`,
    // Definitely not something I use regularly, and will just disable if I find a legitimate reason to do anything with them
    'no-bitwise': `error`,
    'no-caller': `error`,
    // Use code blocks if it's actually needed
    'no-case-declarations': `error`,
    // Not something I've ever found an issue with thanks to ligatures in my editor fonts
    'no-confusing-arrow': `off`,
    // May change depending on my ideas on what to do for console usage in personal projects, not needed for now at least though
    'no-console': `off`,
    'no-continue': `error`,
    'no-delete-var': `error`,
    'no-div-regex': `off`,
    'no-else-return': [
      `error`,
      {
        allowElseIf: true,
      },
    ],
    'no-empty': `error`,
    // For things like intentional no-ops, disable with eslint-disable comment or add a comment in the function body
    'no-empty-function': `error`,
    // Seems kind of redundant with eqeqeq, but it stays until they deprecate it
    'no-eq-null': `error`,
    'no-eval': `error`,
    'no-extend-native': `error`,
    'no-extra-bind': `error`,
    'no-extra-boolean-cast': `error`,
    'no-extra-label': `error`,
    'no-extra-semi': `error`,
    'no-floating-decimal': `error`,
    'no-global-assign': `error`,
    'no-implicit-coercion': [
      `error`,
      {
        boolean: true,
        disallowTemplateShorthand: false,
        number: true,
        string: true,
      },
    ],
    'no-implicit-globals': `error`,
    'no-implied-eval': `error`,
    'no-inline-comments': `off`,
    'no-invalid-this': [
      `error`,
      {
        capIsConstructor: false,
      },
    ],
    // Only applies to a specific obsolete property, not iterators in general
    'no-iterator': `error`,
    'no-label-var': `error`,
    'no-labels': `error`,
    'no-lone-blocks': `error`,
    'no-lonely-if': `error`,
    'no-loop-func': `error`,
    'no-magic-numbers': [
      `error`,
      {
        detectObjects: false,
        enforceConst: false,
        // Commonly used for array/length related things
        ignore: [0, 1],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
      },
    ],
    'no-mixed-operators': `error`,
    'no-multi-assign': `error`,
    'no-multi-str': `error`,
    // I think it's worthwhile and usually correct, may revisit as needed if it causes more pain than it saves
    'no-negated-condition': `error`,
    'no-nested-ternary': `error`,
    // Only prevents new operator when not used in an assignment or comparison https://eslint.org/docs/rules/no-new
    'no-new': `error`,
    'no-new-func': `error`,
    'no-new-object': `error`,
    'no-new-wrappers': `error`,
    'no-nonoctal-decimal-escape': `error`,
    'no-octal': `error`,
    'no-octal-escape': `error`,
    'no-param-reassign': `error`,
    'no-plusplus': [
      `error`,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-proto': `error`,
    'no-redeclare': [
      `error`,
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': `error`,
    'no-restricted-exports': `off`,
    // Can enable if specific problematic globals are found and I want them never to be used
    'no-restricted-globals': `off`,
    // May be useful in the future to remind if I have specific go-tos and forget about them https://eslint.org/docs/rules/no-restricted-imports#options
    'no-restricted-imports': `off`,
    'no-restricted-properties': [
      `error`,
      {
        object: `arguments`,
        property: `callee`,
        message: `arguments.callee is deprecated`,
      },
      {
        object: `global`,
        property: `isFinite`,
        message: `Use Number.isFinite instead`,
      },
      {
        object: `self`,
        property: `isFinite`,
        message: `Use Number.isFinite instead`,
      },
      {
        object: `window`,
        property: `isFinite`,
        message: `Use Number.isFinite instead`,
      },
      {
        object: `global`,
        property: `isNaN`,
        message: `Use Number.isNaN instead`,
      },
      {
        object: `self`,
        property: `isNaN`,
        message: `Use Number.isNaN instead`,
      },
      {
        object: `window`,
        property: `isNaN`,
        message: `Use Number.isNaN instead`,
      },
      {
        property: `__defineGetter__`,
        message: `Use Object.defineProperty instead.`,
      },
      {
        property: `__defineSetter__`,
        message: `Use Object.defineProperty instead.`,
      },
      {
        object: `Math`,
        property: `pow`,
        message: `Use the exponentiation operator (**) instead.`,
      },
    ],
    // Could be useful if I find specific patterns that I don't like, explanation here https://eslint.org/docs/rules/no-restricted-syntax
    'no-restricted-syntax': `off`,
    'no-return-assign': [`error`, `always`],
    'no-return-await': `error`,
    'no-script-url': `error`,
    'no-sequences': [
      `error`,
      {
        allowInParentheses: false,
      },
    ],
    'no-shadow': [
      `error`,
      {
        builtinGlobals: true,
        hoist: `functions`,
      },
    ],
    'no-shadow-restricted-names': `error`,
    'no-ternary': `off`,
    'no-throw-literal': `error`,
    'no-undef-init': `error`,
    // Not needed because the potential pitfalls are guarded by other rules, and on the rare occasion I need to explicitly specify undefined, I like using it this way
    'no-undefined': `off`,
    'no-underscore-dangle': `off`,
    'no-unneeded-ternary': [
      `error`,
      {
        defaultAssignment: false,
      },
    ],
    'no-unused-expressions': `error`,
    'no-unused-labels': `error`,
    'no-useless-call': `error`,
    'no-useless-catch': `error`,
    'no-useless-computed-key': [
      `error`,
      {
        enforceForClassMembers: true,
      },
    ],
    'no-useless-concat': `error`,
    'no-useless-constructor': `error`,
    'no-useless-escape': `error`,
    'no-useless-rename': [
      `error`,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': `error`,
    'no-var': `error`,
    'no-void': [
      `error`,
      {
        allowAsStatement: true,
      },
    ],
    'no-warning-comments': `off`,
    'no-with': `error`,
    'object-shorthand': [
      `error`,
      `always`,
      {
        avoidExplicitReturnArrows: true,
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    'one-var': [`error`, `never`],
    // Pretty sure this one should be unneeded because I have one-var set to never
    'one-var-declaration-per-line': `off`,
    'operator-assignment': `off`,
    'prefer-arrow-callback': [
      `error`,
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],
    'prefer-const': [
      `error`,
      {
        destructuring: `all`,
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': [
      `error`,
      {
        array: false,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'prefer-exponentiation-operator': `error`,
    'prefer-named-capture-group': `error`,
    // I _think_ this behavior is what I want, subject to change
    'prefer-numeric-literals': `error`,
    // Enforces a function that was introduced in ES2022, I don't explicitly target anything besides latest browsers for anything but will revisit if needed
    'prefer-object-has-own': `error`,
    'prefer-object-spread': `error`,
    'prefer-promise-reject-errors': [
      `error`,
      {
        allowEmptyReject: false,
      },
    ],
    'prefer-regex-literals': [
      `error`,
      {
        disallowRedundantWrapping: true,
      },
    ],
    'prefer-rest-params': `error`,
    'prefer-spread': `error`,
    'prefer-template': `error`,
    // Prefer to allow prettier to handle quoting
    'quote-props': `off`,
    // Might be better as-needed (only disallows radix of 10)
    radix: [`error`, `always`],
    // Debated on this one a bit, but if async is only being used to return a Promise, I prefer explicitly wrapping it in a Promise
    'require-await': `error`,
    // Tempted to turn this on as a "do it always, never worry about it", but I don't feel like it. Will revisit if I get bitten by something this could've caught lol
    'require-unicode-regexp': `off`,
    'require-yield': `error`,
    // Pretty sure I've run into problems with eslint's sorting options
    'sort-imports': `off`,
    'sort-keys': [
      `warn`,
      `asc`,
      {
        caseSensitive: false,
        minKeys: 2,
        natural: true,
      },
    ],
    'sort-vars': `off`,
    'spaced-comment': [`warn`, `always`],
    strict: `off`,
    'symbol-description': `error`,
    // I _think_ this is redundant because I have no-var enabled and the docs make me think it's specifically for var because of hoisting, but just in case...
    'vars-on-top': `error`,
    // Setting to never disallows `literal === variable` syntax order
    yoda: [
      `error`,
      `never`,
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],

    // Code layout/formatting
    // Better handled by prettier formatting IMO
    'array-bracket-newline': `off`,
    'array-bracket-spacing': [`warn`, `never`],
    // Super similar to array-bracket-newline, likewise better handled by prettier formatting IMO
    'array-element-newline': `off`,
    // Handled by prettier/prettier rule
    'arrow-parens': `off`,
    'arrow-spacing': [
      `warn`,
      {
        after: true,
        before: true,
      },
    ],
    'block-spacing': [`warn`, `always`],
    'brace-style': [
      `warn`,
      `1tbs`,
      {
        allowSingleLine: true,
      },
    ],
    // Handled by prettier/prettier rule
    'comma-dangle': `off`,
    'comma-spacing': [
      `warn`,
      {
        after: true,
        before: false,
      },
    ],
    'comma-style': [`error`, `last`],
    'computed-property-spacing': [
      `warn`,
      `never`,
      {
        enforceForClassMembers: true,
      },
    ],
    'dot-location': [`warn`, `property`],
    'eol-last': [`warn`, `always`],
    'func-call-spacing': [`error`, `never`],
    // Better handled by prettier formatting IMO
    'function-call-argument-newline': `off`,
    // Better handled by prettier formatting IMO
    'function-paren-newline': `off`,
    'generator-star-spacing': [`warn`, `after`],
    // Better handled by prettier formatting IMO
    'implicit-arrow-linebreak': `off`,
    // Better handled by prettier formatting IMO
    indent: `off`,
    // TODO: Might be worth only having in react configs
    'jsx-quotes': [`warn`, `prefer-double`],
    'key-spacing': [
      `warn`,
      {
        afterColon: true,
        beforeColon: false,
        mode: `strict`,
      },
    ],
    'keyword-spacing': [
      `warn`,
      {
        after: true,
        before: true,
      },
    ],
    'line-comment-position': `off`,
    // Handled by prettier/prettier rule
    'linebreak-style': `off`,
    'lines-around-comment': `off`,
    'lines-between-class-members': [
      `warn`,
      `always`,
      {
        exceptAfterSingleLine: true,
      },
    ],
    // Handled by prettier/prettier rule
    'max-len': `off`,
    // Not looking to try to define this arbitrarily, prettier formatting can keep things looking good enough for me
    'max-statements-per-line': `off`,
    'multiline-ternary': `off`,
    'new-parens': [`warn`, `always`],
    'newline-per-chained-call': `warn`,
    // Might need to consider object option for exceptions if this causes troubles https://eslint.org/docs/rules/no-extra-parens#options
    'no-extra-parens': [
      `warn`,
      `all`,
      {
        conditionalAssign: true,
        enforceForArrowConditionals: false,
        enforceForFunctionPrototypeMethods: false,
        enforceForNewInMemberExpressions: false,
        enforceForSequenceExpressions: true,
        ignoreJSX: `multi-line`,
        nestedBinaryExpressions: false,
        returnAssign: true,
      },
    ],
    'no-mixed-spaces-and-tabs': `error`,
    'no-multi-spaces': `warn`,
    'no-multiple-empty-lines': [
      `warn`,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-tabs': `warn`,
    'no-trailing-spaces': [
      `warn`,
      {
        ignoreComments: false,
        skipBlankLines: false,
      },
    ],
    'no-whitespace-before-property': `warn`,
    // Handled by curly rule
    'nonblock-statement-body-position': `off`,
    // Better handled by prettier IMO
    'object-curly-newline': `off`,
    'object-curly-spacing': [`warn`, `always`],
    // Docs are confusing, and I think it's something that prettier does a good enough job with anyways
    'object-property-newline': `off`,
    // Better handled by prettier IMO
    'operator-linebreak': `off`,
    'padded-blocks': [`warn`, `never`],
    'padding-line-between-statements': `off`,
    quotes: [
      `warn`,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    'rest-spread-spacing': [`warn`, `never`],
    // Handled by prettier/prettier rule
    semi: `off`,
    'semi-spacing': `off`,
    'semi-style': `off`,
    'space-before-blocks': [`warn`, `always`],
    'space-before-function-paren': [
      `warn`,
      {
        anonymous: `never`,
        asyncArrow: `always`,
        named: `never`,
      },
    ],
    'space-in-parens': [`warn`, `never`],
    'space-infix-ops': `warn`,
    'space-unary-ops': [
      `warn`,
      {
        words: false,
        nonwords: false,
      },
    ],
    'switch-colon-spacing': [
      `warn`,
      {
        after: true,
        before: false,
      },
    ],
    'template-curly-spacing': [`warn`, `never`],
    'template-tag-spacing': [`warn`, `never`],
    // Mildly confused by this, can probably be turned off if it causes problems
    'unicode-bom': [`warn`, `never`],
    'wrap-iife': [`warn`, `outside`],
    'wrap-regex': `off`,
    'yield-star-spacing': [`warn`, `after`],

    // Using prettier through linting rather than separately
    'prettier/prettier': [
      `warn`,
      {
        arrowParens: `always`,
        endOfLine: `lf`,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: `es5`,
      },
    ],
  },
}
