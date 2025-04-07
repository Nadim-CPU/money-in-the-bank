const express = require('express');
const UserController = require("../controllers/userController");
const {validateUser} = require("../validators/userDTO");


const router = express.router();

router.post('/',validateUser, UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser);
router.post('/login', UserController.login);
