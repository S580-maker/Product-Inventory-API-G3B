# Group 3B Product Inventory API - Initial Setup
markdown
#  Product Inventory API - Group 3 (Subgroup 3B)

A backend RESTful API built with **Node.js** and **Express.js** to manage a shop's product inventory. This project was built as part of the BeTechified Backend Development Group Project.

##  Project Overview
This API allows a user to perform full **CRUD (Create, Read, Update, Delete)** operations on a list of products. 

**Our Unique Approach (Subgroup 3B):**
While other subgroups focused on different methods, our group implemented the **Organized Approach (Separation of Concerns)**. Instead of writing all the code in a single file, we structured our application into distinct folders for **Models**, **Controllers**, and **Routes**. This ensures our code is clean, scalable, and easy to maintain.

**Important Note:** As strictly required by the project brief, this API does **NOT** use a database (like SQL or MongoDB). Data is temporarily stored in an in-memory JavaScript array (`let products = []`). When the server restarts, the data resets.

##  Technologies Used
*   **Node.js** (JavaScript runtime)
*   **Express.js** (Web framework)
*   **Postman** (API testing and documentation)
*   **Git & GitHub** (Version control and team collaboration)

##Folder Structure
Our code follows a professional directory structure:`text
├── server.js              # Entry point (starts the server on Port 3001)
├── models/
│   └── productModel.js    # The "fake database" (in-memory array)
├── controllers/
│   └── productController.js # The CRUD logic (Create, Read, Update, Delete)
└── routes/
    └── productRoutes.js   # The API endpoints (URLs)
 How to Run Locally
To test this API on your own machine, follow these steps:

Clone this repository:

bash
git clone https://github.com/S580-maker/Product-Inventory-API-G3B.git
Navigate into the project folder:

bash
cd YOUR_REPO_NAME
Install the required dependencies:

bash
npm install
Start the server:

bash
node server.js
The server will run on: http://localhost:3001

API Endpoints
Here are the endpoints available in this API:

Method	Endpoint	Description	Status Code
GET	/api/products	Retrieve a list of all products	200 OK
GET	/api/products/:id	Retrieve a single product by its ID	200 OK / 404 Not Found
POST	/api/products	Add a new product to the inventory	201 Created
PUT	/api/products/:id	Update an existing product's details	200 OK
DELETE	/api/products/:id	Remove a product from the inventory	200 OK
Example JSON Request Body (for POST/PUT)
json
{
  "name": "Wireless Mouse",
  "price": 25.99,
  "quantity": 50
}
Testing with Postman
We have thoroughly tested every endpoint using Postman.
To test it yourself:

Open Postman.

Import the postman/3B-Product-Inventory.postman_collection.json file found in this repository.

Ensure your local server is running (node server.js).

Run the requests!

Team & Roles (Subgroup 3B)
This project was a collaborative effort. Here is how we divided the work to ensure everyone contributed:

[Your Name / GitHub Username]: Project Lead, Server Setup, & Testing (Role 5)

[Member 2 Name]: Product Model (Data)

[Member 3 Name]: Routes (Endpoints)

[Member 4 Name]: Controller (CRUD Logic)

[Member 5 Name]: Documentation & Presentation

Built for the BeTechified Backend Development Class.
