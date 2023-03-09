const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { dbProducts } = require('../controllers');
const { Products } = require('../db');

// || /PRODUCTOS || // 
                    // PARA OBTENER TODOS LOS PRODUCTOS
router.get('', async (req, res) => {
    try {
      const products = await dbProducts();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // || POST /PRODUCTOS || //
router.post('', async (req, res) => {
    try {
      const { title, isbn, price, stock, type, author, editorial } = req.body;
  
      if (title && isbn && price && stock && type && author, editorial) {
        const newProduct = await Products.create({
          title,
          isbn,
          price,
          stock,
          type,
          author,
          editorial
        });
  
        res.json(newProduct);
      } else {
        throw new Error('the required data is empty');
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;