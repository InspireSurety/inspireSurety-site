const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  // Pass through assets
  eleventyConfig.addPassthroughCopy("assets");

  // Configure markdown processor
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true
  });
  
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
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