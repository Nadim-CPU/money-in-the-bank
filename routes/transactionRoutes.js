const express = require("express");
const TransactionController = require("../controllers/transactionController");
const { validateTransaction, validationTransactionId } = require("../validators/transactionDTO");
const { validationCustomerId } = require("../validators/customerDTO");

const router = router.express();

router.post('/', validateTransaction, TransactionController.createTransaction);
router.get('/:id', validationTransactionId, TransactionController.getTransaction);
router.get('/customer/:customerId', validationCustomerId, TransactionController.getAllTransactionsOfCustomer);


module.exports = router;
