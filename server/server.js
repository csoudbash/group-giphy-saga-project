const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const router = express.Router();

// .env require
require('dotenv').config();

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// req.params value for input
// app.get('/giphy', (req, res) => {
//   axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=pokemon&rating=pg`)
//       .then((response) => {
//           res.send(response.data);
//       })
//       .catch((error) => {
//           console.log('error is', error);
//           res.sendStatus(500);
//       })
// })

app.get('/giphy/:search', (req, res) => {

  console.log('req is', req.params.search);

  axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.search}&rating=pg13`) // ${req.params.id}
      .then (response => res.send(response.data))
      .catch(error => {
          res.sendStatus(500);
          console.log('error is...', error)})
      ;
});

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes

// post for favorites
app.use('/api/favorite', favoriteRouter);
// put for category
app.use('/api/category', categoryRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = router;


