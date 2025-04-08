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

        // Calling the loan to get the customerID and deduct from it
        const loan = await LoanService.getLoan(loanPayment.loanID);

        // Catcing Any Error From This
        try {
            await CustomerService.deductFromBalance(loan.customerID, loanPayment.amount);
            await LoanService.deductLoanAmount(loanPayment.loanID, loanPayment.amount);
        } catch (e) {
            throw new Error(e);
        }

        try {
            await TransactionService.createTransaction({
                transactionType: "LOAN PAYENT",
                transactionAmount: loanPayment.amount,
                transactionDate: loanPayment.datePaid,
                customerID: loan.customerID
            });
            return await LoanPaymentRepository.createLoanPayment(loanPayment);
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

    static async getAllLoanPaymentsOfLoan(loanId) {
        
        try {
            return await LoanPaymentRepository.getAllLoanPaymentsOfLoan(loanId);
        } catch (e) {
            throw new Error(e);
        }
    }
}


module.exports = LoanPaymentService;