const path = require('path')

//with this config we tell webpack to look into client.jsx and server.jsx, resolve all files with js and jsx extension, apply babel-loader to them and output final bundles into static directory that ill be also our public path

module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: './client.js',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'client.js',
      publicPath: '/static/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: './serverReact.js',
    output: {
      path: path.join(__dirname, 'static'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/static/'
    },
    //This option controls if and how source maps are generated
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  }
]
