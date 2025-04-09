
const CustomerService = require("../services/customerService");

/* ----------------------------------------------------------------------------------------------
*  |                                     CUSTOMER CONTROLLER                                    |
*  ----------------------------------------------------------------------------------------------
*/

class CustomerController {


    static async createCustomer(req, res) {

        try {
            const { balance, dateOpened, taxID, userID } = req.body;
            const customer = { balance , dateOpened, taxID, userID };

            const result = await CustomerService.createCustomer(customer);
            res.status(200).json(result);

        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async addToBalance(req, res){

        try {
            const { id } = req.params;
            const { amount } = req.body;

            const result = await CustomerService.addToBalance(id, amount);
            res.status(200).json(result);

        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async deductFromBalance(req, res){

        try {
            const { id } = req.params;
            const { amount } = req.body;

            const result = await CustomerService.deductFromBalance(id, amount);
            res.status(200).json(result);

        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async closeCustomer(req, res) {

        try {
            const { id } = req.params;
            const result = await CustomerService.closeCustomer(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async reopenCustomer(req, res) {

        try {

            const { id } = req.params;
            const result = await CustomerService.reopenCustomer(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getCustomer(req, res) {

        try {

            const { id } = req.params;
            const result = await CustomerService.getCustomer(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getCustomers(req, res) {

        try {

            const result = await CustomerService.getCustomers();
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async deleteCustomer(req, res) {

        try {

            const { id } = req.params;

            const result = await CustomerService.deleteCustomer(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }
}

module.exports = CustomerController;