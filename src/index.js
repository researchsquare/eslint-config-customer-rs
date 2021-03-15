module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
    },
    globals: {
        System: true,
        Promise: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-duplicate-imports': 'error',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
            },
        ],
        'curly': 'error',
        'eqeqeq': 'error',
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: 'after-props',
                selfClosing: 'tag-aligned',
            },
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        // Bootstrap 4 prevents us from following this rule
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-quotes': ['error', 'prefer-double'],
        'semi': 'error',
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-curly-newline': 0,
        'no-shadow': 0,
        'react/jsx-fragments': 0,
        'import/extensions': [
            'error',
            {
                js: 'never',
                jsx: 'never',
                scss: 'ignorePackages',
            },
        ],
        'import/order': [
            'error',
            {
                'groups': [['external', 'builtin'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'no-multiple-empty-lines': ['error'],
        'no-use-before-define': 0,
    },
};
