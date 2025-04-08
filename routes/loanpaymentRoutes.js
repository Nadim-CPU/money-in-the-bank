const express = require("express");
const LoanPaymentController = require("../controllers/loanpaymentController")
const { validateLoanPayment, validationLoanPaymentId } = require("../validators/loanpaymentDTO");
const { validationLoanId } = require("../validators/loanDTO");


const router = express.Router();

router.post('/', validateLoanPayment, LoanPaymentController.createLoanPayment);
router.get('/:id', validationLoanPaymentId, LoanPaymentController.getLoanPayment);
router.get('/loan/:id', validationLoanId, LoanPaymentController.getAllLoanPaymentsOfLoan);

module.exports = router;