module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        'stylelint-config-recess-order',
    ],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        'selector-class-pattern': null,
        'max-nesting-depth': 3,
    }
}
