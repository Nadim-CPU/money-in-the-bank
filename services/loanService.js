

const LoanRepository = require("../repositories/loanRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                            LOAN SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanService {

    static async createLoan(loan) {

        try {
            await LoanRepository.createLoan(loan);
        } catch (e) {
            throw new Error(e);
        }

    }


    static async updateLoan(loan) {

        try {
            await LoanRepository.updateLoan(loan);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteLoan(id) {

        try {
            await LoanRepository.deleteLoan(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoan(id) {

        try {
            await LoanRepository.getLoan(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoansOfCustomer(customerId) {

        try {
            await LoanRepository.getLoansOfCustomer(customerId);
        } catch (e) {
            throw new Error(e);
        }
    }

}


module.exports = LoanService;