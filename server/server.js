const express = require('express');
const bodyParser = require('body-parser');

// .env require
require('dotenv').config();

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// req.params value for input
app.get('/giphy', (req, res) => {
  axios.get(`https://api.giphy.com/v1/stickers/search?api_key=${process.env.GIPHY_API_KEY}&q=anime&rating=pg13`)
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


