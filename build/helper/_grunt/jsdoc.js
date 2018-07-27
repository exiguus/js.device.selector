module.exports = {
  dist: {
    src: ['dist/*.js'],
    options: {
      destination: '<%= paths.jsdocs %>',
      readme: 'README.md',
    },
  },
};
