var path = require( 'path' );

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './public/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve( __dirname, './public/dist' )
  }
};