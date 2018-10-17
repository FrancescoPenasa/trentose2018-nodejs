/*
* app.js
* Main entry point of the forms project
* This script shows how to create a server
* that can handle request from web forms
*/
var express = require('express');
var bodyParser = require('body-parser'); //#added
var app  = express();

// Loading utils to inspect the content of js objects
var util = require('util');
var port = 3000;


app.use('/', express.static('public'));
app.use(bodyParser.urlencoded()); //#added
bodyParser.text();

var people = [{ name : "Mario Ferrari", email : "fake@news.it"}, 
              { name : "Carlo Smith",   email : "youreach@menot.it"},
              { name : "Fabio Ferrari", email : "email@email.com"}];

function look_name (person){
  for (var i = 0; i<people.length; i++){
    if (person == people[i].name){
      return i;
    }
  }
  return -1;
}
function look_email (email){
  for (var i = 0; i<people.length; i++){
    if (email == people[i].email){
      return i;
    }
  }
  return -1;
}

// Handling GET requests
app.get('/search', function(req, res){

  console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
  console.log(util.inspect(req.url, {showHidden: false, depth: null}))
  console.log(util.inspect(req.query, {showHidden: false, depth: null}))

  /*****EX2*****/
  var word = req.query;
  var index = look_name(word.terms);
  if (index != -1)
    res.status(200).send('Item found!\n'+ people[index].name + ' : ' + people[index].email);
  else
    res.status(200).send('No items found!');
  /*******/

});

app.post('/subscribe', function(req, res){

  console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
  console.log("\n"+util.inspect(req.params, {showHidden: false, depth: null}))

  /*** EX 1 *****/
  console.log("\n"+req.body.name+"\n"+req.body.email);//#added
  var account = req.body;
  if (look_email(account.email) == -1){
    people = people.concat(account);
    res.status(201).send('You are now subscribed!');
    console.log(people);
  }
  else
    res.status(201).send('You are already subscribed!');
  /*******/
});

app.listen(port, function() {
  console.log('Server running on port ', port);
});
