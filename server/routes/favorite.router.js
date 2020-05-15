const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// router.post('/', (req, res) => {
//     console.log(' in /search GET');
//     let searchTerm = req.body.search; 
//     axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTerm}&limit=9&rating=pg&lang=en`)
//     .then(response => {
//         res.send(response.data); 
//     }).catch (error => {
//         console.log('Error adding giphy url', error)
//     })
// });

// add a new favorite 
router.post('/', (req, res) => {
  console.log('in favorite POST', req.body.favorite.url, req.body.favorite.favorite); 
  const values = [req.body.favorite.url, req.body.favorite.favorite]
  let queryString =`INSERT INTO "favorites" ("url", "category_id") VALUES ($1, $2);`;
  pool.query(queryString, values)
  .then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
});// end POST

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
