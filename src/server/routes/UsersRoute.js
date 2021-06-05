const router = require('express').Router();
const UsersGetController = require('../controllers/UsersGetController');
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController');
const UsersLoginPostController = require('../controllers/UsersLoginPostController');

router.get('/', UsersGetController);

router.post('/signup', UsersSignUpPostController);
router.post('/login', UsersLoginPostController);

module.exports = {
    router, path: '/users'
}