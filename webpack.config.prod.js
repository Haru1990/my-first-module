const path = require('path');
// const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new CopyPlugin([
    //   { from: 'index.d.ts', to: 'bundle.d.ts' },
    // ]),
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: 'babel-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   // you can specify a publicPath here
            //   // by default it use publicPath in webpackOptions.output
            //   publicPath: '../'
            // }
          },
          'css-loader'
        ]
      },
    ]
  },
  // externals: [nodeExternals()],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin(),
    ]
  },
};
