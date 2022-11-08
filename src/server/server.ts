import express from "express";
import path from "path";
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "../client"));
app.use('/js', express.static(path.join(__dirname, "../client/bundled"), { extensions: ["js"] }));
app.use('/css', express.static(path.join(__dirname, "../client/styles")));
app.get('/favicon.ico', (req, res) => { });
app.get('/', (req, res) => {
    res.render("pages/index", { script: ["index"], css: ["index"] });

});
app.get('/*', (req, res) => {
    res.render("pages" + req.originalUrl, { script: [req.originalUrl], css: [req.originalUrl] });
});


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});