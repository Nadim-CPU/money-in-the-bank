
const LoanPaymentService = require("../services/loanpaymentService");




class LoanPaymentController {

    static async createLoanPayment(req, res) {

        try {

            const { amount, date, loanID } = req.body;

            const loanPayment = { amount, date, loanID };

            const result = LoanPaymentService.createLoanPayment(loanPayment);

            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getLoanPayment(req, res) {

        try {

            const { id } = req.params;

            const result = LoanPaymentService.getLoanPayment(id);

            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getAllLoanPaymentsOfLoan(req, res) {

        try {

            const { loanId } = req.params;

            const result = LoanPaymentService.getAllLoanPaymentsOfLoan(loanId);

            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

}


module.exports = LoanPaymentController;