const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tableSchema = new Schema({
    table: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;