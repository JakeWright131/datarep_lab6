const express = require('express');
const app = express();
const port = 3000
const path = require('path');
const bodyParser = require("body-parser");

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())

app.get('/', (req, res) => {
    //sends string out to the server and displays on the browser
    res.send('Welcome to Data Representation & Querying')
})
//created new url that displays hello and and their name to the webpage
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

//sends json data to the webpage
app.get('/api/movies', (req, res) => {
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
    ]


    res.json({movies:mymovies})
});

//returns html file to the browser
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

//returns first name and last name to the browser
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

//url doesnt change using post method
app.post('/name', (req,res)=>{
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})