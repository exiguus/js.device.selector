module.exports = {
  dist: {
    src: ['dist/*.js'],
    options: {
      destination: '<%= paths.docs %>',
      readme: 'README.md',
    },
  },
};
