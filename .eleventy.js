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
  // Generate a simple breadcrumb
  // Usage: {% breacrumbs page.url %}
  eleventyConfig.addShortcode("breadcrumbs", function(url) {
    const parts = url.split("/").filter((part) => { return part.length })
    const links = ['<a href="/">Home</a>']
    parts.forEach((route, i) => {
      const title = route.charAt(0).toUpperCase() + route.substr(1);
      if (i > 0) {
        return links.push(`<a href="/${[parts[i - 1], route].join('/')}">${title}</a>`);
      }
      links.push(`<a href="/${route}">${title}</a>`);
    })

    return links.join("<span aria-hidden='true'> / </span>");
  })
};
