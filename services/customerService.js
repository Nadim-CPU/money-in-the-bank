
const CustomerRepository = require("../repositories/customerRepository");

/* ----------------------------------------------------------------------------------------------
*  |                                        CUSTOMER SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class CustomerService {


    static async createCustomer(customer) {

        try {
            CustomerRepository.createCustomer(customer);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async updateCustomer(customer) {
        
        try {
            CustomerRepository.updateCustomer(customer);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async addToBalance(id, amount) {
        try {
            return await CustomerRepository.updateBalance(id, amount);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deductFromBalance(id, amount) {

        try {

            /**
             * ENSURE CUSTOMER HAS ENOUGH BALANCE TO DEDUCT FROM HIS ACCOUNT
             */
            const customer = CustomerRepository.getCustomer(id);
            
            if (customer.balance < amount) {
                throw new Error("Insufficient balance");
            }

            /**
             * WE CAN INCLUDE A MINUS TO REMOVE AN AMOUNT RATHER THAN FORCING THE PARAMETER/USER TO DO SO
             */
            return await CustomerRepository.updateBalance(id, -amount);
        } catch (e) {
            throw new Error(e);
        }

        
    }

}

module.exports = CustomerService;