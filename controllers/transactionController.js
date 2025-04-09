
const TransactionService = require("../services/transactionService");





class TransactionController {


    static async createTransaction(req, res) {

        try {
            const { type, amount, date, customerID } = req.body;
            const transaction = { type, amount, date, customerID};

            const result = await TransactionService.createTransaction(transaction);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }

    }

    static async getTransaction(req, res) {

        try {

            const { id } = req.params;

            const result = await TransactionService.getTransaction(id);
            res.status(200).json(result);
        } catch (e){
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getAllTransactionsOfCustomer(req, res) {

        try {

            const { customerId } = req.params;

            const result = await TransactionService.getAllTransactionsOfCustomer(customerId);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    /**
     * WITHDRAW
     * &
     * DEPOSIT FUNCTIONS 
     */
    static async depositTransaction(req, res) {

        try {
            
            const { customerId } = req.params;
            const { amount, date } = req.body;
            const type = "DEPOSIT";
            const transaction = { type, amount, date, customerId };

            const result = await TransactionService.depositTransaction(transaction);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async withdrawTransaction(req, res){

        try {
            
            const { customerId } = req.params;
            const { amount, date } = req.body;
            const type = "DEPOSIT";
            const transaction = { type, amount, date, customerId };

            const result = await TransactionService.withdrawTransaction(transaction);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
        
    }
}


module.exports = TransactionController;