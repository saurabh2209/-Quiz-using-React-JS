module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname+'/public',
    filename: 'bundle.js'
  },
  resolve: {
      root:__dirname,
      alias:{
         
         Quiz:'public/components/Quiz.jsx', 
        Choice:'public/components/Choice.jsx',
        Score:'public/components/Score.jsx',
        Main: 'public/components/Main.jsx'
      },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
