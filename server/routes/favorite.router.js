const express = require('express');
// const { default: App } = require('../../src/components/App/App');
const pool = require('../modules/pool');



const router = express.Router();

// view 2
// return all favorite images

// data-base
// router.get('/giphy', (req, res) => {
//   // req.body should contain a category_id to add to this favorite image
//   res.sendStatus(200);
// });




// view 2
// add a new favorite
router.post('/', (req, res) => {
  const newImage = req.body;
  const queryText = `
   INSERT INTO "favorites' ("url") VALUES ($1);`;

  const queryValues =[newImage.url];

  pool.query(queryText, queryValues)
  .then (() => {res.sendStatus(200);})
  .catch((error) => {
    console.log('Error posting image', error);
    res.sendStatus(418);
  })
});

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "favorites";'
  pool.query(queryText)
  .then((result) => { res.send(result.rows);})
  .catch((error) => {
    console.log('Error getting images', error);
    res.sendStatus(500);    
  })
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
