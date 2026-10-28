let products = [];
let nextId = 1;

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(product => product.id === Number(id));
}

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

function updateProduct(id, updates) {
    const product = getProductById(id);

    if (!product) {
        return undefined;
    }

    if (updates.name !== undefined) product.name = updates.name;
    if (updates.price !== undefined) product.price = updates.price;
    if (updates.quantity !== undefined) product.quantity = updates.quantity;

    return product;
}

function deleteProduct(id) {
    const index = products.findIndex(
        product => product.id === Number(id)
    );

    if (index === -1) {
        return undefined;
    }

    return products.splice(index, 1)[0];
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};