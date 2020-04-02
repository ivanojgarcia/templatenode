const { Router } = require('express');
const router = Router();

// Se extrae la data de ejemplodesde un archivo JSON, se especifica la ruta en base a la ruta Base que se encuentra en el app.js definido
const clientesOperaciones = require('../examples-json/clientes-operaciones.json')
const clientesContratos = require('../examples-json/clientes-contratos.json')
const clientesDocumentos= require('../examples-json/clientes-documentos.json')
const clientesRepresLegales= require('../examples-json/clientes-repres-legal.json')

// Ruta basada desde le ruta base
router.get('/:rut/operaciones/:estado', (req, res) => {
    // console.log(req.params)
    res.json(clientesOperaciones)
});

router.get('/:rut/contratos/:estados', (req, res) => {
    res.json(clientesContratos)
});

router.get('/:rut/documental/:pdf', (req, res) => {
    res.json(clientesDocumentos)
});

router.get('/:rut/ReprLegales', (req, res) => {
    res.json(clientesRepresLegales)
});


module.exports = router;