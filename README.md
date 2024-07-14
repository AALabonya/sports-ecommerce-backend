## Sports shop E-commerce Project Overview

### Introduction

FitPro is a dynamic e-commerce platform tailored for sporting goods enthusiasts, offering an extensive selection of equipment and accessories for various sports. It provides a user-friendly interface that allows customers to easily browse, purchase, and manage their sporting goods

## Technology Used

- Typescript
- MongoDB (Mongoose)
- Node.js
- Express js
- Cors
- dotenv

# API Endpoints:

## Product Routes

Create a New Product

- Endpoint: /api/v1/products
- Method: POST

Get All Products

- Endpoint: /api/v1/products
- Method: GET

Get a Specific Product by ID

- Endpoint: /api/v1/products/:productId
- Method: GET

Update Product

- Endpoint: /api/v1/products/:id
- Method: PATCH

Delete a Product

- Endpoint: /api/v1/products/:id
- Method: DELETE

Search for a Product

- Endpoint: /api/products?searchTerm=name
- Method: GET

## Order routes

Create a New Order

- Endpoint: /api/v1/orders
- Method: POST

## How to Run the Project

Clone the Repository

git clone https://github.com/AALabonya/sports-ecommerce-backend.git

cd sports-ecommerce-backend

## Install Dependencies

npm install

Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=5000

DATABASE_URL=< mongodb-uri >

Start the Server

npm run start:dev

The server will start running on http://localhost:5000.

Live Server Link: https://sports-ecommerce-backend.vercel.app/
