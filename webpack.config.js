const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'web/api-client.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      libraryExport: 'default',
      library: 'ApiClient'
    },
  },
  {
    mode: 'development',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'node/api-client.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      libraryExport: 'default',
      library: 'ApiClient'
    },
  },
  {
    mode: 'development',
    entry: './src/index.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, '..','ember-example', 'vendor'),
      filename: 'api-client.js',
      libraryTarget: 'umd',
      globalObject: 'this',
      libraryExport: 'default',
      library: 'ApiClient'
    },
  }
]