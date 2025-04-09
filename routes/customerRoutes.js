const express = require("express");
const CustomerController = require("../controllers/customerController");
const { validateCustomer, validationCustomerId } = require("../validators/customerDTO");


const router = express.Router();

router.post('/', validateCustomer, CustomerController.createCustomer);
router.put('/add/:id', validationCustomerId, CustomerController.addToBalance);
router.put('/deduct/:id', validationCustomerId, CustomerController.deductFromBalance);
router.put('/close/:id', validationCustomerId, CustomerController.closeCustomer);
router.put('/open/:id', validationCustomerId, CustomerController.reopenCustomer);
router.get('/', CustomerController.getCustomers);
router.get('/:id', validationCustomerId, CustomerController.getCustomer);
router.delete('/:id', validationCustomerId, CustomerController.deleteCustomer);

module.exports = router;