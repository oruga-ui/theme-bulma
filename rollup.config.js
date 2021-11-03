import cjs from "@rollup/plugin-commonjs"
import copy from "rollup-plugin-copy"
import sass from "rollup-plugin-sass"
import typescript from "@rollup/plugin-typescript"
import { terser } from "rollup-plugin-terser"

import autoprefixer from "autoprefixer"
import fs from "fs"
import path from "path"
import postcss from "postcss"

import pkg from "./package.json"

const entries = {
  index: "src/plugins/bulma.ts",
  scss: "src/assets/scss",
}

const exits = {
  directory: "dist",
  css: "dist/bulma.css",
  esm: `${pkg.module}`,
  umd: `${pkg.main}`,
}

const commonSassPluginOptions = {
  processor: async (css) => {
    const { css: processedCss } = await postcss([autoprefixer]).process(css, {
      from: undefined,
    })
    return processedCss
  },
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

function createMinifiedFileName(fileName){
  const fileNameParts = fileName.split(".")
  const fileExtIndex = fileNameParts.length - 1
  const minifiedFileName = [...fileNameParts.slice(0, fileExtIndex), "min", fileNameParts[fileExtIndex]].join(".")
  return minifiedFileName
}

function writeCssFile(fileName, styles){
  createDirectoryIfDoesNotExist(exits.css)
  fs.writeFileSync(fileName, styles)
}

export default function() {
  const config = [
    {
      input: entries.index,
      external: ["vue", /oruga\/.*/],
      output: [
        {
          format: "esm",
          file: `${exits.esm}`,
        },
        {
          format: "esm",
          file: `${createMinifiedFileName(exits.esm)}`,
          plugins: [terser()],
        },
        {
          format: "umd",
          name: `${kebabCaseToPascalCase(pkg.name)}`,
          file: `${exits.umd}`,
        },
        {
          format: "umd",
          name: `${kebabCaseToPascalCase(pkg.name)}`,
          file: `${createMinifiedFileName(exits.umd)}`,
          plugins: [terser()],
        },
      ],
      plugins: [
        copy({
          targets: [
            { src: `${entries.scss}`, dest: `${exits.directory}` }
          ],
        }),
        cjs(),
        sass({
          ...commonSassPluginOptions,
          output(styles) {
            writeCssFile(`${exits.css}`, styles)
          },
        }),
        sass({
          ...commonSassPluginOptions,
          output(styles) {
            writeCssFile(`${createMinifiedFileName(exits.css)}`, styles)
          },
          ...{
            options: {
              outputStyle: "compressed",
              ...commonSassPluginOptions.options,
            },
          },
        }),
        typescript(typescriptPluginOptions),
      ],
    },
  ]
  return config
}
