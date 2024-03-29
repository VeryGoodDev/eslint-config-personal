const {
  audioComponents,
  headingComponents,
  imageComponents,
  inputComponents,
  linkComponents,
  videoComponents,
} = require(`../utils/components`)

module.exports = {
  plugins: [`jsx-a11y`, `react`, `react-hooks`],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: `module`,
    requireConfigFile: false,
  },
  rules: {
    // General React stuff
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
        checkChildContextTypes: false,
        checkContextTypes: false,
        forbid: [`any`, `array`, `object`],
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
    'react/no-unsafe': [
      `error`,
      {
        checkAliases: true,
      },
    ],
    'react/no-unstable-nested-components': [
      `error`,
      {
        allowAsProps: true,
      },
    ],
    'react/no-unused-class-component-methods': `error`,
    'react/no-unused-prop-types': [
      `error`,
      {
        customValidators: [],
        ignore: [],
        skipShapeProps: true,
      },
    ],
    'react/no-unused-state': `error`,
    'react/no-will-update-set-state': `error`,
    'react/prefer-es6-class': [`error`, `always`],
    'react/prefer-exact-props': `off`,
    'react/prefer-read-only-props': `off`,
    'react/prefer-stateless-function': [
      `error`,
      {
        ignorePureComponents: false,
      },
    ],
    'react/prop-types': [
      `error`,
      {
        customValidators: [],
        ignore: [],
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

    // JSX-specific rules
    'react/jsx-boolean-value': [`error`, `always`],
    'react/jsx-child-element-spacing': `error`,
    'react/jsx-closing-bracket-location': [`error`, `tag-aligned`],
    'react/jsx-closing-tag-location': `error`,
    'react/jsx-curly-brace-presence': [
      `error`,
      {
        children: `never`,
        propElementValues: `always`,
        props: `never`,
      },
    ],
    // The prettier/prettier rule might conflict or handle this better, turn off if so
    'react/jsx-curly-newline': [
      `error`,
      {
        multiline: `consistent`,
        singleline: `forbid`,
      },
    ],
    'react/jsx-curly-spacing': [
      `error`,
      {
        allowMultiline: true,
        attributes: true,
        children: true,
        when: `never`,
      },
    ],
    'react/jsx-equals-spacing': [`error`, `never`],
    'react/jsx-filename-extension': [
      `error`,
      {
        allow: `always`,
        extensions: [`.jsx`],
      },
    ],
    'react/jsx-first-prop-new-line': [`error`, `multiline`],
    'react/jsx-fragments': [`error`, `syntax`],
    'react/jsx-handler-names': [
      `error`,
      {
        checkInlineFunction: false,
        checkLocalVariables: false,
        eventHandlerPrefix: `handle`,
        eventHandlerPropPrefix: `on`,
      },
    ],
    // This may conflict with prettier/prettier, disable if so
    'react/jsx-indent': [
      `error`,
      2, // This is how many spaces to indent
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      },
    ],
    'react/jsx-indent-props': [`error`, 2],
    'react/jsx-key': [
      `error`,
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-max-depth': `off`,
    'react/jsx-max-props-per-line': [
      `error`,
      {
        maximum: {
          multi: 1,
          single: 3,
        },
      },
    ],
    'react/jsx-newline': [
      `error`,
      {
        prevent: true,
      },
    ],
    'react/jsx-no-bind': [
      `error`,
      {
        allowArrowFunctions: false,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': `error`,
    'react/jsx-no-constructed-context-values': `error`,
    'react/jsx-no-duplicate-props': [`error`, { ignoreCase: false }],
    'react/jsx-no-literals': `off`,
    'react/jsx-no-script-url': `error`,
    'react/jsx-no-target-blank': [
      `error`,
      {
        allowReferrer: true,
        enforceDynamicLinks: `always`,
        forms: true,
        links: true,
        warnOnSpreadAttributes: false,
      },
    ],
    'react/jsx-no-undef': `error`,
    'react/jsx-no-useless-fragment': [
      `error`,
      {
        // TODO: Override for TS config probably
        allowExpressions: false,
      },
    ],
    // May conflict with prettier/prettier, disable if so
    'react/jsx-one-expression-per-line': [
      `error`,
      {
        allow: `single-child`,
      },
    ],
    'react/jsx-pascal-case': [
      `error`,
      {
        allowAllCaps: false,
        allowLeadingUnderscore: false,
        allowNamespace: false,
        ignore: [],
      },
    ],
    // Docs note that this isn't needed with no-multi-spaces in regular eslint
    'react/jsx-props-no-multi-spaces': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/jsx-sort-default-props': [
      `error`,
      {
        ignoreCase: false,
      },
    ],
    'react/jsx-sort-props': [
      `error`,
      {
        callbacksLast: true,
        multiline: `last`,
        noSortAlphabetically: false,
        reservedFirst: [`key`, `ref`],
        shorthandFirst: true,
        shorthandLast: false,
      },
    ],
    'react/jsx-tag-spacing': [
      `error`,
      {
        afterOpening: `never`,
        beforeClosing: `allow`,
        beforeSelfClosing: `always`,
        closingSlash: `never`,
      },
    ],
    // Disabled because for React, latest versions will be used, which since v17 use a new runtime transform; and for Preact, esbuild should be able to inject as long as its needed
    'react/jsx-uses-react': `off`,
    'react/jsx-uses-vars': `error`,
    'react/jsx-wrap-multilines': [
      `error`,
      {
        declaration: `parens`,
        assignment: `parens`,
        return: `parens`,
        arrow: `parens`,
        condition: `ignore`,
        logical: `ignore`,
        prop: `ignore`,
      },
    ],

    // Rules of hooks
    'react-hooks/exhaustive-deps': `error`,
    'react-hooks/rules-of-hooks': `error`,

    // JSX A11y
    'jsx-a11y/alt-text': [
      `error`,
      {
        elements: [`area`, `img`, `input[type="image"]`, `object`],
        // Can specify any custom components that should also be checked by specifying "domEl": ["Custom1"]
        img: imageComponents,
      },
    ],
    'jsx-a11y/anchor-has-content': [
      `error`,
      {
        // Link component(s) go in this array
        components: linkComponents,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      `error`,
      {
        aspects: [`noHref`, `preferButton`, `invalidHref`],
        components: linkComponents,
        specialLink: [],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': `error`,
    'jsx-a11y/aria-props': `error`,
    'jsx-a11y/aria-proptypes': `error`,
    'jsx-a11y/aria-role': [
      `error`,
      {
        allowedInvalidRoles: [],
        ignoreNonDOM: false,
      },
    ],
    'jsx-a11y/aria-unsupported-elements': `error`,
    'jsx-a11y/autocomplete-valid': [
      `error`,
      {
        inputComponents,
      },
    ],
    'jsx-a11y/click-events-have-key-events': `error`,
    'jsx-a11y/heading-has-content': [
      `error`,
      {
        components: headingComponents,
      },
    ],
    'jsx-a11y/html-has-lang': `error`,
    'jsx-a11y/iframe-has-title': `error`,
    'jsx-a11y/img-redundant-alt': [
      `error`,
      {
        components: imageComponents,
        words: [`image`, `photo`, `picture`],
      },
    ],
    'jsx-a11y/interactive-supports-focus': [
      `error`,
      {
        tabbable: [`button`, `checkbox`, `link`, `searchbox`, `spinbutton`, `switch`, `textbox`],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      `error`,
      {
        assert: `both`,
        controlComponents: inputComponents,
        depth: 3,
        labelAttributes: [`for`, `htmlFor`, `label`],
        labelComponents: [],
      },
    ],
    'jsx-a11y/lang': `error`,
    'jsx-a11y/media-has-caption': [
      `error`,
      {
        audio: audioComponents,
        track: [],
        video: videoComponents,
      },
    ],
    'jsx-a11y/mouse-events-have-key-events': `error`,
    'jsx-a11y/no-access-key': `error`,
    'jsx-a11y/no-autofocus': [
      `error`,
      {
        ignoreNonDOM: false,
      },
    ],
    'jsx-a11y/no-distracting-elements': `error`,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      `error`,
      {
        tr: [`none`, `presentation`],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      `error`,
      {
        handlers: [`onClick`, `onKeyDown`, `onKeyPress`, `onKeyUp`, `onMouseDown`, `onMouseUp`],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      `error`,
      {
        li: [`menuitem`, `option`, `row`, `tab`, `treeitem`],
        ol: [`listbox`, `menu`, `menubar`, `radiogroup`, `tablist`, `tree`, `treegrid`],
        table: [`grid`],
        td: [`gridcell`],
        ul: [`listbox`, `menu`, `menubar`, `radiogroup`, `tablist`, `tree`, `treegrid`],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      `error`,
      {
        roles: [`tabpanel`],
        tags: [],
      },
    ],
    'jsx-a11y/no-redundant-roles': [
      `error`,
      {
        nav: [`navigation`],
      },
    ],
    'jsx-a11y/no-static-element-interactions': [
      `error`,
      {
        handlers: [`onClick`, `onKeyDown`, `onKeyPress`, `onKeyUp`, `onMouseDown`, `onMouseUp`],
      },
    ],
    'jsx-a11y/role-has-required-aria-props': `error`,
    'jsx-a11y/role-supports-aria-props': `error`,
    'jsx-a11y/scope': `error`,
    'jsx-a11y/tabindex-no-positive': `error`,
  },
}
