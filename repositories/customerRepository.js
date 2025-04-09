
const Customer = require("../models/customerModel");
const LoanRepository = require("./loanRepository");


/* ----------------------------------------------------------------------------------------------
*  |                                     CUSTOMER REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/


class CustomerRepository {

    /**
     * Creates Customer
     * @param {Customer} customer 
     * @returns createdCustomer
     */
    static async createCustomer(customer) {

        const createdCustomer = await Customer.create({
            customerBalance: customer.balance,
            customerDateOpened: customer.dateOpened,
            customerDateClosed: null,
            customerTaxID: customer.taxID,
            userID: customer.userID
        });

        return createdCustomer;
    }

    /**
     * Updates Customer Balance
     * @param {int} id 
     * @param {Float} amount 
     * @returns updatedCustomer
     */
    static async updateCustomerBalance(id, amount) {

        const customer = await this.getCustomer(id);
        // Checking If Customer Is Closed!
        if (customer.dateClosed != null) { 
            throw new Error("Customer is already closed.");
        }


        // PARSING TO FLOAT TO ENSURE IT FITS IN DECIMAL FORMAT
        customer.customerBalance = parseFloat(customer.customerBalance) + parseFloat(amount); // ADDS/DEDUCTS THE BALANCE, EVEN THOUGH IT SEEMS TO BE ADDING TO IT

        const [updatedCustomer] = await Customer.update({
            customerBalance: customer.customerBalance
        }, {
            where: {customerID: id}
        });

        return updatedCustomer;
    }

    /**
     * Closed Customer
     * @param {int} id 
     * @param {Date} dateClosed 
     * @returns closedCustomer
     */
    static async closeCustomer(id, dateClosed) {

        // Getting Customer To Test
        const customer = this.getCustomer(id);

        // Checking If Customer Is Already Closed!
        if (customer.dateClosed != null) throw new Error("Customer is already closed.");

        const [closedCustomer] = await Customer.update({
            customerDateClosed: dateClosed
        }, {
            where: { customerID: id }
        });

        return closedCustomer;
    }

    /**
     * Reopens Customer If Closed
     * @param {int} id 
     * @returns reopenedCustomer
     */
    static async reopenCustomer(id) {
        
        // Getting Customer To Test
        const customer = this.getCustomer(id);

        // Checking if Customer is Already Opened
        if (customer.dateClosed == null) throw new Error("Customer is already opened.");

        const [openedCustomer] = await Customer.update({
            customerDateClosed: null
        }, {
            where: { customerID: id }
        });

        return openedCustomer;
    }


    /**
     * Gets Customer By ID
     * @param {int} id 
     * @returns customer
     */
    static async getCustomer(id) {
        return await Customer.findByPk(id);
    }

    /**
     * Gets All Customers
     * @returns allCustomers
     */
    static async getCustomers() {
        return await Customer.findAll();
    }

    /**
     * Deletes Customer
     * @param {int} id 
     * @returns deletedCustomer
     */
    static async deleteCustomer(id) {
        return await Customer.destroy({
            where: { customerID: id}
        });
    }


}


module.exports = CustomerRepository;
