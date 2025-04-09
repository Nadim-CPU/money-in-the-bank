
const CustomerRepository = require("../repositories/customerRepository");

/* ----------------------------------------------------------------------------------------------
*  |                                        CUSTOMER SERVICE                                    |
*  ----------------------------------------------------------------------------------------------
*/


class CustomerService {


    static async createCustomer(customer) {

        try {
            return await CustomerRepository.createCustomer(customer);
        } catch (e) {
            throw new Error(e);
        }

    }

    static async addToBalance(id, amount) {
        try {
            return await CustomerRepository.updateCustomerBalance(id, amount);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deductFromBalance(id, amount) {

        try {

            /**
             * ENSURE CUSTOMER HAS ENOUGH BALANCE TO DEDUCT FROM HIS ACCOUNT
             */
            const customer = await CustomerRepository.getCustomer(id);
            
            if (customer.customerBalance < amount) {
                throw new Error("Insufficient balance");
            }

            /**
             * WE CAN INCLUDE A MINUS TO REMOVE AN AMOUNT RATHER THAN FORCING THE PARAMETER/USER TO DO SO
             */
            return await CustomerRepository.updateCustomerBalance(id, -amount); 
        } catch (e) {
            throw new Error(e);
        }
        
    }

    static async closeCustomer(id) {

        try {

            const dateClosed = new Date();

            return await CustomerRepository.closeCustomer(id, dateClosed);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async reopenCustomer(id) {

        try {

            return await CustomerRepository.reopenCustomer(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteCustomer(id) {

        try {

            return await CustomerRepository.closeCustomer(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getCustomer(id) {

        try {

            return await CustomerRepository.getCustomer(id);
        } catch (e) {
            throw new Error(e);
        }
    }

    static async getCustomers() {

        try {

            return await CustomerRepository.getCustomers();
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = CustomerService;