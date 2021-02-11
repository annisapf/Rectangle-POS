const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ShoppingSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    base_price: {
      type: Number,
      required: true
    },
    sell_price: {
      type: Number,
      required: true
    },
    total_stock: {
      type: Number,
      required: true
    },
    tax: {
      type: Number,
      required: true
    },
    cashier_id: {
      type: String,
      required: true
    },
    image: {
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
  
  const Shopping = mongoose.model("product", ShoppingSchema);
  
  module.exports = Shopping;