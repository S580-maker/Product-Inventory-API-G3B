const productModel = require('../models/productModel');

// 1. GET ALL PRODUCTS
// We ask for the products and return it as a json , it also checks for if a query was issues and returns a corresponding json file 
exports.getAllProducts = (req, res) => {
    let products = productModel.getAllProducts();
    const { name, quantity } = req.query;

    if (name) {
        products = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (quantity) {
        products = products.filter(p => p.quantity === Number(quantity));
    }
    res.status(200).json(products);
};

// 2. GET PRODUCT BY ID
exports.getProductById = (req, res) => {
    // Grab the ID from the URL 
    const id = req.params.id; 
    const product = productModel.getProductById(id);

    // If the model can't find it, we send a 404 error
    if (!product) {
        return res.status(404).json({ message: `Product with ID ${id} not found` });
    }
    
    res.status(200).json(product);
};

// 3. ADD A NEW PRODUCT
exports.addProduct = (req, res) => {
    // Basic validation: Don't let them add an empty product
    if (!req.body.name || !req.body.price || !req.body.quantity) {
        return res.status(400).json({ message: "Please provide name, price, and quantity" });
    }

    // Pass the body data to the model to handle the ID creation and saving
    const newProduct = productModel.addProduct(req.body);
    
    
    res.status(201).json({ message: "Product added successfully", data: newProduct });
};

// 4. UPDATE A PRODUCT
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    // The model handles the updating logic
    const updatedProduct = productModel.updateProduct(id, updates);

    if (!updatedProduct) {
        return res.status(404).json({ message: `Cannot update. Product with ID ${id} not found` });
    }

    res.status(200).json({ message: "Product updated", data: updatedProduct });
};

// 5. DELETE A PRODUCT
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    
    const deletedProduct = productModel.deleteProduct(id);

    if (!deletedProduct) {
        return res.status(404).json({ message: `Cannot delete. Product with ID ${id} not found` });
    }

    res.status(200).json({ message: "Product deleted successfully", data: deletedProduct });
};
