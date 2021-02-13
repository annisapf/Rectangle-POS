const mongoose = require("mongoose");
const schema = mongoose.Schema({
    product_list : { type: Array, required: true},
    total_item: { type: Number, required: true},
    subtotal_price: { type : Number, required: true},
    tax: { type: Number, required: true},
    total_price: { type: Number, required: true},
    cashier_id: { type: String, required: true},
    mid: { type: String, required: true},
    cashier_name: { type: String, required: true},
    created: { type: Date, default: Date.now}
})

const Transaction = mongoose.model("transactions", schema);

module.exports = Transaction;