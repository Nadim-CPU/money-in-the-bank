const LoanRepository = require("../repositories/loanRepository")
const TransactionRepository = require("../repositories/transactionRepository")
const LoanPayment = require("../models/loanpaymentModel");



/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/



class LoanPaymentRepository {


    static async createLoanPayment(loanPayment) {
        
        // Calling the loan to get the customerID
        const loan = await LoanRepository.getLoan(loanPayment.loanID);

        const createdTransaction = await TransactionRepository.createTransaction({
            transactionType: "LOAN PAYENT",
            transactionAmount: loanPayment.amount,
            transactionDate: loanPayment.datePaid,
            customerID: loan.customerID
        });

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