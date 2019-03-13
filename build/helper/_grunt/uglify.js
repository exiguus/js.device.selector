module.exports = {
  options: {
    compress: {
      global_defs: {
        'DEBUG': false,
      },
      dead_code: true,
    },
    sourceMap: false,
  },
  dist: {
    files: [
      {
        expand: true,
        cwd: '<%= paths.dev %>/js/',
        src: 'jquery.<%= name.plugin %>.js',
        dest: '<%= paths.dist %>',
        rename: function(dst, src) {
          // To keep the source js files and make new files as `*.min.js`:
          return dst + '/' + src.replace('.js', '.min.js');
        },
      },
      {
        expand: true,
        cwd: '<%= paths.dist %>/js/',
        src: '<%= name.plugin %>.min.js',
        dest: '<%= paths.dist %>',
      },
    ],
  },
};
