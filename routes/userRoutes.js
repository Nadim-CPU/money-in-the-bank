const express = require('express');
const UserController = require("../controllers/userController");
const { validateUser, validationUserID } = require("../validators/userDTO");


const router = express.Router();

router.post('/',validateUser, UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/login', UserController.login);
router.delete('/:id', validationUserID, UserController.deleteUser);
router.put('/phone/:id', validateUser, validationUserID, UserController.changeUserPhone);
router.put('/address/:id', validateUser, validationUserID, UserController.changeUserAddress);
router.put('/password/:id', validateUser, validationUserID, UserController.changeUserPassword);

module.exports = router;