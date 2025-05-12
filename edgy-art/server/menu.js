const mongoose = require('mongoose');

const testDb = mongoose.connection.useDb('edgy-art');

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const categorySchema = new mongoose.Schema({
    name: String
});

const Menu = testDb.model('Menus', categorySchema, 'menus');

module.exports = Menu;
