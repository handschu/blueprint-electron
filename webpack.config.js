const webpack = require('webpack');
const path = require('path');

module.exports = {
  // set this to your entry point
  entry: "./src/app/product-a/product-a.module.ts",

  // change this to your output path
  output: {
    path: path.resolve(__dirname,'/dist/js/'),
    filename: "product-a-0.1.0.js",
    publicPath: "/assets/"
  },

  // create a map file for debugging
  devtool: 'source-map',

  // configure the loaders
  module: {
    loaders: [

        {
            test: /src.*\.js$/,
            loader: 'ng-annotate-loader'
        }
    ]
  },
    rules: [
        {
            test: /\.ts$/,
            use: [
                'awesome-typescript-loader',
                {
                    loader: 'ng-router-loader',
                    options: {
                        /* ng-router-loader options */
                    }
                }
            ]
        }
    ],

    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core/, path.join(__dirname, 'app'), {}),
        // ...
    ],
  ///////////  uncomment this for production ////////////////
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {'NODE_ENV': JSON.stringify('production')}
  //   })
  // ],////////////////////////////////////////////////////////

  watch: false // change this to true to keep webpack running
};

