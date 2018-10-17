/**
 * Exercises
    Finish implementing the Products API backend
    Implement the web API for managing student registrations as specified here: https://www.studytonight.com/rest-web-service/designing-the-rest-api
 */

/**
 * app.js
 * Implementation of the Product API
 */

var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/', express.static('public'));

// starting the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Products server listening at http://localhost:' + port);
});

// list of products we'll keep in memory
var products = [{
  id : 1,
  name : "iPhone XL",
  description : "Extra large"
},{
  id : 2,
  name : "iPhone XS",
  description : "Extra small"
}];



/**
 * SEARCH
 */
app.get('/api/products/', function (req, res) {
  res.send(products);
});

/**
 * CREATE
 */
// adding a new course to the collection
app.post('/api/products', function (req, res) {
  var product = req.body;
  product.id = product.length + 1;

  console.log(req.query);
  //product.push(name: req.body);

  res.location("/api/products/" + product.id);
  res.status(204);
  res.send();
});

/**
 * READ
 * Getting an individual product
 */
app.get('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 1) {
    res.status(404).send();
    return;
  }

  res.send(products[id - 1]);
});


/**
 * UPDATE TODO PUT
 */

 app.put('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 1) {
    res.status(404).send();
    return;
  }

  products[id - 1].name = req.query;
  //res.send(products);
});


/**
 * DELETE TODO DELETE
 */
app.delete('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 1) {
    res.status(404).send();
    return;
  }
  delete products[id-1];
  //res.send(products);
});