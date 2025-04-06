
const AdminService = require("../services/adminService");




class AdminController {

    static async createAdmin(req, res) {

        try {
            const { adminNumber, userID } = req.body;
            const admin = { adminNumber, userID };
            const result = await AdminService.createAdmin(admin);
            res.status(200).json();
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async updateAdmin(req, res) {

        try {
            const { id } = req.params;
            const { adminNumber } = req.body;


        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }






}

module.exports = AdminController;