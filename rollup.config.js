import cjs from "@rollup/plugin-commonjs"
import copy from "rollup-plugin-copy"
import sass from "rollup-plugin-sass"
import typescript from "@rollup/plugin-typescript"

import autoprefixer from "autoprefixer"
import fs from "fs"
import path from "path"
import postcss from "postcss"

import pkg from "./package.json"

const entries = {
  index: "src/plugins/oruga.ts",
  scss: "src/assets/scss",
}

const exits = {
  directory: "dist",
  css: "dist/oruga-bulma.css",
  esm: `dist/${pkg.module}`,
  umd: `dist/${pkg.main}`,
}

const commonSassPluginOptions = {
  options: {
    includePaths: ["node_modules"],
  },
}

const typescriptPluginOptions = {
  sourceMap: false,
}

function createDirectoryIfDoesNotExist(filePath) {
  const directoryName = path.dirname(filePath)
  if (fs.existsSync(directoryName)) {
    return true
  }
  createDirectoryIfDoesNotExist(directoryName)
  fs.mkdirSync(directoryName)
}
function kebabCaseToPascalCase(string) {
  return string
    .split("-")
    .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join("")
}
export default function() {
  const config = [
    {
      input: entries.index,
      external: ["vue", "oruga"],
      output: [
        {
          format: "umd",
          name: `${kebabCaseToPascalCase(pkg.name)}`,
          file: `${exits.umd}`,
        },
        {
          format: "esm",
          file: `${exits.esm}`,
        },
      ],
      plugins: [
        copy({
          targets: [
            { src: `${entries.scss}`, dest: `${exits.directory}` },
            { src: "package.json", dest: `${exits.directory}` },
          ],
        }),
        cjs(),
        sass({
          processor: async (css) => {
            const { css: processedCss } = await postcss([autoprefixer]).process(
              css,
              {
                from: undefined,
              }
            )
            return processedCss
          },
          output(styles) {
            createDirectoryIfDoesNotExist(exits.css)
            fs.writeFileSync(exits.css, styles)
          },
          ...commonSassPluginOptions,
        }),
        typescript(typescriptPluginOptions),
      ],
    },
  ]
  return config
}
