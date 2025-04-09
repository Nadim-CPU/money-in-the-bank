
const LoanPayment = require("../models/loanpaymentModel");




/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/



class LoanPaymentRepository {


    static async createLoanPayment(loanPayment, transactionID) {
        
      const createdLoanPayment = await LoanPayment.create({
            paidAmount: loanPayment.paidAmount,
            datePaid: loanPayment.datePaid,
            loanID: loanPayment.loanID,
            transactionID: transactionID
        });

        return createdLoanPayment;
    }
    
    static async getLoanPayment(id) {

        return await LoanPayment.findByPk(id);

    }

    static async getAllLoanPaymentsOfLoan(id) {
        
        return await LoanPayment.findAll({ where: {loanID: id}});

    }


}


module.exports = LoanPaymentRepository;