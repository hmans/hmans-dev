const CleanCSS = require("clean-css");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  /* Passthroughs */
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  /* Markdown */
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
  );

  /* cssmin filter */
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  /* Basic configuration */
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
