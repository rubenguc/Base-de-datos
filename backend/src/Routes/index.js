const { Router } = require('express');
const router = Router();
const { getDatos, CrearDatos } = require('../Controllers/index.controllers')

router.get('/api/ticket', getDatos );
router.post('/api/ticket', CrearDatos );

module.exports = router;