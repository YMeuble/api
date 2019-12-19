const  express = require('express');
const router = express.Router();

const buildingCtrl = require('../controllers/building');
const auth = require('../middleware/auth');

router.get('/', buildingCtrl.getAllBuilding);
router.post('/', buildingCtrl.createBuilding);
router.get('/:id', buildingCtrl.getOneBuilding);
router.delete('/:id', auth, buildingCtrl.deleteBuilding);
router.put('/:id', auth, buildingCtrl.updateBuilding);

module.exports = router;
