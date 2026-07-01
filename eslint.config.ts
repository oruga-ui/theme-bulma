import eslint from "@eslint/js";
import { globalIgnores, includeIgnoreFile } from "eslint/config";
import {
    defineConfigWithVueTs,
    vueTsConfigs,
} from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import pluginVue from "eslint-plugin-vue";
import pluginJsdoc from "eslint-plugin-jsdoc";
import pluginCompat from "eslint-plugin-compat";

import { fileURLToPath } from "node:url";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfigWithVueTs(
    // define specific ignore patterns
    globalIgnores(["*.d.ts"]),

    // include .gitignore ignore patterns
    includeIgnoreFile(gitignorePath),

    // add js configs
    eslint.configs.recommended,

    // add browser compatibility configs
    pluginCompat.configs["flat/recommended"],

    // add vue with ts configs
    pluginVue.configs["flat/recommended"],
    vueTsConfigs.recommendedTypeChecked,

    // add jsdoc configs
    pluginJsdoc.configs["flat/recommended-typescript-error"],
    pluginJsdoc.configs["flat/logical-typescript-error"],
    pluginJsdoc.configs["flat/stylistic-typescript-error"],

    // add vue prettier lint configs
    // deactivate prettier lint checks as recommended at https://github.com/vuejs/eslint-config-prettier?tab=readme-ov-file#use-separate-commands-for-linting-and-formatting
    // instead, we do formatting as a separate task.
    skipFormatting,

    // project specific modifications
    {
        name: "app/overrides",
        rules: {
            // TypeScript
            "@typescript-eslint/no-explicit-any": ["warn"],
            "@typescript-eslint/ban-ts-comment": ["warn"],
            "@typescript-eslint/explicit-function-return-type": ["warn"],

            // Vue
            "vue/padding-line-between-blocks": ["error", "always"],
            "vue/multi-word-component-names": ["off"],
            "vue/no-empty-component-block": "error",
            "vue/block-order": [
                "error",
                { order: ["script", "template", "style"] },
            ],
            "vue/block-lang": ["error", { script: { lang: "ts" } }],
            "vue/html-closing-bracket-newline": [
                "error",
                {
                    singleline: "never",
                    multiline: "never",
                    selfClosingTag: {
                        singleline: "never",
                        multiline: "never",
                    },
                },
            ],
        },
    },
);
