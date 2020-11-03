import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import progress from 'rollup-plugin-progress';
import clear from 'rollup-plugin-clear';

const path = require('path');
const basePath = path.resolve(__dirname, './');
const distPath = path.resolve(basePath, 'dist');

export default {
  input: './src/index.js',
  output: {
    dir: distPath,
    format: 'cjs',
    chunkFileNames: 'index.js',
  },
  plugins: [
    clear(['index.js']),
    babel({ exclude: 'node_modules' }),
    process.env.ENV === 'production' ? uglify() : undefined,
    progress(),
    clear({
      targets: [distPath],
    }),
  ],
}