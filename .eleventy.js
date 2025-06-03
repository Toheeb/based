
module.exports = function (config) {
  config.addPassthroughCopy("**/node_modules/@toheeb/base/base.css");
  config.addPassthroughCopy("**/node_modules/@toheeb/base/base-settings.js");
  config.addPassthroughCopy("**/*.woff");
  config.addPassthroughCopy("**/*.woff2");
};
