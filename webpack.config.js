const currentTask = process.env.npm_lifecycle_event;
const path = require('path')
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const config={
    entry: path.resolve(__dirname) + '/src/App.js',
    output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve:{
      alias: {
        components:path.resolve(__dirname,'src/components'),
        styleutils:path.resolve(__dirname,'src/styleutils'),
        img:path.resolve(__dirname,'src/img'),
        ui:path.resolve(__dirname,'src/ui')
      }
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
          test:/\.(scss|css)$/i,
          use: [{
            loader: 'style-loader', 
          }, {
            loader: 'css-loader', 
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: ['url-loader?limit=100000'] },
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
