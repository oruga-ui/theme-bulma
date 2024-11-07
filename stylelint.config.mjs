export default {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-prettier", "stylelint-scss"],
  ignoreFiles: ["**/.*", "**/dist"],
  rules: {
    "scss/at-extend-no-missing-placeholder": null,
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
    "prettier/prettier": [true, { endOfLine: "auto" }],
  },
};
