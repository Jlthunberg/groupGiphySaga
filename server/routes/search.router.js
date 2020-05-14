const express = require('express');
const pool = require('../modules/pool');
const dotenv = require('dotenv');
dotenv.config();
const axios = require ('axios'); 
// const myKey= process.env.GIPHY_API_KEY;

//test if giphy available
console.log('Giphy_API_KEY', process.env.GIPHY_API_KEY)


const router = express.Router();

router.post('/', (req, res) => {
    console.log(' in /search GET');
    let searchTerm = req.body.search; 
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=9&rating=pg&lang=en`)
    .then(response => {
        res.send(response.data); 
    }).catch (error => {
        console.log('Error adding giphy url', error)
    })
});

// http://api.giphy.com/v1/gifs/search?api_key='+process.env.GIPHY_API_KEY+'&q=cheeseburgers&limit=9&rating=pg&lang=en

// axios.get('http://api.giphy.com/v1/gifs/search?api_key=' + 'process.env.GIPHY_API_KEY' + '&q=' + searchTerm + '&limit=9&rating=pg&lang=en')
//     .then((response) => {
//         res.send(response.data); 
//     })

module.exports = router;