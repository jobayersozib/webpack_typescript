const path = require('path');

module.exports = {
  entry: './test.ts',
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'typeScript.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
     { test: /\.ts$/, use: 'ts-loader' }
    ]
  }
};