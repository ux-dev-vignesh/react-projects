require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Menu = require('./menu'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.error('MongoDB connection error:', err));

// Test Route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

// Menus Route
app.get('/api/menus', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (err) {
        console.error('Error fetching menus:', err);
        res.status(500).json({ error: 'Failed to fetch menus' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
