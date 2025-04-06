const {body, param, validationResult} = require('express-validator');


validateCustomer = [

    body('balance')
        .isDecimal()
        .withMessage('Balance must be DECIMAL.')
        .notEmpty()
        .withMessage('Balance cannot be EMPTY.'),
    body('dateOpened')
        .isDate()
        .withMessage('Date opened must be DATE.')
        .notEmpty()
        .withMessage('Date opened cannot be EMPTY.'),
    body('dateClosed')
        .isDate()
        .withMessage('Date opened must be DATE.'),
    body('taxID')
        .matches(/^[1-9]{2}-[1-9]{7}$/)
        .withMessage('Tax ID does not follow the FORMAT.')
        .notEmpty()
        .withMessage('Message cannot be EMPTY.'),
    body('userID')
        .isInt()
        .withMessage('User ID must be INT.')
        .notEmpty()
        .withMessage('User ID cannot be EMPTY.'),
    (req, res, next) => {
        const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
        }
        next();
    }
    
];

const validationCustomerID = [
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
    validateCustomer,
    validationCustomerID
}