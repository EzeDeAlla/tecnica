const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { dbEntrys } = require('../controllers');
const { Entry } = require('../db');

// || GET /ENTRY || // 
                    // PARA OBTENER TODOS LOS INGRESOS
    router.get('', async (req, res) => {
        try {
            const entrys = await dbEntrys();
            res.status(200).send(entrys);
        } catch (error) {
            res.status(400).send(error);
        }
        });
//
 
// || POST /ENTRY || //
                    // PARA CREAR NUEVOS INGRESOS
router.post('', async (req, res) => {
    try {
      const { name, distributor, amount } = req.body;
  
      if (name && distributor && amount) {
        const newEntry = await Entry.create({
          name,
          distributor,
          amount
        });
  
        res.json(newEntry);
      } else {
        throw new Error('the required data is empty');
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });


module.exports = router;