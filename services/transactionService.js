
const CustomerService = require("../services/customerService");
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

    static async getAllTransactionsOfCustomer(id) {
        
        try {
            return await TransactionRepository.getAllTransactionsOfCustomer(id);
        } catch (e) {
            throw new Error(e);
        }
    }
    
    static async depositTransaction(transaction) {

        // First Add To Balance 
        try {
            await CustomerService.addToBalance(transaction.customerID, transaction.amount);
        } catch (e) {
            throw new Error(e);
        }

        // Then Create Transacion
        try {
            return await TransactionRepository.createTransaction(transaction);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async withdrawTransaction(transaction) {

        // First Deduct From Balance 
        try {
            await CustomerService.deductFromBalance(transaction.customerID, transaction.amount);
        } catch (e) {
            throw new Error(e);
        }

        // Then Create Transaction
        try {
            return await TransactionRepository.createTransaction(transaction);
        } catch (e) {
            throw new Error(e);
        }
    }
}


module.exports = TransactionService;