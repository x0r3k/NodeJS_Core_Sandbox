const router = require('express').Router();
const { getUsers, createUser, updateUser } = require('../controllers/users.controller');

router.get('/getUsers', getUsers);

router.post('/createUser', createUser);

router.put('/updateUser', updateUser);

module.exports = router;