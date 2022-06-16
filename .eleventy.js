module.exports = function (eleventyConfig) {
  // Watch scss fuiles for changes
  eleventyConfig.addWatchTarget("_includes/assets/sass");
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy({ "_includes/assets/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "_includes/assets/images": "images" });
};
