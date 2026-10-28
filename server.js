require('dotenv').config();

const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(productRoutes);

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: 'Internal server error'
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found. Please check your URL.'
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Product Inventory API is running on port ${PORT}`);
});