import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";
import url from "rollup-plugin-url";

import { DEFAULT_EXTENSIONS } from "@babel/core";
import ttypescript from "ttypescript";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      name: "toasty",
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    typescript({
      typescript: ttypescript,
      tsconfig: "./tsconfig.json",
      include: ["*.ts+(|x)", "**/*.ts+(|x)"],
      exclude: [
        "*.d.ts",
        "**/*.d.ts",
        "node_modules/**",
        ".vscode",
        "scripts",
        "dist",
      ],
      tsconfigOverride: {
        compilerOptions: { module: "es2015" },
        exclude: [],
      },
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [{ transform: "@zerollup/ts-transform-paths" }],
        },
      },
    }),
    json(),
    babel({
      exclude: ["node_modules/**", "scripts", "dist", "*.d.ts", "**/*.d.ts"],
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
      plugins: ["babel-plugin-transform-class-properties"],
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      babelHelpers: "bundled",
    }),
    url({
      include: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
      limit: Infinity,
    }),
    postcss({
      extensions: [".css"],
    }),
  ],
  external: ["workerize-loader"],
};
