module.exports = {
  dist: {
    src: ['src/js/*.js'],
    options: {
      destination: '<%= paths.jsdocs %>',
      readme: 'README.md',
    },
  },
};
