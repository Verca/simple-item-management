import express from 'express';
import { createServer } from 'http';
import { getListOfItems, saveItem, deleteItem } from './modules/itemDB';
import path from 'path';
import bodyParser from 'body-parser';

const WWW_ROOT = __dirname;
const INDEX_HTML = "index.html";
const PORT = 3000;

const app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

const server = createServer(app);

require('./modules/dbInit')(app);

// index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(WWW_ROOT, '..', INDEX_HTML));
});

app.get('/getItems/:timestamp', (req, res) => 
  getListOfItems(req.body)
    .then(
      data => { res.jsonp(data); }, 
      error => {
       console.log('Error: Failed to get list of items: ' + error);
       res.status(500).send('Failed to get list of items.');
     })
);

app.post('/item', (req, res) =>
  saveItem(req.body)
    .then(
      data => { res.jsonp(data); }, 
      error => {
        console.log('Error: Failed to create a new item: ' + error);
        res.status(500).send('Failed to save an item');
      })
);

app.delete('/deleteItem/:id', (req, res) =>
  deleteItem(req.params.id)
    .then(
      data => { res.jsonp(data); },
      error => {
        console.log('Error: Failed to create a new item: ' + error);
        res.status(500).send('Failed to save an item');
      })
);

// static files
app.use(express.static(path.join(WWW_ROOT, '..')));

server.listen(PORT, () => {
  console.log(`+++ Server running on port ${PORT}`);
});
