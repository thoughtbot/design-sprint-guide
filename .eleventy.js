const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Plugin that renders other languages inside templates
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  // Watch scss files for changes
  eleventyConfig.addWatchTarget("_includes/assets/sass");
  // Copy the asset folders to the output
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy({ "_includes/assets/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "_includes/assets/images": "images" });
  // Phases collection: Sorted by "number" key in frontmatter
  eleventyConfig.addCollection("phase", function(collectionApi) {
    return collectionApi.getFilteredByTag("phase").sort(function(a, b) {
      return a.data.number - b.data.number
    });
  });
};
