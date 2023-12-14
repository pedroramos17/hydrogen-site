module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/img")
    eleventyConfig.addPassthroughCopy("./src/style.css")
    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
        }
    }
}