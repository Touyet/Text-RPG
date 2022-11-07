import * as browserify from "browserify";
import * as fs from "fs";
import * as path from "path";

let viewDir = "dist/client/pages/";
let jsDir = viewDir + "../";
let outputDirRoot = "bundled";
try {
    let files = fs.readdirSync(viewDir);
    let bundledFiles: string[] = [];

    const outputDir = path.join(jsDir, outputDirRoot);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
    for (const file of files) {
        if (path.extname(file).toLowerCase() != ".ejs") continue;
        let basename = path.basename(file, ".ejs");
        const jsFile = `${path.join(jsDir, basename)}.js`;
        if (!fs.existsSync(jsFile)) continue;
        const bundledFile = `${path.join(outputDir, basename)}.js`;
        let bundled = fs.createWriteStream(bundledFile);
        browserify(jsFile, { debug: true }).bundle().pipe(bundled);
        bundledFiles.push(bundledFile);
    }
} catch (error) {
    console.log(error);
}

