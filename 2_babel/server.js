import express from 'express';
import path from 'path';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import config from './webpack.config';

const app = express();
const compiler = webpack(config);
const port = 3001;

app.use(middleware(compiler, {}), () => {});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
 });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})