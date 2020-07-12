const CleanCSS = require("clean-css");

module.exports = function (config) {
  /* Passthroughs */
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");

  /* cssmin filter */
  config.addFilter("cssmin", function (code) {
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
