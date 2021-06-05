const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetController');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');

router.get('/', UsersGetController);

router.post('/signup', UsersSignUpPostController)

module.exports = {
    router, path: '/users'
}