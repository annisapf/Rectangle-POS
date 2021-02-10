const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CashierSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mid: { 
      type: String, 
      required: true
    },
  created: { 
      type: Date, 
      default: Date.now
    }
});

const Cashier = mongoose.model("cashiers", CashierSchema);

module.exports = Cashier;