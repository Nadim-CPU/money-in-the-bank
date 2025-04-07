
const AdminService = require('../services/adminService');




class AdminController {

    static async createAdmin(req, res) {

        try {
            const { adminNumber, userID } = req.body;
            const admin = { adminNumber, userID };
            const result = await AdminService.createAdmin(admin);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async updateAdmin(req, res) {

        try {
            const { id } = req.params;
            const { adminNumber } = req.body;

            const admin = { id, adminNumber }
            const result = await AdminService.updateAdmin(admin);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getAdmin(req, res) {

        try {
            const { id } = req.params;

            const result = await AdminService.getAdmin(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async getAdmins(req, res) {

        try {

            const result = await AdminService.getAdmins();
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }

    static async deleteAdmin(req, res) {

        try {
            const { id } = req.params;

            const result = await AdminService.deleteAdmin(id);
            res.status(200).json(result);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({message: "Internal Server Error", error: e.message});
        }
    }
}

module.exports = AdminController;