// Task 2: Express.js Route




const express = require('express');
const Product = require('./model/productModel'); // Assuming the Product model is defined in a separate file

const app = express();
const authenticate=require("./Middleware/jwtToken")

app.get('/products',authenticate, async (req, res) => {
  try {
    const products = await Product.find({}, 'name price'); // Fetching only the name and price fields
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while retrieving the products.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
