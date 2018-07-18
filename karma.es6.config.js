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
      pattern: 'src/js/*.class.test.js',
      watched: false,
    }, {
      pattern: 'src/js/*.module.test.js',
      watched: false,
    }],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/js/*.js': ['webpack', 'coverage'],
    },
    coverageReporter: {
      dir: 'coverage/es6',
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
      module: {
        rules: [
          // BABEL
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            options: {
              compact: true,
            },
          },
        ],
      },
    },
  });
};
