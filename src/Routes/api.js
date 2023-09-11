const express = require('express');
const router = express.Router();

const controller1 = require('../Controller/blogController');
const controller3 = require('../Controller/commentController');
const controller4 = require('../Controller/messageController');
const controller5 = require('../Controller/portfolioController');
const controller6 = require('../Controller/productController');

router.get('api/route1', controller1.Create);
router.get('api/route2', controller1.Read);
router.get('api/route3', controller1.Update);
router.get('api/route4', controller1.Delete);
router.get('api/route9', controller3.Create);
router.get('api/route10', controller3.Read);
router.get('api/route11', controller3.Update);
router.get('api/route12', controller3.Delete);
router.get('api/route13', controller4.Create);
router.get('api/route14', controller4.Read);
router.get('api/route15', controller4.Update);
router.get('api/route16', controller4.Delete);
router.get('api/route17', controller5.Create);
router.get('api/route18', controller5.Read);
router.get('api/route19', controller5.Update);
router.get('api/route20', controller5.Delete);
router.get('api/route21', controller6.Create);
router.get('api/route22', controller6.Read);
router.get('api/route23', controller6.Update);
router.get('api/route24', controller6.Delete);

module.exports = router;