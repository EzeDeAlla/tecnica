const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require('./products');
const entry = require('./entry');
const users = require('./users')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/products', products);
router.use('/entry', entry);
router.use('/users', users)


module.exports = router;
