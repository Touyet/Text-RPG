"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, "../client"));
app.use('/static', express_1.default.static(path_1.default.join(__dirname, "../client/bundled"), { extensions: ["js"] }));
app.use('/css', express_1.default.static(path_1.default.join(__dirname, "../client/styles")));
app.get('/favicon.ico', (req, res) => { });
app.get('/', (req, res) => {
    res.render("pages/index");
});
app.get('/*', (req, res) => {
    res.render("pages" + req.originalUrl);
});
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
