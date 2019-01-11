const HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    js: './src/index.js',
  },
  output: {
    filename: '[name].[chunkhas].js'
  },
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.tpl.html$/,
        use: 'es6-template-string'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browser: ['last 2 versions'],
              },
              sourceMap: true,
              plugins: () => [autoprefixer],
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },

        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2|mp4|mp3|txt|xml|pdf)/i,
        use: 'file-loader?name=assets/[name].[ext]'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist/**/*.*']),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhas].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      chunks: ['js'],
      minify: {
        html5: true,
        collapseWhitespace: true,
        caseSensitive: true,
        removeComments: true
      }
    })
  ]
}
