let products = [];

let nextId = 1;

// Get all products
function getAllProducts() {
return products;
}

// Get a product by its ID
function getProductById(id) {
return products.find(product => product.id === Number(id));
}

// Add a new product
function addProduct(productData) {
const newProduct = {
id: nextId++,
name: productData.name,
price: productData.price,
quantity: productData.quantity
};

products.push(newProduct);
return newProduct;

}

// Update an existing product
function updateProduct(id, updates) {
const product = getProductById(id);

if (!product) {
    return undefined;
}

if (updates.name !== undefined) {
    product.name = updates.name;
}

if (updates.price !== undefined) {
    product.price = updates.price;
}

if (updates.quantity !== undefined) {
    product.quantity = updates.quantity;
}

return product;

}

// Delete a product
function deleteProduct(id) {
const index = products.findIndex(
product => product.id === Number(id)
);

if (index === -1) {
    return undefined;
}

const deletedProduct = products.splice(index, 1)[0];
return deletedProduct;

}

// Export the functions for use in other files
module.exports = {
getAllProducts,
getProductById,
addProduct,
updateProduct,
deleteProduct
};
