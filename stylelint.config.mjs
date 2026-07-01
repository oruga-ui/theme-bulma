/**
 * @see https://stylelint.io/user-guide/configure
 */
export default {
  ignoreFiles: ["**/.*", "**/dist"],
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
  ],
  rules: {
    // CSS
    "no-duplicate-selectors": [true, { severity: "warning" }],
    "no-descending-specificity": [true, { severity: "warning" }],
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-same-name"],
        ignore: ["after-comment", "blockless-after-blockless"],
        ignoreAtRules: ["if", "else"],
      },
    ],
    // SCSS
    "scss/operator-no-newline-after": [true, { severity: "warning" }],
    "scss/at-extend-no-missing-placeholder": null,
  },
};
