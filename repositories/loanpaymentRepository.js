
const LoanPayment = require("../models/loanpaymentModel");




/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/



class LoanPaymentRepository {


    /**
     * Creates a Loan Payment, gets TransactionID From Service Layer
     * @param {LoanPayment} loanPayment 
     * @param {int} transactionID 
     * @returns createdLoanPayment
     */
    static async createLoanPayment(loanPayment, transactionID) {
        
      const createdLoanPayment = await LoanPayment.create({
            paidAmount: loanPayment.paidAmount,
            datePaid: loanPayment.datePaid,
            loanID: loanPayment.loanID,
            transactionID: transactionID
        });

        return createdLoanPayment;
    }
    
    /**
     * Gets Loan Payment
     * @param {int} id 
     * @returns loanPayment
     */
    static async getLoanPayment(id) {

        return await LoanPayment.findByPk(id);

    }

    /**
     * Gets All Loan Payments of a Loan
     * @param {int} id 
     * @returns allLoanPaymentsOfLoan
     */
    static async getAllLoanPaymentsOfLoan(id) {
        
        return await LoanPayment.findAll({ where: {loanID: id}});

    }


}


module.exports = LoanPaymentRepository;