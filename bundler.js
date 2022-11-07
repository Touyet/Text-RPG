"use strict";
exports.__esModule = true;
var browserify = require("browserify");
var fs = require("fs");
var path = require("path");
var viewDir = "dist/client/pages/";
var jsDir = viewDir + "../";
var outputDirRoot = "bundled";
try {
    var files = fs.readdirSync(viewDir);
    var bundledFiles = [];
    var outputDir = path.join(jsDir, outputDirRoot);
    if (!fs.existsSync(outputDir))
        fs.mkdirSync(outputDir);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        if (path.extname(file).toLowerCase() != ".ejs")
            continue;
        var basename = path.basename(file, ".ejs");
        var jsFile = "".concat(path.join(jsDir, basename), ".js");
        if (!fs.existsSync(jsFile))
            continue;
        var bundledFile = "".concat(path.join(outputDir, basename), ".js");
        var bundled = fs.createWriteStream(bundledFile);
        browserify(jsFile, { debug: true }).bundle().pipe(bundled);
        bundledFiles.push(bundledFile);
    }
}
catch (error) {
    console.log(error);
}
