
const Customer = require("../models/customerModel");


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

    static async closeCustomer(customer) {

        const [closedCustomer] = await Customer.update({
            customerDateClosed: customer.dateClosed
        }, {
            where: { customerID: customer.id }
        });

        return closedCustomer;
    }


    static async reopenCustomer(customer) {

        const [openedCustomer] = await Customer.update({
            customerDateClosed: null
        }, {
            where: { customerID: customer.id }
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
