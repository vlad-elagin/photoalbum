import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const { NODE_ENV } = process.env;

export default {
  input: "./client/src/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "./build/public/client.js",
  },
  plugins: [
    svelte({
      dev: NODE_ENV === "development",
      css: css => css.write("../build/public/styles.css"),
    }),
    resolve(),
    commonjs(),
    serve({
      contentBase: ["./build/public"],
      port: 3002,
    }),
    livereload("./build/public"),
  ],
};
