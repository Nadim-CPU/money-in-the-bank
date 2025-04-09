
const Transaction = require("../models/transactionModel");


/* ----------------------------------------------------------------------------------------------
*  |                                  TRANSACTION REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/




class TransactionRepository {

    /**
     * Creates A Transaction
     * @param {Transaction} transaction 
     * @returns 
     */
    static async createTransaction(transaction) {

        const createdTransaction = await Transaction.create({
            transactionType: transaction.type,
            transactionAmount: transaction.amount,
            transactionDate: transaction.date,
            customerID: transaction.customerID
        });

        return createdTransaction;

    }

    /**
     * Gets Transaction By Their ID
     * @param {int} id 
     * @returns 
     */
    static async getTransaction(id) {

        return await Transaction.findAll({where: { transactionID: id}});
    }

    /**
     * Gets All Transaction Of A Customer
     * @param {int} id 
     * @returns allTransactionsOfCustomer
     */
    static async getAllTransactionsOfCustomer(id) {

        return await Transaction.findAll({where: {customerID: id}});
        
    }


}


module.exports = TransactionRepository