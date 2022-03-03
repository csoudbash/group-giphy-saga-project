const express = require('express');
const { default: App } = require('../../src/components/App/App');
const pool = require('../modules/pool');



const router = express.Router();

// view 2
// return all favorite images

// data-base
router.get('/giphy')





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
