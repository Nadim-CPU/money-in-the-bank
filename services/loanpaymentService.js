
const LoanPaymentRepository = require("../repositories/loanpaymentRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                    LOAN PAYMENT SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class LoanPaymentService {

    static async createLoanPayment(loanPayment) {

        try {
            await LoanPaymentRepository.createLoanPayment(loanPayment);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async updateLoanPayment(loanPayment) {

        try {
            await LoanPaymentRepository.updateLoanPayment(loanPayment);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoanPayment(id) {
        try {
            await LoanPaymentRepository.getLoanPayment(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getAllLoanPaymentsOfLoan(loanId) {
        
        try {
            await LoanPaymentRepository.getAllLoanPaymentsOfLoan(loanId);
        } catch (e) {
            throw new Error(e);
        }
    }
}


module.exports = LoanPaymentService;