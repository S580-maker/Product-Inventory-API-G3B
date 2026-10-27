const productModel = require('../models/productModel');

// 1. GET ALL PRODUCTS
// We just ask the model for the array and send it back as JSON
exports.getAllProducts = (req, res) => {
    try {
        const products = productModel.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};

// 2. GET PRODUCT BY ID
exports.getProductById = (req, res) => {
    // Grab the ID from the URL (e.g., /api/products/1)
    const id = req.params.id; 
    const product = productModel.getProductById(id);

    // If the model can't find it, we send a 404 error
    if (!product) {
        return res.status(404).json({ message: `Product with ID ${id} not found` });
    }
    
    res.status(200).json(product);
};
