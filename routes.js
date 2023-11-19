const router = require('express').Router();
const Auction = require('../models/Auction');

router.route('/').get((req, res) => {
  Auction.find()
    .then((auctions) => res.json(auctions))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { title, description, currentPrice, endDate } = req.body;

  const newAuction = new Auction({
    title,
    description,
    currentPrice,
    endDate,
  });

  newAuction
    .save()
    .then(() => res.json('Auction added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
