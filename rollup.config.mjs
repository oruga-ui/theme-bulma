import copy from 'rollup-plugin-copy';
import sass from 'rollup-plugin-sass';
import typescript from '@rollup/plugin-typescript';

import autoprefixer from 'autoprefixer';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';

import pkg from './package.json' assert { type: 'json' };

const entries = {
  index: 'src/plugins/bulma.ts',
  scss: 'src/assets/scss'
};

const exits = {
  directory: 'dist',
  css: 'dist/bulma.css',
  esm: `${pkg.module}`,
  umd: `${pkg.main}`
};

const commonSassPluginOptions = {
  processor: async (css) => {
    const { css: processedCss } = await postcss([autoprefixer]).process(css, {
      from: undefined
    });
    return processedCss;
  },
  options: {
    includePaths: ['node_modules']
  }
};

const typescriptPluginOptions = {
  sourceMap: false
};

function createDirectoryIfDoesNotExist(filePath) {
  const directoryName = path.dirname(filePath);
  if (fs.existsSync(directoryName)) {
    return true;
  }
  createDirectoryIfDoesNotExist(directoryName);
  fs.mkdirSync(directoryName);
}

function createMinifiedFileName(fileName) {
  const fileNameParts = fileName.split('.');
  const fileExtIndex = fileNameParts.length - 1;
  const minifiedFileName = [
    ...fileNameParts.slice(0, fileExtIndex),
    'min',
    fileNameParts[fileExtIndex]
  ].join('.');
  return minifiedFileName;
}

function writeCssFile(fileName, styles) {
  createDirectoryIfDoesNotExist(exits.css);
  fs.writeFileSync(fileName, styles);
}

export default function () {
  const config = [
    {
      input: entries.index,
      external: ['vue', /oruga\/.*/],
      output: [
        {
          format: 'esm',
          file: `${exits.esm}`
        },
        {
          format: 'umd',
          name: 'OrugaThemeBulma',
          file: `${exits.umd}`
        }
      ],
      plugins: [
        copy({
          targets: [{ src: `${entries.scss}`, dest: `${exits.directory}` }]
        }),
        sass({
          ...commonSassPluginOptions,
          output(styles) {
            writeCssFile(`${exits.css}`, styles);
          }
        }),
        sass({
          ...commonSassPluginOptions,
          output(styles) {
            writeCssFile(`${createMinifiedFileName(exits.css)}`, styles);
          },
          ...{
            options: {
              outputStyle: 'compressed',
              ...commonSassPluginOptions.options
            }
          }
        }),
        typescript(typescriptPluginOptions)
      ]
    }
  ];
  return config;
}
