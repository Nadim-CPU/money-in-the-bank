const express = require("express");
const LoanController = require("../controllers/loanController");
const { validateLoan, validationLoanId } = require("../validators/loanDTO");
const { validationCustomerId } = require("../validators/customerDTO");


const router = express.router();

router.post('/', validateLoan, LoanController.createLoan);
router.put('/date/:id', validateLoan ,validationLoanId, LoanController.updateLoanEndDate);
router.put('/status/:id', validateLoan, validationLoanId, LoanController.updateLoanStatus);
router.delete('/:id', validationLoanId, LoanController.deleteLoan);
router.get('/:id', validationLoanId, LoanController.getLoan);
router.get('/customer/:customerId', validationCustomerId, LoanController.getLoansOfCustomer);

module.exports = router;