

const LoanRepository = require("../repositories/loanRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                            LOAN SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanService {

    static async createLoan(loan) {

        try {
            return await LoanRepository.createLoan(loan);
        } catch (e) {
            throw new Error(e);
        }

    }


    static async updateLoan(loan) {

        try {
            return await LoanRepository.updateLoan(loan);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteLoan(id) {

        try {
           return await LoanRepository.deleteLoan(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoan(id) {

        try {
            return await LoanRepository.getLoan(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoansOfCustomer(customerId) {

        try {
            return await LoanRepository.getLoansOfCustomer(customerId);
        } catch (e) {
            throw new Error(e);
        }
    }

}


module.exports = LoanService;