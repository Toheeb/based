
module.exports = function (config) {
  config.addPassthroughCopy("**/*.woff");
  config.addPassthroughCopy("**/*.woff2");
  config.addPassthroughCopy("**/images/**");
};
