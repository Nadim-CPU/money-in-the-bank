
const Loan = require("../models/loanModel");

/* ----------------------------------------------------------------------------------------------
*  |                                         LOAN REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/

class LoanRepository {


    static async createLoan(loan) {

        const createdLoan = await Loan.create({
            loanAmount: loan.amount,
            loanInterest: loan.interest,
            loanStartDate: loan.startDate,
            loanEndDate: loan.endDate,
            loanStatus: loan.status,
            customerID: loan.customerID
        });

        return createdLoan;
    }

    static async updateLoan(loan) {

        const [updatedLoan] = await Loan.update({
            loanAmount: loan.amount,
            loanInterest: loan.interest,
            loanEndDate: loan.endDate,
            loanStatus: loan.status
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

    static async getLoans() {
        return Loan.findAll();
    }
}


module.exports = LoanRepository