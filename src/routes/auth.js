const { Router } = require('express');
const router = Router();
// Generate Token
const jwt = require('jsonwebtoken');
const key = require('../examples-json/auth.json');

// Ruta basada desde le ruta base
router.post('/getToken', (req, res) => {
    if(req.body && req.body.apikey === key.apikey){
        // Se genera la Token ya que la KEY corresponde a la enviada por el post
        const token = jwt.sign({key}, 'qwert1234');

        res.json({
            "code" : 200,
            "token" : token
        });
    }else{
        res.json( {
            "code":401,
            "message":'No posee permisos...'
        });
    }
});



module.exports = router;