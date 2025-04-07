

const TransactionRepository = require("../repositories/transactionRepository");


/* ----------------------------------------------------------------------------------------------
*  |                                     TRANSACTION SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/



class TransactionService {


    static async createTransaction(transaction) {

        try {
            return await TransactionRepository.createTransaction(transaction);
        } catch(e) {
            throw new Error(e);
        }
    }


    static async getTransaction(id) {
        try {
           return await TransactionRepository.getTransaction(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getAllTransactionsOfCustomer(customerId) {
        
        try {
            return await TransactionRepository.getAllTransactionsOfCustomer(customerId);
        } catch (e) {
            throw new Error(e);
        }
    }

}


module.exports = TransactionService;