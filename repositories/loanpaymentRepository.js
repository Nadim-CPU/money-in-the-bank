

const LoanPayment = require("../models/loanpaymentModel");



/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/



class LoanPaymentRepository {


    static async createLoanPayment(loanPayment) {

        const createdLoanPayment = await LoanPayment.create({
            loanPaymentID: loanPayment.id,
            paidAmount: loanPayment.paid,
            datePaid: loanPayment.datePaid,
            loanID: loanPayment.loanID,
            transactionID: loanPayment.transactionID
        });

        return createdLoanPayment;
    }


    static async updateLoanPayment(loanPayment) {

        const [updatedLoanPayment] = await LoanPayment.update({
            datePaid: loanPayment.datePaid
        });

        return updatedLoanPayment;
    }

    static async getLoanPayment(id) {

        return await LoanPayment.findAll({ where: {loanPaymentID: id}});

    }

    static async getAllLoanPayments(loanId) {
        
        return await LoanPayment.findAll({ where: {loanID: loanId}});

    }


}


module.exports = LoanPaymentRepository;