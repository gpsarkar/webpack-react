import express from 'express';
import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackHotMiddleware from "webpack-hot-middleware";
import config from './webpack.config';

const app = express();
const compiler = webpack(config);
const port = 3001;

app.use(middleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})


// webpack-dev-server - hot load
// webpack-dev-middleware - it doesnt do hot load
// webpack-hot-middleware - 
