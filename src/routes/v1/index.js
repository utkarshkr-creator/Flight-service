const express=require('express');

const {InfoController}=require('../../controllers');
const airplanesRoutes=require('./airplane-routes');
const cityRoutes=require('./city-routes');
const router=express.Router();
router.use('/airplanes',airplanesRoutes);
router.use('/cities', cityRoutes);

router.get('/info',InfoController.info);

module.exports=router;