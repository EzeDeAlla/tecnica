const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { dbProducts } = require('../controllers');
const { Products } = require('../db');

// || GET /PRODUCTOS || // 
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
                    // PARA CREAR NUEVOS PRODUCTOS
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

// || GET /PRODUCTOS/:ID || // 
                    // PARA OBTENER UN PRODUCTO EN ESPECIFICO
  router.get('/:id', async (req, res) => {
    try{
    const id = req.params.id;
    const products = await dbProducts();
    if (id) {
      const filterId = await products.filter((e) => e.id == id);
      filterId.length
        ? res.status(200).send(filterId)
        : res.status(400).send('Id de producto no encontrada');
    }
      } catch(error){
        res.status(500).send(error); 
    }
  });

// || PUT /PRODUCTOS || //
                    // PARA MODIFICAR PRODUCTOS
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { stock } = req.body;

    const products = await Products.findByPk(id);;
    products.stock = stock;

    await products.save();

    res.json(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


module.exports = router;