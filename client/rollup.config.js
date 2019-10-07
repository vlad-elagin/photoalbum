import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import autoPreprocess from "svelte-preprocess";

const { NODE_ENV } = process.env;

export default {
  input: "./client/src/index.js",
  output: {
    sourcemap: NODE_ENV === "development",
    format: "iife",
    name: "app",
    file: "./build/public/client.js",
  },
  plugins: [
    svelte({
      dev: NODE_ENV === "development",
      preprocess: autoPreprocess(),
      css: css => css.write("./build/public/styles/styles.css"),
    }),
    resolve(),
    commonjs(),
  ],
};
