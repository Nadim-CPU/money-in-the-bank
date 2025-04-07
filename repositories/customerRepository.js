
const Customer = require("../models/customerModel");
const LoanRepository = require("./loanRepository");


/* ----------------------------------------------------------------------------------------------
*  |                                     CUSTOMER REPOSITORY                                    |
*  ----------------------------------------------------------------------------------------------
*/


class CustomerRepository {


    static async createCustomer(customer) {

        const createdCustomer = await Customer.create({
            customerBalance: customer.balance,
            customerDateOpened: customer.dateOpened,
            customerTaxID: customer.taxID,
            userID: customer.userID
        });

        return createdCustomer;
    }

    static async updateCustomerBalance(id, amount) {

        const customer = await this.getCustomer(id);

        customer.balance += amount; // ADDS/DEDUCTS THE BALANCE, EVEN THOUGH IT SEEMS TO BE ADDING TO IT

        const [updatedCustomer] = await Customer.update({
            customerBalance: customer.balance
        }, {
            where: {customerID: id}
        });

        return updatedCustomer;
    }

    static async closeCustomer(id, dateClosed) {

        const [closedCustomer] = await Customer.update({
            customerDateClosed: dateClosed
        }, {
            where: { customerID: id }
        });

        return closedCustomer;
    }


    static async reopenCustomer(id) {

        const [openedCustomer] = await Customer.update({
            customerDateClosed: null
        }, {
            where: { customerID: id }
        });

        return openedCustomer;
    }

    static async getCustomer(id) {
        return await Customer.findByPk(id);
    }

    static async getCustomers() {
        return await Customer.findAll();
    }


    static async deleteCustomer(id) {
        return await Customer.destroy({
            where: { customerID: id}
        });
    }


}


module.exports = CustomerRepository;
