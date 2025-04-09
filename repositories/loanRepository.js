
const Loan = require("../models/loanModel");

/* ----------------------------------------------------------------------------------------------
*  |                                         LOAN REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanRepository {

    /**
     * Creates A Loan
     * @param {Loan} loan 
     * @param {Date} startDate 
     * @returns createdLoan
     */
    static async createLoan(loan, startDate) {

        const createdLoan = await Loan.create({
            loanAmount: loan.amount,
            loanInterest: loan.interest,
            loanStartDate: startDate,
            loanEndDate: loan.endDate,
            loanStatus: loan.status,
            customerID: loan.customerID
        });

        return createdLoan;
    }

    /**
     * Deducts A Certain Amount From A Loan
     * @param {int} id 
     * @param {Float} amount 
     * @returns 
     */
    static async deductLoanAmount(id, amount) {

        // Checking Loan
        const loan = await this.getLoan(id);

       
        // Converting Amounts To Float
        let parsedLoanAmount = parseFloat(loan.loanAmount);
        let parsedAmount = parseFloat(amount);

        // Beginning Arithmetic
        parsedLoanAmount -= parsedAmount;

        // Updating
        const [updatedLoan] = await Loan.update({
            loanAmount: parsedLoanAmount
        }, {
            where: {loanID: id}
        });

        return updatedLoan;
    }

    /**
     * Updates End Date Of A Loan
     * @param {Loan} loan 
     * @returns updatedLoan
     */
    static async updateLoanEndDate(loan) {

        const [updatedLoan] = await Loan.update({
            loanEndDate: loan.endDate
        }, {
            where: { loanID: loan.id }
        });

        return updatedLoan;
    }

    /**
     * Updates Status Of A Loan
     * @param {Loan} loan 
     * @returns updatedLoan
     */
    static async updateLoanStatus(loan) {

        const [updatedLoan] = await Loan.update({
            loanStatus: loan.status
        }, {
            where: { loanID: loan.id }
        });

        return updatedLoan;
    }

    /**
     * Deletes A Loan By Their ID
     * @param {int} id 
     * @returns deletedLoan
     */
    static async deleteLoan(id) {

        return await Loan.destroy({
            where: { loanID: id }
        });
    }

    /**
     * Gets Loan By Their ID
     * @param {int} id 
     * @returns loan
     */
    static async getLoan(id) {
        return await Loan.findByPk(id);
    }

    /**
     * Gets All Loans Of A Customer
     * @param {int} id 
     * @returns allLoansOfCustomer
     */
    static async getLoansOfCustomer(id) {
        return Loan.findAll({ where: {customerID: id}});
    }
}


module.exports = LoanRepository