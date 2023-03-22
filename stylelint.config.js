module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-selector-bem-pattern'
    ],
    rules: {
        'selector-class-pattern': null,
        'max-nesting-depth': 3,
    }
}
