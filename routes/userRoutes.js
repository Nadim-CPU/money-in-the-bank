const express = require('express');
const UserController = require("../controllers/userController");
const { validateUser, validationUserID, validateUserPhone, validateUserPassword, validateUserAddress } = require("../validators/userDTO");


const router = express.Router();

router.post('/',validateUser, UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/login', UserController.login);
router.delete('/:id', validationUserID, UserController.deleteUser);
router.put('/phone/:id', validateUserPhone, validationUserID, UserController.changeUserPhone);
router.put('/address/:id', validateUserAddress, validationUserID, UserController.changeUserAddress);
router.put('/password/:id', validateUserPassword, validationUserID, UserController.changeUserPassword);

module.exports = router;