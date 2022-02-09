import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import { terser } from "rollup-plugin-terser";
import brotli from "rollup-plugin-brotli";


const defaultGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  PCore: 'PCore'
};

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name:'myCosmos',
    sourcemap: false,
    globals: (() => {
      return defaultGlobals;
    })()
  },
  external : ['react', 'react-dom', 'PCore'],
  plugins: [
    image(),
    json(),
    postcss({
      extensions: [".css"],
    }),
    nodeResolve({
      extensions: [".js"]
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' ),
      preventAssignment : true
    }),
    babel({
      presets: ["@babel/preset-react"],
      babelHelpers : 'bundled'
    }),
    commonjs(),
    terser(),
    brotli({
      test: /\.(js|css|html|txt|xml|json|svg|ico|ttf|otf|eot)$/
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "dist" }),
  ]
};
