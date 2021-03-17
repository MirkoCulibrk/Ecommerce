const currentTask = process.env.npm_lifecycle_event;
const path = require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const config={
    entry: path.resolve(__dirname) + '/src/app.js',
    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins:[new HtmlWebpackPlugin({ template: "./src/index.html" })],
    module:{
      rules:[
        {
          test:/\.js$/,
          exclude:/(node_modules)/,
          use:{
            loader:"babel-loader",
            options:{
              presets:[["@babel/preset-env", { "useBuiltIns": "usage", "corejs": 3, "targets": "defaults" }],'@babel/preset-react']
            }
          }
        },
        {
          test:/\.(scss)$/i,
          use: [{
            loader: 'style-loader', 
          }, {
            loader: 'css-loader', 
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ]
    },
    devServer: {
      port: 8080,
      contentBase: path.resolve(__dirname, 'dist'),
      hot: true
    }
}
//check if npm is production
if(currentTask=="build"){
  config.module.rules[1].use[0]=MiniCssExtractPlugin.loader;
  config.plugins.push(new MiniCssExtractPlugin({
    filename:'main.[hash].css',
  }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  )
}
module.exports = config;
