const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    base_price: { type: Number, required: true},
    sell_price: { type: Number, required: true},
    total_stock: { type: Number, required: true},
    tax: { type: Number, required: true},
    mid: { type: String, required: true},
    created: { type: Date, default: Date.now}
})

const Product = mongoose.model("product", schema);

module.exports = Product;