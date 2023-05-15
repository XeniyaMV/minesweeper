const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // devtool: false,
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: {
            removeComments: false,
            collapseWhitespace: false,
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates 'style' nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/styles/vars.scss',
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
  }
}