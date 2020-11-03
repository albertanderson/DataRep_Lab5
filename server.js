const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); // figure out where file is
const bodyParser =require("body-parser");

  //configuration steps
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))  // parse the body http request
                                                 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying') //listen for get request from local host
})

app.get('/Hello/:name', (req, res)=>{   // listing for urls 
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/api/movies', (req, res)=>{  //movies method
    const mymovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];   
        
    res.json({movies:mymovies}) //send back json data
});

app.get('/test', (req, res)=>{
        res.sendFile(__dirname + '/index.html');    //return file
})

app.get('/name', (req, res)=>{                      // req-request  res-response
    res.send('Hello ' + req.query.fname + ' '+ req.query.lname);
})

app.post('/name', (req, res)=>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname); // sending down to be displayed on the browser
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})