import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import banner from "vite-plugin-banner";
import { viteStaticCopy as copy } from "vite-plugin-static-copy";

import { fileURLToPath } from "url";
import { resolve } from "path";

import pkg from "./package.json" with { type: "json" };

function generate(version: string): string {
    const preview_build = process.env.ORUGA_PREVIEW_BUILD;

    if (preview_build) {
        version = `${version} (build ${preview_build})`;
    }

    return `/*! Oruga Bulma Theme v${version} | MIT License | github.com/oruga-ui/theme-bulma */`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    if (mode === "development") {
        return {
            root: __dirname,
            plugins: [vue()],
            resolve: {
                alias: {
                    "@": fileURLToPath(new URL("./src", import.meta.url)),
                },
            },
        };
    } else {
        return {
            build: {
                emptyOutDir: true,
                copyPublicDir: false,
                minify: "terser",
                lib: {
                    entry: resolve(__dirname, "src/build.ts"),
                    name: "OrugaThemeBulma",
                    fileName: "bulma",
                    formats: ["es", "cjs", "umd"],
                },
                rollupOptions: {
                    // make sure to externalize deps that shouldn't be bundled
                    // into your library
                    external: ["vue", /oruga\/.*/],
                    output: {
                        assetFileNames: "bulma.[ext]",
                        // Provide global variables to use in the UMD build
                        // for externalized deps
                        globals: {
                            vue: "Vue",
                        },
                    },
                },
            },
            css: {
                // rename default `style.css` to `bulma.css`
                postcss: { to: "bulma.css" },
            },
            plugins: [
                // build types in dist/types
                dts({
                    outDir: "./dist/types",
                    include: ["src/plugins/theme.ts"],
                }),
                // copy assets into dist
                copy({
                    targets: [{ src: "src/assets/scss", dest: "." }],
                }),
                // adds a banner to every generated dist file
                banner(generate(pkg.version)),
            ],
        };
    }
});
