"use strict";
var typescript_logging_1 = require("typescript-logging");
// Optionally change default settings, in this example set default logging to Info.
// Without changing configuration, categories will log to Error.
typescript_logging_1.CategoryServiceFactory.setDefaultConfiguration(new typescript_logging_1.CategoryDefaultConfiguration(typescript_logging_1.LogLevel.Info));
// Create categories, they will autoregister themselves.
// This creates one root logger, with 1 child sub category.
exports.catRoot = new typescript_logging_1.Category("service");
exports.catProd = new typescript_logging_1.Category("product", exports.catRoot);
// Get a logger, this can be retrieved for root categories only (in the example above, the "service" category).
exports.log = typescript_logging_1.CategoryServiceFactory.getLogger(exports.catRoot);
//# sourceMappingURL=Config.js.map