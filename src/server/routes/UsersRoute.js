const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetController');

router.get('/', UsersGetController);

module.exports = {
    router, path: '/users'
}