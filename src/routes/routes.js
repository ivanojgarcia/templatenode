const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    const data = {
        "status" : 200,
        "message": "Servicio en su versión V1, Kibernum"
    }
    res.json(data)
});


module.exports = router;