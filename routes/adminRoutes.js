const express = require("express");
const AdminController = require("../controllers/adminController");
const { validateAdmin, validationAdminId } = require("../validators/adminDTO");


const router = express.Router();

router.post('/', validateAdmin, AdminController.createAdmin);
router.put('/number/:id', validateAdmin, validationAdminId, AdminController.updateAdmin);
router.get('/', AdminController.getAdmins);
router.get('/:id', validationAdminId, AdminController.getAdmin);
router.delete('/:id', validationAdminId, AdminController.deleteAdmin);


module.exports = router;