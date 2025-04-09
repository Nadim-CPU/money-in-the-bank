const { body, param, validationResult } = require('express-validator');


const validateLoanPayment = [

    body('paidAmount')
        .isDecimal()
        .withMessage('Paid Amount must be DECIMAL.')
        .notEmpty()
        .withMessage('Paid Amount cannot be EMPTY.'),
    body('datePaid')
        .isDate()
        .withMessage('Date Paid must be DATE.')
        .notEmpty()
        .withMessage('Date Paid cannot be EMPTY.'),
    body('loanID')
        .isInt()
        .withMessage('Loan ID must be INT.')
        .notEmpty()
        .withMessage('Loan ID cannot be EMPTY.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];


const validationLoanPaymentId = [
    param('id').isInt().withMessage('ID must be an integer'),
    (req, res, next) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        next();
    }
];

module.exports = {
    validateLoanPayment,
    validationLoanPaymentId
}