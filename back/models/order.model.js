const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    table: {
        type: Number,
        required: true,
    },
    menu: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;