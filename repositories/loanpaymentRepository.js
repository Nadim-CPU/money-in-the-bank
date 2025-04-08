
const LoanPayment = require("../models/loanpaymentModel");




/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/



class LoanPaymentRepository {


    static async createLoanPayment(loanPayment) {
        
      const createdLoanPayment = await LoanPayment.create({
            paidAmount: loanPayment.amount,
            datePaid: loanPayment.datePaid,
            loanID: loanPayment.loanID,
            transactionID: createdTransaction.transactionID
        });

        return createdLoanPayment;
    }
    
    static async getLoanPayment(id) {

        return await LoanPayment.findByPk(id);

    }

    static async getAllLoanPaymentsOfLoan(loanId) {
        
        return await LoanPayment.findAll({ where: {loanID: loanId}});

    }


}


module.exports = LoanPaymentRepository;