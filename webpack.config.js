const path = require('path')

module.export = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bungle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
