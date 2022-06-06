module.exports = function (eleventyConfig) {
  // Watch scss fuiles for changes
  eleventyConfig.addWatchTarget("./assets/sass");
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy("./css");
}
