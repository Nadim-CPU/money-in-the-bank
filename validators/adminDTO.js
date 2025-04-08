const {body, param, validationResult} = require('express-validator');


const validateAdmin = [

    body('adminNumber')
        .isInt()
        .withMessage('Admin number must be INT.')
        .notEmpty()
        .withMessage('Admin number cannot be EMPTY.'),
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


const validationAdminId = [
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
    validateAdmin,
    validationAdminId
}