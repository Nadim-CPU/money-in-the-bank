
const Transaction = require("../models/transactionModel");


/* ----------------------------------------------------------------------------------------------
*  |                                  TRANSACTION REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/




class TransactionRepository {


    static async createTransaction(transaction) {

        const createdTransaction = await Transaction.create({
            transactionType: transaction.type,
            transactionAmount: transaction.amount,
            transactionDate: transaction.date,
            customerID: transaction.customerID
        });

        return createdTransaction;

    }


    static async getTransaction(id) {

        return await Transaction.findAll({where: { transactionID: id}});
    }


    static async getAllTransactionsOfCustomer(customerId) {

        return await Transaction.findAll({where: {customerID: customerId}});
        
    }


}


module.exports = TransactionRepository