const express = require("express");
const TransactionController = require("../controllers/transactionController");
const { validateTransaction, validationTransactionId } = require("../validators/transactionDTO");
const { validationCustomerId } = require("../validators/customerDTO");

const router = express.Router();

router.post('/', validateTransaction, TransactionController.createTransaction);
router.get('/:id', validationTransactionId, TransactionController.getTransaction);
router.get('/customer/:id', validationCustomerId, TransactionController.getAllTransactionsOfCustomer);
router.post('/withdraw/:id', validationCustomerId, TransactionController.withdrawTransaction);
router.post('/deposit/:id', validationCustomerId, TransactionController.depositTransaction);


module.exports = router;
