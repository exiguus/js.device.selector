const webpack = require('webpack');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

module.exports = (config) => {
  config.set({
    plugins: [
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-webpack',
    ],
    frameworks: ['jasmine'],
    files: [{
      pattern: '../src/js/*.class.test.js',
      watched: false,
    }],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      '../src/js/*.class.test.js': ['webpack'],
    },
    coverageReporter: {
      dir: '../coverage/es6',
      reporters: [
        {type: 'html', subdir: 'report-html'},
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'cobertura', subdir: '.', file: 'cobertura.txt'},
        {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
        {type: 'teamcity', subdir: '.', file: 'teamcity.txt'},
        {type: 'text', subdir: '.', file: 'text.txt'},
        {type: 'text-summary', subdir: '.', file: 'text-summary.txt'},
      ],
    },
    webpack: {
      mode: 'production',
      devtool: '#inline-source-map',
      module: {
        rules: [
          // BABEL
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: 'istanbul-instrumenter-loader',
                options: {
                    esModules: true,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.DefinePlugin({
          IS_DEV: IS_DEV,
        }),
      ],
    },
  });
};
