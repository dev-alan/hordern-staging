const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractCSS = new ExtractTextPlugin('styles_1.css');
// const extractLESS = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([ 
          // { loader: 'style-loader' },
          { loader: 'css-loader' }
        ])
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          limit: 50000,
          name: 'fonts/[name].[ext]'
        },
      },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[ext]'
            } 
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
    // extractCSS,
    // extractLESS
  ]
};