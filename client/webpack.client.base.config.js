/* eslint comma-dangle: ['error',
 {'functions': 'never', 'arrays': 'only-multiline', 'objects': 'only-multiline'} ] */

// Common client-side webpack configuration used by webpack.hot.config and webpack.rails.config.
const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: {

    // See use of 'vendor' in the CommonsChunkPlugin inclusion below.
    vendor: [
      'jquery',
      'turbolinks',

      // Below libraries are listed as entry points to be sure they get included in the
      // vendor-bundle.js. Note, if we added some library here, but don't use it in the
      // app-bundle.js, then we just wasted a bunch of space.,
      'react-dom',
      'react-on-rails'
    ],

    // This will contain the app entry points defined by webpack.hot.config and webpack.rails.config
    app: [
      './app/bundles/HelloWorld/startup/clientRegistration'
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      libs: path.join(process.cwd(), 'app', 'libs'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      },
      TRACE_TURBOLINKS: devBuild
    }),

    // https://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk
    new webpack.optimize.CommonsChunkPlugin({

      // This name 'vendor' ties into the entry definition
      name: 'vendor',

      // We don't want the default vendor.js name
      filename: 'vendor-bundle.js',

      // Passing Infinity just creates the commons chunk, but moves no modules into it.
      // In other words, we only put what's in the vendor entry definition in vendor-bundle.js
      minChunks: Infinity
    })
  ],

  module: {
    loaders: [
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
      { test: /\.(jpe?g|png|gif|svg|ico)$/, loader: 'url?limit=10000' },

      { test: require.resolve('jquery'), loader: 'expose?jQuery' },
      { test: require.resolve('jquery'), loader: 'expose?$' },
      { test: require.resolve('jquery-ujs'), loader: 'imports?jQuery=jquery' },
      { test: require.resolve('turbolinks'), loader: 'imports?this=>window' }
    ]
  },

  // Place here all postCSS plugins here, so postcss-loader will apply them
  postcss: [autoprefixer]
};
