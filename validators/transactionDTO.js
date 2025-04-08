
const { body, param, validationResult } = require('express-validator');


const validateTransaction = [

    body('type')
        .isString()
        .withMessage('Type must be STRING.')
        .notEmpty()
        .withMessage('Type cannot be EMPTY.'),
    body('amount')
        .isDecimal()
        .withMessage('Amount must be DECIMAL.')
        .notEmpty()
        .withMessage('Amount cannot be EMPTY.'),
    body('date')
        .isDate()
        .withMessage('Date must be DATE.')
        .notEmpty()
        .withMessage('Date cannot be EMPTY.'),
    body('transactionID')
        .isInt()
        .withMessage('Transaction ID must be INT.')
        .notEmpty()
        .withMessage('Transaction ID cannot be EMPTY.')
]

const validationTransactionId = [
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
    validateTransaction,
    validationTransactionId
}