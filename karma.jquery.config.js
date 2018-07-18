module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-qunit',
      'karma-jquery',
    ],
    frameworks: ['qunit', 'jquery-3.1.1'],
    files: [
      'src/js/jquery.device.selector.js',
      'src/js/jquery.device.selector.test.js',
    ],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/js/jquery.device.selector.js': ['coverage'],
    },
    coverageReporter: {
      dir: 'coverage/jquery',
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
  });
};
