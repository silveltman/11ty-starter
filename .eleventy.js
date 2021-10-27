const pluginSass = require("eleventy-plugin-sass");
const Image = require("@11ty/eleventy-img");

// Function for eleventy-img plugin (docs: https://www.11ty.dev/docs/plugins/image/)
// Can be used in Liquid with: {% image "[path]", "[lass]", "[alt]", "[sizes]",  %}
async function imageShortcode(src, className, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["webp", "jpeg", "svg"],
    // url_path: "./assets/img/",
    outputDir: "./_site/img/",
    svgShortCircuit: true,
  });

  let imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // Throws an error when alt is missing (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {

  eleventyConfig.addLiquidShortcode("image", imageShortcode);

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
    },
  };
};
