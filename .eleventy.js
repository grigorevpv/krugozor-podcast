const CleanCSS = require("clean-css");
const minify = require('html-minifier').minify;

module.exports = function(eleventyConfig) { 

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("htmlmin", function(code) {
    return minify(code, {
      trimCustomFragments: true,
      removeComments: true,
      collapseWhitespace: true,
    });
  });

  eleventyConfig.addFilter("jsmin", function(code) {
    return minify(code, {
      trimCustomFragments: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
    });
  });

  return {
    dir: { input: 'src', output: 'dist', includes: '_includes' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'js', 'html', 'yml', 'jpg'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};