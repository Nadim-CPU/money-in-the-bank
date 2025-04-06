const {body, param, validationResult} = require('express-validator');

const validateUser = [

    body('firstName')
        .isString()
        .withMessage('First name must be STRING.')
        .notEmpty()
        .withMessage('First name cannot be EMPTY.'),
    body('lastName')
        .isString()
        .withMessage('Last name must be STRING.')
        .notEmpty()
        .withMessage('Last name cannot be EMPTY.'),
    body('username')
        .isString()
        .withMessage('Username must be STRING.')
        .notEmpty()
        .withMessage('Username cannot be EMPTY.'),
    body('password')
        .isString()
        .withMessage('Password must be STRING.')
        .notEmpty()
        .withMessage('Password cannot be EMPTY.')
        .isStrongPassword()
        .withMessage('Password must be STRONG.'),
    body('phoneNbr')
        .isMobilePhone()
        .withMessage('Phone number must be VALID.')
        .notEmpty()
        .withMessage('Phone number cannot be EMPTY.'),
    body('dob')
        .isDate()
        .withMessage('DOB must be VALID.')
        .notEmpty('DOB cannot be EMPTY.'),
    body('address')
        .isString()
        .withMessage('Address must be STRING')
        .notEmpty()
        .withMessage('Address cannot be EMPTY.'),
    (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }
            next();
    }
    
];


const validationUserID = [
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
    validateUser,
    validationUserID
}