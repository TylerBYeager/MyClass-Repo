const express = require('express');
const pulls = require('./db/repos.json');
const axios = require("axios");

const app = express();

app.get('/', (req, res) => {
  res.send(
    'Use the API endpoint at <a href="http://localhost:3001/api">localhost:3001/api</a>'
  );
});

// Endpoint to return our own locally stored data
app.get('/api', (req, res) => res.json(pulls));


app.get('api/organization/:org', (req, res) => {
  //https://api.github.com/orgs/nodejs/repos
  axios.get(`https://api.github.com/orgs/${req.params.org}/repos`).then(function(data){
    res.json(data)
  });
  
});

app.get('/api/user/:userName/repository/', (req, res) =>  {
  https://api.github.com/users/octocat/repos
  axios.get(`https://api.github.com/users/${req.params.userName}/repos`).then(function(data){
    res.json(data)
  });
});;

app.listen(3001, () => console.log('Express Server on port 3001!'));
