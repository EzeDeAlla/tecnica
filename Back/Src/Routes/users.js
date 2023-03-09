const { Router } = require('express');
const router = Router();
const axios = require('axios');
const { dbDataUser } = require('../controllers');
const { User } = require('../db');

// || GET /USERS || // 
                    // PARA OBTENER TODOS LOS USUARIOS
    router.get('', async (req, res) => {
        try {
            const users = await dbDataUser();
            res.status(200).send(users);
        } catch (error) {
            res.status(400).send(error);
        }
        });

// || GET /PRODUCTOS/:ID || // 
                    // PARA OBTENER UN PRODUCTO EN ESPECIFICO
  router.get('/:mail', async (req, res) => {
    try{
    const mail = req.params.mail;
    const users = await dbDataUser();
    if (mail) {
      const filterMail = await users.filter((e) => e.mail == mail);
      filterMail.length
        ? res.status(200).send(filterMail)
        : res.status(400).send('Mail del usuario no encontrado');
    }
      } catch(error){
        res.status(500).send(error); 
    }
  });
  


  router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const { imgperfil, direction  } = req.body;
  
      const users = await User.findByPk(id);;
      users.imgperfil = imgperfil;
      users.direction = direction;
  
      await users.save();
  
      res.json(users);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }); 

module.exports = router;