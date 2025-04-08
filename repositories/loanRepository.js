
const Loan = require("../models/loanModel");

/* ----------------------------------------------------------------------------------------------
*  |                                         LOAN REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanRepository {


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

    static async deductLoanAmount(id, amount) {

        const loan = await this.getLoan(id);

        loan.amount -= amount;

        const [updatedLoan] = await Loan.update({
            loanAmount: loan.amount
        }, {
            where: {loanID: id}
        });

        return updatedLoan;
    }

    static async updateLoanEndDate(loan) {

        const [updatedLoan] = await Loan.update({
            loanEndDate: loan.endDate
        }, {
            where: { loanID: loan.id }
        });

        return updatedLoan;
    }

    static async updateLoanStatus(loan) {

        const [updatedLoan] = await Loan.update({
            loanStatus: loan.status
        }, {
            where: { loanID: loan.id }
        });

        return updatedLoan;
    }

    static async deleteLoan(id) {

        return await Loan.destroy({
            where: { loanID: id }
        });
    }

    static async getLoan(id) {
        return await Loan.findAll({where: {loanID: id}});
    }

    static async getLoansOfCustomer(customerId) {
        return Loan.findAll({ where: {customerID: customerId}});
    }
}


module.exports = LoanRepository