module.exports = {
  dist: {
    cwd: '<%= paths.dev %>/js/',
    dest: '<%= paths.dist %>/',
    expand: true,
    src: [
      'jquery.<%= name.plugin %>.js',
      '<%= name.plugin %>.module.js',
      '<%= name.plugin %>.class.js',
    ],
  },
  coverageEs6: {
    cwd: '<%= paths.coverage %>/es6/report-html/',
    dest: '<%= paths.docs %>/<%= paths.coverage %>/es6/',
    expand: true,
    src: [
      '**',
    ],
  },
  coverageJquery: {
    cwd: '<%= paths.coverage %>/jquery/report-html/',
    dest: '<%= paths.docs %>/<%= paths.coverage %>/jquery/',
    expand: true,
    src: [
      '**',
    ],
  },
  icovEs6: {
    cwd: '<%= paths.coverage %>/es6/report-Icov/',
    dest: '<%= paths.coverage %>/es6/',
    expand: true,
    src: [
      'Icov.info',
    ],
  },
  icovJquery: {
    cwd: '<%= paths.coverage %>/jquery/report-Icov/',
    dest: '<%= paths.coverage %>/jquery/',
    expand: true,
    src: [
      'Icov.info',
    ],
  },
  static: {
    cwd: '<%= paths.static %>/',
    dest: '<%= paths.docs %>/<%= paths.static %>/',
    expand: true,
    src: [
      '**',
    ],
  },
};
