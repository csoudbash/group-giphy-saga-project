const express = require('express');
const pool = require('../modules/pool');

// .env require
require('dotenv').config();

const router = express.Router();

// view 2
// return all favorite images
app.get('/api/favorite', (req, res) => {
  axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=$anime&rating=pg13`)
      .then (response => res.send(response.data))
      .catch(error => {
          res.sendStatus(500);
          console.log('error is...', error)})
      ;
});

// view 1
// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

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
