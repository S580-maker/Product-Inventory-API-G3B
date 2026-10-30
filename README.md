# Product Inventory API — Group 3B

A RESTful API for managing product inventory, built with **Node.js** and **Express.js**. This project was developed by Group 3B as part of the BeTechified Backend Development Project.

## 1. Project Overview

The Product Inventory API provides endpoints for managing products in an inventory. It supports the basic CRUD operations:

- **Create:** Add new products.
- **Read:** Retrieve all products or a specific product.
- **Update:** Modify existing product information.
- **Delete:** Remove products from the inventory.

The project uses an organized structure that separates models, controllers, and routes to make the application easier to maintain.

## 2. Features

- Create, retrieve, update, and delete products.
- Retrieve products using their unique IDs.
- Filter products by name or quantity.
- Organized routes, controllers, and model structure.
- JSON request and response handling.
- Postman collection for API testing.

**Storage:** Products are stored in an in-memory JavaScript array, not a database. Data resets whenever the server restarts.

## 3. Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Git and GitHub

## 4. Project Requirements

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- [Postman](https://www.postman.com/) (optional, for API testing)

## 5. Getting Started

### Step 1: Clone the repository

```bash
git clone https://github.com/S580-maker/Product-Inventory-API-G3B.git
```

### Step 2: Enter the project directory

```bash
cd Product-Inventory-API-G3B
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Start the server

```bash
npm start
```

The API runs at:

`http://localhost:3001`

The default port is 3001. A different port can be configured using the `PORT` environment variable.

## 6. API Endpoints

All endpoints use the base URL:

`http://localhost:3001/api/products`

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/api/products` | Retrieve all products |
| GET | `/api/products/:id` | Retrieve a product by ID |
| POST | `/api/products` | Create a new product |
| PATCH | `/api/products/:id` | Update an existing product |
| DELETE | `/api/products/:id` | Delete a product |

### Filtering Products

Products can also be filtered using query parameters:

```text
GET /api/products?name=mouse
GET /api/products?quantity=50
```

### Example Product Request

When creating a product, send a JSON body like this:

```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "quantity": 50
}
```

The required fields are `name`, `price`, and `quantity`.

## 7. Testing with Postman

The API can be tested using Postman.

1. Start the server using `npm start`.
2. Open Postman.
3. Import the project's Postman collection, if available.
4. Test the different endpoints.
5. Check the responses returned by the API.

The default API address is `http://localhost:3001`.

## 8. Project Structure

```text
Product-Inventory-API-G3B/
│
├── controllers/
│   └── productController.js
│
├── models/
│   └── productModel.js
│
├── routes/
│   └── productRoutes.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### Explanation of the Structure

- **Models:** Handles product data and inventory operations.
- **Controllers:** Handles requests, validation, and responses.
- **Routes:** Defines the API endpoints.
- **Server:** Configures Express and starts the application.
- **Package.json:** Contains project information and dependencies.
- **README.md:** Provides project documentation and instructions.

## 9. Contributors

This project was developed through the collaborative efforts of Group 3B.

- [S580-maker (Stephen Obodai)](https://github.com/S580-maker)
- [OfficePin001](https://github.com/OfficePin001)
- [limah-coding-journey](https://github.com/limah-coding-journey)
- [Chimeremeze Chukwuma (heavenlystories144-cyber)](https://github.com/heavenlystories144-cyber)

## 10. Conclusion

The Product Inventory API demonstrates how Node.js and Express.js can be used to build a RESTful API with CRUD functionality and an organized application structure.

**Developed by Group 3B — BeTechified Backend Development Project.**