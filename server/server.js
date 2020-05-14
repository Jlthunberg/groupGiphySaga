const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require( 'dotenv' );
dotenv.config();

// test to see if GIPHY_API_KEY is available through dotenv
console.log( 'GIPHY_API_KEY:', process.env.GIPHY_API_KEY );

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

/* Routes */
app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
