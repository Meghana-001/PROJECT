const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/auction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Routes setup
const auctionRoutes = require('./routes/auctionRoutes');
app.use('/api/auctions', auctionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
