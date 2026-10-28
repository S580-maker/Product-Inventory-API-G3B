# Product Inventory API

A REST API for managing a small product inventory, built with Node.js and Express. This project was created by Group 3B as part of the BeTechified Backend Development project.

## Features

- Create, list, retrieve, update, and delete products
- Filter the product list by name or quantity
- Organized into routes, controllers, and a model
- Includes a Postman collection for trying the API

> **Storage note:** Products are kept in an in-memory array, not a database. All products are cleared when the server restarts.

## Requirements

- [Node.js](https://nodejs.org/) and npm
- [Postman](https://www.postman.com/) (optional, for testing the collection)

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/S580-maker/Product-Inventory-API-G3B.git
cd Product-Inventory-API-G3B
npm install
```

Start the server:

```bash
npm start
```

The API listens at `http://localhost:3001` by default. To use a different port, set the `PORT` environment variable before starting the server.

## API endpoints

All endpoints are under `/api/products`.

| Method | Endpoint | Description | Success response |
| --- | --- | --- | --- |
| `GET` | `/api/products` | List all products | `200 OK` |
| `GET` | `/api/products/:id` | Get a product by ID | `200 OK` |
| `POST` | `/api/products` | Add a product | `201 Created` |
| `PATCH` | `/api/products/:id` | Update supplied product fields | `200 OK` |
| `DELETE` | `/api/products/:id` | Delete a product | `200 OK` |

Requests for a product ID that does not exist return `404 Not Found`. Creating a product requires `name`, `price`, and `quantity`.

### Product format

```json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "quantity": 50
}
```

### Examples

Create a product:

```bash
curl -X POST http://localhost:3001/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Wireless Mouse","price":25.99,"quantity":50}'
```

List products, optionally filtered by name or quantity:

```text
GET http://localhost:3001/api/products
GET http://localhost:3001/api/products?name=mouse
GET http://localhost:3001/api/products?quantity=50
```

Update a product (replace `1` with its ID):

```bash
curl -X PATCH http://localhost:3001/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"quantity":45}'
```

## Try it with Postman

1. Start the server with `npm start`.
2. In Postman, choose **Import** and select [`postman/3B-Product-Inventory.postman_collection.json`](postman/3B-Product-Inventory.postman_collection.json).
3. Send **Create product** first. On success, the collection stores the returned product ID for the other requests.
4. Try the list, get-by-ID, update, and delete requests.

The collection's default base URL is `http://localhost:3001`.

## Project structure

```text
.
├── server.js                 # Express app and server startup
├── routes/
│   └── productRoutes.js      # Product API endpoints
├── controllers/
│   └── productController.js  # Request handling and responses
├── models/
│   └── productModel.js       # In-memory product data and operations
└── postman/
    └── 3B-Product-Inventory.postman_collection.json
```

## Contributors

- [S580-maker (Stephen Obodai)](https://github.com/S580-maker)
- [OfficePin001](https://github.com/OfficePin001)
- [limah-coding-journey](https://github.com/limah-coding-journey)

---

Created for the BeTechified Backend Development project by Group 3B.
