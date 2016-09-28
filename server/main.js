import express from 'express';
import { createServer } from 'http';
import logger from 'morgan';

const WWW_ROOT =__dirname;
const INDEX_HTML = "index.html";
const PORT = 3000;

const app = express();
const server = createServer(app);
app.use(logger('dev'));

// index.html
app.get('/', function(req, res) {
  res.render(WWW_ROOT, INDEX_HTML);
});

// static files
app.use(express.static("../" + WWW_ROOT));

server.listen(PORT, () => {
  console.log(`+++ Server running on port ${PORT}`);
});