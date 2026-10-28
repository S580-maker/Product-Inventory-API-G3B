const productModel = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    try {
        let products = productModel.getAllProducts();
        const { name, quantity } = req.query;

        if (name) {
            products = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        }
        if (quantity) {
            products = products.filter(p => p.quantity === Number(quantity));
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};

exports.getProductById = (req, res) => {
    const id = req.params.id;
    const product = productModel.getProductById(id);

    if (!product) {
        return res.status(404).json({ message: `Product with ID ${id} not found` });
    }

    res.status(200).json(product);
};

exports.createProduct = (req, res) => {
    if (!req.body.name || !req.body.price || !req.body.quantity) {
        return res.status(400).json({ message: "Please provide name, price, and quantity" });
    }

    const newProduct = productModel.addProduct(req.body);

    res.status(201).json({ message: "Product added successfully", data: newProduct });
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    const updatedProduct = productModel.updateProduct(id, updates);

    if (!updatedProduct) {
        return res.status(404).json({ message: `Cannot update. Product with ID ${id} not found` });
    }

    res.status(200).json({ message: "Product updated", data: updatedProduct });
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    const deletedProduct = productModel.deleteProduct(id);

    if (!deletedProduct) {
        return res.status(404).json({ message: `Cannot delete. Product with ID ${id} not found` });
    }

    res.status(200).json({ message: "Product deleted successfully", data: deletedProduct });
};
