module.exports = function(eleventyConfig) {

  // Pass through assets
  eleventyConfig.addPassthroughCopy("assets");

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};