const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist', 'assets')
  },

  module: {
    rules: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.css$/, use: ['style-loader','css-loader'] },
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader?name=[name]-[sha512:hash:base64:7].[ext]&publicPath=assets/']
      }, {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.ProvidePlugin({
               $: "jquery",
               jQuery: "jquery"
           })
  ],

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist')
  }

}