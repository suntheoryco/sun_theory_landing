module.exports = function (eleventyConfig) {
	// Output directory: _site
	eleventyConfig.addPassthroughCopy("img/");
	eleventyConfig.addPassthroughCopy("css/");
	return {
		dir: {
			output: "docs"
		}
	};
};
