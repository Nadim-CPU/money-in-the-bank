const express = require("express");
const LoanController = require("../controllers/loanController");
const { validateLoan, validationLoanId } = require("../validators/loanDTO");
const { validationCustomerId } = require("../validators/customerDTO");


const router = express.Router();

router.post('/', validateLoan, LoanController.createLoan);
router.put('/deduct/:id', validationLoanId, LoanController.deductLoanAmount);
router.put('/date/:id', validationLoanId, LoanController.updateLoanEndDate);
router.put('/status/:id', validationLoanId, LoanController.updateLoanStatus);
router.delete('/:id', validationLoanId, LoanController.deleteLoan);
router.get('/:id', validationLoanId, LoanController.getLoan);
router.get('/customer/:id', validationCustomerId, LoanController.getLoansOfCustomer);

module.exports = router;