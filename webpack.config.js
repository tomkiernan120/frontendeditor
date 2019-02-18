var path = require( 'path' );

const isTravisCI = () => 'TRAVIS' in process.env && 'CI' in process.env;

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  entry: './public/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, './public/dist' )
  }
};