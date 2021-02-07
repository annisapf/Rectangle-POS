const mongoose = require("mongoose");
const schema = mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    mid: { type: String, required: true},
    created: { type: Date, default: Date.now}
});

const Cashier = mongoose.model("cashier", schema)

module.exports = Cashier;
