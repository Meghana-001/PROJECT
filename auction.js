const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const auctionSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
