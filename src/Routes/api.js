const express = require('express');
const router = express.Router();

const controller1 = require('../Controller/userController');
const controller2 = require('../Controller/adminController');
const controller3 = require('../Controller/subAdminController');
const controller4 = require('../Controller/postController');

router.get('api/route1', controller1.Create);
router.get('api/route2', controller1.Read);
router.get('api/route3', controller1.Update);
router.get('api/route4', controller1.Delete);
router.get('api/route5', controller2.Create);
router.get('api/route6', controller2.Read);
router.get('api/route7', controller2.Update);
router.get('api/route8', controller2.Delete);
router.get('api/route9', controller3.Create);
router.get('api/route10', controller3.Read);
router.get('api/route11', controller3.Update);
router.get('api/route12', controller3.Delete);
router.get('api/route13', controller4.Create);
router.get('api/route14', controller4.Read);
router.get('api/route15', controller4.Update);
router.get('api/route16', controller4.Delete);

module.exports = router;