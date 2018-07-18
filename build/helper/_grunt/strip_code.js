module.exports = {
  options: {
    start_comment: '/* start: test-code */',
    end_comment: '/* end: test-code */',
  },
  dist: {
    src: ['<%= paths.dist %>/*.js'],
  },
};
