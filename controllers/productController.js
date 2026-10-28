const productModel = require('../models/productModel');

exports.getAllProducts = (req, res) => {
    res.status(200).json(productModel.getAllProducts());
};

exports.getProductById = (req, res) => {
    const product = productModel.getProductById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
};

exports.addProduct = (req, res) => {
    const { name, price, quantity } = req.body;

    if (
        typeof name !== 'string' ||
        !name.trim() ||
        price === undefined ||
        quantity === undefined ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0 ||
        !Number.isInteger(Number(quantity)) ||
        Number(quantity) < 0
    ) {
        return res.status(400).json({
            message: 'Provide a valid name, price, and quantity'
        });
    }

    const product = productModel.addProduct({
        name: name.trim(),
        price: Number(price),
        quantity: Number(quantity)
    });

    res.status(201).json({
        message: 'Product added successfully',
        data: product
    });
};

exports.updateProduct = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    const updates = {};
    const { name, price, quantity } = req.body;

    if (name !== undefined) {
        if (typeof name !== 'string' || !name.trim()) {
            return res.status(400).json({ message: 'Invalid name' });
        }
        updates.name = name.trim();
    }

    if (price !== undefined) {
        if (!Number.isFinite(Number(price)) || Number(price) < 0) {
            return res.status(400).json({ message: 'Invalid price' });
        }
        updates.price = Number(price);
    }

    if (quantity !== undefined) {
        if (!Number.isInteger(Number(quantity)) || Number(quantity) < 0) {
            return res.status(400).json({ message: 'Invalid quantity' });
        }
        updates.quantity = Number(quantity);
    }

    if (Object.keys(updates).length === 0) {
        return res.status(400).json({ message: 'Provide fields to update' });
    }

    const product = productModel.updateProduct(id, updates);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
        message: 'Product updated successfully',
        data: product
    });
};

exports.deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id < 1) {
        return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = productModel.deleteProduct(id);

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({
        message: 'Product deleted successfully',
        data: product
    });
};