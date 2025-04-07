
const LoanPaymentRepository = require("../repositories/loanpaymentRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                    LOAN PAYMENT SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class LoanPaymentService {

    static async createLoanPayment(loanPayment) {

        try {
            return await LoanPaymentRepository.createLoanPayment(loanPayment);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoanPayment(id) {
        try {
            return await LoanPaymentRepository.getLoanPayment(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getAllLoanPaymentsOfLoan(loanId) {
        
        try {
            return await LoanPaymentRepository.getAllLoanPaymentsOfLoan(loanId);
        } catch (e) {
            throw new Error(e);
        }
    }
}


module.exports = LoanPaymentService;