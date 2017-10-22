var baseConfig = require('./webpack.config.base')
var merge = require('webpack-merge');
var paths = require('./paths')

module.exports = merge.smart(baseConfig, {
  entry: [
    // Finally, this is your app's code:
    paths.appIndexJs
    // We include the app code last so that if there is a runtime error during
    // initialization, it doesn't blow up the WebpackDevServer client, and
    // changing JS code would still trigger a refresh.
  ],
  output: {
    // This does not produce a real file. It's just the virtual path that is
    // served by WebpackDevServer in development. This is the JS bundle
    // containing code from all our entry points, and the Webpack runtime.
    filename: 'static/js/web.bundle.js',
  },
  resolve:{
    extensions: ['.web.js','.js', '.json', '.jsx', '']
  }

});