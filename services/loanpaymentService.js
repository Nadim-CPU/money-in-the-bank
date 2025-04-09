const LoanService = require("../services/loanService")
const TransactionService = require("../services/transactionService")
const LoanPaymentRepository = require("../repositories/loanpaymentRepository");
const CustomerService = require("../services/customerService");

/* ----------------------------------------------------------------------------------------------
*  |                                    LOAN PAYMENT SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class LoanPaymentService {

    static async createLoanPayment(loanPayment) {

        // It's a Mess But It Works
        try {
            const loan = await LoanService.getLoan(loanPayment.loanID);
            await CustomerService.deductFromBalance(loan.customerID, loanPayment.paidAmount);
            console.log("WORKS!")
            await LoanService.deductLoanAmount(loanPayment.loanID, loanPayment.paidAmount);
            console.log("ALSO WORKS!")
            
            console.log("TESTING TRANSACTION")
            const transaction = await TransactionService.createTransaction({
                type: "LOAN PAYENT",
                amount: loanPayment.paidAmount,
                date: loanPayment.datePaid,
                customerID: loan.customerID
            });
            console.log("TRANSACTION WORKS")

            const transactionID = transaction.transactionID;

            return await LoanPaymentRepository.createLoanPayment(loanPayment, transactionID);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getLoanPayment(id) {
        try {
            return await LoanPaymentRepository.getLoanPayment(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getAllLoanPaymentsOfLoan(id) {
        
        try {
            return await LoanPaymentRepository.getAllLoanPaymentsOfLoan(id);
        } catch (e) {
            throw new Error(e);
        }
    }
}


module.exports = LoanPaymentService;