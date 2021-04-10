const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginSass, {
    input: ['./_sass/**/*.{scss,sass}', '!node_modules/**'],
    outputDir: "assets",
    remap: true
  });

  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      // input: 'site',
      // output: 'public',
    },
  };
};
