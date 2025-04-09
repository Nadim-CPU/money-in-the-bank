
const LoanService = require("../services/loanService");

/* ----------------------------------------------------------------------------------------------
*  |                                         LOAN CONTROLLER                                    |
*  ----------------------------------------------------------------------------------------------
*/


class LoanController {

    static async createLoan(req, res) {

        try {

            const { amount, interest, startDate, endDate, status, customerID} = req.body;
            const loan = { amount, interest, startDate, endDate, status, customerID};

            const result = await LoanService.createLoan(loan);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async updateLoanEndDate(req, res) {

        try {

            const { id } = req.params;
            const { endDate } = req.body;

            const loan = { id, endDate};

            const result = await LoanService.updateLoanEndDate(loan);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async updateLoanStatus(req, res) {

        try {

            const { id } = req.params;
            const { status } = req.body;

            const loan = { id,  status };

            const result = await LoanService.updateLoanStatus(loan);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async deleteLoan(req, res) {

        try {

            const { id } = req.params;

            const result = await LoanService.deleteLoan(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }
    static async deductLoanAmount(req, res) {

        try {
            const { id } = req.params;
            const { amount } = req.body; 
            const result = await LoanService.deductLoanAmount(id, amount);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }   
    }

    static async getLoan(req, res) {

        try {

            const { id } = req.params;

            const result = await LoanService.getLoan(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getLoansOfCustomer(req, res) {

        try {

            const { id } = req.params;

            const result = await LoanService.getLoansOfCustomer(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }
}


module.exports = LoanController;