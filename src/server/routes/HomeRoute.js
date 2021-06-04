const router = require('express').Router();
const HomeGetController = require('../controllers/HomeGetController');

router.get('/', HomeGetController);

module.exports = {
    router, path: '/'
}