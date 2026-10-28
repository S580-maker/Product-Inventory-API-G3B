//The group 3 project for server(engine)

require('dotenv').config();
const express = require('express');
const cors = require('cors');

//This is for calling out the routes/productsRoutes to my file. 
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(express.json());
app.use(cors('*'));

//This is for linking the routes/productsRoutes to my file. 
app.use(productRoutes);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        message: 'Internal server error'
    });
});

// 404 Handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found. Please check your URL." });
});
//This starts the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

