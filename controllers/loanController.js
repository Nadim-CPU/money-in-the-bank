
const LoanService = require("../services/loanService");




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

    static async updateLoan(req, res) {

        try {

            const { id } = req.params;
            const { endDate, status } = req.body;

            const loan = { id, endDate, status};

            const result = await LoanService.updateLoan(loan);
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

            const { customerId } = req.params;

            const result = await LoanService.getLoansOfCustomer(customerId);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }
}


module.exports = LoanController;