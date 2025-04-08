

const LoanRepository = require("../repositories/loanRepository")

/* ----------------------------------------------------------------------------------------------
*  |                                            LOAN SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanService {

    static async createLoan(loan) {

        const startDate = new Date();
        try {
            return await LoanRepository.createLoan(loan, startDate);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async deductLoanAmount(id, amount) {
        try {

            return await LoanRepository.deductLoanAmount(id, amount); 
        } catch (e) {
            throw new Error(e);
        }   
}

    static async updateLoanEndDate(loan) {

        try {
            return await LoanRepository.updateLoanEndDate(loan);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async updateLoanStatus(loan) {

        try {
            return await LoanRepository.updateLoanStatus(loan);
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