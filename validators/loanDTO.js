const { body, param, validationResult } = require('express-validator');



validateLoan = [

    body('amount')
        .isDecimal()
        .withMessage('Amount must be DECIMAL.')
        .notEmpty()
        .withMessage('Amount cannot be EMPTY.'),
    body('interest')
        .isDecimal()
        .withMessage('Interest must be DECIMAL.')
        .notEmpty()
        .withMessage('Interest cannot be EMPTY.'),
    body('startDate')
        .isDate()
        .withMessage('Start Date must be DATE.')
        .notEmpty()
        .withMessage('Start Date cannot be EMPTY.'),
    body('endDate')
        .isDate()
        .withMessage('End Date must be DATE.')
        .notEmpty()
        .withMessage('Start Date cannot be EMPTY.'),
    body('status')
        .isString()
        .withMessage('Status must be STRING.'),
    body('customerID')
        .isInt()
        .withMessage('Customer ID must be INT.')
        .notEmpty()
        .withMessage('Customer ID cannot be EMPTY.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
];


const validationLoanID = [
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
    validateLoan,
    validationLoanID
}