module.exports = function (config) {
  /* Passthroughs */
  config.addPassthroughCopy("src/css");
  config.addPassthroughCopy("src/images");

  /* Basic configuration */
  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
