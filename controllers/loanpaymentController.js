
const LoanPaymentService = require("../services/loanpaymentService");

/* ----------------------------------------------------------------------------------------------
*  |                                 LOAN PAYMENT CONTROLLER                                    |
*  ----------------------------------------------------------------------------------------------
*/


class LoanPaymentController {

    static async createLoanPayment(req, res) {

        try {

            const { paidAmount, datePaid, loanID } = req.body;

            const loanPayment = { paidAmount, datePaid, loanID };

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

            const result = await LoanPaymentService.getLoanPayment(id);

            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getAllLoanPaymentsOfLoan(req, res) {

        try {

            const { id } = req.params;

            const result = await LoanPaymentService.getAllLoanPaymentsOfLoan(id);

            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

}


module.exports = LoanPaymentController;